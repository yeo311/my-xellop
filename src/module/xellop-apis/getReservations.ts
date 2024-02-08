import { ReservationParams } from './addReservation'
import fetchXellopApi from './fetchXellopApi'
import * as cheerio from 'cheerio'

export default async function getReservations() {
  const res = await fetchXellopApi('/m/relist/reservation_list.php', {
    method: 'POST',
    body: `searchCarNumber=&page=1`,
    next: {
      tags: ['reservations'],
    },
  })

  const html = await res.text()

  if (html === 'FALSE_AUTH') {
    setTimeout(() => {
      return getReservations()
    }, 500)
  }

  const $ = cheerio.load(html)

  const reservations: ReservationParams[] = []

  $('#reservationList li').each((i, el) => {
    const carNumber = ($(el).find(`#vCarNo${i}`).val() as string | undefined) ?? ''
    const date = ($(el).find(`#vUseBgnDate${i}`).val() as string | undefined) ?? ''
    const duration = ($(el).find(`#viewDateDiff${i}`).val() as string | undefined) ?? ''

    reservations.push({
      carNumber,
      date,
      dateDuration: Number(duration),
    })
  })

  return reservations
}

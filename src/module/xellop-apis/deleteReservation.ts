'use server'

import { revalidateTag } from 'next/cache'
import { ReservationParams } from './addReservation'
import getSessionId from './getSessionId'
import * as cheerio from 'cheerio'
import fetchXellopApi from './fetchXellopApi'

export default async function deleteReservation(params: ReservationParams) {
  const res = await fetchXellopApi('/m/relist/process_reservation_del.php', {
    method: 'POST',
    body: `reservationUserId=${process.env.USER_ID}&reservationCarNumber=${params.carNumber}&reservationDate=${params.date}&reservationDateDuration=${params.dateDuration}`,
  })
  const html = await res.text()

  const $ = cheerio.load(html)
  const value = $('#returnResult').val() as string | undefined
  const isSuccess = value === 'TRUE'
  if (isSuccess) {
    revalidateTag('reservations')
  }
  return { success: isSuccess }
}

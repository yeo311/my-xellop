import fetchXellopApi from './fetchXellopApi'
import * as cheerio from 'cheerio'

export type ParkHistory = {
  carNumber: string
  inDate: string
  outDate: string
  duration: string
}

export default async function getHistory({ year, month }: { year: string; month: string }) {
  const res = await fetchXellopApi('/m/record/record_list.php', {
    method: 'POST',
    body: `searchCarNumber=&page=1&searchYear=${year}&searchMonth=${month}`,
    next: {
      revalidate: 3600,
      tags: ['history'],
    },
  })

  const html = await res.text()

  const $ = cheerio.load(html)

  const histories: ParkHistory[] = []

  $('#recordList li').each((i, el) => {
    const carNumber = $(el).find('span').text()
    const inDate = $(el).find('td').find('p').eq(0).text()
    const outDate = $(el).find('td').find('p').eq(1).text()
    const duration = $(el).find('td').eq(1).find('p').text()

    histories.push({
      carNumber,
      inDate,
      outDate,
      duration,
    })
  })

  return histories
}

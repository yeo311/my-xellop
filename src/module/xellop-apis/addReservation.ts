import fetchXellopApi from './fetchXellopApi'
import getSessionId from './getSessionId'

export type ReservationParams = {
  carNumber: string
  date: string
  dateDuration: number
}

export default async function addReservation({ carNumber, date, dateDuration }: ReservationParams) {
  try {
    const res = await fetchXellopApi('/m/readd/process_reservation_add.php', {
      method: 'POST',
      body: `reservationUserId=${process.env.USER_ID}&reservationCarNumber=${carNumber}&reservationDate=${date}&reservationDateDuration=${dateDuration}`,
    })
    const text = await res.text()
    return { success: text === 'TRUE' }
  } catch (e) {
    throw e
  }
}

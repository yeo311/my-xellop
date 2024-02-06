import getReservations from '@/module/xellop-apis/getReservations'
import DeleteButton from './DeleteButton'

export default async function ReservationList() {
  const reservations = await getReservations()

  return (
    <ul>
      {reservations.map((reservation) => (
        <li key={reservation.carNumber}>
          {reservation.carNumber} , {reservation.date}, {reservation.dateDuration}
          <DeleteButton params={reservation} />
        </li>
      ))}
    </ul>
  )
}

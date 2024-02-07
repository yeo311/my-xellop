import Reservation from '@/components/Reservation'
import ReservationList from '@/components/ReservationList'
import getReservations from '@/module/xellop-apis/getReservations'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Xellop',
}

export default async function Home() {
  const reservations = await getReservations()

  return (
    <>
      <Reservation />
      <ReservationList reservations={reservations} />
    </>
  )
}

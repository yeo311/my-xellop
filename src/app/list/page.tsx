import ReservationList from '@/components/ReservationList'
import getReservations from '@/module/xellop-apis/getReservations'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '방문 에약 목록',
}

export default async function ListPage() {
  const reservations = await getReservations()

  return (
    <>
      <ReservationList reservations={reservations} />
    </>
  )
}

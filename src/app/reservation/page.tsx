import Reservation from '@/components/Reservation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '등록',
}

export default function ReservationPage() {
  return <Reservation />
}

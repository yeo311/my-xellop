import Reservation from '@/components/Reservation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '차량 방문등록',
}

export default async function Home() {
  return (
    <>
      <Reservation />
    </>
  )
}

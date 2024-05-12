import AddParking from '@/components/AddParking'
import ParkingList from '@/components/ParkingList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '주차 위치',
}

export const dynamic = 'force-dynamic'

export default async function ListPage() {
  return (
    <>
      <ParkingList />
      <AddParking />
    </>
  )
}

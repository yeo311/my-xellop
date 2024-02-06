import Reservation from '@/components/Reservation'
import ReservationList from '@/components/ReservationList'

export default async function Home() {
  return (
    <div>
      Hello
      <Reservation />
      <ReservationList />
    </div>
  )
}

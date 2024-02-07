'use client'

import DeleteButton from './DeleteButton'
import { ReservationParams } from '@/module/xellop-apis/addReservation'
import { Group, Text } from '@mantine/core'

export default function ReservationList({ reservations }: { reservations: ReservationParams[] }) {
  if (!reservations.length)
    return (
      <Group justify="center" p="md">
        <Text>등록된 차량이 없습니다.</Text>
      </Group>
    )

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

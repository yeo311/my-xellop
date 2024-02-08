'use client'

import DeleteButton from './DeleteButton'
import { ReservationParams } from '@/module/xellop-apis/addReservation'
import { Group, Paper, Stack, Text, Title } from '@mantine/core'

export default function ReservationList({ reservations }: { reservations: ReservationParams[] }) {
  if (!reservations.length)
    return (
      <Group justify="center" p="md">
        <Text>등록된 차량이 없습니다.</Text>
      </Group>
    )

  return (
    <Stack>
      {reservations.map((reservation) => (
        <Paper key={reservation.carNumber} shadow="sm" p="xl">
          <Group justify="space-between">
            <Stack>
              <Title order={3}>{reservation.carNumber}</Title>
              <Text>{`${reservation.date} / ${reservation.dateDuration}일`}</Text>
            </Stack>
            <DeleteButton params={reservation} />
          </Group>
        </Paper>
      ))}
    </Stack>
  )
}

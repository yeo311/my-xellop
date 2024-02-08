'use client'

import DeleteButton from './DeleteButton'
import { ReservationParams } from '@/module/xellop-apis/addReservation'
import { Button, Group, Paper, Stack, Text, Title } from '@mantine/core'
import RefreshButton from './RefreshButton'

export default function ReservationList({ reservations }: { reservations: ReservationParams[] }) {
  if (!reservations.length)
    return (
      <Group justify="center" p="md">
        <Text>등록된 차량이 없습니다.</Text>
        <RefreshButton />
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
      <RefreshButton />
    </Stack>
  )
}

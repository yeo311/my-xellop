import { getParkingLot } from '@/module/supabase'
import { Group, Stack, Text, Title } from '@mantine/core'
import dayjs from 'dayjs'

export default async function ParkingList() {
  const list = await getParkingLot()

  if (!list.length)
    return (
      <Group justify="center" p="md">
        <div>주차 위치 정보가 없습니다</div>
      </Group>
    )

  const [current] = list

  return (
    <div>
      <div className="flex justify-center pt-6">
        <Stack align="center" gap="xs">
          <Title order={3}>지금 우리 차는</Title>
          <Title order={3}>
            <span className="underline underline-offset-6 uppercase text-cyan-500 decoration-pink-500 decoration-double">
              {current.location} {current.ground} {current.floor}층 {current.num}
            </span>{' '}
            에 주차되어 있어요
          </Title>
          <Text c="dimmed" size="sm">
            {dayjs(current.created_at).format('M월 D일')}에 저장되었어요
          </Text>
        </Stack>
      </div>
    </div>
  )
}

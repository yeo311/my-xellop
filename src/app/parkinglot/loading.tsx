import { Skeleton, Stack } from '@mantine/core'

export default function ParkingLotLoading() {
  return (
    <Stack>
      <Skeleton height={30} radius="md" />
      <Skeleton height={30} radius="md" />
      <Skeleton height={12} radius="md" />
    </Stack>
  )
}

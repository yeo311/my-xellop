import { Skeleton, Stack } from '@mantine/core'

export default function HistoryPageLoading() {
  return (
    <Stack>
      <Skeleton height={135} radius="md" />
      <Skeleton height={135} radius="md" />
      <Skeleton height={135} radius="md" />
    </Stack>
  )
}

import { Skeleton, Stack } from '@mantine/core'

export default function ListPageLoading() {
  return (
    <Stack>
      <Skeleton height={135} radius="md" />
      <Skeleton height={135} radius="md" />
      <Skeleton height={135} radius="md" />
    </Stack>
  )
}

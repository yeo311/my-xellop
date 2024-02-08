import { ParkHistory } from '@/module/xellop-apis/getHistory'
import { Group, Paper, Stack, Text, Title } from '@mantine/core'

type HistoryListProps = {
  histories: ParkHistory[]
}

export default async function HistoryList({ histories }: HistoryListProps) {
  if (histories.length === 0) {
    return (
      <Group justify="center" p="md">
        <Text>이력이 없습니다.</Text>
      </Group>
    )
  }
  return (
    <Stack>
      {histories.map((history) => (
        <Paper key={`${history.carNumber}-${history.inDate}`} shadow="sm" p="xl">
          <Group justify="space-between">
            <Stack>
              <Title order={3}>{history.carNumber}</Title>
              <Text size="sm">
                {history.inDate}
                <br />
                {history.outDate}
              </Text>
            </Stack>
            <Text>{history.duration}</Text>
          </Group>
        </Paper>
      ))}
    </Stack>
  )
}

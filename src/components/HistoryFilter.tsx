'use client'

import { Group, Select } from '@mantine/core'
import { useRouter, useSearchParams } from 'next/navigation'

export default function HistoryFilter() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const year = searchParams.get('year') ?? new Date().getFullYear().toString()
  const month = searchParams.get('month') ?? (new Date().getMonth() + 1).toString()

  return (
    <Group className="mb-2">
      <Select
        className="flex-1"
        data={[
          { label: '2024년', value: '2024' },
          { label: '2023년', value: '2023' },
        ]}
        value={year}
        onChange={(val) => {
          router.push(`?year=${val}&month=${month}`)
        }}
      />
      <Select
        className="flex-1"
        data={[
          { label: '1월', value: '1' },
          { label: '2월', value: '2' },
          { label: '3월', value: '3' },
          { label: '4월', value: '4' },
          { label: '5월', value: '5' },
          { label: '6월', value: '6' },
          { label: '7월', value: '7' },
          { label: '8월', value: '8' },
          { label: '9월', value: '9' },
          { label: '10월', value: '10' },
          { label: '11월', value: '11' },
          { label: '12월', value: '12' },
        ]}
        value={month}
        onChange={(val) => {
          router.push(`?year=${year}&month=${val}`)
        }}
      />
    </Group>
  )
}

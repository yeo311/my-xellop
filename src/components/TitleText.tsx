'use client'

import { Title } from '@mantine/core'
import { usePathname } from 'next/navigation'

export default function TitleText() {
  const pathname = usePathname()

  if (pathname === '/list') return <Title order={4}>방문 예약 목록</Title>
  if (pathname === '/history') return <Title order={4}>차량 방문 이력</Title>
  if (pathname === '/reservation') return <Title order={4}>주차 등록</Title>

  return <Title order={4}>주차 위치</Title>
}

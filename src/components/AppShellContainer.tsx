'use client'

import { AppShell, Group, Title } from '@mantine/core'
import { PropsWithChildren } from 'react'
import Navagation from './Navigation'

export default function AppShellContainer({ children }: PropsWithChildren) {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" pl="15px" justify="center">
          <Title order={3}>차량 방문등록</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer>
        <Navagation />
      </AppShell.Footer>
    </AppShell>
  )
}

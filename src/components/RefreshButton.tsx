'use client'

import { Button } from '@mantine/core'

export default function RefreshButton() {
  return (
    <Button onClick={() => location.reload()} color="cyan">
      새로고침
    </Button>
  )
}

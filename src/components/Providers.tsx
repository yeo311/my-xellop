'use client'

import { MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import { PropsWithChildren, useState } from 'react'
import 'dayjs/locale/ko'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <MantineProvider>
      <DatesProvider settings={{ locale: 'ko' }}>{children}</DatesProvider>
    </MantineProvider>
  )
}

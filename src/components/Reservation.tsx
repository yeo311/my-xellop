'use client'

import makeReservation from '@/actions/makeReservation'
import { Button, Select, Space, Stack, TextInput } from '@mantine/core'
import { useEffect, useRef } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { DatePickerInput } from '@mantine/dates'

const initialState = {
  message: '',
}

export default function Reservation() {
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(makeReservation, initialState)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!state.message) return
    alert(state.message)
  }, [state])

  return (
    <form action={formAction}>
      <Stack>
        <TextInput ref={ref} label="차량번호" name="carNumber" placeholder="12가1234" size="md" />
        <Select
          placeholder="저장된 차량번호 선택"
          data={['01러3450', '130누6031']}
          onChange={(val) => {
            if (!ref.current || !val) return
            ref.current.value = val
          }}
        />
        <DatePickerInput label="방문날짜" name="date" defaultValue={new Date()} size="md" />
        <Select
          label="방문기간"
          name="dateDuration"
          defaultValue="1"
          size="md"
          data={[
            { value: '1', label: '1일' },
            { value: '2', label: '2일' },
            { value: '3', label: '3일' },
            { value: '10', label: '10일' },
            { value: '15', label: '15일' },
          ]}
        />
        <Button
          type="submit"
          loading={pending}
          loaderProps={{ type: 'dots' }}
          fullWidth
          variant="gradient"
          size="md"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        >
          예약하기
        </Button>
      </Stack>
    </form>
  )
}

'use client'

import makeReservation from '@/actions/makeReservation'
import { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
  message: '',
}

export default function Reservation() {
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(makeReservation, initialState)

  useEffect(() => {
    if (!state.message) return
    alert(state.message)
  }, [state])

  return (
    <form action={formAction}>
      <input type="text" name="carNumber" placeholder="차량번호" />
      <input type="date" name="date" placeholder="방문날짜" />
      <button type="submit" aria-disabled={pending}>
        Make Reservation
      </button>
    </form>
  )
}

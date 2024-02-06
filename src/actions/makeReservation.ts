'use server'

import addReservation, { ReservationParams } from '@/module/xellop-apis/addReservation'
import { revalidateTag } from 'next/cache'

export default async function makeReservation(prevState: { message: string }, formData: FormData) {
  const rawFormData: ReservationParams = {
    carNumber: formData.get('carNumber')?.toString() ?? '',
    date: formData.get('date')?.toString() ?? '',
    dateDuration: 1,
  }

  try {
    const res = await addReservation(rawFormData)
    if (res.success) {
      revalidateTag('reservations')
    }
    return {
      message: res.success ? 'Reservation successful' : 'Reservation failed',
    }
  } catch (e) {
    throw e
  }
}

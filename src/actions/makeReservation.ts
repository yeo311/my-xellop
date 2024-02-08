'use server'

import addReservation, { ReservationParams } from '@/module/xellop-apis/addReservation'
import { revalidateTag } from 'next/cache'

export default async function makeReservation(prevState: { message: string }, formData: FormData) {
  const rawFormData: ReservationParams = {
    carNumber: formData.get('carNumber')?.toString() ?? '',
    date: formData.get('date')?.toString().split('T')[0] ?? '',
    dateDuration: Number(formData.get('dateDuration')?.toString() ?? '1'),
  }

  const res = await addReservation(rawFormData)
  if (res.success) {
    revalidateTag('reservations')
  }
  return {
    message: res.success ? '예약 성공' : '예약 실패',
  }
}

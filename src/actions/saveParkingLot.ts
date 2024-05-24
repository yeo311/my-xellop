'use server'

import { createParkingLot } from '@/module/supabase'
import { revalidatePath } from 'next/cache'

export default async function saveParkingLot(prevState: { message: string }, formData: FormData) {
  const ground = formData.get('ground')?.toString()
  const floor = formData.get('floor')?.toString()
  const num = formData.get('num')?.toString()
  const location = formData.get('location')?.toString()

  await createParkingLot({
    location,
    ground,
    floor: Number(floor),
    num,
  })
  revalidatePath('/')

  return {
    message: '주차 위치 저장 성공',
  }
}

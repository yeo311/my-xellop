'use server'

import addParkingLot, { AddParkingLotParams } from '@/module/postgres/addParkingLot'
import dayjs from 'dayjs'
import { revalidatePath } from 'next/cache'

export default async function saveParkingLot(prevState: { message: string }, formData: FormData) {
  const ground = formData.get('ground')?.toString()
  const floor = formData.get('floor')?.toString()
  const num = formData.get('num')?.toString()

  const rawFormData: AddParkingLotParams = {
    title: `${ground} ${floor}층 ${num}번`,
    day: dayjs().format('YYYY-MM-DD'),
  }
  await addParkingLot(rawFormData)
  revalidatePath('/parkinglot')

  return {
    message: '주차 위치 저장 성공',
  }
}

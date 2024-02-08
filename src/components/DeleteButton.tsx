'use client'

import { ReservationParams } from '@/module/xellop-apis/addReservation'
import deleteReservation from '@/module/xellop-apis/deleteReservation'
import { Button } from '@mantine/core'

type Props = {
  params: ReservationParams
}

export default function DeleteButton({ params }: Props) {
  return (
    <Button
      variant="gradient"
      gradient={{ from: 'red', to: 'grape', deg: 90 }}
      onClick={async () => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return
        const res = await deleteReservation(params)
        try {
          if (res.success) {
            alert('삭제 되었습니다.')
          } else {
            alert('삭제에 실패했습니다.')
          }
        } catch (e) {
          alert('오류가 발생했습니다.')
        }
      }}
    >
      취소
    </Button>
  )
}

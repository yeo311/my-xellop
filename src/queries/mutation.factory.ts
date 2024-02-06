import fetchApi from '@/module/fetchApi'
import { mutationOptions } from '@/module/mutationOptions'
import { ReservationParams } from '@/module/xellop-apis/addReservation'

const mutationFactory = {
  create: () =>
    mutationOptions({
      mutationFn: async (params: ReservationParams) => {
        const res = await fetchApi<{ status: boolean }>('/api/add', {
          method: 'POST',
          body: JSON.stringify(params),
        })
        if (!res.status) {
          throw new Error('Failed to add reservation')
        }
        return res
      },
      onError: () => {
        alert('주차 예약에 실패했습니다.')
      },
    }),
}

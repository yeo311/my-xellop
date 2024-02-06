import { queryOptions } from '@tanstack/react-query'

const queryFactory = {
  all: () => ['all'],
  reservationList: () =>
    queryOptions({
      queryKey: [...queryFactory.all(), 'reservation-list'],
      queryFn: async () => {
        const res = await fetch('/api/reservation', {
          method: 'POST',
        })
        const htmlString = await res.text()
        // const doc = new DOMParser().parseFromString(data, 'text/html')
        // console.log(doc)
        return htmlString
      },
    }),
}

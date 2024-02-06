import addReservation from '@/module/xellop-apis/addReservation'
import getSessionId from '@/module/xellop-apis/getSessionId'

export async function POST(request: Request) {
  const { carNumber, date, dateDuration } = await request.json()

  try {
    const res = await addReservation({ carNumber, date, dateDuration })
    return Response.json(res)
  } catch (e) {
    return new Response('Error', { status: 500 })
  }
}

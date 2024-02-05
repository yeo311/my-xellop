import getSessionId from '@/module/getSessionId'

type ReservationParams = {
  carNumber: string
  date: string
  dateDuration: number
}

async function addReservation({ carNumber, date, dateDuration }: ReservationParams) {
  try {
    const phpSessionId = await getSessionId()

    const res = await fetch(`${process.env.XELLOP_URL}/m/readd/process_reservation_add.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: `PHPSESSID=${phpSessionId}`,
      },
      body: `reservationUserId=${process.env.USER_ID}&reservationCarNumber=${carNumber}&reservationDate=${date}&reservationDateDuration=${dateDuration}`,
    })
    console.log(res)
    return res.text()
  } catch (e) {
    throw e
  }
}

export async function POST(request: Request) {
  const { carNumber, date, dateDuration } = await request.json()

  try {
    const res = await addReservation({ carNumber, date, dateDuration })
    return new Response(res, { status: 200 })
  } catch (e) {
    return new Response('Error', { status: 500 })
  }
}

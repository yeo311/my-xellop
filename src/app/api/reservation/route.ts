import getSessionId from '@/module/getSessionId'

async function getReservation() {
  try {
    const phpSessionId = await getSessionId()

    const res = await fetch(`${process.env.XELLOP_URL}/m/relist/reservation_list.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: `PHPSESSID=${phpSessionId}`,
      },
      body: `searchCarNumber=&page=1`,
    })

    return res.text()
  } catch (e) {
    console.error(e)
    throw e
  }
}

export async function POST(request: Request) {
  try {
    const res = await getReservation()
    return new Response(res, { status: 200, headers: { 'Content-Type': 'text/html' } })
  } catch (e) {
    return new Response('Error', { status: 500 })
  }
}

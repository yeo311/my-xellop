export default async function getSessionId() {
  const res = await fetch(`${process.env.XELLOP_URL}/m/login/process_login.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `userInputUserID=${process.env.USER_ID}&userInputUserPWD=${process.env.USER_PWD}&userCheckAutoLogin=false`,
    next: { revalidate: 0 },
  })

  const cookies = res.headers.getSetCookie()
  const phpSessionId = cookies
    .find((cookie) => cookie.startsWith('PHPSESSID'))
    ?.split(';')[0]
    .split('=')[1]

  if (!phpSessionId) {
    throw new Error('Failed to get PHPSESSID')
  }

  return phpSessionId
}

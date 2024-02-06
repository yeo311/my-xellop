import getSessionId from './getSessionId'

export default async function fetchXellopApi(path: string, init?: RequestInit | undefined) {
  const phpSessionId = await getSessionId()

  return fetch(`${process.env.XELLOP_URL}${path}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie: `PHPSESSID=${phpSessionId}`,
      ...init?.headers,
    },
    ...init,
  })
}

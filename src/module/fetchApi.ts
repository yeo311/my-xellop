export default function fetchApi<T>(url: string, options: RequestInit): Promise<T> {
  return fetch(url, options).then((res) => res.json())
}

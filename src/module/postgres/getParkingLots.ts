import { sql } from '@vercel/postgres'

export type ParkingLot = {
  id: number
  title: string
  day: string
}

export default async function getParkingLots() {
  const { rows } = await sql<ParkingLot>`SELECT * FROM parkings ORDER BY id DESC LIMIT 5`
  return rows
}

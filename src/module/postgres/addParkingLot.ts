import { sql } from '@vercel/postgres'
import { ParkingLot } from './getParkingLots'

export type AddParkingLotParams = Omit<ParkingLot, 'id'>

export default async function addParkingLot({ title, day }: AddParkingLotParams) {
  const result = await sql`INSERT INTO parkings (title, day) VALUES (${title}, ${day})`
  return result
}

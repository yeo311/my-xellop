import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

type ParkingLot = Database['public']['Tables']['parkinglot']['Insert']

console.log(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

export const getParkingLot = async () => {
  const { data, error } = await supabase
    .from('parkinglot')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
  if (error) {
    throw error
  }
  return data
}

export const createParkingLot = async (parkinglot: ParkingLot) => {
  const { error } = await supabase.from('parkinglot').insert(parkinglot)
  if (error) {
    throw error
  }
}

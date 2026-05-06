import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { experiences } from '@/drizzle/schema'
import { NextResponse } from 'next/server'

export async function GET() {
  const sql = neon(process.env.POSTGRES_URL_NON_POOLING!)
  const db = drizzle(sql)
  const result = await db.select().from(experiences)
  return NextResponse.json(result)
}

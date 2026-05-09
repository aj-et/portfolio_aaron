import { db } from '@/lib/data'
import { experiences } from '@/drizzle/schema'
import { NextResponse } from 'next/server'

export async function GET() {
  const result = await db.select().from(experiences)
  return NextResponse.json(result, {
    headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' },
  })
}

import { db } from '@/lib/data'
import { projects } from '@/drizzle/schema'
import { NextResponse } from 'next/server'

export async function GET() {
  const result = await db.select().from(projects)
  return NextResponse.json(result, {
    headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' },
  })
}

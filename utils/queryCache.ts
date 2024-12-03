// utils/queryCache.ts
'use client'

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const cache = new Map<string, any>();

export const useCachedQuery = async <T>(
  key: string,
  tableName: any,
): Promise<T[]> => {
  if (cache.has(key)) {
    return cache.get(key);
  }

  const sql = neon(process.env.NEXT_PUBLIC_POSTGRES_URL_NON_POOLING!);
  const db = drizzle(sql);
  const result = await db.select().from(tableName);
  cache.set(key, result);
  return result as T[];
};
const cache = new Map<string, unknown[]>()

export async function cachedFetch<T>(key: string, path: string): Promise<T[]> {
  if (cache.has(key)) return cache.get(key) as T[]
  const res = await fetch(path)
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`)
  const data: T[] = await res.json()
  cache.set(key, data)
  return data
}

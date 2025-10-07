import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Return null if environment variables are not set
  if (!url || !key) {
    console.log("[v0] Supabase environment variables not found, using in-memory storage")
    return null
  }

  return createBrowserClient(url, key)
}

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Supabase is used for login only. Never query tables or storage from the
 * browser — every read and write goes through the API. See ADR-0002.
 *
 * Login itself arrives in ticket 03. Until then the app must run with no
 * Supabase configuration at all, so the client is created lazily and may be
 * absent. Creating it eagerly turns a missing environment variable into a
 * blank page, because the error is thrown while the module is still loading.
 */
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  client ??= createClient(url, anonKey);
  return client;
}

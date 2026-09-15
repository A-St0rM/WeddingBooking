import { createClient } from '@supabase/supabase-js';

/**
 * Supabase is used for login only. Never query tables or storage from the
 * browser — every read and write goes through the API. See ADR-0002.
 */
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

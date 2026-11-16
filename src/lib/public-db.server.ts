import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

// Public (publishable) key: safe to ship. Lets the forms work on any host
// (e.g. Cloudflare) without the private service key. RLS only allows inserts.
const FALLBACK_URL = "https://rrvudiiqlklgkfcrjets.supabase.co";
const FALLBACK_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydnVkaWlxbGtsZ2tmY3JqZXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MzgwNDksImV4cCI6MjA5NTAxNDA0OX0.VhYmrAY74wkemRbSF4Gkudw2_r19F_K8OFLUx8GiUgo";

export function getPublicDb() {
  const url = process.env.SUPABASE_URL || FALLBACK_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY || FALLBACK_KEY;
  return createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
  });
}

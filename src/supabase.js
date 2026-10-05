import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
import.meta.env.VITE_SUPABASE_URL || 'https://moynlzabfhfbvgnpkban.supabase.co'

const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_zBEVc-lO5TL5ZkeQy6m48A_hmN_Z-qW'

if (!supabaseUrl || !supabasePublishableKey) {
  console.warn('Supabase URL or Publishable Key is missing from .env')
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey)


import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our contact form
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  firmOrganizationName?: string
  partnerType?: string
  message?: string
  requestCallback?: boolean
  pageSource: string
}

export interface ContactRecord {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  firm_organization_name?: string
  partner_type?: string
  message?: string
  request_callback: boolean
  page_source: string
  created_at: string
  updated_at: string
}

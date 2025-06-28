"use server"

import { supabase } from "@/lib/supabase"
import type { ContactFormData } from "@/lib/supabase"

export async function submitContactForm(data: ContactFormData) {
  try {
    const { data: result, error } = await supabase
      .from("contact")
      .insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          firm_organization_name: data.firmOrganizationName || null,
          partner_type: data.partnerType || null,
          message: data.message || null,
          request_callback: data.requestCallback || false,
          page_source: data.pageSource,
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to submit form. Please try again.",
      }
    }

    return {
      success: true,
      data: result,
      message: "Form submitted successfully! We will contact you soon.",
    }
  } catch (error) {
    console.error("Unexpected error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const submissionSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  countryCode: z.string().trim().max(8).optional().or(z.literal("")),
  countryName: z.string().trim().max(80).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  tier: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.string().trim().max(40).optional().or(z.literal("")),
  contactMethod: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input) => submissionSchema.parse(input))
  .handler(async ({ data }) => {
    const { error, data: row } = await supabaseAdmin
      .from("contact_submissions")
      .insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        country_code: data.countryCode || null,
        country_name: data.countryName || null,
        phone: data.phone || null,
        tier: data.tier || null,
        budget: data.budget || null,
        contact_method: data.contactMethod || null,
        message: data.message || null,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Failed to save contact submission:", error);
      throw new Error("Could not submit your brief. Please try again.");
    }

    // Optional webhook forwarding (Zapier / Make / custom email service)
    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: row?.id,
            receivedAt: new Date().toISOString(),
            ...data,
          }),
        });
      } catch (e) {
        console.error("Webhook forwarding failed:", e);
      }
    }

    return { ok: true, id: row?.id };
  });

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  countryCode: z.string().trim().max(8).optional().or(z.literal("")),
  countryName: z.string().trim().max(80).optional().or(z.literal("")),
  preferredDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  preferredTime: z.string().trim().min(1).max(20),
  timezone: z.string().trim().max(80).optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const bookCall = createServerFn({ method: "POST" })
  .inputValidator((input) => schema.parse(input))
  .handler(async ({ data }) => {
    const { error, data: row } = await supabaseAdmin
      .from("scheduled_calls")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        country_code: data.countryCode || null,
        country_name: data.countryName || null,
        preferred_date: data.preferredDate,
        preferred_time: data.preferredTime,
        timezone: data.timezone || null,
        notes: data.notes || null,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Failed to save booking:", error);
      throw new Error("Could not save your booking. Please try again.");
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "scheduled_call",
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

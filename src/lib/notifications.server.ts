type SubmissionPayload = {
  type: "contact";
  name: string;
  email: string;
  phone?: string | null;
  countryName?: string | null;
  tier?: string | null;
  budget?: string | null;
  contactMethod?: string | null;
  message?: string | null;
};

type BookingPayload = {
  type: "booking";
  name: string;
  phone: string;
  email?: string | null;
  countryName?: string | null;
  preferredDate: string;
  preferredTime: string;
  timezone?: string | null;
  notes?: string | null;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatContactMessage(data: SubmissionPayload): string {
  const lines = [
    "<b>🚀 New SETAL Lead</b>",
    "",
    `<b>Name:</b> ${escapeHtml(data.name)}`,
    `<b>Email:</b> ${escapeHtml(data.email)}`,
  ];

  if (data.phone) lines.push(`<b>Phone:</b> ${escapeHtml(data.phone)}`);
  if (data.countryName) lines.push(`<b>Country:</b> ${escapeHtml(data.countryName)}`);
  if (data.tier) lines.push(`<b>Service Tier:</b> ${escapeHtml(data.tier)}`);
  if (data.budget) lines.push(`<b>Budget:</b> ${escapeHtml(data.budget)}`);
  if (data.contactMethod) lines.push(`<b>Preferred Contact:</b> ${escapeHtml(data.contactMethod)}`);
  if (data.message) {
    lines.push("");
    lines.push("<b>Message:</b>");
    lines.push(escapeHtml(data.message));
  }

  return lines.join("\n");
}

function formatBookingMessage(data: BookingPayload): string {
  const lines = [
    "<b>📞 Scheduled Call Request</b>",
    "",
    `<b>Name:</b> ${escapeHtml(data.name)}`,
    `<b>Phone:</b> ${escapeHtml(data.phone)}`,
  ];

  if (data.email) lines.push(`<b>Email:</b> ${escapeHtml(data.email)}`);
  if (data.countryName) lines.push(`<b>Country:</b> ${escapeHtml(data.countryName)}`);
  lines.push(`<b>Date:</b> ${escapeHtml(data.preferredDate)}`);
  lines.push(`<b>Time:</b> ${escapeHtml(data.preferredTime)}`);
  if (data.timezone) lines.push(`<b>Timezone:</b> ${escapeHtml(data.timezone)}`);
  if (data.notes) {
    lines.push("");
    lines.push("<b>Notes:</b>");
    lines.push(escapeHtml(data.notes));
  }

  return lines.join("\n");
}

export async function notifyTelegram(payload: SubmissionPayload | BookingPayload) {
  const token = process.env["TELEGRAM_BOT_TOKEN"];
  const chatId = process.env["TELEGRAM_CHAT_ID"];

  if (!token || !chatId) {
    console.log("Telegram notifications skipped: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set.");
    return { ok: false, reason: "not_configured" };
  }

  const text = payload.type === "contact"
    ? formatContactMessage(payload)
    : formatBookingMessage(payload);

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Telegram notification failed [${response.status}]: ${body}`);
      return { ok: false, reason: "provider_error", status: response.status };
    }

    return { ok: true };
  } catch (e) {
    console.error("Telegram notification failed:", e);
    return { ok: false, reason: "network_error" };
  }
}

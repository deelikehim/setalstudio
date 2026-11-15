import { formatContactMessage } from "./notifications.server";

const message = formatContactMessage({
  type: "contact",
  name: "David",
  email: "david@example.com",
  company: "SETAL Studio Ltd",
});

if (!message.includes("<b>Company:</b> SETAL Studio Ltd")) {
  throw new Error("Telegram contact message should include the submitted company name");
}
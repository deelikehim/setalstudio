import assert from "node:assert/strict";
import test from "node:test";
import { formatContactMessage } from "./notifications.server";

test("Telegram contact message includes the submitted company name", () => {
  const message = formatContactMessage({
    type: "contact",
    name: "David",
    email: "david@example.com",
    company: "SETAL Studio Ltd",
  });

  assert.ok(message.includes("<b>Company:</b> SETAL Studio Ltd"));
});
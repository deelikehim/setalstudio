import { describe, expect, it } from "bun:test";
import { formatContactMessage } from "./notifications.server";

describe("formatContactMessage", () => {
  it("includes the submitted company name in the Telegram message", () => {
    const message = formatContactMessage({
      type: "contact",
      name: "David",
      email: "david@example.com",
      company: "SETAL Studio Ltd",
    });

    expect(message).toContain("<b>Company:</b> SETAL Studio Ltd");
  });
});
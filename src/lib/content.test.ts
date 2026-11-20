import assert from "node:assert/strict";
import test from "node:test";
import { faqs, services } from "./content";

test("full websites start from ₦210,000 / £110", () => {
  const fullWebsite = services.find((service) => service.slug === "full-websites");

  assert.ok(fullWebsite);
  assert.equal(fullWebsite.ngn, "210,000");
  assert.equal(fullWebsite.gbp, "110");
});

test("web applications start from ₦300,000 / £160", () => {
  const webApplications = services.find((service) => service.slug === "web-applications");

  assert.ok(webApplications);
  assert.equal(webApplications.ngn, "300,000");
  assert.equal(webApplications.gbp, "160");
});

test("e-commerce and shopping starts from ₦300,000 / £160", () => {
  const ecommerce = services.find((service) => service.slug === "ecommerce");

  assert.ok(ecommerce);
  assert.equal(ecommerce.ngn, "300,000");
  assert.equal(ecommerce.gbp, "160");
});

test("service pricing FAQ reflects the updated starting prices", () => {
  const pricingFaq = faqs.find((faq) => faq.q === "What does a typical engagement cost?");

  assert.ok(pricingFaq);
  assert.ok(pricingFaq.a.includes("Full websites start from ₦210,000 / £110"));
  assert.ok(pricingFaq.a.includes("Web applications and e-commerce platforms start from ₦300,000 / £160"));
});
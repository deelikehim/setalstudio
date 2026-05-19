import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  image: string;
  span: string;
  award?: string;
};

export const projects: Project[] = [
  { slug: "aeterna", client: "Aeterna Horology", title: "Time, rewritten", category: "E-commerce / WebGL", year: "2025", image: work1, span: "md:col-span-7 md:row-span-2", award: "Awwwards SOTD" },
  { slug: "vesta", client: "Skyline Vesta", title: "Vertical living", category: "Real Estate / Identity", year: "2025", image: work2, span: "md:col-span-5" },
  { slug: "valentine", client: "Maison Valentine", title: "Editorial couture", category: "Fashion / Brand", year: "2024", image: work3, span: "md:col-span-5", award: "FWA" },
  { slug: "obsidian", client: "Obsidian Motors", title: "Engineered desire", category: "Automotive / Site", year: "2024", image: work4, span: "md:col-span-4" },
  { slug: "elixir", client: "Maison Elixir", title: "Bottled prestige", category: "Fragrance / D2C", year: "2024", image: work5, span: "md:col-span-3" },
  { slug: "noir", client: "Noir Cuisine", title: "Three Michelin stars", category: "Hospitality / Bookings", year: "2023", image: work6, span: "md:col-span-5", award: "CSS Design Award" },
];

export const clients = [
  "AETERNA", "VESTA", "VALENTINE", "OBSIDIAN", "ELIXIR", "NOIR",
  "MERIDIAN", "AURUM", "VESPER", "MONOLITH", "HALCYON", "OCULUS",
];

export const stats: { value: number; suffix: string; label: string; prefix?: string }[] = [
  { value: 47, suffix: "+", label: "Launches shipped worldwide" },
  { value: 5, suffix: "", label: "Continents served" },
  { value: 98, suffix: "%", label: "Client retention rate" },
  { value: 6, suffix: "y", label: "Average partnership length" },
];

export type Service = {
  no: string;
  title: string;
  desc: string;
  detail: string;
  deliverables: string[];
  ngn: string;
  gbp: string;
  timeline: string;
};

export const services: Service[] = [
  {
    no: "01",
    title: "Landing Pages",
    desc: "High-converting, single-page experiences crafted to launch products, capture leads and tell a focused story with cinematic motion.",
    detail: "Perfect for product launches, marketing campaigns, waitlists, and lead capture. We design and ship a single beautifully crafted page that loads fast, ranks well, and converts visitors into customers — complete with copy structure, on-brand visuals, contact forms, and analytics.",
    deliverables: ["Art direction & copy", "Responsive design", "Lead / contact form", "Analytics & SEO"],
    ngn: "80,000",
    gbp: "45",
    timeline: "1–2 weeks",
  },
  {
    no: "02",
    title: "Full Websites",
    desc: "Bespoke multi-page websites for brands, agencies and founders. Every section composed around your narrative and audience.",
    detail: "A complete multi-page website with up to 10 custom pages, a content management system so you can edit copy yourself, custom motion, SEO foundations, and three months of post-launch care. Built for businesses ready to look world-class online.",
    deliverables: ["UX architecture", "High-fidelity design", "CMS integration", "Performance tuning"],
    ngn: "250,000",
    gbp: "130",
    timeline: "4–6 weeks",
  },
  {
    no: "03",
    title: "Web Applications",
    desc: "Custom dashboards, SaaS platforms and internal tools. Built with React, TypeScript and modern cloud — engineered to scale.",
    detail: "From SaaS dashboards to internal tools and member portals. Includes user authentication, role-based access, secure database, admin panel, third-party integrations, and the engineering rigour to grow with your business.",
    deliverables: ["Auth & roles", "Database design", "API & integrations", "Admin panels"],
    ngn: "600,000",
    gbp: "320",
    timeline: "6–10 weeks",
  },
  {
    no: "04",
    title: "E-commerce & Shopping",
    desc: "Conversion-led online stores with secure checkout, inventory and global payments. Shopify, headless commerce or fully custom.",
    detail: "Beautiful, fast online stores with secure checkout, inventory management, shipping rules, and global payment gateways (Paystack, Flutterwave, Stripe). Built on Shopify, headless commerce, or fully custom to your catalogue.",
    deliverables: ["Storefront design", "Payments & shipping", "Product CMS", "Order workflows"],
    ngn: "500,000",
    gbp: "270",
    timeline: "5–8 weeks",
  },
  {
    no: "05",
    title: "Mobile Apps",
    desc: "Cross-platform iOS and Android apps that feel native. From MVPs to flagship products with smooth animation and offline support.",
    detail: "Cross-platform iOS and Android apps that feel truly native. Push notifications, offline-friendly UX, App Store and Play Store submission, plus version updates after launch — taking your product from MVP to flagship.",
    deliverables: ["iOS & Android", "Push notifications", "App store launch", "Post-launch updates"],
    ngn: "900,000",
    gbp: "480",
    timeline: "8–14 weeks",
  },
  {
    no: "06",
    title: "Care & Strategy",
    desc: "Ongoing maintenance, hosting, content updates and growth strategy so your product compounds in value long after launch.",
    detail: "A monthly retainer that keeps your site fast, secure and growing. Hosting, uptime monitoring, content edits, security patches, SEO refinements, and quarterly growth strategy with the SETAL team on standby.",
    deliverables: ["Hosting & uptime", "Monthly updates", "SEO & analytics", "Growth consulting"],
    ngn: "60,000",
    gbp: "30",
    timeline: "Monthly",
  },
];

export const testimonials = [
  {
    quote: "SETAL operates at a level I have rarely encountered. The launch site quintupled our qualified inbound within six weeks of going live.",
    name: "Léa Marchetti", role: "Founder, Aeterna Horology", avatar: "/avatar-1",
  },
  {
    quote: "They treat your brand like it’s their own. Every detail considered, every conversation sharpening the work. The result speaks for itself.",
    name: "Hideo Tanaka", role: "Chief Creative, Vesta Group", avatar: "/avatar-2",
  },
  {
    quote: "I have hired the most expensive studios in New York and London. Nothing has come close to the craft and care of SETAL.",
    name: "Camille Dubois", role: "CMO, Maison Elixir", avatar: "/avatar-3",
  },
];

export const awards = [
  { year: "2025", title: "Site of the Year", org: "Awwwards", project: "Aeterna" },
  { year: "2025", title: "Best E-commerce Site", org: "CSS Design Awards", project: "Aeterna" },
  { year: "2024", title: "FWA of the Day", org: "The FWA", project: "Valentine" },
  { year: "2024", title: "Honourable Mention", org: "Awwwards", project: "Obsidian" },
  { year: "2024", title: "Site of the Day", org: "CSS Design Awards", project: "Noir" },
  { year: "2023", title: "Brand of the Year", org: "Brand New", project: "Studio" },
  { year: "2023", title: "Mobile Excellence", org: "Awwwards", project: "Elixir" },
  { year: "2022", title: "Developer Award", org: "The FWA", project: "Meridian" },
];

export const faqs = [
  { q: "What does a typical engagement cost?", a: "Landing pages start from ₦250,000 / £130. Full websites start from ₦800,000 / £420. Web apps and e-commerce platforms scale from ₦1,500,000 / £800. Mobile apps start from ₦2,500,000 / £1,300. Every proposal is bespoke to your scope." },
  { q: "How long does a project take?", a: "A landing page takes 1–2 weeks. A full website is 4–6 weeks. Web apps and mobile apps typically take 8–14 weeks. Timelines are set at week zero and honored." },
  { q: "Do you work with early-stage founders?", a: "Yes. We reserve roughly 20% of our annual capacity for ambitious early-stage founders, often with flexible payment terms." },
  { q: "Where is the studio based?", a: "We are headquartered in Lagos, Nigeria with a second studio in Ekpoma, Edo State, and a Manchester (UK) studio opening soon. We serve clients across Africa, Europe, the Americas, Asia and Oceania." },
  { q: "Do you also handle development?", a: "Always. Design and engineering are inseparable here. We never hand off a Figma file and walk away — every project ships from this studio." },
  { q: "How do we get started?", a: "Send a brief through the contact page, WhatsApp +234 704 678 7444, or email setalstudio@gmail.com. We reply to every serious enquiry within 48 hours." },
];

export const processSteps = [
  { no: "00", title: "Discovery", desc: "Two weeks immersed in your business, customers, and category. Strategy before pixels." },
  { no: "01", title: "Narrative", desc: "We define the story before we draw a single thing. Positioning, voice, and visual hypothesis." },
  { no: "02", title: "Direction", desc: "Three distinct art-directed routes. We present, debate, and converge with you in the room." },
  { no: "03", title: "Design", desc: "High-fidelity design across every breakpoint and state. Iteration measured in days, not weeks." },
  { no: "04", title: "Engineering", desc: "Bespoke development with motion, performance and accessibility baked in from the first commit." },
  { no: "05", title: "Launch", desc: "Coordinated launch, press kit, social rollout. Then six months of post-launch partnership." },
];

export const studios = [
  { city: "Lagos", country: "Nigeria", address: "Egbeda, Mainland, Lagos", status: "HQ" },
  { city: "Ekpoma", country: "Edo, Nigeria", address: "Oxford Road, Ihumudumu, Ekpoma", status: "Studio" },
  { city: "Manchester", country: "United Kingdom", address: "Opening soon", status: "Soon" },
];

export const regions = ["Africa", "Europe", "Americas", "Asia", "Oceania"];

export const contactInfo = {
  email: "setalstudio@gmail.com",
  phone: "+234 704 678 7444",
  whatsapp: "https://wa.me/2347046787444",
};

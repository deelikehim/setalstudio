import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import workBarkyardspot from "@/assets/work-barkyardspot.png";
import workClimaxclub from "@/assets/work-climaxclub.png";
import workWestfield from "@/assets/work-westfield.jpg";
import workNbtiblog from "@/assets/work-nbtiblog.jpg";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";

export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  image: string;
  span: string;
  award?: string;
  url?: string;
};

export const projects: Project[] = [
  { slug: "aeterna", client: "Aeterna Horology", title: "Time, rewritten", category: "E-commerce / WebGL", year: "2025", image: work1, span: "md:col-span-7 md:row-span-2" },
  { slug: "vesta", client: "Skyline Vesta", title: "Vertical living", category: "Real Estate / Identity", year: "2025", image: work2, span: "md:col-span-5" },
  { slug: "valentine", client: "Maison Valentine", title: "Editorial couture", category: "Fashion / Brand", year: "2024", image: work3, span: "md:col-span-5" },
  { slug: "obsidian", client: "Obsidian Motors", title: "Engineered desire", category: "Automotive / Site", year: "2024", image: work4, span: "md:col-span-4" },
  { slug: "elixir", client: "Maison Elixir", title: "Bottled prestige", category: "Fragrance / D2C", year: "2024", image: work5, span: "md:col-span-3" },
  { slug: "noir", client: "Noir Cuisine", title: "Three Michelin stars", category: "Hospitality / Bookings", year: "2023", image: work6, span: "md:col-span-5" },
  { slug: "barkyardspot", client: "Barkyard Spot", title: "Premium lounge experience", category: "Website / Lifestyle", year: "2025", image: workBarkyardspot, span: "md:col-span-6", url: "https://barkyardspot.lovable.app" },
  { slug: "climaxclub", client: "Climax Club", title: "Private members experience", category: "Website / Lifestyle", year: "2025", image: workClimaxclub, span: "md:col-span-6", url: "https://climaxclub-zdvqacav.manus.space" },
  { slug: "westfield", client: "Westfield Business School", title: "Educating Principled Leaders", category: "Website / Education", year: "2026", image: workWestfield, span: "md:col-span-6", url: "https://westfield.lovable.app" },
  { slug: "nbtiblog", client: "NBTI Journal", title: "Field notes from Nigeria's incubation network", category: "Website / Blog", year: "2026", image: workNbtiblog, span: "md:col-span-6", url: "https://nbtiblog.lovable.app" },
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
  slug: string;
  no: string;
  title: string;
  tagline: string;
  desc: string;
  detail: string;
  deliverables: string[];
  ngn: string;
  gbp: string;
  timeline: string;
  hero: string;
  gallery: string[];
  benefits: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "landing-pages",
    no: "01",
    title: "Landing Pages",
    tagline: "One page. One mission. Built to convert.",
    desc: "High-converting, single-page experiences crafted to launch products, capture leads and tell a focused story with cinematic motion.",
    detail: "Perfect for product launches, marketing campaigns, waitlists, and lead capture. We design and ship a single beautifully crafted page that loads fast, ranks well, and converts visitors into customers — complete with copy structure, on-brand visuals, contact forms, and analytics.",
    deliverables: ["Art direction & copy", "Responsive design", "Lead / contact form", "Analytics & SEO"],
    ngn: "150,000",
    gbp: "80",
    timeline: "1–2 weeks",
    hero: work3,
    gallery: [work3, work5, work6],
    benefits: [
      { title: "Conversion-first", body: "Every section is engineered to move visitors from curiosity to action with clear hierarchy and persuasive copy." },
      { title: "Cinematic motion", body: "Scroll-triggered animation, parallax depth and tasteful micro-interactions that feel premium without slowing the page." },
      { title: "SEO foundations", body: "Semantic markup, OG metadata, sitemaps and lightning-fast Lighthouse scores so Google rewards the page." },
      { title: "Lead capture built in", body: "Forms, WhatsApp deep links, Calendly or CRM integrations so qualified leads land directly in your inbox." },
    ],
    process: [
      { step: "01", title: "Strategy call", body: "We map the offer, audience and single conversion goal of the page." },
      { step: "02", title: "Copy & design", body: "One round of art direction, then high-fidelity design across every breakpoint." },
      { step: "03", title: "Build & launch", body: "We ship to your domain, wire analytics, and hand over a page you fully own." },
    ],
    idealFor: ["Product launches", "Marketing campaigns", "Waitlists & coming-soon", "Lead generation"],
    faqs: [
      { q: "How many revisions are included?", a: "One full round of art-direction revisions plus polish during build. Additional rounds are billed at our weekly rate." },
      { q: "Can you write the copy?", a: "Yes. Our team can lead copy, or collaborate with your in-house writer. Copy direction is included in every engagement." },
    ],
  },
  {
    slug: "full-websites",
    no: "02",
    title: "Full Websites",
    tagline: "A complete digital flagship for your brand.",
    desc: "Bespoke multi-page websites for brands, agencies and founders. Every section composed around your narrative and audience.",
    detail: "A complete multi-page website with up to 10 custom pages, a content management system so you can edit copy yourself, custom motion, SEO foundations, and three months of post-launch care. Built for businesses ready to look world-class online.",
    deliverables: ["UX architecture", "High-fidelity design", "CMS integration", "Performance tuning"],
    ngn: "412,000",
    gbp: "220",
    timeline: "4–6 weeks",
    hero: work2,
    gallery: [work2, work1, work4],
    benefits: [
      { title: "Up to 10 custom pages", body: "Home, About, Services, Case Studies, Blog, Contact and any narrative pages your brand needs." },
      { title: "Editable CMS", body: "Update copy, blog posts and images yourself — no developer required for content changes." },
      { title: "Custom motion", body: "Brand-aligned animations, transitions and scroll effects that make the site memorable on first visit." },
      { title: "3 months of care", body: "Post-launch we monitor uptime, push small updates, and refine based on real analytics." },
    ],
    process: [
      { step: "01", title: "Discovery", body: "Two weeks of brand, audience and competitor research before we draw a single thing." },
      { step: "02", title: "Architecture", body: "Sitemap, wireframes and content strategy aligned with your business goals." },
      { step: "03", title: "Design", body: "High-fidelity design for every page and breakpoint, presented in live prototypes." },
      { step: "04", title: "Build", body: "Engineered in TypeScript with motion, accessibility and performance baked in." },
      { step: "05", title: "Launch", body: "Coordinated go-live, analytics, SEO submission and a polished hand-over." },
    ],
    idealFor: ["Premium brands", "Agencies & studios", "Founders raising capital", "Professional services"],
    faqs: [
      { q: "Can I edit the site myself?", a: "Yes — every site ships with a CMS so non-technical team members can publish updates safely." },
      { q: "Do you handle hosting?", a: "We deploy to fast edge hosting and can manage hosting under a care retainer, or hand off to your team." },
    ],
  },
  {
    slug: "web-applications",
    no: "03",
    title: "Web Applications",
    tagline: "Software your customers actually love using.",
    desc: "Custom dashboards, SaaS platforms and internal tools. Built with React, TypeScript and modern cloud — engineered to scale.",
    detail: "From SaaS dashboards to internal tools and member portals. Includes user authentication, role-based access, secure database, admin panel, third-party integrations, and the engineering rigour to grow with your business.",
    deliverables: ["Auth & roles", "Database design", "API & integrations", "Admin panels"],
    ngn: "780,000",
    gbp: "420",
    timeline: "6–10 weeks",
    hero: work4,
    gallery: [work4, work1, work2],
    benefits: [
      { title: "Secure authentication", body: "Email, social and SSO logins with role-based access and audit-ready security defaults." },
      { title: "Real database", body: "Properly modelled Postgres database, with row-level security and clean migrations from day one." },
      { title: "Admin panel", body: "Internal tools so your team can manage users, content and operations without engineering tickets." },
      { title: "Built to scale", body: "Edge-deployed, typed end-to-end, and architected so adding features later stays inexpensive." },
    ],
    process: [
      { step: "01", title: "Product workshop", body: "We map user flows, key screens and the smallest valuable version of the product." },
      { step: "02", title: "Design system", body: "A component library and design tokens that keep the app consistent as it grows." },
      { step: "03", title: "Build sprints", body: "Two-week sprints with live demos so you watch the product come to life." },
      { step: "04", title: "Launch & iterate", body: "We launch in stages, then iterate based on real user behaviour and feedback." },
    ],
    idealFor: ["SaaS founders", "Internal tools", "Member portals", "Marketplaces"],
    faqs: [
      { q: "Do you handle payments and subscriptions?", a: "Yes. We integrate Paystack, Flutterwave, Stripe and Paddle for global subscription billing." },
      { q: "Can you take over an existing codebase?", a: "Yes — we audit, stabilise and then iterate on inherited products regularly." },
    ],
  },
  {
    slug: "ecommerce",
    no: "04",
    title: "E-commerce & Shopping",
    tagline: "Stores that turn browsers into buyers.",
    desc: "Conversion-led online stores with secure checkout, inventory and global payments. Shopify, headless commerce or fully custom.",
    detail: "Beautiful, fast online stores with secure checkout, inventory management, shipping rules, and global payment gateways (Paystack, Flutterwave, Stripe). Built on Shopify, headless commerce, or fully custom to your catalogue.",
    deliverables: ["Storefront design", "Payments & shipping", "Product CMS", "Order workflows"],
    ngn: "650,000",
    gbp: "350",
    timeline: "5–8 weeks",
    hero: work1,
    gallery: [work1, work3, work5],
    benefits: [
      { title: "Conversion-led storefront", body: "Product pages, collections and checkout flows engineered to maximise revenue per visitor." },
      { title: "Global payments", body: "Paystack and Flutterwave for Africa, Stripe and Paddle for Europe and the Americas." },
      { title: "Inventory & shipping", body: "Real-time stock, multi-warehouse and shipping rules per country, weight and value." },
      { title: "Customer accounts", body: "Order history, wishlists, address book and reorder — features customers expect from premium brands." },
    ],
    process: [
      { step: "01", title: "Commerce strategy", body: "Catalogue, margins, logistics and the customer journey from ad click to repeat purchase." },
      { step: "02", title: "Storefront design", body: "Product, collection, cart and checkout designed for your category and audience." },
      { step: "03", title: "Build & integrate", body: "Connect payments, fulfilment, email and analytics into one calm operational stack." },
      { step: "04", title: "Launch & growth", body: "Go live, run baseline ads, and iterate on conversion data in the first 90 days." },
    ],
    idealFor: ["Fashion & lifestyle", "Beauty & fragrance", "Premium food & drink", "Direct-to-consumer brands"],
    faqs: [
      { q: "Shopify or custom?", a: "We recommend Shopify for most under-1,000-SKU brands, headless or custom for higher complexity or unusual catalogues." },
      { q: "Do you offer ongoing growth?", a: "Yes — under a Care retainer we run conversion experiments, content updates and seasonal campaigns." },
    ],
  },
  {
    slug: "mobile-apps",
    no: "05",
    title: "Mobile Apps",
    tagline: "Native-feel iOS and Android, from MVP to flagship.",
    desc: "Cross-platform iOS and Android apps that feel native. From MVPs to flagship products with smooth animation and offline support.",
    detail: "Cross-platform iOS and Android apps that feel truly native. Push notifications, offline-friendly UX, App Store and Play Store submission, plus version updates after launch — taking your product from MVP to flagship.",
    deliverables: ["iOS & Android", "Push notifications", "App store launch", "Post-launch updates"],
    ngn: "1,150,000",
    gbp: "620",
    timeline: "8–14 weeks",
    hero: work5,
    gallery: [work5, work4, work6],
    benefits: [
      { title: "One codebase, two stores", body: "Built with React Native so iOS and Android ship from a single high-quality codebase." },
      { title: "Native motion", body: "60fps gestures, transitions and haptics that make the app feel premium and considered." },
      { title: "Push & notifications", body: "Engagement and retention loops via push, in-app messages and deep links from day one." },
      { title: "Store submission", body: "We handle App Store and Google Play submission, screenshots, listings and review responses." },
    ],
    process: [
      { step: "01", title: "Product definition", body: "Scope the MVP, define the must-have flows, and align on the metrics that matter." },
      { step: "02", title: "Design", body: "Native-style UI for both platforms, prototyped on real devices, not just Figma." },
      { step: "03", title: "Engineering", body: "Sprint-based builds with TestFlight and internal Play tracks so stakeholders test continuously." },
      { step: "04", title: "Launch", body: "Coordinated app store launch, marketing assets, and a 90-day version cadence after release." },
    ],
    idealFor: ["Marketplaces", "Fintech & payments", "Health & fitness", "Loyalty & community apps"],
    faqs: [
      { q: "iOS or Android first?", a: "We ship both simultaneously. React Native lets us release to iOS and Android from the same codebase without compromising quality." },
      { q: "Do you maintain the app post-launch?", a: "Yes — most clients keep us on a monthly retainer for OS updates, store reviews and new features." },
    ],
  },
  {
    slug: "care-and-strategy",
    no: "06",
    title: "Care & Strategy",
    tagline: "Your studio on standby, every month.",
    desc: "Ongoing maintenance, hosting, content updates and growth strategy so your product compounds in value long after launch.",
    detail: "A monthly retainer that keeps your site fast, secure and growing. Hosting, uptime monitoring, content edits, security patches, SEO refinements, and quarterly growth strategy with the SETAL team on standby.",
    deliverables: ["Hosting & uptime", "Monthly updates", "SEO & analytics", "Growth consulting"],
    ngn: "85,000",
    gbp: "45",
    timeline: "Monthly",
    hero: hero,
    gallery: [hero, portrait, work6],
    benefits: [
      { title: "Always-on team", body: "Direct WhatsApp and email access to the SETAL team for the lifetime of the retainer." },
      { title: "Performance & SEO", body: "Monthly Lighthouse audits, Core Web Vitals tuning and SEO content refinements." },
      { title: "Security & uptime", body: "24/7 uptime monitoring, security patches and weekly off-site backups you can restore from any time." },
      { title: "Quarterly strategy", body: "Every 90 days we review analytics, run a growth workshop and propose the next high-leverage moves." },
    ],
    process: [
      { step: "01", title: "Handover", body: "Audit the current site/app and lock down the baseline for monitoring." },
      { step: "02", title: "Monthly cadence", body: "Updates, edits, performance work and a single point of contact for everything." },
      { step: "03", title: "Quarterly review", body: "Workshop, growth recommendations, and a roadmap for the next 90 days." },
    ],
    idealFor: ["Brands post-launch", "Founders without an in-house team", "Sites that drive real revenue", "Agencies needing dev capacity"],
    faqs: [
      { q: "Is there a minimum contract?", a: "Three months minimum so the team can build genuine context. Month-to-month after that." },
      { q: "What's not included?", a: "Major new sections or full redesigns are scoped separately; the retainer covers maintenance, small updates and strategy." },
    ],
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
  { year: "2026", title: "Awwwards Site of the Day", org: "Awwwards", project: "In Pursuit" },
  { year: "2026", title: "CSS Design Awards — Best UI/UX", org: "CSS Design Awards", project: "In Pursuit" },
  { year: "2026", title: "The FWA — Site of the Day", org: "The FWA", project: "In Pursuit" },
  { year: "2027", title: "Webby Awards — Best Visual Design", org: "Webby Awards", project: "In Pursuit" },
  { year: "2027", title: "Cannes Lions — Digital Craft", org: "Cannes Lions", project: "In Pursuit" },
];

export const faqs = [
  { q: "What does a typical engagement cost?", a: "Landing pages start from ₦150,000 / £80. Full websites start from ₦412,000 / £220. Web apps and e-commerce platforms scale from ₦650,000 / £350. Mobile apps start from ₦1,150,000 / £620. Every proposal is bespoke to your scope." },
  { q: "How long does a project take?", a: "A landing page takes 1–2 weeks. A full website is 4–6 weeks. Web apps and mobile apps typically take 6–14 weeks. Timelines are set at week zero and honored." },
  { q: "Do you work with early-stage founders?", a: "Yes. We reserve roughly 20% of our annual capacity for ambitious early-stage founders, often with flexible payment terms." },
  { q: "Where is the studio based?", a: "We are headquartered in Lagos, Nigeria with a second studio in Ekpoma, Edo State, and a Manchester (UK) studio opening soon. We serve clients across Africa, Europe, the Americas, Asia and Oceania." },
  { q: "Do you also handle development?", a: "Always. Design and engineering are inseparable here. We never hand off a Figma file and walk away — every project ships from this studio." },
  { q: "How do we get started?", a: "Send a brief through the contact page, WhatsApp / call +234 802 943 0064, message us on Telegram, or email setalstudio@gmail.com. We reply to every serious enquiry within 48 hours." },
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
  phone: "+234 802 943 0064",
  phoneTel: "tel:+2348029430064",
  sms: "sms:+2348029430064",
  whatsapp: "https://wa.me/2348029430064",
  telegram: "https://t.me/+2347046787443",
  calendar: "https://cal.com/setalstudio/intro",
};

export const budgetRanges = [
  { label: "₦80–250k", sub: "£45–130", value: "80k-250k" },
  { label: "₦250–600k", sub: "£130–320", value: "250k-600k" },
  { label: "₦600k–1.2M", sub: "£320–640", value: "600k-1.2M" },
  { label: "₦1.2M+", sub: "£640+", value: "1.2M+" },
];

export const contactMethods = [
  { label: "WhatsApp", value: "whatsapp" },
  { label: "Phone call", value: "phone" },
  { label: "Telegram", value: "telegram" },
  { label: "Email", value: "email" },
];


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

export const stats = [
  { value: 47, suffix: "+", label: "Award-winning launches" },
  { value: 312, suffix: "M", label: "Generated in client revenue", prefix: "$" },
  { value: 98, suffix: "%", label: "Client retention rate" },
  { value: 6, suffix: "y", label: "Average partnership length" },
];

export const services = [
  {
    no: "01",
    title: "Brand Identity",
    desc: "Complete visual systems — logo, typography, motion, voice. We forge identities for brands that intend to last a century.",
    deliverables: ["Logo system", "Typography & color", "Motion guidelines", "Brand book (120pg+)"],
  },
  {
    no: "02",
    title: "Website Design",
    desc: "Bespoke marketing sites and e-commerce flagships built around your narrative. Every pixel intentional, every interaction earned.",
    deliverables: ["Art direction", "UX architecture", "High-fidelity design", "Component library"],
  },
  {
    no: "03",
    title: "Interactive & WebGL",
    desc: "Award-grade interactive experiences. Three.js, GSAP, Lottie — engineered for both wonder and Lighthouse 100.",
    deliverables: ["3D environments", "Scroll choreography", "Motion design", "Performance audits"],
  },
  {
    no: "04",
    title: "Development",
    desc: "Production-grade code. React, Next.js, Astro, headless commerce. Designed to be maintained by your team for the next decade.",
    deliverables: ["Frontend engineering", "CMS integration", "Commerce platforms", "Edge deployment"],
  },
  {
    no: "05",
    title: "Art Direction",
    desc: "Ongoing creative partnership. We sit beside your founder or CMO and shape every visual touchpoint of the brand.",
    deliverables: ["Campaign direction", "Photography curation", "Content systems", "Quarterly reviews"],
  },
  {
    no: "06",
    title: "Strategy",
    desc: "Positioning, narrative, and market posture for premium brands entering — or redefining — their category.",
    deliverables: ["Workshops", "Competitive audits", "Narrative framework", "Roadmap"],
  },
];

export const testimonials = [
  {
    quote: "SETAL operates at a level I have rarely encountered. The launch site quintupled our qualified inbound within six weeks of going live.",
    name: "Léa Marchetti", role: "Founder, Aeterna Horology", avatar: "/avatar-1",
  },
  {
    quote: "They treat your brand like it&rsquo;s their own. Every detail considered, every conversation sharpening the work. The result speaks for itself.",
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
  { q: "What does a typical engagement cost?", a: "Brand identity engagements start at $45k. Full website builds start at $85k. WebGL experiences and flagship launches scale from $120k. Every proposal is bespoke." },
  { q: "How long does a project take?", a: "A brand identity is typically 6–8 weeks. A website is 10–14 weeks. We never rush; we never delay. The schedule is set at week zero and honored." },
  { q: "Do you work with early-stage startups?", a: "Yes — selectively. We reserve roughly 20% of our annual capacity for ambitious early-stage founders, often with equity-adjusted terms." },
  { q: "Where is the studio based?", a: "Paris is home. We have a satellite in Lisbon and partners in Tokyo. We work remotely with clients across 14 countries." },
  { q: "Do you also handle development?", a: "Always. Design and engineering are inseparable here. We never hand off a Figma file and walk away — every project ships from this studio." },
  { q: "How do we get started?", a: "Send a brief through the contact page. We reply to every serious inquiry within 48 hours with availability and next steps." },
];

export const processSteps = [
  { no: "00", title: "Discovery", desc: "Two weeks immersed in your business, customers, and category. Strategy before pixels." },
  { no: "01", title: "Narrative", desc: "We define the story before we draw a single thing. Positioning, voice, and visual hypothesis." },
  { no: "02", title: "Direction", desc: "Three distinct art-directed routes. We present, debate, and converge with you in the room." },
  { no: "03", title: "Design", desc: "High-fidelity design across every breakpoint and state. Iteration measured in days, not weeks." },
  { no: "04", title: "Engineering", desc: "Bespoke development with motion, performance and accessibility baked in from the first commit." },
  { no: "05", title: "Launch", desc: "Coordinated launch, press kit, social rollout. Then six months of post-launch partnership." },
];

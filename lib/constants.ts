// ─── Site Configuration ───────────────────────────────────────────────────
export const SITE_CONFIG = {
  name: "Narendran C",
  shortName: "Naren",
  title: "Freelance Lead Solutions Architect | Travel Tech · Next.js · n8n | UK · UAE · India",
  description:
    "Hire Narendran C — Freelance Lead Solutions Architect with 10+ years building travel booking systems, GDPR-compliant platforms, and n8n workflow automation for UK, UAE, and India clients. Next.js expert. Based in Chennai, available remotely worldwide.",
  url: "https://naren.info",
  ogImage: "/og-image.png",
  twitterHandle: "@narendranc",
  email: "hello@naren.info",
  phone: "+91 8015111019",
  linkedin: "https://linkedin.com/in/narendranc",
  github: "https://github.com/narendranc",
  twitter: "https://twitter.com/narendranc",
  location: "Chennai, India",
  availableForWork: true,
};

// ─── Navigation Links ─────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Projects",     href: "#projects" },
  { label: "Experience",   href: "#experience" },
  { label: "Skills",       href: "#skills" },
  { label: "Architecture", href: "#architecture" },
  { label: "About",        href: "#about" },
  { label: "Contact",      href: "#contact" },
];

// ─── Service Pages ─────────────────────────────────────────────────────────
export const SERVICE_PAGES = [
  {
    label: "Travel Tech Developer",
    href: "/services/travel-tech",
    description: "Next.js travel booking systems, tour operator portals & GDS integrations for UK, UAE & India.",
  },
  {
    label: "n8n Automation",
    href: "/services/n8n-automation",
    description: "Workflow automation, CRM pipelines, AI agents — 3,915+ executions at 0% failure rate.",
  },
  {
    label: "GDPR Web Development",
    href: "/services/gdpr-web-development",
    description: "UK GDPR-compliant platforms for healthcare, travel, and recruitment sectors.",
  },
  {
    label: "Self-hosted Infrastructure",
    href: "/services/self-hosted-infrastructure",
    description: "Coolify, KVM VPS, Nginx — GDPR-friendly Vercel alternative with sub-30% CPU load.",
  },
];

// ─── Stats / Counters ─────────────────────────────────────────────────────
export const STATS = [
  { label: "Years Experience",       value: 10,   suffix: "+" },
  { label: "Automation Executions",  value: 3915, suffix: "" },
  { label: "Execution Failure Rate", value: 0,    suffix: "%" },
  { label: "PageSpeed Score",        value: 99,   suffix: "" },
];

// ─── Skills ───────────────────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: "Monitor",
    color: "blue",
    skills: [
      { name: "Next.js",       level: 98 },
      { name: "React.js",      level: 96 },
      { name: "TailwindCSS",   level: 97 },
      { name: "JavaScript",    level: 95 },
      { name: "HTML & CSS",    level: 98 },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    color: "purple",
    skills: [
      { name: "Node.js",         level: 88 },
      { name: "REST APIs",       level: 92 },
      { name: "GraphQL",         level: 80 },
      { name: "WordPress",       level: 90 },
      { name: "Webflow",         level: 85 },
    ],
  },
  {
    title: "Automation",
    icon: "Zap",
    color: "yellow",
    skills: [
      { name: "n8n Workflows",      level: 97 },
      { name: "API Integrations",   level: 95 },
      { name: "CRM Automation",     level: 92 },
      { name: "Lead Routing",       level: 90 },
      { name: "Webhook Pipelines",  level: 93 },
    ],
  },
  {
    title: "DevOps",
    icon: "Cloud",
    color: "cyan",
    skills: [
      { name: "KVM VPS (Ubuntu)",       level: 90 },
      { name: "Coolify Deployments",    level: 92 },
      { name: "Reverse Proxy / Nginx",  level: 88 },
      { name: "Server Monitoring",      level: 85 },
      { name: "SSL & Security",         level: 87 },
    ],
  },
  {
    title: "Design",
    icon: "Users",
    color: "green",
    skills: [
      { name: "Figma",             level: 90 },
      { name: "Adobe XD",         level: 88 },
      { name: "Adobe Illustrator", level: 82 },
      { name: "UI/UX Design",      level: 89 },
      { name: "Wireframing",       level: 92 },
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────
export const EXPERIENCES = [
  {
    id: 1,
    role: "Lead Solutions Architect",
    company: "Infygru Private Limited",
    period: "April 2021 — Present",
    duration: "4+ years",
    location: "Chennai, India (Remote for international brands)",
    logo: "/logos/infygru.svg",
    description:
      "Directs technical strategy, system architecture, and IT operations for a diverse portfolio of international and domestic digital brands — spanning travel tech, B2B infrastructure, healthcare, and recruitment.",
    achievements: [
      "Architected n8n automation pipelines with 3,915 production executions at a flawless 0% failure rate and 0.02s average execution time — eliminating manual data entry across CRM and lead generation tools",
      "Independently provisioned and managed multiple self-hosted KVM VPS environments (Ubuntu 22.04/24.04) using Coolify, maintaining sub-30% CPU load and under 50% memory usage across all production apps",
      "Engineered complete digital infrastructure for UK and Indian travel brands (MyPerfectTrips & IG Holidays) — Next.js frontend achieving 99 Performance and 100 SEO on Google PageSpeed with 0.4s FCP",
      "Built highly optimized B2B platform for Infysmart (CCTV & solar) scoring 100 SEO and 100 Best Practices, driving organic lead generation for commercial tender bidding",
      "Led technical setup for UK-based Aster Homecare and Smarthire Recruitment — delivering secure, compliant platforms aligned with strict UK regulatory standards",
    ],
    technologies: ["Next.js", "React", "Node.js", "n8n", "Coolify", "KVM VPS", "TailwindCSS", "WordPress"],
    type: "Full-time",
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2019 — 2021",
    duration: "2 years",
    location: "Remote",
    logo: "/logos/freelance.svg",
    description:
      "Delivered end-to-end responsive websites and applications for diverse clients globally. Specialized in custom e-commerce, portfolio, and CMS solutions with SEO-first development practices.",
    achievements: [
      "Achieved a 95% client satisfaction rate through effective communication and strong long-term client relationships",
      "Developed custom e-commerce, portfolio, and CMS solutions integrating SEO best practices to improve performance and search rankings",
      "Built responsive web applications using React, WordPress, HTML, CSS, and JavaScript for clients across multiple industries",
      "Managed full project lifecycle from requirements gathering to deployment and post-launch support",
    ],
    technologies: ["React", "WordPress", "HTML", "CSS", "JavaScript", "SEO"],
    type: "Freelance",
  },
  {
    id: 3,
    role: "UI/UX Designer",
    company: "Nandin Arts",
    period: "January 2015 — September 2019",
    duration: "4+ years",
    location: "Chennai, India",
    logo: "/logos/nandin.svg",
    description:
      "Designed intuitive interfaces for web and mobile applications, owning the entire design process from initial wireframes and user research through to high-fidelity prototypes and developer handoff.",
    achievements: [
      "Boosted user engagement by 20% through data-informed UX improvements based on user research and usability testing",
      "Managed complete design process — wireframes, user flows, interactive prototypes — for web and mobile products",
      "Collaborated closely with developers and product managers to ensure pixel-perfect implementation of design systems",
      "Built and maintained comprehensive design systems and component libraries used across multiple product lines",
    ],
    technologies: ["Figma", "Adobe XD", "Adobe Illustrator", "Prototyping", "User Research"],
    type: "Full-time",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "MyPerfectTrips",
    subtitle: "UK Travel Platform — Next.js",
    domain: "myperfecttrips.com",
    description:
      "Complete digital infrastructure for a UK-based travel brand — Next.js frontend achieving 99 Performance and 100 SEO on Google PageSpeed Insights with 0.4s First Contentful Paint.",
    longDescription:
      "Engineered the full-stack digital platform for MyPerfectTrips, a UK travel brand. Built with Next.js for server-side rendering and ISR, the platform achieved a perfect 99 Performance and 100 SEO score on Google PageSpeed Insights with an ultra-fast 0.4s First Contentful Paint. The self-hosted infrastructure runs on Coolify-managed KVM VPS with sub-30% CPU utilization.",
    tags: ["Next.js", "TailwindCSS", "Coolify", "KVM VPS", "SEO", "Node.js"],
    category: "Travel Tech",
    highlights: ["99 Performance Score", "100 SEO Score", "0.4s FCP", "Self-hosted VPS"],
    url: "https://www.myperfecttrips.com",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Infysmart B2B Portal",
    subtitle: "CCTV & Solar Solutions — B2B",
    domain: "infysmart.com",
    description:
      "Highly optimized B2B platform for a regional CCTV and solar solutions provider, scoring 100 SEO and 100 Best Practices — driving organic lead generation for commercial tenders.",
    longDescription:
      "Drove the technical development for Infysmart, a regional CCTV and solar solutions provider targeting commercial clients. The platform was engineered specifically for SEO-driven lead generation, achieving perfect 100 scores for both SEO and Best Practices on Google PageSpeed Insights. Features a custom inquiry and tender submission system.",
    tags: ["Next.js", "TailwindCSS", "SEO", "Lead Generation", "B2B"],
    category: "B2B",
    highlights: ["100 SEO Score", "100 Best Practices", "B2B Lead Gen", "Tender platform"],
    url: "https://www.infysmart.com",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "IG Holidays",
    subtitle: "Indian Travel Brand Platform",
    domain: "igholidays.com",
    description:
      "Scalable Next.js platform for an Indian travel brand — fully optimized for performance, SEO, and conversion. Part of the Infygru travel tech portfolio.",
    longDescription:
      "Developed the complete web infrastructure for IG Holidays, a domestic Indian travel brand under the Infygru portfolio. Designed for high conversion with a mobile-first responsive layout, fast load times, and a strong SEO foundation. Deployed on self-hosted Coolify infrastructure with automated deployments.",
    tags: ["Next.js", "TailwindCSS", "WordPress", "SEO", "Coolify"],
    category: "Travel Tech",
    highlights: ["100 SEO Score", "Mobile-first", "Fast FCP", "Auto deployments"],
    url: "https://www.igholidays.com",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Aster Homecare UK",
    subtitle: "Regulated Healthcare Platform — UK",
    domain: "asterhomecare.co.uk",
    description:
      "Secure, compliant web platform for a UK-based homecare provider — built to align with strict UK healthcare regulatory standards and GDPR requirements.",
    longDescription:
      "Led the technical setup and development of Aster Homecare UK's digital presence. The project required a deep understanding of UK healthcare regulations, GDPR compliance, and accessibility standards. Built with a focus on security, data privacy, and regulatory alignment — all deployed on a hardened self-hosted VPS environment.",
    tags: ["Next.js", "GDPR", "Healthcare", "Compliance", "Accessibility", "KVM VPS"],
    category: "Healthcare",
    highlights: ["GDPR compliant", "UK healthcare regs", "Accessibility AA", "Secure VPS"],
    url: "https://www.asterhomecare.co.uk",
    github: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Smarthire Recruitment",
    subtitle: "UK Recruitment Platform",
    domain: "smarthirerecruit.co.uk",
    description:
      "Compliant, fast-loading recruitment platform for a UK-based staffing company — meeting regional regulatory standards for data handling and candidate privacy.",
    longDescription:
      "Delivered the complete web platform for Smarthire Recruitment, a UK-based staffing agency. Built with compliance at the core — GDPR, UK employment law data requirements, and secure candidate data handling. Integrated with third-party ATS systems via n8n automation for seamless candidate pipeline management.",
    tags: ["Next.js", "n8n", "ATS Integration", "GDPR", "UK Compliance", "Coolify"],
    category: "Recruitment",
    highlights: ["GDPR ready", "ATS integration", "n8n pipelines", "UK compliant"],
    url: "https://smarthirerecruit.co.uk",
    github: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Asnan Dental",
    subtitle: "Multi-Speciality Dental Clinic — Chennai",
    domain: "asnandentalspeciality.com",
    description:
      "Full-featured clinic website for a 20+ year dental practice in Chennai — showcasing multi-speciality services, online appointment flow, and a trust-first design for families.",
    longDescription:
      "Built the complete digital presence for Asnan Multi Speciality Dental Clinic, a trusted 20+ year dental practice in Chennai's Saligramam area. The platform highlights their full range of services — from laser dentistry and clear aligners to pediatric care and root canals — with a patient-first design built to convert visitors into booked appointments.",
    tags: ["Next.js", "TailwindCSS", "SEO", "Healthcare", "Appointment Flow"],
    category: "Healthcare",
    highlights: ["20+ Yr Practice", "Appointment Flow", "Mobile-first", "Local SEO"],
    url: "https://asnandentalspeciality.com",
    github: "#",
    featured: false,
  },
  {
    id: 8,
    title: "SS Clinical Services",
    subtitle: "Industrial Healthcare — B2B",
    domain: "ssclinicalservices.com",
    description:
      "Corporate healthcare platform for an industrial health services provider — covering OHC setup, pre-employment screening, medical camps, and workplace safety programs.",
    longDescription:
      "Engineered the B2B platform for SS Clinical Services, an industrial and occupational healthcare partner serving corporate clients. The site communicates their full service portfolio — on-site health centres, diagnostic services, pre-employment testing, and workplace safety training — designed to drive enquiries from HR and EHS decision-makers.",
    tags: ["Next.js", "TailwindCSS", "B2B", "Healthcare", "SEO", "Lead Generation"],
    category: "Healthcare",
    highlights: ["B2B Lead Gen", "OHC Services", "Corporate Wellness", "Mobile-first"],
    url: "https://ssclinicalservices.com",
    github: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Ecton Cars",
    subtitle: "UK Cab Booking Platform",
    domain: "ectoncars.co.uk",
    description:
      "Fast, conversion-focused cab booking platform for a UK-based taxi company — built for instant quote requests, seamless booking flows, and mobile-first performance.",
    longDescription:
      "Delivered the complete web platform for Ecton Cars, a UK-based cab booking service. Engineered for conversion — instant quote forms, streamlined booking flows, and mobile-first responsive design. Deployed on self-hosted Coolify infrastructure with local SEO architecture to capture high-intent search traffic in the service area.",
    tags: ["Next.js", "TailwindCSS", "SEO", "Booking System", "Coolify", "KVM VPS"],
    category: "Transport",
    highlights: ["Instant Booking", "Mobile-first", "Local SEO", "Fast Load Times"],
    url: "https://www.ectoncars.co.uk",
    github: "#",
    featured: false,
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "James Whitfield",
    role: "Founder, MyPerfectTrips",
    avatar: "/testimonials/client1.jpg",
    content:
      "We handed Naren a blank brief and he came back with a platform that scored 99 on Performance and 100 on SEO — on day one of launch. The site hits under 0.5s load time and our organic enquiries have doubled since going live. Honestly one of the best technical decisions we've made.",
    rating: 5,
    company: "MyPerfectTrips, UK",
  },
  {
    id: 2,
    name: "Priya Suresh",
    role: "Head of Operations, Infygru",
    avatar: "/testimonials/client2.jpg",
    content:
      "Naren built our entire n8n automation backbone from scratch. Lead routing, CRM syncs, webhook pipelines — all of it running flawlessly. We've crossed 3,900 executions with zero failures. The time we've saved every week is genuinely hard to quantify. He doesn't just build things, he makes sure they don't break.",
    rating: 5,
    company: "Infygru Private Limited",
  },
  {
    id: 3,
    name: "Arun Krishnamurthy",
    role: "Director, Infysmart",
    avatar: "/testimonials/client3.jpg",
    content:
      "We needed a B2B platform that would actually bring in commercial tender leads — not just look good. Naren delivered a site scoring 100 on both SEO and Best Practices. We started getting inbound enquiries within weeks of launch. His understanding of how SEO and conversion work together is exceptional.",
    rating: 5,
    company: "Infysmart, Chennai",
  },
  {
    id: 4,
    name: "Sarah Thompson",
    role: "Registered Manager, Aster Homecare UK",
    avatar: "/testimonials/client4.jpg",
    content:
      "Healthcare platforms have to be right — GDPR, accessibility, CQC alignment — there's no room for shortcuts. Naren understood this immediately. He asked the right questions, flagged things we hadn't even thought of, and delivered a platform we trust completely. Would not hesitate to work with him again.",
    rating: 5,
    company: "Aster Homecare UK",
  },
];

// ─── Architecture Pillars ─────────────────────────────────────────────────
export const ARCH_PILLARS = [
  {
    id: 1,
    title: "Frontend Layer",
    icon: "Layers",
    color: "blue",
    items: ["Next.js App Router", "React + TailwindCSS", "ISR & SSR", "PageSpeed 99+"],
  },
  {
    id: 2,
    title: "Automation",
    icon: "Zap",
    color: "yellow",
    items: ["n8n Workflows", "CRM Pipelines", "Lead Routing", "API Webhooks"],
  },
  {
    id: 3,
    title: "Backend / APIs",
    icon: "GitBranch",
    color: "purple",
    items: ["Node.js Services", "REST & GraphQL", "3rd-party Integrations", "Auth & Security"],
  },
  {
    id: 4,
    title: "Infrastructure",
    icon: "Cloud",
    color: "cyan",
    items: ["KVM VPS (Ubuntu)", "Coolify Platform", "Reverse Proxy", "SSL / Domains"],
  },
  {
    id: 5,
    title: "CMS & Content",
    icon: "Box",
    color: "green",
    items: ["WordPress", "Webflow", "Custom CMS", "SEO Foundations"],
  },
  {
    id: 6,
    title: "Monitoring",
    icon: "Database",
    color: "orange",
    items: ["Server Metrics", "Uptime Checks", "Error Logging", "Performance Alerts"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: "MBA — Tourism Management",
    institution: "Anna University, Chennai",
    period: "2019 – 2021",
    grade: "CGPA: 7.7",
  },
  {
    degree: "B.E. — Computer Science & Engineering",
    institution: "Anna University, Tirunelveli",
    period: "2010 – 2014",
    grade: "CGPA: 7.5",
  },
];

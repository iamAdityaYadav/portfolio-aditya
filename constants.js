export const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"];

export const SERVICES = [
  { icon: "🎨", title: "UI/UX Design", desc: "Crafting intuitive and visually stunning digital experiences that users love." },
  { icon: "💻", title: "Web Development", desc: "Building fast, responsive, and scalable websites with modern technologies." },
  { icon: "📱", title: "App Design", desc: "Designing beautiful mobile apps for iOS and Android platforms." },
  { icon: "🖼️", title: "Mockups", desc: "Creating realistic product mockups and brand identity presentations." },
  { icon: "✏️", title: "Branding", desc: "Developing cohesive brand identities that leave lasting impressions." },
  { icon: "🔍", title: "SEO Optimization", desc: "Optimizing digital presence to rank higher and reach wider audiences." },
];

export const PORTFOLIO_ITEMS = [
  { title: "Brand Identity", category: "Branding", darkBg: "#1a2a4a", lightBg: "#dce8ff" },
  { title: "E-Commerce App", category: "Web Dev", darkBg: "#0f1e35", lightBg: "#d0e0ff" },
  { title: "Dashboard UI", category: "UI/UX", darkBg: "#162240", lightBg: "#d8e6ff" },
  { title: "Mobile App", category: "App Design", darkBg: "#0d1b30", lightBg: "#ccdcff" },
  { title: "Portfolio Site", category: "Web Dev", darkBg: "#0e2038", lightBg: "#d4e4ff" },
  { title: "Logo Design", category: "Branding", darkBg: "#13203a", lightBg: "#d6e2ff" },
];

export const TESTIMONIALS = [
  { name: "Alex Johnson", role: "CEO, TechCorp", text: "Absolutely stunning work. The attention to detail and creativity exceeded all my expectations. Will definitely work again!" },
  { name: "Sarah Williams", role: "Founder, StartupXYZ", text: "Working together was a game-changer. Delivered beyond the brief, on time and on budget. Highly professional." },
  { name: "Michael Chen", role: "Product Manager", text: "Top-tier design skills combined with excellent communication. The final product looked exactly how I envisioned it." },
];

export const ROLES = ["Designer", "Developer", "Creator", "Freelancer"];

export const SOCIAL_LINKS = [
  { name: "Facebook", icon: "facebook", url: "#" },
  { name: "Twitter", icon: "twitter", url: "#" },
  { name: "Instagram", icon: "instagram", url: "#" },
  { name: "LinkedIn", icon: "linkedin", url: "#" },
  //{ name: "Behance", icon: "behance", url: "#" },
  { name: "Dribbble", icon: "dribbble", url: "#" },
];

export const SKILLS = [
  { name: "UI/UX Design", percentage: 92 },
  { name: "Web Development", percentage: 85 },
  { name: "App Design", percentage: 78 },
  { name: "Branding", percentage: 88 },
];

export const ABOUT_CARDS = [
  { icon: "🎓", title: "Education", description: "BFA Graphic Design, 2020" },
  { icon: "💼", title: "Experience", description: "3+ years design & dev" },
  { icon: "🏆", title: "Awards", description: "5 design awards" },
  { icon: "🌍", title: "Location", description: "Remote / Worldwide" },
];

export const CONTACT_INFO = [
  { icon: "📧", label: "Email", value: "ydvaditya79@gmail.com" },
  { icon: "📞", label: "Phone", value: "+91 7905288657" },
  { icon: "📍", label: "Location", value: "Greater Noida, Uttar Pradesh" },
];

export const getThemeColors = (dark) => ({
  bg: dark ? "#060d1b" : "#f0f4ff",
  bgAlt: dark ? "#080f1e" : "#e6eeff",
  bgCard: dark ? "#0b1628" : "#ffffff",
  bgNav: dark ? "rgba(6,13,27,0.95)" : "rgba(240,244,255,0.95)",
  txt: dark ? "#e4e8f4" : "#0d1b2e",
  txtMuted: dark ? "#6b7fa8" : "#4e6080",
  txtDim: dark ? "#2e4060" : "#9bb0c8",
  border: dark ? "rgba(37,99,235,0.2)" : "rgba(37,99,235,0.18)",
  dot: dark ? "rgba(37,99,235,0.16)" : "rgba(37,99,235,0.1)",
  navBorder: dark ? "rgba(37,99,235,0.15)" : "rgba(37,99,235,0.12)",
});
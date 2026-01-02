import { Users, ShieldCheck, Building2, Smartphone, BrainCircuit, Globe, Lock } from 'lucide-react';

// --- Environment Variables (Links) ---
// This acts as a safeguard. If the .env var is missing, it falls back to '#'
export const LINKS = {
    whatsapp: import.meta.env.VITE_WHATSAPP_LINK || '#',
    youtube: import.meta.env.VITE_YOUTUBE_LINK || '#',
    twitter: import.meta.env.VITE_TWITTER_LINK || '#',
};

// --- Content Data ---

export const STARTUP_STEPS = [
    { title: "Idea Validation", desc: "We stress-test your concept before you build." },
    { title: "Tech Architecture", desc: "Building a scalable foundation for millions of users." },
    { title: "MVP Development", desc: "Rapid prototype execution to hit the market fast." },
    { title: "Pitch & Funding", desc: "Professional pitch decks and government incubation connects." },
    { title: "Long-term Growth", desc: "CTO-like support and continuous technical guidance." },
    { title: "Marketing & Branding", desc: "Go-to-market strategy, SEO, and digital presence building." }
];

export const PILLARS = [
    {
        title: "Career Guidance",
        desc: "1-to-1 expert guidance. Mental clarity & direction.",
        icon: Users,
        color: "bg-blue-50 text-blue-700"
    },
    {
        title: "OTRAS Platform",
        desc: "Secure, scalable exam processing for Governments.",
        icon: ShieldCheck,
        color: "bg-emerald-50 text-emerald-700"
    },
    {
        title: "Startup Services",
        desc: "Tech & growth partner. End-to-end execution.",
        icon: Building2,
        color: "bg-indigo-50 text-indigo-700"
    },
];

export const SERVICES = [
    { title: "Web & App Development", desc: "React, Java Spring, Microservices", icon: Smartphone },
    { title: "AI/ML Solutions", desc: "Automation & High-Performance APIs", icon: BrainCircuit },
    { title: "Digital Marketing", desc: "SEO, Branding & Growth Strategy", icon: Globe },
    { title: "Enterprise Security", desc: "Audit-ready Government Systems", icon: Lock },
];

export const BLOGS = [
    "New Government Exam Guidelines 2026",
    "How to recover from Career Gaps?",
    "Startup Funding: The Real Truth",
    "OTRAS: Stopping Exam Fraud",
    "Mental Health for Aspirants",
    "Java vs Python for Backend?",
    "SSC CGL: Latest Updates",
];
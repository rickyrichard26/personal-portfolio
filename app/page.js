"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroCodeAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const codeSnippets = [
            "function init() { return true; }",
            "const data = await fetch('/api/v1/users');",
            "if (vulnerable) executePayload();",
            "import { useState, useEffect } from 'react';",
            "SELECT * FROM users WHERE id = 1;",
            "document.getElementById('root').render();",
            "console.log('Access Granted');",
            "while(true) { hack(); }",
            "let x = Array.from({length: 10});",
            "module.exports = { config };",
            "<div><HeroCodeAnimation /></div>",
            "class User extends Model {}",
            "try { execute() } catch (e) { log(e) }"
        ];

        let lines = [];
        const maxLines = 18;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            }
        };

        const createLine = () => {
            return {
                text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
                x: Math.random() * (canvas.width || 1000) * 0.8,
                y: Math.random() * (canvas.height || 800),
                speed: Math.random() * 0.4 + 0.1,
                opacity: Math.random() * 0.2 + 0.05,
                size: Math.floor(Math.random() * 8) + 12
            };
        };

        // Initial setup
        for (let i = 0; i < maxLines; i++) {
            lines.push(createLine());
        }

        setTimeout(resizeCanvas, 0);
        window.addEventListener('resize', resizeCanvas);

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];

                ctx.fillStyle = `rgba(143, 188, 143, ${line.opacity})`;
                ctx.font = `${line.size}px monospace`;
                ctx.fillText(line.text, line.x, line.y);

                line.y -= line.speed;

                if (line.y < 50) {
                    line.opacity -= 0.005;
                }

                if (line.y < -20 || line.opacity <= 0) {
                    lines[i] = createLine();
                    lines[i].y = canvas.height + 20;
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
};

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 12000);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    radius: Math.random() * 2 + 0.5
                });
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#8fbc8f';

            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 130) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(143, 188, 143, ${1 - distance / 130})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.25,
                pointerEvents: 'none'
            }}
        />
    );
};

import {
    SiTypescript,
    SiJavascript,
    SiPhp,
    SiPython,
    SiDart,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiLaravel,
    SiFlutter,
    SiPostgresql,
    SiWireshark,
} from "react-icons/si";
import { FaJava, FaSearch, FaSatelliteDish, FaFlag } from "react-icons/fa";

// Inline Premium SVGs for Project Cards
const RobotIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="48" height="36" rx="8" fill="url(#robot-gradient)" stroke="#1b4d3e" strokeWidth="2" />
        <rect x="20" y="8" width="24" height="8" rx="2" fill="#1b4d3e" />
        <circle cx="32" cy="8" r="3" fill="#FBBF24" />
        <rect x="18" y="26" width="8" height="8" rx="2" fill="#E0F2FE" />
        <circle cx="22" cy="30" r="2" fill="#1b4d3e" />
        <rect x="38" y="26" width="8" height="8" rx="2" fill="#E0F2FE" />
        <circle cx="42" cy="30" r="2" fill="#1b4d3e" />
        <rect x="22" y="42" width="20" height="4" rx="2" fill="#E0F2FE" />
        <path d="M6 30H8M56 30H58" stroke="#1b4d3e" strokeWidth="3" strokeLinecap="round" />
        <defs>
            <linearGradient id="robot-gradient" x1="8" y1="16" x2="56" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1b4d3e" />
                <stop offset="1" stopColor="#1b4d3e" />
            </linearGradient>
        </defs>
    </svg>
);

const ShieldIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 6L10 14V30C10 44.2 19.4 57.4 32 61C44.6 57.4 54 44.2 54 30V14L32 6Z" fill="url(#shield-gradient)" stroke="#1b4d3e" strokeWidth="2" strokeLinejoin="round" />
        <path d="M32 14V52" stroke="#1b4d3e" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M22 30H42" stroke="#1b4d3e" strokeWidth="2" strokeDasharray="4 4" />
        <defs>
            <linearGradient id="shield-gradient" x1="10" y1="6" x2="54" y2="61" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1b4d3e" />
                <stop offset="1" stopColor="#1b4d3e" />
            </linearGradient>
        </defs>
    </svg>
);

const LockIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="24" width="36" height="28" rx="6" fill="url(#lock-gradient)" stroke="#1b4d3e" strokeWidth="2" />
        <path d="M20 24V17C20 10.3726 25.3726 5 32 5C38.6274 5 44 10.3726 44 17V24" stroke="#1b4d3e" strokeWidth="4" strokeLinecap="round" />
        <circle cx="32" cy="36" r="4" fill="#FBBF24" />
        <path d="M32 40V45" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
        <defs>
            <linearGradient id="lock-gradient" x1="14" y1="24" x2="50" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1b4d3e" />
                <stop offset="1" stopColor="#1b4d3e" />
            </linearGradient>
        </defs>
    </svg>
);

const NetworkIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="14" r="6" fill="#1b4d3e" stroke="#1b4d3e" strokeWidth="2" />
        <circle cx="16" cy="42" r="6" fill="#1b4d3e" stroke="#1b4d3e" strokeWidth="2" />
        <circle cx="48" cy="42" r="6" fill="#1b4d3e" stroke="#1b4d3e" strokeWidth="2" />
        <path d="M29 19L19 37M35 19L45 37M22 42H42" stroke="#1b4d3e" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="30" r="3" fill="#FBBF24" />
        <defs />
    </svg>
);

const MagnifierIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="26" r="16" stroke="#1b4d3e" strokeWidth="4" fill="url(#mag-gradient)" />
        <rect x="42" y="38" width="6" height="18" rx="3" transform="rotate(-45 42 38)" fill="#1b4d3e" />
        <path d="M20 20C20 20 22 17 26 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <defs>
            <linearGradient id="mag-gradient" x1="10" y1="10" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1b4d3e" />
                <stop offset="1" stopColor="#1b4d3e" />
            </linearGradient>
        </defs>
    </svg>
);

const ChartIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="48" height="44" rx="4" fill="url(#chart-gradient)" stroke="#1b4d3e" strokeWidth="2" />
        <path d="M16 44L26 32L36 38L48 22" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="32" r="3" fill="white" />
        <circle cx="36" cy="38" r="3" fill="white" />
        <circle cx="48" cy="22" r="3" fill="white" />
        <line x1="12" y1="46" x2="52" y2="46" stroke="#1b4d3e" strokeWidth="2" />
        <defs>
            <linearGradient id="chart-gradient" x1="8" y1="10" x2="56" y2="54" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1b4d3e" />
                <stop offset="1" stopColor="#0F172A" />
            </linearGradient>
        </defs>
    </svg>
);

const FlagIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V56" stroke="#1b4d3e" strokeWidth="4" strokeLinecap="round" />
        <path d="M12 10L44 18L12 30V10Z" fill="url(#flag-gradient)" stroke="#1b4d3e" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="44" cy="18" r="4" fill="#FBBF24" />
        <defs>
            <linearGradient id="flag-gradient" x1="12" y1="10" x2="44" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1b4d3e" />
                <stop offset="1" stopColor="#1b4d3e" />
            </linearGradient>
        </defs>
    </svg>
);

const MarketIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="24" width="48" height="32" rx="4" fill="url(#market-gradient)" stroke="#1b4d3e" strokeWidth="2" />
        <path d="M20 24V18C20 13.58 23.58 10 28 10H36C40.42 10 44 13.58 44 18V24" stroke="#1b4d3e" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="40" r="4" fill="#FBBF24" />
        <circle cx="40" cy="40" r="4" fill="#FBBF24" />
        <line x1="16" y1="32" x2="48" y2="32" stroke="#1b4d3e" strokeWidth="1.5" strokeDasharray="3 3" />
        <defs>
            <linearGradient id="market-gradient" x1="8" y1="24" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1b4d3e" />
                <stop offset="1" stopColor="#0F172A" />
            </linearGradient>
        </defs>
    </svg>
);

const SunIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
);

const MoonIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
);

const GitHubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const UserIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Browser/window frame */}
        <rect x="6" y="12" width="52" height="40" rx="6" fill="url(#portfolio-gradient)" stroke="#1b4d3e" strokeWidth="2" />
        {/* Browser top bar */}
        <rect x="6" y="12" width="52" height="10" rx="6" fill="#1b4d3e" />
        <circle cx="14" cy="17" r="2" fill="#FBBF24" />
        <circle cx="21" cy="17" r="2" fill="#34D399" />
        <circle cx="28" cy="17" r="2" fill="#F87171" />
        {/* Page content blocks */}
        <rect x="14" y="28" width="14" height="14" rx="3" fill="#E0F2FE" />
        <circle cx="21" cy="33" r="3" fill="#1b4d3e" />
        <rect x="17" y="38" width="8" height="2" rx="1" fill="#1b4d3e" />
        <rect x="34" y="28" width="22" height="3" rx="1.5" fill="#E0F2FE" />
        <rect x="34" y="34" width="22" height="3" rx="1.5" fill="#1b4d3e" />
        <rect x="34" y="40" width="14" height="3" rx="1.5" fill="#1b4d3e" />
        <path d="M4 32H6M58 32H60" stroke="#1b4d3e" strokeWidth="3" strokeLinecap="round" />
        <defs>
            <linearGradient id="portfolio-gradient" x1="6" y1="12" x2="58" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1b4d3e" />
                <stop offset="1" stopColor="#1b4d3e" />
            </linearGradient>
        </defs>
    </svg>
);

export default function PortfolioPage() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [skillFilter, setSkillFilter] = useState("all");
    const [projectFilter, setProjectFilter] = useState("all");
    const [expandedExp, setExpandedExp] = useState({});

    const toggleExp = (id) => {
        setExpandedExp((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    // Form submission state
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
    const [isHuman, setIsHuman] = useState(false);
    const [humanError, setHumanError] = useState(false);


    // ─── CAPTCHA ───────────────────────────────────────────────────────────────
    const generateCaptcha = () => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        return { a, b, answer: a + b };
    };
    const [captcha, setCaptcha] = useState(generateCaptcha);
    const [captchaInput, setCaptchaInput] = useState("");
    const [captchaError, setCaptchaError] = useState(false);

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
        setCaptchaInput("");
        setCaptchaError(false);
    };
    // Generate Captcha only

    // Refs for tracking scroll positions
    const sections = {
        home: useRef(null),
        about: useRef(null),
        skills: useRef(null),
        experience: useRef(null),
        projects: useRef(null),
        contact: useRef(null),
    };

    // Scroll active section tracking
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 120;
            for (const section in sections) {
                const ref = sections[section].current;
                if (ref) {
                    const top = ref.offsetTop;
                    const height = ref.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (section) => {
        setIsMenuOpen(false);
        const ref = sections[section].current;
        if (ref) {
            window.scrollTo({
                top: ref.offsetTop - 80,
                behavior: "smooth",
            });
            setActiveSection(section);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        if (!isHuman) {
            setHumanError(true);
            return;
        }

        setHumanError(false);
        setFormStatus("submitting");
        setTimeout(() => {
            setFormStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsHuman(false);
        }, 1500);

        // Validate CAPTCHA
        if (parseInt(captchaInput, 10) !== captcha.answer) {
            setCaptchaError(true);
            refreshCaptcha();
            return;
        }

        setCaptchaError(false);
        setFormStatus("submitting");
        setTimeout(() => {
            setFormStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            refreshCaptcha();
        }, 1500);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const languageSkills = [
        { name: "TypeScript", percentage: 85, level: "Advanced", icon: <SiTypescript />, color: "#1b4d3e" },
        { name: "Java", percentage: 85, level: "Advanced", icon: <FaJava />, color: "#F89820" },  // ← changed
        { name: "JavaScript", percentage: 80, level: "Advanced", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "PHP", percentage: 70, level: "Intermediate", icon: <SiPhp />, color: "#777BB4" },
        { name: "Python", percentage: 60, level: "Intermediate", icon: <SiPython />, color: "#3776AB" },
        { name: "Dart", percentage: 55, level: "Intermediate", icon: <SiDart />, color: "#1b4d3e" },
    ];

    const frameworkSkills = [
        { name: "React.js / Next.js", percentage: 82, level: "Advanced", icon: <SiReact />, color: "#1b4d3e" },
        { name: "Tailwind CSS", percentage: 80, level: "Advanced", icon: <SiTailwindcss />, color: "#1b4d3e" },
        { name: "Node.js / Express", percentage: 78, level: "Advanced", icon: <SiNodedotjs />, color: "#68A063" },
        { name: "Laravel", percentage: 70, level: "Intermediate", icon: <SiLaravel />, color: "#FF2D20" },
        { name: "Flutter", percentage: 65, level: "Intermediate", icon: <SiFlutter />, color: "#1b4d3e" },
        { name: "PostgreSQL / MySQL", percentage: 75, level: "Advanced", icon: <SiPostgresql />, color: "#1b4d3e" },
    ];

    const securitySkills = [
        { name: "Wireshark / NetworkMiner", percentage: 80, level: "Advanced", icon: <SiWireshark />, color: "#1b4d3e" },
        { name: "FTK Imager / Autopsy", percentage: 78, level: "Advanced", icon: <FaSearch />, color: "#E85D04" },
        { name: "PCAP & Traffic Analysis", percentage: 75, level: "Intermediate", icon: <FaSatelliteDish />, color: "#1b4d3e" },
        { name: "CTF & Web Exploitation", percentage: 72, level: "Intermediate", icon: <FaFlag />, color: "#DC2626" },
    ];
    const projectsData = [
        {
            title: "Web-ISO-Shield",
            category: "security",
            star: "ISO",
            year: "2026",
            role: "Full-Stack Developer, UI/UX Designer",
            description:
                "Comprehensive full-stack platform for ISO/IEC 27001 security auditing and compliance management. Features 3-phase roadmap: CIA Triad asset scoring, 5×5 risk heatmap, 114-control compliance checklist across 14 domains, and AI-assisted audit consultation with auto-generated PDF reports.",
            tech: ["Next.js", "Tailwind CSS", "Supabase", "AI"],
            github: "https://github.com/rickyrichard26/Web-ISO-Shield",
            liveUrl: null,
            image: "/web-iso-shield.png",
            icon: <ShieldIcon />,
        },
        {
            title: "BPOMate-AI",
            category: "web app",
            star: "AI",
            year: "2026",
            role: "Full-Stack Developer",
            description:
                "AI-powered BPOM regulatory compliance recommendation system that intelligently suggests test parameters for food and pharmaceutical products. Originally built as RegParamAI for the AI Open Innovation Challenge 2026 (PT TUV Nord Indonesia), migrated to React/Vite + Express.js + PostgreSQL.",
            tech: ["React", "Vite", "Express.js", "PostgreSQL", "AI/NLP"],
            github: "https://github.com/rickyrichard26/BPOMate-AI",
            liveUrl: null,
            image: "/bpomate-ai.png",
            icon: <RobotIcon />,
        },
        {
            title: "Crypto-WebApplicationFirewall",
            category: "security",
            star: "WAF",
            year: "2026",
            role: "UI/UX Designer",
            description:
                "Security-focused WAF built on Laravel combining cryptographic techniques with traditional WAF capabilities. Ensures data confidentiality via AES-256 encryption, digital signatures, and layered defenses against SQL Injection, XSS, and brute-force attacks. Fully Dockerized.",
            tech: ["Laravel", "PHP", "AES-256", "Docker", "Cryptography"],
            github: "https://github.com/rickyrichard26/Crypto-WebApplicationFirewall.git",
            image: "/cryptowaf.png",
            icon: <LockIcon />,
        },
        {
            title: "University Event Management",
            category: "mobile",
            star: "Mobile",
            year: "2025",
            role: "Full-Stack Developer",
            description:
                "Cross-platform mobile application built with Flutter for managing university events. Provides students and organizers with tools to discover, register for, and track events. Targets both Android and iOS from a single Dart codebase.",
            tech: ["Flutter", "Dart", "Android Studio"],
            github: "https://github.com/rickyrichard26/University_Event_Management",
            image: "/event-management.png",
            icon: <ChartIcon />,
        },
        {
            title: "PUMPS — Student Marketplace",
            category: "web app",
            star: "Live",
            year: "2024",
            role: "Full-Stack Developer & Marketing",
            description:
                "President University Marketplace for Students (PUMPS) — a web platform for product trading within the university environment. Students can publish and sell food, drinks, snacks, and merchandise. Features forum discussions and real-time group chat.",
            tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
            github: "https://github.com/rickyrichard26/University_Event_Management.git",
            liveUrl: "https://echox.iceiy.com",
            image: "/pumps.png",
            icon: <MarketIcon />,
        },
        {
            title: "CTF — Ethical Hacking",
            category: "security",
            star: "CTF",
            year: "2025",
            role: "Competitor — WRSec Team",
            description:
                "Web CTF challenge writeup: retrieved a flag from a protected API endpoint (/api/flag) by exploiting an XSS vulnerability to execute an authenticated fetch with the X-Admin-Secret header in a privileged browser context.",
            tech: ["XSS", "JavaScript", "API Security", "Ethical Hacking"],
            github: null,
            liveUrl: "https://docs.google.com/document/d/1J6PkXAt2ChfVmUHxdRAYSDE2h5ogX2NLnpyU86apvL8/edit?tab=t.0",
            image: "/ctf-comment.png",
            icon: <FlagIcon />,
        },
        {
            title: "Miami PD Forensic Investigation",
            category: "forensics",
            star: "Forensics",
            year: "2026",
            role: "Investigator",
            description:
                "Digital forensic investigation into the alleged misappropriation of $250,000 in charitable funds from HopeFund. Forensic analysis of a 20GB thumb drive seized from finance officer Emily Parker's office using Autopsy to uncover fraudulent financial transactions.",
            tech: ["Autopsy", "FAT32 Analysis", "Digital Forensics", "Artifact Recovery"],
            github: null,
            liveUrl: "https://docs.google.com/document/d/1xGqD02bZla4aNQoIa54Dl8hc_NVz-sLWezdc-I6kDCA/edit?tab=t.0",
            image: "/miami-pd.png",
            icon: <MagnifierIcon />,
        },

        {
            title: "Personal Portfolio Website",
            category: "web app",
            star: "New",
            year: "2026",
            role: "Full-Stack Developer, UI/UX Designer",
            description:
                "Personal portfolio site built with Next.js, featuring an animated typing hero, a horizontally-scrolling experience timeline with expandable cards, scroll-triggered skill progress bars, and a fully custom dark/light theme system. Designed and built end-to-end to showcase cybersecurity and full-stack development work.",
            tech: ["Next.js", "React", "CSS", "react-icons"],
            github: "https://github.com/rickyrichard26/personal-portfolio.git",
            liveUrl: "https://rickyrichard-portfolio.vercel.app/",
            image: "/portfolio.png",
            icon: <UserIcon />,
        },

        {
            title: "CTF — Digital Forensic",
            category: "forensics",
            star: "CTF",
            year: "2026",
            role: "Competitor - RAW-Memory Team",
            description:
                "Digital forensics CTF report covering 10 solved challenges — including Mailer, TripleThreat2, NightMare, Lost-d4-imp0rt4nt-fil3, goTTa-fix-the-corrupTlon, and MailMailSnailMail — each requiring artifact recovery, file/data analysis, and flag extraction from corrupted or hidden evidence.",
            tech: ["Digital Forensics", "Artifact Recovery", "File Analysis", "CTF"],
            github: null,
            liveUrl: "https://docs.google.com/document/d/1FfjBQ3b3R9eQC0MsjHLu5BoCVET-2qyilYa_4WLXGms/edit?usp=sharing",
            image: "/ctfdf.png",
            icon: <MagnifierIcon />,
        },
    ];

    const filteredSkills =
        skillFilter === "all"
            ? securitySkills
            : securitySkills;

    const filteredProjects = projectFilter === "all"
        ? projectsData
        : projectsData.filter(p => p.category === projectFilter);

    return (
        <div>
            <AnimatedBackground />
            {/* HEADER / NAVIGATION */}
            <header className="header">
                <div className="container navbar">
                    <a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo("home"); }} className="logo">
                        <div className="logo-icon flex-center">{"</>"}</div>
                        <span>RR<span className="logo-text-blue">T</span></span>
                    </a>

                    {/* Nav Links */}
                    <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                        {["home", "about", "skills", "experience", "projects", "contact"].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                onClick={(e) => { e.preventDefault(); handleScrollTo(section); }}
                                className={`nav-link ${activeSection === section ? "active" : ""}`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                        <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo("contact"); }} className="btn-hire flex-center">
                            Hire Me
                        </a>
                    </nav>

                    {/* Toggle Menu button */}
                    <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Navigation">
                        <span className="nav-toggle-bar" style={isMenuOpen ? { transform: "rotate(45deg) translate(5px, 6px)" } : {}} />
                        <span className="nav-toggle-bar" style={isMenuOpen ? { opacity: 0 } : {}} />
                        <span className="nav-toggle-bar" style={isMenuOpen ? { transform: "rotate(-45deg) translate(5px, -6px)" } : {}} />
                    </button>
                </div>
            </header>

            {/* HERO SECTION */}
            <section id="home" ref={sections.home} className="hero">
                <HeroCodeAnimation />
                <div className="particles-bg"></div>
                <div className="glow-orb glow-orb-1"></div>
                <div className="glow-orb glow-orb-2"></div>
                <div className="container hero-grid">
                    <div className="hero-content">
                        <div className="opportunity-badge">
                            <span className="pulse-dot" />
                            Available for Opportunities
                        </div>
                        <TypeAnimation
                            sequence={[
                                "Hi, I'm Ricky Richard Takahindangen",
                                2000,
                                "",
                                500,
                            ]}
                            speed={50}
                            deletionSpeed={65}
                            cursor={true}
                            repeat={Infinity}
                            wrapper="h1"
                            className="hero-title"
                        />
                        <TypeAnimation
                            sequence={[
                                "IT Student · Full-Stack Developer · Cyber Security",
                                2000,
                                "",
                                500,
                            ]}
                            speed={60}
                            deletionSpeed={70}
                            cursor={true}
                            repeat={Infinity}
                            className="hero-subtitle"
                        />
                        <p className="hero-desc">
                            Passionate about building secure, impactful applications and exploring emerging technologies. Pursuing a B.S. in Informatics (Cyber Security) at President University, Cikarang.
                        </p>
                        <div className="hero-actions">
                            <button onClick={() => handleScrollTo("projects")} className="btn-primary">
                                View My Work
                            </button>
                            <a href="/CV_Richard.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="Ricky_Richard_Takahindangen_Resume.pdf"
                                className="btn-outline"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                                Resume
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="hero-socials">
                            <a href="https://github.com/rickyrichard26" target="_blank" rel="noopener noreferrer" className="social-icon-btn flex-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/rickyrichardtakahindangen" target="_blank" rel="noopener noreferrer" className="social-icon-btn flex-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="mailto:takahindangenricky@gmail.com" className="social-icon-btn flex-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Avatar */}
                    <div className="avatar-placeholder">
                        <div className="avatar-frame">
                            <div className="avatar-glow"></div>

                            {/* Offset border frame (behind photo) */}
                            <div className="avatar-border-frame"></div>

                            {/* Photo */}
                            <div className="avatar-photo-wrap">
                                <Image
                                    src="/profile.png"
                                    alt="Ricky Richard"
                                    width={320}
                                    height={320}
                                    priority
                                    className="avatar-photo"
                                />
                            </div>

                            {/* Floating icon badges */}
                            <div className="badge badge-shield" title="Cyber Security">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                            </div>

                            <div className="badge badge-code" title="Full-Stack Developer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </div>

                            <div className="badge badge-terminal" title="IT Student">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M6 9l4 3-4 3" />
                                    <line x1="13" y1="15" x2="18" y2="15" />
                                </svg>
                            </div>

                            {/* Corner brackets, scan-frame motif */}
                            <span className="corner corner-tl"></span>
                            <span className="corner corner-br"></span>
                        </div>
                    </div>
                </div>

                <div className="scroll-down">
                    <span>SCROLL DOWN</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>
            </section>

            {/* ABOUT ME SECTION */}
            <section id="about" ref={sections.about} className="section-padding container">
                <span className="section-tag">01 — About Me</span>
                <h2 className="section-title">Professional Profile</h2>

                <div className="about-grid">
                    <div>
                        <p className="about-bio">
                            Informatics student at President University specializing in Cyber Security with strong focus on system security, vulnerability assessment, and ethical hacking. Experienced in using security tools and analyzing potential vulnerabilities in web applications. Highly motivated to strengthen cybersecurity skills and contribute to protecting digital systems and infrastructure.
                        </p>

                        <div className="education-card">
                            <div className="edu-header">
                                <div>
                                    <h3 className="edu-title">B.S. Informatics — Cyber Security</h3>
                                    <div className="edu-school">Expected Graduation: 2027</div>
                                </div>
                                <span className="edu-badge">2024 - Present</span>
                            </div>
                            <p className="edu-desc">
                                Relevant Courses: Digital Forensics, Ethical Hacking,
                                Cryptography Data Security, Security Risk Management Audit, Cyber Security Fundamentals.
                            </p>
                        </div>
                        <br></br>

                        <div className="info-list">
                            <div className="info-item">
                                <div className="info-icon-box">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <span>Cikarang, West Java, Indonesia</span>
                            </div>
                            <div className="info-item">
                                <div className="info-icon-box">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" />
                                    </svg>
                                </div>
                                <span>President University — Informatics (Cyber Security)</span>
                            </div>
                            <div className="info-item">
                                <div className="info-icon-box">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                </div>
                                <span>Available: Now (Internship)</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-right">
                        <div className="about-photo-frame">
                            {/* Tilted accent panel peeking out behind the photo */}
                            <div className="about-tilt-panel"></div>

                            {/* Photo with scanning line overlay */}
                            <div className="profile-photo-wrap">
                                <img src="/aboutme.jpeg" alt="Profile" className="profile-photo" />
                                <div className="scan-line"></div>
                            </div>

                            {/* ID-strip footer, like a badge/credential tag */}
                            <div className="about-id-strip">
                                <span className="about-id-dot"></span>
                                <span className="about-id-text">CYBER SECURITY · INFORMATICS</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats row now spans full width, horizontal, below everything */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-number">5+</div>
                        <div className="stat-label">Projects Built</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">7+</div>
                        <div className="stat-label">GitHub Commits</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">1+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">4+</div>
                        <div className="stat-label">Skills</div>
                    </div>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section id="skills" ref={sections.skills} className="section-padding container">
                <span className="section-tag">02 — Skills</span>
                <h2 className="section-title">Core Skills</h2>

                {/* ── Languages ── */}
                <div className="skills-block">
                    <div className="skills-block-header">
                        <div className="skills-block-title-row">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                            </svg>
                            <h3 className="skills-block-title">Programming Languages</h3>
                        </div>
                        <span className="skills-block-count">{languageSkills.length} languages</span>
                    </div>
                    <div className="skills-grid-pro">
                        {languageSkills.map((skill, index) => (
                            <div key={index} className="skill-card-pro">
                                <div className="skill-card-top">
                                    <div
                                        className="skill-icon-box"
                                        style={{
                                            background: skill.color + "18",
                                            border: `1px solid ${skill.color}30`,
                                            color: skill.color,
                                            fontSize: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {skill.icon}
                                    </div>
                                    <div className="skill-info">
                                        <div className="skill-name-row">
                                            <span className="skill-name-pro">{skill.name}</span>
                                            <span className="skill-pct" style={{ color: skill.color }}>{skill.percentage}%</span>
                                        </div>
                                        <span className="skill-level-label">{skill.level}</span>
                                    </div>
                                </div>
                                <div className="skill-bar-bg">
                                    <div className="skill-bar-fill" style={{ width: `${skill.percentage}%`, background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Frameworks & Tools ── */}
                <div className="skills-block">
                    <div className="skills-block-header">
                        <div className="skills-block-title-row">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                            </svg>
                            <h3 className="skills-block-title">Frameworks & Tools</h3>
                        </div>
                        <span className="skills-block-count">{frameworkSkills.length} tools</span>
                    </div>
                    <div className="skills-grid-pro">
                        {frameworkSkills.map((skill, index) => (
                            <div key={index} className="skill-card-pro">
                                <div className="skill-card-top">
                                    <div className="skill-icon-box" style={{ background: skill.color + "18", border: `1px solid ${skill.color}30` }}>
                                        <span style={{ fontSize: "18px" }}>{skill.icon}</span>
                                    </div>
                                    <div className="skill-info">
                                        <div className="skill-name-row">
                                            <span className="skill-name-pro">{skill.name}</span>
                                            <span className="skill-pct" style={{ color: skill.color }}>{skill.percentage}%</span>
                                        </div>
                                        <span className="skill-level-label">{skill.level}</span>
                                    </div>
                                </div>
                                <div className="skill-bar-bg">
                                    <div className="skill-bar-fill" style={{ width: `${skill.percentage}%`, background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Security Tools ── */}
                <div className="skills-block">
                    <div className="skills-block-header">
                        <div className="skills-block-title-row">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <h3 className="skills-block-title">Security & Forensics</h3>
                        </div>
                        <span className="skills-block-count">{securitySkills.length} tools</span>
                    </div>
                    <div className="skills-grid-pro">
                        {securitySkills.map((skill, index) => (
                            <div key={index} className="skill-card-pro">
                                <div className="skill-card-top">
                                    <div className="skill-icon-box" style={{ background: skill.color + "18", border: `1px solid ${skill.color}30` }}>
                                        <span style={{ fontSize: "18px" }}>{skill.icon}</span>
                                    </div>
                                    <div className="skill-info">
                                        <div className="skill-name-row">
                                            <span className="skill-name-pro">{skill.name}</span>
                                            <span className="skill-pct" style={{ color: skill.color }}>{skill.percentage}%</span>
                                        </div>
                                        <span className="skill-level-label">{skill.level}</span>
                                    </div>
                                </div>
                                <div className="skill-bar-bg">
                                    <div className="skill-bar-fill" style={{ width: `${skill.percentage}%`, background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section id="experience" ref={sections.experience} className="section-padding container">
                <span className="section-tag">Experience</span>
                <h2 className="section-title">My Professional Path</h2>

                <div className="exp-scroll-wrap">
                    <div className="exp-timeline">
                        {/* the connecting line */}
                        <div className="exp-line"></div>

                        {/* Entry 1 */}
                        <div className="exp-track">
                            <div className="exp-dot exp-dot-work">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <div className="exp-card">
                                <div className="exp-photo-wrap">
                                    <img src="/sms.jpeg" alt="PUSB" className="exp-photo" />
                                </div>
                                <div className="exp-card-body">
                                    <div className="exp-card-top-row">
                                        <div>
                                            <span className="exp-badge exp-badge-work">Organization</span>
                                            <span className="exp-date">2024 — 2025</span>
                                        </div>
                                        <button
                                            className={`exp-toggle-btn ${expandedExp["pusb"] ? "open" : ""}`}
                                            onClick={() => toggleExp("pusb")}
                                            aria-label="Toggle description"
                                            aria-expanded={expandedExp["pusb"] ? "true" : "false"}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                    </div>

                                    <h3 className="exp-role">Member of Social Media Specialist</h3>
                                    <div className="exp-org">President University Student Board (PUSB)</div>
                                    <div className="exp-location">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        President University, Cikarang
                                    </div>

                                    <div className={`exp-desc-wrap ${expandedExp["pusb"] ? "open" : ""}`}>
                                        <p className="exp-desc">
                                            Managed social media content and engagement strategy for the
                                            Student Board, coordinating campaigns and growing audience
                                            reach across university platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Entry 2 */}
                        <div className="exp-track">
                            <div className="exp-dot exp-dot-org">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <div className="exp-card">
                                <div className="exp-photo-wrap">
                                    <img src="/google.jpeg" alt="Workshop AI Agent" className="exp-photo" />
                                </div>
                                <div className="exp-card-body">
                                    <div className="exp-card-top-row">
                                        <div>
                                            <span className="exp-badge exp-badge-org">Workshop</span>
                                            <span className="exp-date">July 2025</span>
                                        </div>
                                        <button
                                            className={`exp-toggle-btn ${expandedExp["google-workshop"] ? "open" : ""}`}
                                            onClick={() => toggleExp("google-workshop")}
                                            aria-label="Toggle description"
                                            aria-expanded={expandedExp["google-workshop"] ? "true" : "false"}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                    </div>

                                    <h3 className="exp-role">AI-Agent Workshop | Google Singapore</h3>
                                    <div className="exp-org">Delegates of LeadersID</div>
                                    <div className="exp-location">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        Google, Singapore
                                    </div>

                                    <div className={`exp-desc-wrap ${expandedExp["google-workshop"] ? "open" : ""}`}>
                                        <p className="exp-desc">
                                            Selected as a delegate to attend an immersive AI-agent workshop hosted
                                            at Google's Singapore office, exploring agentic AI design patterns
                                            and hands-on prototyping alongside fellow LeadersID delegates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Entry 3 */}
                        <div className="exp-track">
                            <div className="exp-dot exp-dot-cert">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="8" r="6" />
                                    <path d="M9 13.5L7 22l5-3 5 3-2-8.5" />
                                </svg>
                            </div>
                            <div className="exp-card">
                                <div className="exp-photo-wrap">
                                    <img src="/nus.jpeg" alt="University Visit" className="exp-photo" />
                                </div>
                                <div className="exp-card-body">
                                    <div className="exp-card-top-row">
                                        <div>
                                            <span className="exp-badge exp-badge-cert">Awardee</span>
                                            <span className="exp-date">July 2025</span>
                                        </div>
                                        <button
                                            className={`exp-toggle-btn ${expandedExp["nus-visit"] ? "open" : ""}`}
                                            onClick={() => toggleExp("nus-visit")}
                                            aria-label="Toggle description"
                                            aria-expanded={expandedExp["nus-visit"] ? "true" : "false"}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                    </div>

                                    <h3 className="exp-role">National University of Singapore Visit</h3>
                                    <div className="exp-org">Delegates of LeadersID</div>
                                    <div className="exp-location">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        National University of Singapore, Singapore
                                    </div>

                                    <div className={`exp-desc-wrap ${expandedExp["nus-visit"] ? "open" : ""}`}>
                                        <p className="exp-desc">
                                            Visited the National University of Singapore as part of a
                                            LeadersID delegation, engaging with faculty and students to
                                            explore academic culture and innovation initiatives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Entry 4 */}
                        <div className="exp-track">
                            <div className="exp-dot exp-dot-cert">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="8" r="6" />
                                    <path d="M9 13.5L7 22l5-3 5 3-2-8.5" />
                                </svg>
                            </div>
                            <div className="exp-card">
                                <div className="exp-photo-wrap">
                                    <img src="/malaya.jpeg" alt="University Visit" className="exp-photo" />
                                </div>
                                <div className="exp-card-body">
                                    <div className="exp-card-top-row">
                                        <div>
                                            <span className="exp-badge exp-badge-cert">Awardee</span>
                                            <span className="exp-date">July 2025</span>
                                        </div>
                                        <button
                                            className={`exp-toggle-btn ${expandedExp["malaya-visit"] ? "open" : ""}`}
                                            onClick={() => toggleExp("malaya-visit")}
                                            aria-label="Toggle description"
                                            aria-expanded={expandedExp["malaya-visit"] ? "true" : "false"}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                    </div>

                                    <h3 className="exp-role">University of Malaya Visit</h3>
                                    <div className="exp-org">Delegates of LeadersID</div>
                                    <div className="exp-location">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        University of Malaya, Kuala Lumpur
                                    </div>

                                    <div className={`exp-desc-wrap ${expandedExp["malaya-visit"] ? "open" : ""}`}>
                                        <p className="exp-desc">
                                            Joined a LeadersID delegation visit to the University of
                                            Malaya, exchanging perspectives with local students and
                                            exploring cross-border collaboration opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Entry 5 */}
                        <div className="exp-track">
                            <div className="exp-dot exp-dot-cert">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="8" r="6" />
                                    <path d="M9 13.5L7 22l5-3 5 3-2-8.5" />
                                </svg>
                            </div>
                            <div className="exp-card">
                                <div className="exp-photo-wrap">
                                    <img src="/comvis.jpeg" alt="University Visit" className="exp-photo" />
                                </div>
                                <div className="exp-card-body">
                                    <div className="exp-card-top-row">
                                        <div>
                                            <span className="exp-badge exp-badge-cert">Organization</span>
                                            <span className="exp-date">July 2025</span>
                                        </div>
                                        <button
                                            className={`exp-toggle-btn ${expandedExp["ajinomoto-visit"] ? "open" : ""}`}
                                            onClick={() => toggleExp("ajinomoto-visit")}
                                            aria-label="Toggle description"
                                            aria-expanded={expandedExp["ajinomoto-visit"] ? "true" : "false"}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                    </div>

                                    <h3 className="exp-role">Company Visit to PT. Ajinomoto Indonesia</h3>
                                    <div className="exp-org">President University Student Board</div>
                                    <div className="exp-location">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        Karawang, West Java
                                    </div>

                                    <div className={`exp-desc-wrap ${expandedExp["ajinomoto-visit"] ? "open" : ""}`}>
                                        <p className="exp-desc">
                                            Took part in an organized company visit to PT. Ajinomoto
                                            Indonesia's facility, learning about industrial production
                                            processes and corporate operations firsthand.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Entry 6 */}
                        <div className="exp-track">
                            <div className="exp-dot exp-dot-work">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <div className="exp-card">
                                <div className="exp-photo-wrap">
                                    <img src="/hackathon.jpeg" alt="Hackathon Committee" className="exp-photo" />
                                </div>
                                <div className="exp-card-body">
                                    <div className="exp-card-top-row">
                                        <div>
                                            <span className="exp-badge exp-badge-work">Organization</span>
                                            <span className="exp-date">May 2025 — Oct 2025</span>
                                        </div>
                                        <button
                                            className={`exp-toggle-btn ${expandedExp["hackathon"] ? "open" : ""}`}
                                            onClick={() => toggleExp("hackathon")}
                                            aria-label="Toggle description"
                                            aria-expanded={expandedExp["hackathon"] ? "true" : "false"}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                    </div>

                                    <h3 className="exp-role">Member of Hackathon</h3>
                                    <div className="exp-org">COMPSPHERE</div>
                                    <div className="exp-location">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        North Cikarang, West Java, Indonesia
                                    </div>

                                    <div className={`exp-desc-wrap ${expandedExp["hackathon"] ? "open" : ""}`}>
                                        <p className="exp-desc">
                                            Organized and supported Hackathon 2025 as part of the Hackathon
                                            Division Committee, coordinating schedules and technical
                                            requirements to keep the competition running smoothly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Entry 7 */}
                        <div className="exp-track">
                            <div className="exp-dot exp-dot-org">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <div className="exp-card">
                                <div className="exp-photo-wrap">
                                    <img src="/umn.jpeg" alt="PUSB x BEM UMN" className="exp-photo" />
                                </div>
                                <div className="exp-card-body">
                                    <div className="exp-card-top-row">
                                        <div>
                                            <span className="exp-badge exp-badge-org">Organization</span>
                                            <span className="exp-date">Jan 2025 — May 2025</span>
                                        </div>
                                        <button
                                            className={`exp-toggle-btn ${expandedExp["comparative-study"] ? "open" : ""}`}
                                            onClick={() => toggleExp("comparative-study")}
                                            aria-label="Toggle description"
                                            aria-expanded={expandedExp["comparative-study"] ? "true" : "false"}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                    </div>

                                    <h3 className="exp-role">Comparative Study</h3>
                                    <div className="exp-org">PUSB x BEM UMN</div>
                                    <div className="exp-location">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        Jakarta, Indonesia
                                    </div>

                                    <div className={`exp-desc-wrap ${expandedExp["comparative-study"] ? "open" : ""}`}>
                                        <p className="exp-desc">
                                            Collaborated as part of the PR Internal team, creating broadcasting
                                            content and live reports to strengthen audience engagement
                                            throughout the Comparative Study event.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Entry 8 */}
                        <div className="exp-track">
                            <div className="exp-dot exp-dot-org">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M3 9h18M9 21V9" />
                                </svg>
                            </div>
                            <div className="exp-card">
                                <div className="exp-photo-wrap">
                                    <img src="/mrms.jpeg" alt="Mr. & Ms. PresUniv Committee" className="exp-photo" />
                                </div>
                                <div className="exp-card-body">
                                    <div className="exp-card-top-row">
                                        <div>
                                            <span className="exp-badge exp-badge-org">Organization</span>
                                            <span className="exp-date">Jan 2025 — May 2025</span>
                                        </div>
                                        <button
                                            className={`exp-toggle-btn ${expandedExp["ticketing-marketing"] ? "open" : ""}`}
                                            onClick={() => toggleExp("ticketing-marketing")}
                                            aria-label="Toggle description"
                                            aria-expanded={expandedExp["ticketing-marketing"] ? "true" : "false"}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                    </div>

                                    <h3 className="exp-role">Ticketing &amp; Marketing</h3>
                                    <div className="exp-org">President University</div>
                                    <div className="exp-location">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        North Cikarang, West Java, Indonesia
                                    </div>

                                    <div className={`exp-desc-wrap ${expandedExp["ticketing-marketing"] ? "open" : ""}`}>
                                        <p className="exp-desc">
                                            Promoted and sold tickets for the Mr. &amp; Ms. PresUniv 2025 event,
                                            creating engaging content and building marketing skills in
                                            content strategy and ticket sales management.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" ref={sections.projects} className="section-padding container">
                <span className="section-tag">03 — Projects</span>
                <h2 className="section-title">Project Showcase</h2>

                {/* Filter buttons — updated categories */}
                <div className="projects-controls">
                    {["all", "web app", "security", "mobile", "forensics"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setProjectFilter(category)}
                            className={`filter-btn ${projectFilter === category ? "active" : ""}`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Projects card grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            {/* Project image or icon fallback */}
                            <div className="project-visual" style={{ position: "relative", overflow: "hidden" }}>
                                {project.image ? (
                                    <div className="project-image-wrapper">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={400}
                                            height={200}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                objectPosition: "top",
                                            }}
                                            onError={(e) => {
                                                // If image fails to load, hide it and show icon fallback
                                                e.currentTarget.style.display = "none";
                                                e.currentTarget.nextElementSibling.style.display = "flex";
                                            }}
                                        />
                                        {/* Icon fallback (hidden by default, shown if image errors) */}
                                        <div className="project-icon-fallback" style={{ display: "none" }}>
                                            {project.icon}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="project-icon-wrapper">
                                        {project.icon}
                                    </div>
                                )}

                                <div className={`project-tag ${project.category.replace(/\s/g, "")}`}>
                                    {project.category}
                                </div>
                                <div className="project-star">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    {project.star}
                                </div>
                            </div>

                            <div className="project-body">
                                <div className="project-header-row">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-year">{project.year}</span>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="tech-tag">{t}</span>
                                    ))}
                                </div>

                                {/* GitHub & Live links */}
                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link-btn"
                                        >
                                            <GitHubIcon />
                                            GitHub
                                        </a>
                                    )}

                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link-btn project-link-live"
                                        >
                                            <ExternalLinkIcon />
                                            View
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" ref={sections.contact} className="section-padding container">
                <span className="section-tag">04 — Contact</span>
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-grid">
                    {/* Info Card */}
                    <div className="contact-info">
                        <div className="contact-card">
                            <h3 className="contact-title">Let's Connect</h3>
                            <p className="contact-desc">
                                If you have an opportunity, a project to collaborate on, or just want to chat about cybersecurity and development, feel free to drop a message.
                            </p>
                            <div className="contact-details">
                                <div className="contact-detail-item">
                                    <div className="info-icon-box">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <a href="mailto:takahindangenricky@gmail.com">takahindangenricky@gmail.com</a>
                                </div>
                                <div className="contact-detail-item">
                                    <div className="info-icon-box">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </div>
                                    <a href="https://www.linkedin.com/in/rickyrichardtakahindangen" target="_blank" rel="noopener noreferrer">
                                        Ricky Richard Takahindangen
                                    </a>
                                </div>
                                <div className="contact-detail-item">
                                    <div className="info-icon-box">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <span>President University, Cikarang, Indonesia</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        {formStatus === "success" ? (
                            <div className="submit-success-msg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        placeholder="Enter subject"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        placeholder="Write your message here..."
                                        required
                                    />
                                </div>

                                {/* ── Human Verify Checkbox ── */}
                                <div className={`captcha-checkbox-group ${humanError ? "captcha-checkbox-error" : ""}`}>
                                    <label className="captcha-checkbox-label" onClick={() => { setIsHuman(!isHuman); setHumanError(false); }}>
                                        <div className={`captcha-custom-checkbox ${isHuman ? "checked" : ""}`}>
                                            {isHuman && (
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                        </div>
                                        <span>I&apos;m not a robot</span>
                                        <svg className="captcha-robot-icon" width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            {/* Top-left blue arrow */}
                                            <path
                                                d="M12 20 C12 14, 18 8, 26 8 L26 4 L34 12 L26 20 L26 16 C20 16, 16 20, 16 26"
                                                fill="#4A90D9"
                                            />
                                            {/* Bottom-right grey arrow */}
                                            <path
                                                d="M52 44 C52 50, 46 56, 38 56 L38 60 L30 52 L38 44 L38 48 C44 48, 48 44, 48 38"
                                                fill="#9E9E9E"
                                            />
                                            {/* Top-right blue arrow */}
                                            <path
                                                d="M44 12 C50 12, 56 18, 56 26 L60 26 L52 34 L44 26 L48 26 C48 20, 44 16, 38 16"
                                                fill="#1565C0"
                                            />
                                            {/* Bottom-left grey arrow */}
                                            <path
                                                d="M20 52 C14 52, 8 46, 8 38 L4 38 L12 30 L20 38 L16 38 C16 44, 20 48, 26 48"
                                                fill="#757575"
                                            />
                                        </svg>
                                    </label>
                                    {humanError && (
                                        <p className="captcha-error-msg" style={{ marginTop: "8px" }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="12" y1="8" x2="12" y2="12" />
                                                <line x1="12" y1="16" x2="12.01" y2="16" />
                                            </svg>
                                            Please confirm you&apos;re not a robot before sending.
                                        </p>
                                    )}
                                </div>

                                <button type="submit" className="btn-submit" disabled={formStatus === "submitting"}>
                                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-logo logo">
                        <div className="logo-icon flex-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white" }}>{"</>"}</div>
                        <span>RRT</span>
                    </div>
                    <p>© {new Date().getFullYear()} Ricky Richard Takahindangen. All rights reserved.</p>
                    <p className="footer-tech">Built with React, Next.js &amp; TypeScript.</p>
                </div>
            </footer>
        </div>
    );
}

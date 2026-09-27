import { createFileRoute } from "@tanstack/react-router";
import {
  useEffect,
  useState,
  useRef,
  type FormEvent,
  useCallback,
} from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Brain,
  Cpu,
  Cloud,
  ShieldCheck,
  Globe,
  BarChart3,
  Wifi,
  Zap,
  Rocket,
  Target,
  Users,
  TrendingUp,
  Layers,
  Lock,
  Code2,
  Database,
  Settings,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Youtube,
  Send,
  CheckCircle2,
  Award,
  Clock,
  Headphones,
  ChevronRight,
  Activity,
  Network,
  Eye,
  Sparkles,
  MonitorSmartphone,
  ServerCog,
  Bot,
  Radio,
  ShieldAlert,
  Server,
  Workflow,
  RadioTower,
  LineChart,
} from "lucide-react";
import { sendContactMessage } from "@/lib/contact.functions";

import heroImage from "@/assets/nexora-hero.jpg";
import aiImage from "@/assets/project-ai.jpg";
import securityImage from "@/assets/project-security.jpg";
import labImage from "@/assets/community-lab.jpg";
import cloudImage from "@/assets/project-water.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora — Futuristic Technology Platform" },
      {
        name: "description",
        content:
          "Nexora delivers enterprise-grade AI, cloud infrastructure, cybersecurity, and digital transformation solutions engineered for tomorrow.",
      },
      { property: "og:title", content: "Nexora — Futuristic Technology Platform" },
      {
        property: "og:description",
        content:
          "Powering the future with AI, Cloud, Cybersecurity, and next-generation technology solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

/* ------------------------------------------------------------------ */
/* NAVIGATION CONFIG                                                  */
/* ------------------------------------------------------------------ */
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Why Nexora", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* SVG EMBEDDED GRAPHICS FOR TECHNOLOGY TILES                         */
/* ------------------------------------------------------------------ */
function NeuralNetworkSvg() {
  return (
    <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <line x1="30" y1="40" x2="90" y2="20" stroke="url(#aiGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="30" y1="40" x2="90" y2="60" stroke="url(#aiGrad)" strokeWidth="1.5" />
      <line x1="90" y1="20" x2="150" y2="30" stroke="url(#aiGrad)" strokeWidth="1.5" />
      <line x1="90" y1="60" x2="150" y2="50" stroke="url(#aiGrad)" strokeWidth="1.5" strokeDasharray="4 2" />
      <line x1="90" y1="20" x2="150" y2="50" stroke="url(#aiGrad)" strokeWidth="1" opacity="0.4" />
      <line x1="90" y1="60" x2="150" y2="30" stroke="url(#aiGrad)" strokeWidth="1" opacity="0.4" />
      <line x1="150" y1="30" x2="210" y2="18" stroke="url(#aiGrad)" strokeWidth="1.5" />
      <line x1="150" y1="50" x2="210" y2="62" stroke="url(#aiGrad)" strokeWidth="1.5" />
      <line x1="210" y1="18" x2="260" y2="40" stroke="url(#aiGrad)" strokeWidth="2" />
      <line x1="210" y1="62" x2="260" y2="40" stroke="url(#aiGrad)" strokeWidth="2" />
      {/* Nodes */}
      <circle cx="30" cy="40" r="5" fill="#00f0ff" />
      <circle cx="90" cy="20" r="4.5" fill="#3b82f6" />
      <circle cx="90" cy="60" r="4.5" fill="#3b82f6" />
      <circle cx="150" cy="30" r="6" fill="#00f0ff" stroke="#fff" strokeWidth="1.5" />
      <circle cx="150" cy="50" r="5" fill="#3b82f6" />
      <circle cx="210" cy="18" r="4.5" fill="#00f0ff" />
      <circle cx="210" cy="62" r="4.5" fill="#3b82f6" />
      <circle cx="260" cy="40" r="7" fill="#00f0ff" stroke="#fff" strokeWidth="2" />
      <circle cx="260" cy="40" r="14" stroke="#00f0ff" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function MachineLearningSvg() {
  return (
    <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="mlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      {/* Central Chip */}
      <rect x="115" y="20" width="50" height="40" rx="6" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="1.5" />
      <rect x="125" y="30" width="30" height="20" rx="3" fill="#a855f7" opacity="0.4" />
      {/* Circuit lines */}
      <path d="M40 30 H115" stroke="url(#mlGrad)" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d="M40 50 H115" stroke="url(#mlGrad)" strokeWidth="1.5" />
      <path d="M165 30 H240" stroke="url(#mlGrad)" strokeWidth="1.5" />
      <path d="M165 50 H240" stroke="url(#mlGrad)" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d="M140 5 V20" stroke="#a855f7" strokeWidth="1.5" />
      <path d="M140 60 V75" stroke="#a855f7" strokeWidth="1.5" />
      <circle cx="40" cy="30" r="3.5" fill="#ec4899" />
      <circle cx="40" cy="50" r="3.5" fill="#a855f7" />
      <circle cx="240" cy="30" r="3.5" fill="#a855f7" />
      <circle cx="240" cy="50" r="3.5" fill="#ec4899" />
    </svg>
  );
}

function CloudNetworkSvg() {
  return (
    <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M110 45 C105 35 120 20 140 25 C145 15 165 15 175 25 C190 25 195 38 185 45 C195 55 180 65 170 65 H115 C100 65 95 55 110 45 Z" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="1.5" />
      <line x1="50" y1="45" x2="105" y2="45" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="185" y1="45" x2="235" y2="45" stroke="#00f0ff" strokeWidth="1.5" />
      <line x1="140" y1="65" x2="140" y2="75" stroke="#3b82f6" strokeWidth="1.5" />
      <rect x="40" y="38" width="14" height="14" rx="3" fill="#3b82f6" />
      <rect x="230" y="38" width="14" height="14" rx="3" fill="#00f0ff" />
      <circle cx="140" cy="42" r="4" fill="#00f0ff" />
    </svg>
  );
}

function CyberShieldSvg() {
  return (
    <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M140 15 L170 25 V45 C170 58 140 70 140 70 C140 70 110 58 110 45 V25 L140 15 Z" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1.5" />
      <circle cx="140" cy="40" r="7" stroke="#10b981" strokeWidth="1.5" />
      <circle cx="140" cy="40" r="3" fill="#10b981" />
      <line x1="60" y1="42" x2="110" y2="42" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="170" y1="42" x2="220" y2="42" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2" />
      <circle cx="60" cy="42" r="3" fill="#10b981" />
      <circle cx="220" cy="42" r="3" fill="#10b981" />
    </svg>
  );
}

function WebDevSvg() {
  return (
    <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="80" y="15" width="120" height="52" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1.5" />
      <line x1="80" y1="28" x2="200" y2="28" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
      <circle cx="90" cy="21" r="2.5" fill="#f59e0b" />
      <circle cx="97" cy="21" r="2.5" fill="#f59e0b" opacity="0.6" />
      <circle cx="104" cy="21" r="2.5" fill="#f59e0b" opacity="0.3" />
      <line x1="95" y1="38" x2="140" y2="38" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      <line x1="95" y1="46" x2="175" y2="46" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="95" y1="54" x2="125" y2="54" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

function DataAnalyticsSvg() {
  return (
    <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M50 65 L85 45 L120 52 L160 25 L200 38 L235 18" stroke="#ec4899" strokeWidth="2" fill="none" />
      <path d="M50 65 L85 45 L120 52 L160 25 L200 38 L235 18 V65 H50 Z" fill="url(#chartGrad)" />
      <circle cx="85" cy="45" r="3" fill="#ec4899" />
      <circle cx="160" cy="25" r="3.5" fill="#fff" stroke="#ec4899" strokeWidth="1.5" />
      <circle cx="235" cy="18" r="4" fill="#ec4899" />
      <line x1="45" y1="65" x2="245" y2="65" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    </svg>
  );
}

function IoTMeshSvg() {
  return (
    <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="140" cy="40" r="12" stroke="#f97316" strokeWidth="1.5" opacity="0.8" />
      <circle cx="140" cy="40" r="24" stroke="#f97316" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="140" cy="40" r="36" stroke="#f97316" strokeWidth="1" opacity="0.3" />
      <circle cx="140" cy="40" r="5" fill="#f97316" />
      <circle cx="70" cy="30" r="4" fill="#f97316" />
      <line x1="70" y1="30" x2="140" y2="40" stroke="#f97316" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
      <circle cx="210" cy="50" r="4" fill="#f97316" />
      <line x1="210" y1="50" x2="140" y2="40" stroke="#f97316" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
    </svg>
  );
}

function AutomationPipelineSvg() {
  return (
    <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M60 40 H110 L130 25 H160 L180 40 H220" stroke="#6366f1" strokeWidth="2" strokeDasharray="5 3" />
      <path d="M110 40 L130 55 H160 L180 40" stroke="#6366f1" strokeWidth="2" opacity="0.5" />
      <circle cx="60" cy="40" r="5" fill="#6366f1" />
      <circle cx="145" cy="25" r="5" fill="#6366f1" stroke="#fff" strokeWidth="1.5" />
      <circle cx="145" cy="55" r="4" fill="#6366f1" />
      <circle cx="220" cy="40" r="6" fill="#6366f1" />
    </svg>
  );
}

function WorldNetworkSvg() {
  return (
    <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="200" cy="60" rx="180" ry="50" stroke="rgba(0,240,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
      <ellipse cx="200" cy="60" rx="140" ry="35" stroke="rgba(0,240,255,0.2)" strokeWidth="1" />
      {/* Node clusters */}
      <line x1="80" y1="50" x2="160" y2="40" stroke="#00f0ff" strokeWidth="1.5" opacity="0.6" />
      <line x1="160" y1="40" x2="240" y2="45" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
      <line x1="240" y1="45" x2="310" y2="65" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />
      <line x1="160" y1="40" x2="200" y2="75" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      {/* Dots */}
      <circle cx="80" cy="50" r="4.5" fill="#00f0ff" />
      <circle cx="160" cy="40" r="6" fill="#00f0ff" stroke="#fff" strokeWidth="1.5" />
      <circle cx="240" cy="45" r="5" fill="#3b82f6" />
      <circle cx="310" cy="65" r="4.5" fill="#a855f7" />
      <circle cx="200" cy="75" r="4" fill="#10b981" />
      {/* Pulse wave on central node */}
      <circle cx="160" cy="40" r="14" stroke="#00f0ff" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* BRAND LOGO COMPONENT                                               */
/* ------------------------------------------------------------------ */
function NexoraLogo() {
  return (
    <a href="#home" className="nx-logo" aria-label="Nexora Homepage">
      <span className="nx-logo-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </span>
      <span className="nx-logo-text">
        NEX<span>ORA</span>
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* NAVBAR COMPONENT                                                   */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nx-header${scrolled || open ? " scrolled" : ""}`} role="banner">
      <div className="nx-container">
        <div className="nx-nav-inner">
          <NexoraLogo />

          <nav className="nx-desktop-nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={active === link.href.replace("#", "") ? "active" : ""}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nx-nav-cta" aria-label="Get started with Nexora">
            Get Started <ArrowUpRight size={15} />
          </a>

          <button
            className="nx-menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nx-mobile-nav" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <ChevronRight size={16} />
            </a>
          ))}
          <a
            href="#contact"
            className="nx-nav-cta"
            onClick={() => setOpen(false)}
            style={{ marginTop: 20, textAlign: "center", justifyContent: "center" }}
          >
            Get Started <ArrowUpRight size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* ANIMATED METRIC COUNTER                                             */
/* ------------------------------------------------------------------ */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(value);
          observer.disconnect();
          return;
        }
        const start = performance.now();
        let frame = 0;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1200, 1);
          setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
        return () => cancelAnimationFrame(frame);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 1: HERO                                                    */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="home" className="nx-hero">
      {/* Background visual layers */}
      <div className="nx-cyber-grid" aria-hidden="true" />
      <div className="nx-cyber-dots" aria-hidden="true" />
      <div className="nx-ambient-glow nx-hero-glow-cyan" aria-hidden="true" />
      <div className="nx-ambient-glow nx-hero-glow-purple" aria-hidden="true" />
      <div className="nx-ambient-glow nx-hero-glow-blue" aria-hidden="true" />

      <div className="nx-container">
        <div className="nx-hero-grid">
          {/* Left Hero Content */}
          <div className="nx-hero-copy">
            <div className="nx-hero-badge">
              <span className="nx-eyebrow-dot" />
              NEXORA QUANTUM PLATFORM • V3.8
            </div>

            <h1>
              Architecting the <br />
              <span className="gradient-text">Futuristic Horizon</span>
            </h1>

            <p className="nx-hero-subtitle">
              Nexora powers next-generation enterprises with autonomous AI systems, resilient hyper-scale cloud architectures, zero-trust cybersecurity, and deep predictive intelligence.
            </p>

            <div className="nx-hero-actions">
              <a href="#solutions" className="nx-btn-glow">
                Explore Platform <ArrowUpRight size={17} />
              </a>
              <a href="#contact" className="nx-btn-glass">
                Schedule Architecture Review <ArrowRight size={17} />
              </a>
            </div>

            <div className="nx-hero-trust">
              <div className="nx-trust-item">
                <CheckCircle2 size={15} /> SOC2 Type II Certified
              </div>
              <div className="nx-trust-item">
                <ShieldCheck size={15} /> ISO 27001 Compliant
              </div>
              <div className="nx-trust-item">
                <Zap size={15} /> 99.99% Mission-Critical SLA
              </div>
            </div>
          </div>

          {/* Right Hero Visual Showcase */}
          <div className="nx-hero-stage" aria-hidden="true">
            <div className="nx-hero-viewport">
              <img
                src={heroImage}
                alt="Nexora Futuristic Quantum Platform Visual"
                className="nx-hero-viewport-img"
                width={1792}
                height={1024}
                fetchPriority="high"
              />
              <div className="nx-viewport-overlay" />
              <div className="nx-viewport-scanline" />

              {/* HUD Reticle Corners */}
              <div className="nx-hud-corner-tl" />
              <div className="nx-hud-corner-tr" />
              <div className="nx-hud-corner-bl" />
              <div className="nx-hud-corner-br" />
            </div>

            {/* Floating Telemetry Card 1 */}
            <div className="nx-float-card-1">
              <div className="nx-float-icon">
                <Activity size={20} />
              </div>
              <div className="nx-float-text">
                <strong>Neural Engine Active</strong>
                <span>4.2ms Inference Latency</span>
              </div>
            </div>

            {/* Floating Telemetry Card 2 */}
            <div className="nx-float-card-2">
              <div className="nx-float-icon nx-float-icon-purple">
                <ShieldCheck size={20} />
              </div>
              <div className="nx-float-text">
                <strong>Zero-Trust Shield</strong>
                <span>100% Threat Defense Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* METRICS BANNER                                                     */
/* ------------------------------------------------------------------ */
const metricsData = [
  { value: 500, suffix: "+", label: "Global Enterprise Clients" },
  { value: 99.99, suffix: "%", label: "Guaranteed SLA Uptime" },
  { value: 12, suffix: "+", label: "Years of Deep Tech Innovation" },
  { value: 24, suffix: "/7", label: "Real-Time AI Threat Monitoring" },
];

function MetricsStrip() {
  return (
    <section className="nx-metrics-strip" aria-label="Key Platform Metrics">
      <div className="nx-container">
        <div className="nx-metrics-grid">
          {metricsData.map(({ value, suffix, label }) => (
            <div className="nx-metric-box reveal" key={label}>
              <div className="nx-metric-num">
                <AnimatedCounter value={value} suffix={suffix} />
              </div>
              <div className="nx-metric-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 2: TECHNOLOGIES (8 UNIQUE CARDS WITH GRAPHIC HEADERS)     */
/* ------------------------------------------------------------------ */
const techCards = [
  {
    icon: Brain,
    code: "NODE-01 // AI",
    title: "Artificial Intelligence",
    desc: "Autonomous neural reasoning, natural language comprehension, and multi-modal generative models engineered for enterprise production workflows.",
    status: "Neural Core Active",
    graphic: NeuralNetworkSvg,
    cls: "tech-ai",
  },
  {
    icon: Cpu,
    code: "NODE-02 // ML",
    title: "Machine Learning",
    desc: "Continuous automated training pipelines, deep neural architectures, and edge inference with real-time adaptive weights.",
    status: "99.4% Accuracy",
    graphic: MachineLearningSvg,
    cls: "tech-ml",
  },
  {
    icon: Cloud,
    code: "NODE-03 // CL",
    title: "Cloud Computing",
    desc: "Elastic, multi-region distributed compute fabrics built across AWS, Azure, and GCP with automated zero-touch failover.",
    status: "Global Mesh Active",
    graphic: CloudNetworkSvg,
    cls: "tech-cloud",
  },
  {
    icon: ShieldAlert,
    code: "NODE-04 // CY",
    title: "Cybersecurity",
    desc: "Post-quantum cryptographic defense, continuous automated red teaming, and autonomous AI-driven anomaly neutralization.",
    status: "Zero-Trust Guarded",
    graphic: CyberShieldSvg,
    cls: "tech-sec",
  },
  {
    icon: Code2,
    code: "NODE-05 // WB",
    title: "Web Development",
    desc: "Ultra-fast distributed edge applications, sub-millisecond API meshes, and resilient micro-frontend ecosystems.",
    status: "Edge Runtime 60fps",
    graphic: WebDevSvg,
    cls: "tech-web",
  },
  {
    icon: BarChart3,
    code: "NODE-06 // DA",
    title: "Data Analytics",
    desc: "Sub-second analytical queries over petabyte-scale lakehouses, real-time telemetry streaming, and predictive visualization.",
    status: "Telemetry Live",
    graphic: DataAnalyticsSvg,
    cls: "tech-data",
  },
  {
    icon: Radio,
    code: "NODE-07 // IO",
    title: "Internet of Things",
    desc: "Intelligent industrial device meshes, edge micro-compute nodes, and high-throughput real-time telemetry streaming.",
    status: "4.8M Nodes Synced",
    graphic: IoTMeshSvg,
    cls: "tech-iot",
  },
  {
    icon: Bot,
    code: "NODE-08 // AU",
    title: "Automation",
    desc: "Cognitive robotic process automation, self-healing DevOps infrastructure, and autonomous event-driven microservices.",
    status: "Zero-Human Loop",
    graphic: AutomationPipelineSvg,
    cls: "tech-auto",
  },
];

function Technologies() {
  return (
    <section id="technologies" className="nx-tech-section nx-section">
      <div className="nx-cyber-grid" aria-hidden="true" />
      <div className="nx-container">
        <div className="nx-section-header reveal">
          <p className="nx-eyebrow">
            <span className="nx-eyebrow-dot" /> Core Technologies
          </p>
          <h2 className="nx-section-title">
            Engineered with <span className="gradient-text">Next-Gen Tech</span>
          </h2>
          <p className="nx-section-desc">
            Nexora synchronizes eight foundational pillars of modern computing into an integrated, frictionless technology ecosystem.
          </p>
        </div>

        <div className="nx-tech-grid">
          {techCards.map(({ icon: Icon, code, title, desc, status, graphic: Graphic, cls }, i) => (
            <article
              key={title}
              className={`nx-tech-tile ${cls} reveal reveal-delay-${(i % 4) + 1}`}
            >
              {/* Visual Graphic Header */}
              <div className="nx-tech-tile-graphic">
                <Graphic />
              </div>

              <div className="nx-tech-tile-body">
                <div>
                  <div className="nx-tech-tile-top">
                    <div className="nx-tech-badge-icon">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <span className="nx-tech-badge-code">{code}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>

                <div className="nx-tech-tile-footer">
                  <span className="nx-tech-status">
                    <span className="nx-status-led" />
                    {status}
                  </span>
                  <span className="nx-tech-arrow">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 3: SOLUTIONS (MEDIA-RICH WITH REAL ASSETS)                 */
/* ------------------------------------------------------------------ */
const solutionsList = [
  {
    image: labImage,
    badge: "Enterprise Modernization",
    title: "End-to-End Digital Transformation",
    desc: "Migrate legacy monoliths into distributed microservices and cloud-native fabrics without operational disruption. Our verified methodologies reduce migration overhead by 60% while accelerating feature deployment velocity.",
    metrics: ["85% Faster Deployment", "Zero Downtime Guarantee", "Cloud-Native Scale"],
  },
  {
    image: aiImage,
    badge: "Cognitive Intelligence",
    title: "AI-Powered Autonomous Intelligence",
    desc: "Embed private, custom-trained neural networks directly into production systems. From predictive churn modeling to generative document intelligence, we transform passive data into active, high-impact business decisions.",
    metrics: ["4.2ms Model Latency", "99.4% Decision Accuracy", "Enterprise Data Privacy"],
  },
  {
    image: securityImage,
    badge: "Zero-Trust Architecture",
    title: "Post-Quantum Enterprise Security",
    desc: "Shield critical digital assets against sophisticated threats. We architect end-to-end zero-trust networks with automated continuous verification, runtime threat neutralization, and compliance governance.",
    metrics: ["Continuous Red Teaming", "SOC2 & ISO Compliant", "Quantum-Safe Encryption"],
  },
  {
    image: cloudImage,
    badge: "High-Scale Infrastructure",
    title: "Resilient Multi-Cloud Scalability",
    desc: "Deliver high performance to millions of concurrent users worldwide. Our multi-cloud distributed networks dynamically route workloads, absorb traffic spikes, and optimize server compute costs in real time.",
    metrics: ["Multi-Region Mesh", "Sub-15ms Global Latency", "40% Lower Compute Costs"],
  },
];

function Solutions() {
  return (
    <section id="solutions" className="nx-solutions-section nx-section">
      <div className="nx-cyber-dots" aria-hidden="true" />
      <div className="nx-container">
        <div className="nx-section-header reveal">
          <p className="nx-eyebrow">
            <span className="nx-eyebrow-dot" /> Tailored Solutions
          </p>
          <h2 className="nx-section-title">
            Solving Complex <span className="gradient-text">Business Challenges</span>
          </h2>
          <p className="nx-section-desc">
            We partner with enterprises to overcome structural technological bottlenecks through proven architecture and rigorous engineering.
          </p>
        </div>

        <div className="nx-solutions-grid">
          {solutionsList.map((sol, i) => (
            <article
              key={sol.title}
              className={`nx-solution-card reveal reveal-delay-${(i % 2) + 1}`}
            >
              <div className="nx-solution-media">
                <img
                  src={sol.image}
                  alt={sol.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                />
                <div className="nx-solution-media-overlay" />
                <span className="nx-solution-media-badge">
                  <Sparkles size={12} /> {sol.badge}
                </span>
              </div>

              <div className="nx-solution-content">
                <div>
                  <h3>{sol.title}</h3>
                  <p>{sol.desc}</p>
                  <div className="nx-solution-metrics">
                    {sol.metrics.map((m) => (
                      <span key={m} className="nx-solution-metric-pill">
                        <CheckCircle2 size={13} /> {m}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="#contact" className="nx-solution-cta">
                  Consult Solution Architects <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 4: SERVICES                                                */
/* ------------------------------------------------------------------ */
const servicesList = [
  {
    icon: MonitorSmartphone,
    num: "01",
    title: "Product Engineering",
    desc: "Full-lifecycle digital product development from UI/UX design through high-concurrency backend architecture and automated CI/CD deployment.",
    features: [
      "Custom Web & Mobile Platforms",
      "High-Throughput Microservices",
      "Automated Testing & QA Pipelines",
    ],
    cls: "svc-engineering",
  },
  {
    icon: Brain,
    num: "02",
    title: "AI & Neural Consulting",
    desc: "Strategic advisory and custom model engineering to operationalize generative AI and deep machine learning into core business operations.",
    features: [
      "Custom LLM Fine-Tuning",
      "Predictive Analytics & Vision",
      "AI Governance & Safety Controls",
    ],
    cls: "svc-ai",
  },
  {
    icon: ServerCog,
    num: "03",
    title: "Cloud Infrastructure",
    desc: "Design and deployment of multi-cloud architectures with Kubernetes orchestration, Terraform automation, and serverless compute.",
    features: [
      "Zero-Downtime Migration",
      "Kubernetes & Container Mesh",
      "FinOps Cloud Cost Optimization",
    ],
    cls: "svc-cloud",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Security & Auditing",
    desc: "Comprehensive penetration testing, vulnerability remediation, cryptographic hardening, and automated compliance certifications.",
    features: [
      "Continuous Threat Simulation",
      "Zero-Trust Architecture Audits",
      "SOC2 & ISO Compliance Delivery",
    ],
    cls: "svc-security",
  },
  {
    icon: BarChart3,
    num: "05",
    title: "Data Engineering",
    desc: "Architecting real-time event streaming pipelines, unified lakehouses, and high-speed analytical infrastructure for business intelligence.",
    features: [
      "Kafka & Spark Event Streaming",
      "Snowflake & Databricks Pipelines",
      "Executive Telemetry Dashboards",
    ],
    cls: "svc-data",
  },
  {
    icon: Headphones,
    num: "06",
    title: "24/7 Managed Operations",
    desc: "Round-the-clock proactive site reliability engineering, automated alert escalation, and sub-15-minute critical incident resolution.",
    features: [
      "Dedicated SRE Specialists",
      "Proactive Telemetry Health Checks",
      "15-Minute Critical Incident SLA",
    ],
    cls: "svc-managed",
  },
];

function Services() {
  return (
    <section id="services" className="nx-services-section nx-section">
      <div className="nx-cyber-grid" aria-hidden="true" />
      <div className="nx-container">
        <div className="nx-section-header reveal">
          <p className="nx-eyebrow">
            <span className="nx-eyebrow-dot" /> Specialized Services
          </p>
          <h2 className="nx-section-title">
            Enterprise <span className="gradient-text">Delivery Capabilities</span>
          </h2>
          <p className="nx-section-desc">
            From strategic advisory to high-velocity software engineering, we bring deep technical expertise to every phase of execution.
          </p>
        </div>

        <div className="nx-services-grid">
          {servicesList.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <article
                key={svc.title}
                className={`nx-service-card ${svc.cls} reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div>
                  <div className="nx-service-card-header">
                    <div className="nx-service-icon-box">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <span className="nx-service-num">{svc.num}</span>
                  </div>

                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>

                  <ul className="nx-service-features">
                    {svc.features.map((f) => (
                      <li key={f}>
                        <CheckCircle2 size={15} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className="nx-service-action-btn"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Learn More <ArrowRight size={14} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 5: WHY NEXORA (ADVANTAGES & STATS)                         */
/* ------------------------------------------------------------------ */
const whyAdvantages = [
  {
    num: "500+",
    icon: Users,
    title: "Global Enterprise Clients",
    desc: "Trusted by Fortune 500 enterprises, hyper-growth unicorns, and government technology organizations in 40+ countries.",
  },
  {
    num: "99.99%",
    icon: Activity,
    title: "High-Availability SLA",
    desc: "Multi-region redundant architectures designed to survive localized data center outages without user disruption.",
  },
  {
    num: "3.2×",
    icon: TrendingUp,
    title: "Accelerated Time-to-Market",
    desc: "Proprietary modular component libraries and automated CI/CD pipelines cut product release cycles from months to weeks.",
  },
  {
    num: "12+",
    icon: Award,
    title: "Years of Engineering Excellence",
    desc: "Over a decade of deep technical experience pioneering distributed systems, cloud computing, and neural architectures.",
  },
  {
    num: "42%",
    icon: Zap,
    title: "Average Compute Cost Reduction",
    desc: "Algorithmic resource optimization, automated server scaling, and intelligent workload routing reduce monthly cloud expenditure.",
  },
  {
    num: "< 15m",
    icon: Clock,
    title: "Guaranteed Incident Response",
    desc: "Continuous automated monitoring paired with dedicated senior SREs ensures rapid triage and immediate resolution.",
  },
];

function WhyNexora() {
  return (
    <section id="why" className="nx-why-section nx-section">
      <div className="nx-cyber-dots" aria-hidden="true" />
      <div className="nx-container">
        <div className="nx-section-header reveal">
          <p className="nx-eyebrow">
            <span className="nx-eyebrow-dot" /> The Nexora Advantage
          </p>
          <h2 className="nx-section-title">
            Why Visionary Teams <span className="gradient-text">Choose Nexora</span>
          </h2>
          <p className="nx-section-desc">
            We bridge the gap between ambitious visionary concepts and robust, production-grade engineering that withstands real-world demands.
          </p>
        </div>

        <div className="nx-why-grid">
          {whyAdvantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <article
                key={adv.title}
                className={`nx-why-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="nx-why-watermark">
                  <Icon size={72} strokeWidth={1.2} />
                </div>
                <div className="nx-why-stat-num">{adv.num}</div>
                <h3>{adv.title}</h3>
                <p>{adv.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 6: ABOUT (SPLIT WITH FUTURISTIC VISUAL CONSOLE)            */
/* ------------------------------------------------------------------ */
const pillarsData = [
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A globally connected digital economy powered by intelligent, autonomous, and secure software platforms.",
  },
  {
    icon: Target,
    title: "Our Mission",
    desc: "To deliver uncompromising technological excellence that enables enterprises to lead their respective industries.",
  },
  {
    icon: ShieldCheck,
    title: "Our Principles",
    desc: "Post-quantum security by default, fault-tolerant engineering, and transparent measurable performance.",
  },
  {
    icon: Sparkles,
    title: "Our Innovation",
    desc: "Continuous R&D into autonomous agents, neural acceleration, and distributed computing primitives.",
  },
];

function About() {
  return (
    <section id="about" className="nx-about-section nx-section">
      <div className="nx-cyber-grid" aria-hidden="true" />
      <div className="nx-container">
        <div className="nx-about-grid">
          {/* Left: Mission & Story */}
          <div className="nx-about-copy reveal">
            <p className="nx-eyebrow">
              <span className="nx-eyebrow-dot" /> About Nexora
            </p>
            <h2>
              Building the Foundations of <br />
              <span className="gradient-text">Tomorrow's Intelligence</span>
            </h2>

            <p>
              Nexora was established by a global collective of systems engineers, distributed systems researchers, and cybersecurity specialists with a unified conviction: the world's most critical digital services demand flawless execution and futuristic design.
            </p>

            <p>
              Today, Nexora designs and maintains the mission-critical cloud backbones, autonomous intelligence engines, and threat mitigation grids for enterprises operating at global scale.
            </p>

            <div className="nx-pillars-list">
              {pillarsData.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="nx-pillar-box">
                  <div className="nx-pillar-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div className="nx-pillar-text">
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Futuristic Visual Console */}
          <div className="nx-about-dashboard reveal reveal-delay-2">
            <div className="nx-about-img-wrap">
              <img
                src={labImage}
                alt="Nexora Command & Research Facility"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="nx-viewport-overlay" />
              <div className="nx-viewport-scanline" />

              <div className="nx-hud-corner-tl" />
              <div className="nx-hud-corner-tr" />
              <div className="nx-hud-corner-bl" />
              <div className="nx-hud-corner-br" />
            </div>

            <div className="nx-about-stats-panel">
              <div className="nx-about-mini-stat">
                <strong>
                  <AnimatedCounter value={42} suffix=" Regions" />
                </strong>
                <span>Global Edge Clusters</span>
              </div>
              <div className="nx-about-mini-stat">
                <strong>
                  <AnimatedCounter value={12} suffix="ms" />
                </strong>
                <span>Median Global Latency</span>
              </div>
              <div className="nx-about-mini-stat">
                <strong>256-bit</strong>
                <span>Quantum-Safe Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 7: CONTACT (TRANSMISSION CONSOLE)                          */
/* ------------------------------------------------------------------ */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setErrorMsg("Please complete all required transmission fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await sendContactMessage({
        data: {
          name,
          email,
          subject: "Architecture Consultation Request",
          message,
        },
      });
      form.reset();
      setStatus("success");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Transmission failed. Please retry your inquiry."
      );
      setStatus("error");
    }
  }, []);

  return (
    <section id="contact" className="nx-contact-section nx-section">
      <div className="nx-cyber-dots" aria-hidden="true" />
      <div className="nx-container">
        <div className="nx-contact-grid">
          {/* Left Contact Info */}
          <div className="nx-contact-info reveal">
            <p className="nx-eyebrow">
              <span className="nx-eyebrow-dot" /> Secure Transmission
            </p>
            <h2>
              Initiate a Technical <br />
              <span className="gradient-text">Dialogue with Nexora</span>
            </h2>
            <p>
              Whether you are preparing a cloud migration, engineering autonomous AI systems, or seeking a comprehensive cybersecurity assessment, our senior architects are ready to connect.
            </p>

            {/* Global Node Visual Matrix */}
            <div className="nx-contact-node-graphic" aria-hidden="true">
              <WorldNetworkSvg />
            </div>

            <div className="nx-contact-channels">
              <div className="nx-contact-channel-card">
                <div className="nx-channel-icon">
                  <Mail size={20} />
                </div>
                <div className="nx-channel-text">
                  <strong>Direct Architect Line</strong>
                  <span>transmission@nexora.io</span>
                </div>
              </div>

              <div className="nx-contact-channel-card">
                <div className="nx-channel-icon">
                  <MapPin size={20} />
                </div>
                <div className="nx-channel-text">
                  <strong>Global HQ</strong>
                  <span>San Francisco, CA • Zurich, Switzerland</span>
                </div>
              </div>

              <div className="nx-contact-channel-card">
                <div className="nx-channel-icon">
                  <ShieldCheck size={20} />
                </div>
                <div className="nx-channel-text">
                  <strong>Response SLA</strong>
                  <span>Encrypted Channel • Under 15 Minutes Response</span>
                </div>
              </div>
            </div>

            <div className="nx-social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nx-social-btn" aria-label="Nexora on LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nx-social-btn" aria-label="Nexora on GitHub">
                <Github size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="nx-social-btn" aria-label="Nexora on Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="nx-social-btn" aria-label="Nexora on YouTube">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nx-social-btn" aria-label="Nexora on Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Right Glassmorphic Form */}
          <form className="nx-glass-form reveal reveal-delay-2" onSubmit={handleSubmit} noValidate>
            <div className="nx-form-header">
              <strong>
                <Send size={18} /> Transmission Console
              </strong>
              <span>Quantum-Encrypted SSL</span>
            </div>

            <div className="nx-form-row">
              <div className="nx-form-group">
                <label htmlFor="user-name">Full Name *</label>
                <input
                  id="user-name"
                  name="name"
                  type="text"
                  placeholder="e.g. Alex Mercer"
                  required
                  minLength={2}
                  maxLength={120}
                  className="nx-form-input"
                />
              </div>

              <div className="nx-form-group">
                <label htmlFor="user-email">Corporate Email *</label>
                <input
                  id="user-email"
                  name="email"
                  type="email"
                  placeholder="alex@enterprise.com"
                  required
                  maxLength={255}
                  className="nx-form-input"
                />
              </div>
            </div>

            <div className="nx-form-group">
              <label htmlFor="user-message">Project Parameters & Scope *</label>
              <textarea
                id="user-message"
                name="message"
                placeholder="Describe your architecture requirements, timeline, or current technical challenge..."
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                className="nx-form-textarea"
              />
            </div>

            <div className="nx-form-footer">
              <span>Standard Enterprise SLA applies.</span>
              <button
                type="submit"
                className="nx-btn-glow"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Dispatching Transmission..." : "Submit Transmission"}
                <Send size={15} />
              </button>
            </div>

            {status === "success" && (
              <div className="nx-form-feedback success" role="status">
                <CheckCircle2 size={16} className="inline mr-2" />
                Transmission logged successfully. A designated Systems Architect has been notified.
              </div>
            )}
            {status === "error" && (
              <div className="nx-form-feedback error" role="alert">
                {errorMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION 8: FOOTER                                                  */
/* ------------------------------------------------------------------ */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="nx-footer" role="contentinfo">
      <div className="nx-container">
        <div className="nx-footer-grid">
          {/* Brand Col */}
          <div className="nx-footer-brand">
            <NexoraLogo />
            <p>
              Nexora is the premier futuristic technology platform delivering cognitive intelligence, scalable cloud foundations, and post-quantum digital defense.
            </p>
            <div className="nx-footer-status-pill">
              <span className="nx-status-led" /> ALL SYSTEMS OPERATIONAL • 100%
            </div>
          </div>

          {/* Links Cols */}
          <div className="nx-footer-cols">
            <div className="nx-footer-col">
              <h4>Platform</h4>
              <a href="#home">Home</a>
              <a href="#technologies">Technologies</a>
              <a href="#solutions">Solutions</a>
              <a href="#services">Services</a>
            </div>

            <div className="nx-footer-col">
              <h4>Ecosystem</h4>
              <a href="#why">Why Nexora</a>
              <a href="#about">About Architecture</a>
              <a href="#contact">Contact Support</a>
            </div>

            <div className="nx-footer-col">
              <h4>Security & Compliance</h4>
              <a href="#home">Zero-Trust Spec</a>
              <a href="#home">SOC2 Compliance</a>
              <a href="#home">Global Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="nx-footer-bottom">
          <span>© {currentYear} Nexora Technologies Inc. All rights reserved.</span>
          <span>BUILT FOR NEXT-GEN ENTERPRISES • NEXORA CORE 3.8</span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* SCROLL REVEAL OBSERVER HOOK                                        */
/* ------------------------------------------------------------------ */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/* MAIN HOMEPAGE COMPONENT                                            */
/* ------------------------------------------------------------------ */
function HomePage() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MetricsStrip />
        <Technologies />
        <Solutions />
        <Services />
        <WhyNexora />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

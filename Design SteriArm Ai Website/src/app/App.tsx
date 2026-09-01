import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  ArrowRight,
  Shield,
  Cpu,
  Activity,
  Zap,
  CheckCircle,
  ChevronDown,
  Bot,
  ChevronLeft,
  Layers,
  Eye,
  Lock,
} from "lucide-react";

import robotArmImg from "@/imports/Gemini_Generated_Image_89sxm089sxm089sx_Kopie_crop_Kopie.png";
import facilityImg from "@/imports/Gemini_Generated_Image_w5d1w0w5d1w0w5d1.png";
import isoViewImg from "@/imports/iso_view_crop2.png";
import heroFrame1Img from "@/imports/Gemini_Generated_Image_tjqc53tjqc53tjqc_Kopie.png";
import heroFrame2Img from "@/imports/Gemini_Generated_Image_wtqrnfwtqrnfwtqr_crop_Kopie.png";
import nvidiaInceptionImg from "@/imports/67923a4ec182a269ff991102_NVIDIA_Inception_Prog_Logo.png";
import investLogoImg from "@/imports/Invest_Logo_Kopie.png";
import cloudStartupsImg from "@/imports/CloudforStartups-4.png";
import valensaLogoImg from "@/imports/Valensa_logo_09.png";
import teamBellarita from "@/imports/Bellarita_Bechmann.png";
import teamMira from "@/imports/Lukas_Weber_crop.png";
import teamRita from "@/imports/Rohan_Kumar_crop.png";
import teamSwetha from "@/imports/sweta.png";
import teamAmir from "@/imports/Gemini_Generated_Image_x8ji89x8ji89x8ji.png";
import teamElla from "@/imports/Ella_Baskerville.png";

type Page = "landing" | "process" | "team";

// ── ANIMATION VARIANTS ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// ── NAV ───────────────────────────────────────────────────────────────────────
function Nav({
  page,
  setPage,
}: {
  page: Page;
  setPage: (p: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (page !== "landing") {
      setPage("landing");
      setTimeout(
        () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
        120
      );
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/92 backdrop-blur-2xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            setPage("landing");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-px group"
          aria-label="SteriArm Ai — home"
        >
          <span className="font-display text-[17px] font-bold tracking-[-0.03em] text-foreground leading-none">
            SteriArm
          </span>
          <span className="font-display text-[17px] font-light text-accent leading-none ml-[3px]">
            Ai
          </span>
        </button>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-7">
          {(
            [
              ["AI", "ai"],
              ["Robot", "robot"],
              ["Safety", "safety"],
            ] as [string, string][]
          ).map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => setPage("process")}
            className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Process
          </button>
          <button
            onClick={() => setPage("team")}
            className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Team
          </button>
          <button
            onClick={() => setPage("process")}
            className="ml-1 px-4 py-[9px] bg-foreground text-white text-[13px] font-medium rounded-full hover:bg-foreground/80 transition-colors duration-200"
          >
            View Process →
          </button>
        </nav>
      </div>
    </header>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function HeroSection({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Right half — dramatic dark robot image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[56%] overflow-hidden">
        <ImageWithFallback
          src={heroFrame2Img}
          alt="SteriArm Ai robotic system — sculptural dark render"
          className="w-full h-full object-cover object-right"
        />
        {/* Fade left edge into white */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 lg:via-white/10 to-transparent pointer-events-none" />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center min-h-screen pt-20 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[600px]"
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-10">
            <div className="w-[6px] h-[6px] rounded-full bg-[#c8192f]" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
              AI-Automated Reprocessing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold leading-[0.96] tracking-[-0.04em] text-foreground mb-8"
            style={{ fontSize: "clamp(3.6rem, 8.5vw, 6.8rem)" }}
          >
            Dental
            <br />
            Precision.
            <br />
            <span style={{ color: "rgba(29,29,31,0.22)" }}>Automated.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-[17px] text-muted-foreground leading-relaxed max-w-[440px] mb-10"
          >
            SteriArm Ai brings autonomous intelligence to dental instrument
            reprocessing — ensuring sterility, traceability, and full compliance
            at every step.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setPage("process")}
              className="group flex items-center gap-2 px-6 py-[13px] bg-foreground text-white text-[13px] font-semibold rounded-full hover:bg-foreground/80 transition-all duration-200"
            >
              Explore Process
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </button>
            <button
              onClick={() =>
                document.getElementById("ai")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Learn more
              <ChevronDown size={14} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-[48px] lg:left-[72px] flex flex-col items-center gap-0"
      >
        <div
          className="w-px bg-gradient-to-b from-transparent via-foreground/30 to-transparent"
          style={{ height: 56 }}
        />
      </motion.div>
    </section>
  );
}

// ── STATEMENT ─────────────────────────────────────────────────────────────────
function StatementSection() {
  return (
    <section className="pt-14 pb-28 lg:pt-20 lg:pb-40 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-8"
          >
            The Challenge
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold leading-[1.08] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)", maxWidth: "72ch" }}
          >
            Every dental instrument must be meticulously cleaned, disinfected,
            and verified before reuse.{" "}
            <span style={{ color: "rgba(29,29,31,0.3)" }}>
              SteriArm Ai automates this critical process — eliminating human
              error and ensuring compliance at clinical scale.
            </span>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}

// ── AI SECTION ────────────────────────────────────────────────────────────────
function AISection() {
  const features = [
    {
      icon: <Eye size={18} />,
      title: "Computer Vision",
      desc: "Multi-spectral optical sensors identify and classify 2,400+ instrument types with 99.97% accuracy.",
    },
    {
      icon: <Layers size={18} />,
      title: "Neural Classification",
      desc: "Deep learning models trained on 12 million instrument samples ensure precise contamination detection.",
    },
    {
      icon: <Activity size={18} />,
      title: "Real-Time Analytics",
      desc: "Live dashboards track sterility metrics, cycle counts, and predictive maintenance intervals.",
    },
  ];

  return (
    <section id="ai" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden bg-white"
            style={{ aspectRatio: "4/3" }}
          >
            <ImageWithFallback
              src={facilityImg}
              alt="SteriArm Ai receiving & inspection stage — dental instrument racks"
              className="w-full h-full object-cover"
            />
            {/* Status chip */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 border border-border/60">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span className="text-[12px] font-medium text-foreground">
                AI Processing Active — 342 instruments queued
              </span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <div className="w-[6px] h-[6px] rounded-full bg-[#c8192f]" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                Artificial Intelligence
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display font-bold leading-[1.04] tracking-[-0.03em] text-foreground mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              Intelligence
              <br />
              at every step.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[15px] text-muted-foreground leading-relaxed mb-12 max-w-[400px]"
            >
              Our AI architecture processes instrument data in real time, making
              autonomous decisions on sorting, washing parameters, and
              disinfection cycles — reducing human error to effectively zero.
            </motion.p>

            <motion.div variants={stagger} className="space-y-7">
              {features.map((f, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white flex items-center justify-center text-foreground shadow-sm border border-border">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold text-foreground mb-1">
                      {f.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── ROBOT SECTION ─────────────────────────────────────────────────────────────
function RobotSection() {
  const stats = [
    { value: "79.97%", label: "Accuracy (ongoing process)" },
    { value: "24 / 7", label: "Continuous operation" },
    { value: "< 3 s", label: "Per instrument cycle" },
    { value: "2,400+", label: "Instrument types" },
  ];

  return (
    <section id="robot" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
            <div className="w-[6px] h-[6px] rounded-full bg-[#c8192f]" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
              Robotic System
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold leading-[1.04] tracking-[-0.03em] text-foreground"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", maxWidth: "14ch" }}
          >
            Robotic precision at clinical scale.
          </motion.h2>
        </motion.div>

        {/* Hero image — wide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden mb-0"
          style={{ aspectRatio: "21/9" }}
        >
          <ImageWithFallback
            src={robotArmImg}
            alt="SteriArm Ai robotic arm sorting dental instruments with precision"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <p className="text-white/50 text-[10px] font-semibold tracking-[0.16em] uppercase mb-1">
                Detail View
              </p>
              <p className="text-white text-[14px] font-medium">
                Precision Sorting — Robotic End Effector
              </p>
            </div>
            <span className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[11px] text-white/80 font-medium">
              <Bot size={12} />
              6-Axis Articulated
            </span>
          </div>
        </motion.div>

        {/* Split — detail image + text */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 mt-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden bg-zinc-950"
            style={{ aspectRatio: "4/3" }}
          >
            <ImageWithFallback
              src={heroFrame1Img}
              alt="Close-up of SteriArm Ai robotic arm end effector interface"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h3
              variants={fadeUp}
              className="font-display text-[1.6rem] font-bold tracking-tight text-foreground mb-4 leading-[1.1]"
            >
              Purpose-built for dental instrument handling
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="text-[15px] text-muted-foreground leading-relaxed mb-8"
            >
              The SteriArm robotic arm is engineered specifically for medical
              environments — featuring full stainless steel construction, IP69K
              ingress protection, and complete chemical compatibility with all
              standard disinfection agents.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3.5">
              {[
                "6-axis articulated arm with 0.01 mm repeatability",
                "Compliant with sterile packaging requirements",
                "Integrated force sensing prevents instrument damage",
                "Cleanroom-compatible design",
                "Full audit trail via integrated RFID & barcode reading",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-[13px] text-foreground"
                >
                  <CheckCircle
                    size={15}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── SAFETY SECTION (process page only) ───────────────────────────────────────
function SafetySection() {
  const isoNorms = [
    {
      title: "Washer-Disinfectors",
      desc: "General requirements, definitions and tests for washer-disinfectors.",
    },
    {
      title: "Thermal Disinfectors",
      desc: "Requirements and tests for washing and thermal disinfection processes.",
    },
    {
      title: "HCD Processing",
      desc: "Information to be provided by medical device manufacturers for reprocessing.",
    },
    {
      title: "Quality Management",
      desc: "Medical devices quality management systems — regulatory requirements.",
    },
    {
      title: "Risk Management",
      desc: "Application of risk management to medical devices throughout the lifecycle.",
    },
    {
      title: "Cybersecurity",
      desc: "Technical security requirements for AI-driven industrial control components.",
    },
    {
      title: "Sterile Packaging",
      desc: "Packaging for terminally sterilized medical devices.",
    },
    {
      title: "EU Medical Device Regulation",
      desc: "European regulatory framework for medical device safety and performance.",
    },
  ];

  const pillars = [
    {
      icon: <Shield size={22} />,
      title: "Zero Cross-Contamination",
      desc: "Closed-loop processing with validated instrument tracking from intake to sterile storage.",
    },
    {
      icon: <Eye size={22} />,
      title: "Full Traceability",
      desc: "Every instrument cycle logged with AI-verified photographic and weight records.",
    },
    {
      icon: <Lock size={22} />,
      title: "Continuous Monitoring",
      desc: "Real-time efficacy monitoring with automated out-of-parameter alerts and process holds.",
    },
  ];

  return (
    <section id="safety" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
            <div className="w-[6px] h-[6px] rounded-full bg-[#c8192f]" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
              Safety & Compliance
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold leading-[1.04] tracking-[-0.03em] text-foreground mb-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Certified to the
            <br />
            highest standard.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[15px] text-muted-foreground max-w-[440px] leading-relaxed"
          >
            Designed and validated in accordance with all relevant norms
            governing medical device reprocessing, AI system safety, and
            quality management.
          </motion.p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 mb-16 border-t border-l border-border"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border-b border-r border-border bg-white p-8 lg:p-10"
            >
              <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-foreground mb-5 border border-border">
                {p.icon}
              </div>
              <h3 className="font-display text-[17px] font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ISO table */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.h3
            variants={fadeUp}
            className="font-display text-[18px] font-semibold text-foreground mb-6 tracking-tight"
          >
            Regulatory Compliance
          </motion.h3>
          <div className="divide-y divide-border">
            {isoNorms.map((n, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 group"
              >
                <div className="flex-shrink-0 sm:w-48">
                  <span className="text-[13px] font-semibold text-foreground">
                    {n.title}
                  </span>
                </div>
                <p className="text-[13px] text-muted-foreground flex-1 leading-relaxed">
                  {n.desc}
                </p>
                <CheckCircle
                  size={15}
                  className="text-accent flex-shrink-0 hidden sm:block"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── INVESTORS BAND ────────────────────────────────────────────────────────────
function InvestorsBand() {
  return (
    <section className="bg-white border-t border-border py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-6"
          >
            Supported by
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-14">
            <ImageWithFallback
              src={nvidiaInceptionImg}
              alt="NVIDIA Inception Program"
              className="h-48 w-auto object-contain"
            />
            <ImageWithFallback
              src={investLogoImg}
              alt="INVEST — Zuschuss für Wagniskapital"
              className="h-20 w-auto object-contain"
            />
            <ImageWithFallback
              src={valensaLogoImg}
              alt="Valensa Robotics"
              className="h-32 w-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
        <button
          onClick={() => {
            setPage("landing");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-px"
        >
          <span className="font-display text-[14px] font-bold tracking-tight text-foreground">
            SteriArm
          </span>
          <span className="font-display text-[14px] font-light text-accent ml-[2px]">
            Ai
          </span>
        </button>
        <div className="flex flex-wrap items-center gap-5">
          {["Washer-Disinfector Certified", "Quality Management Compliant", "EU Medical Device Regulation"].map(
            (c) => (
              <span
                key={c}
                className="text-[11px] text-muted-foreground font-medium"
              >
                {c}
              </span>
            )
          )}
        </div>
        <p className="text-[11px] text-muted-foreground">
          © 2026 SteriArm Ai
        </p>
      </div>
    </footer>
  );
}

// ── LANDING PAGE ──────────────────────────────────────────────────────────────
function LandingPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <main>
      <HeroSection setPage={setPage} />
      <StatementSection />
      <AISection />
      <RobotSection />
      <InvestorsBand />
      <Footer setPage={setPage} />
    </main>
  );
}

// ── PROCESS PAGE ──────────────────────────────────────────────────────────────
const stages = [
  {
    number: "01",
    title: "Sorted Receiving & Inspection",
    desc: "All returned instruments undergo automated AI-vision inspection at the receiving station. Each item is logged, photographed, and cross-referenced against the instrument master database. Contaminated or damaged instruments are flagged and automatically quarantined before entering the clean zone.",
    details: [
      "Barcode & RFID tracking",
      "AI optical damage detection",
      "Weight & count verification",
      "Contamination risk logging",
    ],
  },
  {
    number: "02",
    title: "Automated Sorting & Preparation",
    desc: "A 6-axis robotic arm classifies and sorts instruments by type, material, and required disinfection protocol. Delicate instruments are handled with integrated force-feedback control. Instrument sets are pre-assembled into validated washing trays, minimising manual touchpoints.",
    details: [
      "99.97% classification accuracy",
      "2,400+ instrument type library",
      "Force-feedback damage prevention",
      "Automated tray set assembly",
    ],
  },
  {
    number: "03",
    title: "Automated Wash & Thermal Disinfection",
    desc: "Instruments are loaded into validated washer-disinfectors running approved programs at ≥ 90°C (A0 value ≥ 3000). All critical cycle parameters — temperature, hold time, detergent concentration, rinsing conductivity — are logged in real time and signed off by the AI quality module.",
    details: [
      "A0 value ≥ 3000 validated",
      "Multi-stage wash & rinse programs",
      "Real-time parameter logging",
      "Automatic out-of-range process hold",
    ],
  },
  {
    number: "04",
    title: "High-Level Disinfection & Sterilization",
    desc: "Instruments requiring sterility undergo validated steam sterilization at 134°C / 3 bar, or low-temperature hydrogen peroxide sterilization where heat sensitivity requires. Each cycle includes biological and chemical indicator verification prior to parametric release.",
    details: [
      "Steam: 134°C porous-load autoclave",
      "Low-temp: H₂O₂ plasma sterilization",
      "Biological indicator testing per cycle",
      "Parametric release validated",
    ],
  },
  {
    number: "05",
    title: "Storage & Sterile Dispatch",
    desc: "Sterile instruments are sealed in validated packaging, labeled with full traceability data — lot number, sterilization date, expiry, and operator ID — and stored in a controlled cleanroom environment. Dispatch is verified by scan-on-handover, completing the closed traceability loop.",
    details: [
      "Cleanroom-controlled storage",
      "Validated sterile barrier packaging",
      "Full lot-level traceability",
      "Scan-on-dispatch verification",
    ],
  },
];

function ProcessPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-14 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb */}
            <motion.button
              variants={fadeUp}
              onClick={() => setPage("landing")}
              className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ChevronLeft size={14} />
              Back to overview
            </motion.button>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 mb-8"
            >
              <div className="w-[6px] h-[6px] rounded-full bg-[#c8192f]" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                The Process
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold leading-[0.96] tracking-[-0.04em] text-foreground mb-7"
              style={{ fontSize: "clamp(3.2rem, 7.5vw, 6rem)" }}
            >
              Five stages.
              <br />
              <span style={{ color: "rgba(29,29,31,0.22)" }}>
                Zero compromise.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[17px] text-muted-foreground leading-relaxed max-w-[520px]"
            >
              The SteriArm Ai reprocessing workflow follows a validated
              five-stage protocol designed to meet and exceed the highest
              washer-disinfector standards and medical device regulatory
              requirements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ISO Facility Overview */}
      <section className="px-6 lg:px-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #fafafa 0%, #f2f2f2 100%)",
              padding: "clamp(24px, 4vw, 64px)",
            }}
          >
            {/* Brightened image */}
            <div
              className="relative"
              style={{ filter: "brightness(1.25) contrast(0.9) saturate(0.85)" }}
            >
              <ImageWithFallback
                src={isoViewImg}
                alt="SteriArm Ai facility — isometric view of complete five-stage reprocessing workflow"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Stage label chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {stages.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-border rounded-full text-[11px] font-semibold text-foreground"
                >
                  <span
                    className="w-[5px] h-[5px] rounded-full bg-[#c8192f] flex-shrink-0"
                  />
                  <span className="text-muted-foreground font-mono">{s.number}</span>
                  {s.title}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stage Detail — accordion-style rows */}
      <section className="px-6 lg:px-12 pb-28 bg-white">
        <div className="max-w-7xl mx-auto border-t border-border">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="border-b border-border py-12 lg:py-16 grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16"
            >
              {/* Left: number */}
              <motion.div variants={fadeUp} className="flex lg:flex-col gap-4 lg:gap-0 items-start">
                <div
                  className="font-display font-extrabold leading-none tracking-[-0.05em] select-none"
                  style={{
                    fontSize: "clamp(4rem, 8vw, 6.5rem)",
                    color: "rgba(29,29,31,0.07)",
                    lineHeight: 1,
                  }}
                >
                  {stage.number}
                </div>
              </motion.div>

              {/* Right: content */}
              <motion.div variants={stagger}>
                <motion.h3
                  variants={fadeUp}
                  className="font-display font-bold tracking-[-0.025em] text-foreground mb-4 leading-[1.08]"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                >
                  {stage.title}
                </motion.h3>
                <motion.p
                  variants={fadeUp}
                  className="text-[15px] text-muted-foreground leading-relaxed mb-9 max-w-[640px]"
                >
                  {stage.desc}
                </motion.p>
                <motion.div
                  variants={stagger}
                  className="grid sm:grid-cols-2 gap-x-8 gap-y-3"
                >
                  {stage.details.map((d, j) => (
                    <motion.div
                      key={j}
                      variants={fadeUp}
                      className="flex items-center gap-2.5 text-[13px] text-foreground"
                    >
                      <div className="w-[5px] h-[5px] rounded-full bg-[#c8192f] flex-shrink-0" />
                      {d}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ISO compliance banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto mt-16 rounded-2xl bg-card border border-border px-8 py-8 lg:px-12 flex flex-col lg:flex-row lg:items-center gap-6 justify-between"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-5">
              Supported by
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <ImageWithFallback
                src={nvidiaInceptionImg}
                alt="NVIDIA Inception Program"
                className="h-48 w-auto object-contain"
              />
              <ImageWithFallback
                src={investLogoImg}
                alt="INVEST — Zuschuss für Wagniskapital"
                className="h-20 w-auto object-contain"
              />
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-medium text-muted-foreground tracking-wide">A brand of Valensa GmbH</span>
                <ImageWithFallback
                  src={valensaLogoImg}
                  alt="Valensa Robotics"
                  className="h-20 w-auto object-contain object-left"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer setPage={setPage} />
    </main>
  );
}

// ── TEAM PAGE ─────────────────────────────────────────────────────────────────
const teamMembers = [
  {
    name: "Bellarita Bechmann",
    role: "Managing Director · Product Owner",
    details: [
      "Founder of Valensa GmbH and medai.ai",
      "Owner Arabella85 Dental Practice",
      "Expert in Digital Dentistry",
      "Early Adopter of Medical Robotics",
    ],
    photo: teamBellarita,
  },
  {
    name: "Lukas Weber",
    role: "Lead Robot Learning",
    details: [
      "Foundation Models @ Microsoft Zurich",
      "Computer Vision",
      "Embodied AI",
    ],
    photo: teamMira,
  },
  {
    name: "Rohan Kumar",
    role: "Learning Engineer",
    details: [
      "M.Sc. Robotics",
      "Cognition & Intelligence at TUM Robotics",
      "Reinforcement Learning",
    ],
    photo: teamRita,
  },
  {
    name: "Swetha Lingamgunta",
    role: "M&A · Science & Strategy",
    details: [
      "PhD Biotech @ University of Cambridge",
      "Science & Strategy",
    ],
    photo: teamSwetha,
  },
  {
    name: "Amir Satvat",
    role: "Business Development",
    details: [
      "Founder ASGC",
      "Business Strategy",
      "Recruiting & Finance",
    ],
    photo: teamAmir,
  },
  {
    name: "Ella Baskerville",
    role: "Marketing & Sales",
    details: [
      "Marketing & Sales",
    ],
    photo: teamElla,
  },
];

function TeamPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <main>
      <section className="pt-28 pb-16 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.button
              variants={fadeUp}
              onClick={() => setPage("landing")}
              className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ChevronLeft size={14} />
              Back to overview
            </motion.button>

            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
              <div className="w-[6px] h-[6px] rounded-full bg-[#c8192f]" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                The Team
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold leading-[0.96] tracking-[-0.04em] text-foreground mb-7"
              style={{ fontSize: "clamp(3.2rem, 7.5vw, 6rem)" }}
            >
              The people
              <br />
              <span style={{ color: "rgba(29,29,31,0.22)" }}>behind SteriArm Ai.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[17px] text-muted-foreground leading-relaxed max-w-[520px]"
            >
              A multidisciplinary team combining robotics, AI research, dental expertise, and business strategy to bring autonomous instrument reprocessing to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-0 flex flex-col"
              >
                {/* Photo */}
                <div className="aspect-[4/3] overflow-hidden bg-card">
                  <ImageWithFallback
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Info */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-[18px] font-bold tracking-tight text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-4">
                    {member.role}
                  </p>
                  <ul className="space-y-1.5 mt-auto">
                    {member.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                        <div className="w-[4px] h-[4px] rounded-full bg-[#c8192f] flex-shrink-0 mt-[6px]" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </main>
  );
}

// ── ROOT APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("landing");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [page]);

  return (
    <div className="bg-background min-h-screen font-sans">
      <Nav page={page} setPage={setPage} />
      <motion.div
        key={page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {page === "landing" ? (
          <LandingPage setPage={setPage} />
        ) : page === "process" ? (
          <ProcessPage setPage={setPage} />
        ) : (
          <TeamPage setPage={setPage} />
        )}
      </motion.div>
    </div>
  );
}

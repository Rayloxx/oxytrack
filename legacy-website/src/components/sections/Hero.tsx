"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowDown,
  Activity,
  Bell,
  BarChart3,
  Shield,
  Wifi,
} from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#081A2B]"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,119,255,0.25),transparent)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#081A2B] to-transparent" />
      </div>

      {/* Animated orbs */}
      <motion.div
        style={{ y: yOrb1 }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yOrb2 }}
        className="absolute top-1/2 left-1/5 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left — Copy */}
          <motion.div style={{ opacity: opacityContent }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-slow" />
              Now monitoring hospitals across Kenya
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6"
            >
              Kenyan Hospitals{" "}
              <span className="text-gradient-hero">
                Shouldn&apos;t Manage Oxygen Blindly.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Hospitals spend millions on oxygen, yet once it enters the building,
              visibility disappears. OxyTrack delivers{" "}
              <span className="text-white/90 font-medium">real-time monitoring</span>
              ,{" "}
              <span className="text-white/90 font-medium">ward analytics</span>, and{" "}
              <span className="text-white/90 font-medium">instant alerts</span> — from
              tank to ward.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link
                href="#contact"
                id="hero-book-demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-base rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a Demo
                <ChevronRight size={18} />
              </Link>
              <Link
                href="#how-it-works"
                id="hero-how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/8 text-white font-semibold text-base rounded-xl border border-white/15 hover:bg-white/14 hover:border-white/30 transition-all duration-200"
              >
                See How It Works
              </Link>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-8 pt-8 border-t border-white/8"
            >
              {[
                { value: "TECHgrow", label: "Innovation Winners" },
                { value: "99.97%", label: "System Uptime" },
                { value: "Real-Time", label: "Data Insights" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-white font-bold text-xl">{stat.value}</div>
                  <div className="text-white/40 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Dashboard Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative glass rounded-2xl p-5 shadow-2xl border border-white/10 animate-float">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse-slow" />
                  <span className="text-white text-sm font-semibold">OxyTrack Live Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-white/40 text-xs">All Systems Nominal</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                </div>
              </div>

              {/* Pressure Chart — SVG Inline */}
              <div className="bg-white/4 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/60 text-xs font-medium">O₂ Pressure — Live (bar)</span>
                  <span className="text-blue-400 text-xs font-semibold">4.2 bar ↑</span>
                </div>
                <svg viewBox="0 0 360 80" className="w-full h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="pressureGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0077FF" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0077FF" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00C2A8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00C2A8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[20, 40, 60].map(y => (
                    <line key={y} x1="0" y1={y} x2="360" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  ))}
                  <path d="M0,55 C40,50 80,35 120,40 C160,45 200,30 240,35 C280,40 320,25 360,28 L360,80 L0,80Z" fill="url(#pressureGrad)" />
                  <path d="M0,65 C40,60 80,50 120,55 C160,60 200,48 240,52 C280,56 320,42 360,45 L360,80 L0,80Z" fill="url(#tealGrad)" />
                  <path d="M0,55 C40,50 80,35 120,40 C160,45 200,30 240,35 C280,40 320,25 360,28" stroke="#0077FF" strokeWidth="2" strokeLinecap="round" />
                  <path d="M0,65 C40,60 80,50 120,55 C160,60 200,48 240,52 C280,56 320,42 360,45" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="360" cy="28" r="4" fill="#0077FF" />
                  <circle cx="360" cy="28" r="7" fill="#0077FF" fillOpacity="0.3" />
                </svg>
              </div>

              {/* Ward Cards */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { ward: "ICU", pressure: "4.5", flow: "18.2", status: "good" },
                  { ward: "Theatre", pressure: "4.1", flow: "22.1", status: "good" },
                  { ward: "General", pressure: "3.8", flow: "12.4", status: "normal" },
                ].map((w) => (
                  <div key={w.ward} className="bg-white/5 rounded-xl p-3 border border-white/6">
                    <div className="text-white/40 text-xs mb-1">{w.ward}</div>
                    <div className="text-white font-bold text-base">{w.pressure}</div>
                    <div className="text-white/30 text-xs">bar</div>
                    <div className="mt-2 flex items-center gap-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${w.status === "good" ? "bg-teal-400" : "bg-blue-400"}`} />
                      <span className="text-white/40 text-xs">{w.flow} L/m</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Alerts */}
              <div className="space-y-2">
                {[
                  { msg: "Pressure drop detected — Emergency Ward", type: "warning" },
                  { msg: "Supply forecast: 14 hours remaining", type: "info" },
                ].map((alert, i) => (
                  <div key={i} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs ${alert.type === "warning" ? "bg-amber-500/10 border border-amber-500/20 text-amber-300" : "bg-blue-500/10 border border-blue-500/20 text-blue-300"}`}>
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${alert.type === "warning" ? "bg-amber-400" : "bg-blue-400"}`} />
                    {alert.msg}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating metric cards */}
            {[
              { label: "O₂ Pressure", value: "4.2 bar", icon: Activity, status: "normal", pos: "-top-5 -right-6" },
              { label: "Ward Coverage", value: "12 Wards", icon: Wifi, status: "normal", pos: "top-1/3 -right-8" },
              { label: "Active Alerts", value: "2 Alerts", icon: Bell, status: "warning", pos: "-bottom-5 right-1/4" },
            ].map((metric, i) => {
              const Icon = metric.icon;
              const statusClass = metric.status === "warning"
                ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                : "text-blue-400 bg-blue-500/10 border-blue-500/20";
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                  className={`absolute ${metric.pos} glass rounded-xl px-3.5 py-2.5 border border-white/10 shadow-xl hidden xl:flex items-center gap-2.5`}
                  style={{ animation: `float ${5 + i * 0.7}s ease-in-out infinite ${i * 0.8}s` }}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center border ${statusClass}`}>
                    <Icon size={14} />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs leading-none mb-0.5">{metric.label}</div>
                    <div className="text-white font-semibold text-sm leading-none">{metric.value}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: opacityContent }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

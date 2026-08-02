"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const traditional = [
  "Clipboard rounds every 4–6 hours",
  "Manual gauge reading — error prone",
  "Logbook entries — delayed reporting",
  "No ward-level visibility",
  "Reactive maintenance only",
  "Oxygen leaks go undetected for hours",
  "Shortages discovered too late",
  "No historical data or audit trail",
];

const oxytrack = [
  "Live dashboards updated every 30 seconds",
  "Automated sensor readings — precise",
  "Instant cloud reports — zero delay",
  "Full ward-level consumption analytics",
  "Predictive, proactive intervention",
  "Leak detection within minutes",
  "Supply forecasting prevents shortages",
  "Complete audit trail & reporting",
];

const stats = [
  { value: "40%", label: "Average oxygen waste in hospitals without monitoring" },
  { value: "6hrs", label: "Typical delay between leak occurrence and discovery" },
  { value: "3x", label: "Faster response time with automated alerts" },
  { value: "KSh M+", label: "Potential annual savings per facility" },
];

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-[#F8FAFF] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            The Problem
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#081A2B] tracking-tight leading-tight mb-6">
            The Hidden Cost of{" "}
            <span className="text-gradient">Flying Blind</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Every hour without visibility is oxygen wasted, risk accumulated, and opportunities lost. The old way of managing hospital oxygen is costing facilities more than they realise.
          </p>
        </ScrollReveal>

        {/* Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          {/* Traditional */}
          <ScrollReveal delay={0.1}>
            <div className="relative bg-white rounded-3xl p-8 shadow-card border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center">
                  <X size={20} className="text-red-500" />
                </div>
                <div>
                  <div className="text-[#081A2B] font-bold text-xl">Traditional Approach</div>
                  <div className="text-gray-400 text-sm">Manual, reactive, opaque</div>
                </div>
              </div>

              <ul className="space-y-4">
                {traditional.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={11} className="text-red-500" />
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Overlay badge */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                Status Quo
              </div>
            </div>
          </ScrollReveal>

          {/* OxyTrack */}
          <ScrollReveal delay={0.2}>
            <div className="relative bg-gradient-to-br from-[#081A2B] to-[#0D2540] rounded-3xl p-8 h-full overflow-hidden">
              {/* BG pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/15 rounded-full blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                    <Check size={20} className="text-teal-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">OxyTrack Approach</div>
                    <div className="text-white/40 text-sm">Automated, predictive, transparent</div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {oxytrack.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} className="text-teal-400" />
                      </div>
                      <span className="text-white/75 text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
                OxyTrack Way
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 text-center shadow-card border border-gray-100 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-black text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm leading-relaxed">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

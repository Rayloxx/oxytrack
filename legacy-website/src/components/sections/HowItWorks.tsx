"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import {
  Cpu,
  Radio,
  Cloud,
  BarChart3,
  Bell,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Cpu,
    title: "Smart Sensor Manifold",
    description:
      "Integrated IoT sensors capture pressure (bar) and flow rate (L/min) data at every critical point — manifolds, pipelines, zone valves, and ward outlets — with medical-grade precision.",
    color: "blue",
    detail: "±0.1% accuracy | Medical-grade hardware",
  },
  {
    number: "02",
    icon: Radio,
    title: "Edge IoT Gateway",
    description:
      "A hardened edge gateway aggregates sensor data and transmits it securely over encrypted channels. Works on cellular, Wi-Fi, or LAN — resilient even during network interruptions.",
    color: "blue",
    detail: "256-bit encrypted | Offline-resilient",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud Processing Platform",
    description:
      "Our cloud SaaS platform ingests, processes, and stores all readings in real time. Built with enterprise-grade uptime standards, ensuring your data is always available.",
    color: "teal",
    detail: "99.97% uptime | Auto-scaling infrastructure",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Live Analytics Dashboard",
    description:
      "Biomedical teams and hospital management access beautiful dashboards showing pressure trends, ward-level consumption, flow rates, and system health — from any device, anywhere.",
    color: "teal",
    detail: "Web & mobile | Role-based access",
  },
  {
    number: "05",
    icon: Bell,
    title: "Instant Alert Engine",
    description:
      "When thresholds are breached — pressure drops, unusual flow patterns, or potential leaks — the system instantly notifies the right people via SMS, email, and in-app alerts.",
    color: "blue",
    detail: "Multi-channel alerts | Escalation workflows",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    description:
      "Hospital leadership gains the strategic visibility to optimise oxygen procurement, schedule preventive maintenance, benchmark ward efficiency, and plan capacity with confidence.",
    color: "teal",
    detail: "Monthly reports | Predictive forecasting",
  },
];

const colorMap = {
  blue: {
    icon: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    dot: "bg-blue-500",
    ring: "ring-blue-500/20",
    number: "text-blue-500/30",
    tag: "bg-blue-50 text-blue-600 border-blue-100",
  },
  teal: {
    icon: "bg-teal-500/10 text-teal-600 border-teal-500/20",
    dot: "bg-teal-500",
    ring: "ring-teal-500/20",
    number: "text-teal-500/30",
    tag: "bg-teal-50 text-teal-700 border-teal-100",
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            The OxyTrack System
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#081A2B] tracking-tight leading-tight mb-6">
            How OxyTrack{" "}
            <span className="text-gradient">Works</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A seamless end-to-end pipeline — from hardware at the source to decisions at the boardroom. Every step designed for hospital environments.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-200 via-teal-200 to-blue-200" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const colors = colorMap[step.color as keyof typeof colorMap];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""} mb-8 lg:mb-16`}
                >
                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`w-5 h-5 rounded-full ${colors.dot} ring-4 ${colors.ring} bg-white border-4 border-current`}>
                      <div className={`w-full h-full rounded-full ${colors.dot}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="bg-white rounded-2xl p-7 shadow-card border border-gray-100 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${colors.icon}`}>
                          <Icon size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-5xl font-black leading-none select-none ${colors.number}`}>
                              {step.number}
                            </span>
                          </div>
                          <h3 className="text-[#081A2B] font-bold text-xl mb-3">{step.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.description}</p>
                          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${colors.tag}`}>
                            {step.detail}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className={`hidden lg:block ${i % 2 !== 0 ? "lg:order-1" : ""}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

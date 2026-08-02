"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import {
  MapPin,
  Zap,
  TrendingDown,
  Users,
  Shield,
  Globe2,
  Award,
  Cpu,
} from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Designed for Local Realities",
    description:
      "Built specifically for Kenyan hospital environments — from network constraints to manual inspection workflows. We understand the challenges because we live them.",
  },
  {
    icon: TrendingDown,
    title: "Reduces Oxygen Waste",
    description:
      "Identify leaks, inefficiencies, and unusual consumption patterns. Our clients typically identify significant waste within weeks of deployment.",
  },
  {
    icon: Shield,
    title: "Improves Accountability",
    description:
      "Every reading, every alert, every action — logged and auditable. Give management and regulators the transparency they need.",
  },
  {
    icon: Users,
    title: "Supports Biomedical Teams",
    description:
      "We replace clipboards with dashboards — not biomedical engineers. OxyTrack enhances the capabilities of your existing team.",
  },
  {
    icon: Zap,
    title: "Enables Proactive Intervention",
    description:
      "Act before a shortage becomes a crisis. Our alerts and forecasts give teams the lead time to respond effectively.",
  },
  {
    icon: Globe2,
    title: "Scales Across Facilities",
    description:
      "Start with one facility, scale to a network. Our multi-site architecture grows with your organisation.",
  },
  {
    icon: Award,
    title: "Enterprise-Grade Reliability",
    description:
      "99.97% uptime. Medical-grade hardware. End-to-end encryption. Your critical infrastructure deserves nothing less.",
  },
  {
    icon: Cpu,
    title: "Innovation-Backed Platform",
    description:
      "Born from award-winning innovation. Built by a team that combines deep healthcare knowledge with cutting-edge IoT engineering.",
  },
];

export default function WhyOxyTrack() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-white pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Sticky copy */}
          <ScrollReveal className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Why OxyTrack
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#081A2B] tracking-tight leading-tight mb-6">
              Built for African{" "}
              <span className="text-gradient">Healthcare Realities</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              This isn&apos;t a product built in Silicon Valley for Western hospitals. OxyTrack was conceived, designed, and developed for the realities of Kenyan healthcare — and it shows.
            </p>
            <div className="bg-gradient-to-br from-[#081A2B] to-[#0D2540] rounded-2xl p-7 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
              <div className="relative">
                <div className="text-5xl font-black text-gradient-hero mb-4">TECHgrow</div>
                <div className="text-white/70 text-sm leading-relaxed">
                  OxyTrack Technologies emerged after winning the{" "}
                  <strong className="text-white">TECHgrow Innovation Challenge</strong> — recognised for our vision to digitise hospital oxygen systems and improve healthcare delivery across Africa.
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 2) * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-all duration-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-[#081A2B] font-bold text-base mb-2">{reason.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

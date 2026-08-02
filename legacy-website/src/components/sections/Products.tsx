"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import {
  Activity,
  PieChart,
  AlertTriangle,
  Bell,
  FileText,
  Brain,
  Globe,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "Continuous pressure and flow rate visibility across every point in your medical gas pipeline — from source manifold to ward outlet.",
    color: "blue",
    highlight: "30-second refresh",
  },
  {
    icon: PieChart,
    title: "Ward-Level Analytics",
    description:
      "Understand exactly which departments consume the most oxygen. Benchmark wards, identify inefficiencies, and allocate resources with data.",
    color: "teal",
    highlight: "Per-ward breakdown",
  },
  {
    icon: AlertTriangle,
    title: "Leak Detection",
    description:
      "Our algorithms detect unusual flow patterns that indicate leaks or wastage. Catch problems within minutes, not hours.",
    color: "amber",
    highlight: "AI-assisted detection",
  },
  {
    icon: Bell,
    title: "Automated Alerts",
    description:
      "When pressure drops, thresholds are breached, or supply is running low — the right people are notified instantly via SMS, email, and dashboard.",
    color: "blue",
    highlight: "Multi-channel notifications",
  },
  {
    icon: FileText,
    title: "Historical Reporting",
    description:
      "Access complete trend data and audit-ready records. Prove compliance, support procurement decisions, and review system history any time.",
    color: "teal",
    highlight: "Full audit trail",
  },
  {
    icon: Brain,
    title: "Predictive Insights",
    description:
      "Know before you run out. Our platform forecasts supply remaining, maintenance windows, and usage trends — giving you time to act.",
    color: "blue",
    highlight: "Prevent shortages",
  },
  {
    icon: Globe,
    title: "Cloud Dashboard",
    description:
      "Access your facility's oxygen intelligence from anywhere — browser or mobile. Role-based access for biomedical, management, and clinical staff.",
    color: "teal",
    highlight: "Any device, anywhere",
  },
  {
    icon: Wrench,
    title: "Maintenance Intelligence",
    description:
      "Track equipment health, schedule preventive servicing, and receive calibration reminders. Reduce downtime and extend equipment life.",
    color: "amber",
    highlight: "Preventive scheduling",
  },
];

const colorMap = {
  blue: {
    icon: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    border: "hover:border-blue-200",
    glow: "group-hover:shadow-blue-100",
  },
  teal: {
    icon: "bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white",
    badge: "bg-teal-50 text-teal-700 border-teal-100",
    border: "hover:border-teal-200",
    glow: "group-hover:shadow-teal-100",
  },
  amber: {
    icon: "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    border: "hover:border-amber-200",
    glow: "group-hover:shadow-amber-100",
  },
};

export default function Products() {
  return (
    <section id="solutions" className="section-padding bg-[#F8FAFF] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            Our Platform
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#081A2B] tracking-tight leading-tight mb-6">
            Everything Your Hospital{" "}
            <span className="text-gradient">Needs to See</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            One unified platform combining medical-grade IoT hardware with enterprise cloud software — purpose-built for African healthcare environments.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color as keyof typeof colorMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`group bg-white rounded-2xl p-6 border border-gray-100 ${colors.border} hover:shadow-xl ${colors.glow} hover:-translate-y-1.5 transition-all duration-300 cursor-default`}
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${colors.icon}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-[#081A2B] font-bold text-lg mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium ${colors.badge}`}>
                  {feature.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

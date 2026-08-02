"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import {
  Building2,
  Hospital,
  HeartPulse,
  Cross,
  Network,
  Stethoscope,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "County Hospitals",
    description:
      "Empower county-level facilities with real-time visibility and accountability across all medical gas systems, regardless of budget constraints.",
    badge: "Government",
    color: "blue",
    stat: "47 counties",
  },
  {
    icon: Hospital,
    title: "National Referral Hospitals",
    description:
      "Scale across complex, multi-building referral facilities. Monitor hundreds of endpoints from a single unified dashboard.",
    badge: "Enterprise",
    color: "teal",
    stat: "Multi-site",
  },
  {
    icon: HeartPulse,
    title: "Private Hospitals",
    description:
      "Differentiate through operational excellence. Reduce waste, improve efficiency, and deliver better patient outcomes with data.",
    badge: "Private Sector",
    color: "blue",
    stat: "ROI-focused",
  },
  {
    icon: Cross,
    title: "Mission Hospitals",
    description:
      "Purpose-built for mission-driven healthcare providers operating in resource-constrained environments where every litre counts.",
    badge: "NGO / Faith-Based",
    color: "teal",
    stat: "Cost-efficient",
  },
  {
    icon: Network,
    title: "Healthcare Networks",
    description:
      "Manage oxygen intelligence across an entire network of facilities from one corporate dashboard. Benchmark performance across sites.",
    badge: "Multi-Facility",
    color: "blue",
    stat: "Central oversight",
  },
  {
    icon: Stethoscope,
    title: "Specialised Facilities",
    description:
      "ICUs, oncology centres, surgical suites, and fertility clinics — where oxygen precision is non-negotiable and reliability is critical.",
    badge: "Specialist Care",
    color: "teal",
    stat: "High acuity",
  },
];

const colorMap = {
  blue: {
    card: "hover:border-blue-200 hover:shadow-blue-50",
    icon: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    stat: "text-blue-600",
    line: "bg-blue-500",
  },
  teal: {
    card: "hover:border-teal-200 hover:shadow-teal-50",
    icon: "bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white",
    badge: "bg-teal-50 text-teal-700 border-teal-100",
    stat: "text-teal-600",
    line: "bg-teal-500",
  },
};

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Who We Serve
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#081A2B] tracking-tight leading-tight mb-6">
            Built for{" "}
            <span className="text-gradient">Every Hospital</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From county hospitals to national referral centres, OxyTrack is designed to serve Kenya&apos;s diverse healthcare landscape.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            const colors = colorMap[industry.color as keyof typeof colorMap];

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`group bg-white rounded-2xl p-7 border border-gray-100 ${colors.card} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default`}
              >
                {/* Top line accent */}
                <div className={`w-8 h-0.5 ${colors.line} rounded mb-6`} />

                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${colors.icon}`}>
                  <Icon size={24} />
                </div>

                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[#081A2B] font-bold text-xl leading-tight">{industry.title}</h3>
                  <span className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border ${colors.badge}`}>
                    {industry.badge}
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {industry.description}
                </p>

                <div className={`text-sm font-bold ${colors.stat}`}>
                  {industry.stat}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

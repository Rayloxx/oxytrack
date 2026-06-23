"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Having real-time visibility into our oxygen systems has completely changed how our biomedical team operates. Instead of walking around with clipboards, they can now respond to issues before they escalate.",
    role: "Hospital Administrator",
    facility: "County Referral Hospital",
    type: "Pilot Partner",
    stars: 5,
    initials: "HA",
    color: "blue",
  },
  {
    quote:
      "The leak detection capability alone has already justified the investment. We identified a significant loss in our pipeline that we had no idea about. The savings are real.",
    role: "Biomedical Engineer",
    facility: "Level 5 Hospital",
    type: "Pilot Partner",
    stars: 5,
    initials: "BE",
    color: "teal",
  },
  {
    quote:
      "From an operations standpoint, OxyTrack gives us the data we need to make informed procurement decisions. We no longer have to guess how much oxygen to order.",
    role: "Clinical Operations Leader",
    facility: "Private Hospital Network",
    type: "Pilot Partner",
    stars: 5,
    initials: "CO",
    color: "blue",
  },
];

const colorMap = {
  blue: {
    initials: "bg-blue-600 text-white",
    quote: "text-blue-500",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    border: "hover:border-blue-100",
  },
  teal: {
    initials: "bg-teal-500 text-white",
    quote: "text-teal-500",
    badge: "bg-teal-50 text-teal-700 border-teal-100",
    border: "hover:border-teal-100",
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Pilot Partner Feedback
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#081A2B] tracking-tight leading-tight mb-6">
            Hear From Our{" "}
            <span className="text-gradient">Early Partners</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Healthcare professionals experiencing OxyTrack for the first time, sharing what real-time oxygen intelligence means for their facilities.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => {
            const colors = colorMap[t.color as keyof typeof colorMap];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`bg-white rounded-2xl p-7 border border-gray-100 ${colors.border} shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote size={28} className={`${colors.quote} mb-4 opacity-40`} />

                {/* Quote text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${colors.initials}`}>
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[#081A2B] font-semibold text-sm">{t.role}</div>
                    <div className="text-gray-400 text-xs truncate">{t.facility}</div>
                  </div>
                  <span className={`flex-shrink-0 px-2.5 py-1 rounded-full border text-xs font-medium ${colors.badge}`}>
                    {t.type}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.3} className="text-center">
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-500 text-sm">
            <div className="w-2 h-2 rounded-full bg-teal-400" />
            Testimonials are from pilot partner facilities. We respect privacy and use role-based attribution.
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

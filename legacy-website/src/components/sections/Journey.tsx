"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Trophy, Lightbulb, Rocket, Target, Building2, Globe2 } from "lucide-react";

const milestones = [
  {
    year: "2023",
    icon: Lightbulb,
    title: "The Problem Identified",
    description:
      "After witnessing first-hand how Kenyan hospitals manage oxygen manually — clipboards, analogue gauges, and reactive maintenance — our founders recognised the urgent need for a smarter solution.",
    color: "blue",
  },
  {
    year: "2023",
    icon: Trophy,
    title: "TECHgrow Innovation Winner",
    description:
      "OxyTrack Technologies was recognised at the TECHgrow Innovation Challenge for our vision of digitising hospital oxygen systems — validating our mission and accelerating our development journey.",
    color: "teal",
    highlight: true,
  },
  {
    year: "2024",
    icon: Rocket,
    title: "Product Development",
    description:
      "Our engineering team designed and built the first generation of smart sensor manifolds, edge gateways, and the OxyTrack cloud platform — purpose-built for Kenyan hospital infrastructure.",
    color: "blue",
  },
  {
    year: "2024",
    icon: Target,
    title: "Pilot Deployments",
    description:
      "Successful pilot deployments in partner healthcare facilities. Real-world validation of our monitoring platform, gathering critical insights and demonstrating measurable impact.",
    color: "teal",
  },
  {
    year: "2025",
    icon: Building2,
    title: "Commercial Launch",
    description:
      "OxyTrack officially launches to the Kenyan healthcare market, offering full-stack medical gas monitoring — from hardware installation to cloud SaaS and ongoing support.",
    color: "blue",
  },
  {
    year: "Future",
    icon: Globe2,
    title: "Pan-African Expansion",
    description:
      "Our vision extends beyond Kenya. We are building the infrastructure to bring real-time medical gas intelligence to healthcare facilities across East Africa and beyond.",
    color: "teal",
  },
];

const colorMap = {
  blue: {
    icon: "bg-blue-500 text-white",
    line: "border-blue-200",
    tag: "bg-blue-50 text-blue-700",
  },
  teal: {
    icon: "bg-teal-500 text-white",
    line: "border-teal-200",
    tag: "bg-teal-50 text-teal-700",
  },
};

export default function Journey() {
  return (
    <section id="journey" className="section-padding bg-[#F8FAFF] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            Our Story
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#081A2B] tracking-tight leading-tight mb-6">
            From Innovation Challenge{" "}
            <span className="text-gradient">to Transforming Healthcare</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Every great company begins with a simple observation: something that matters isn&apos;t working well enough. Ours began in a hospital corridor with a clipboard and an analogue gauge.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-teal-200 to-blue-200 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon;
              const colors = colorMap[milestone.color as keyof typeof colorMap];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 ${isLeft ? "" : "lg:[&>*:first-child]:order-2"} mb-8 lg:mb-12`}
                >
                  {/* Content */}
                  <div className={isLeft ? "lg:pr-12" : "lg:pl-12"}>
                    <div className={`bg-white rounded-2xl p-6 border shadow-card ${milestone.highlight ? "border-teal-200 shadow-teal-50 ring-1 ring-teal-200" : "border-gray-100"} hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300`}>
                      {milestone.highlight && (
                        <div className="flex items-center gap-2 mb-4 text-teal-600">
                          <Trophy size={14} />
                          <span className="text-xs font-bold uppercase tracking-wider">Award-Winning Innovation</span>
                        </div>
                      )}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${colors.icon}`}>
                          <Icon size={20} />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.tag}`}>
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-[#081A2B] font-bold text-xl mb-3">{milestone.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-white border-4 border-blue-400 shadow-sm" />
                  </div>

                  {/* Spacer */}
                  <div />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Activity, BarChart3, Bell, TrendingUp, Wifi, Shield } from "lucide-react";

const wardData = [
  { ward: "ICU", pressure: 4.5, flow: 18.2, status: "normal", consumption: 82 },
  { ward: "Theatre", pressure: 4.1, flow: 22.1, status: "normal", consumption: 76 },
  { ward: "Emergency", pressure: 3.2, flow: 9.4, status: "warning", consumption: 45 },
  { ward: "General", pressure: 4.0, flow: 12.4, status: "normal", consumption: 60 },
  { ward: "Maternity", pressure: 4.2, flow: 8.0, status: "normal", consumption: 38 },
  { ward: "Paediatrics", pressure: 3.9, flow: 6.2, status: "normal", consumption: 30 },
];

const alertsData = [
  { time: "14:23", msg: "Emergency Ward — pressure below threshold (3.2 bar)", type: "critical" },
  { time: "13:51", msg: "Supply forecast: 14 hours remaining at current rate", type: "warning" },
  { time: "12:04", msg: "ICU flow rate spike detected — investigating", type: "warning" },
  { time: "08:30", msg: "Daily system health check — all zones nominal", type: "info" },
];

const metrics = [
  { label: "O₂ Pressure", value: "4.2 bar", sub: "Facility average", icon: Activity, delta: "+0.3", positive: true },
  { label: "Flow Rate", value: "12.5 L/m", sub: "Real-time avg", icon: TrendingUp, delta: "Normal", positive: true },
  { label: "Supply Left", value: "87%", sub: "≈ 14 hrs", icon: Shield, delta: "Stable", positive: true },
  { label: "Active Alerts", value: "2", sub: "Requires attention", icon: Bell, delta: "↑1 from yesterday", positive: false },
];

// Animated SVG pressure graph
function PressureChart() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Generate a wavy path that shifts
  const generatePath = (shift: number, amplitude: number, baseline: number) => {
    let d = `M 0 ${baseline}`;
    for (let x = 0; x <= 560; x += 10) {
      const y = baseline + amplitude * Math.sin((x + shift) * 0.04) * Math.cos((x + shift) * 0.02);
      d += ` L ${x} ${y}`;
    }
    return d;
  };

  return (
    <svg viewBox="0 0 560 100" className="w-full h-24" preserveAspectRatio="none">
      <defs>
        <linearGradient id="blueArea" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0077FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0077FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="tealArea" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00C2A8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#00C2A8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={generatePath(offset, 14, 50) + " L 560 100 L 0 100 Z"}
        fill="url(#blueArea)"
      />
      <path
        d={generatePath(offset + 60, 10, 65) + " L 560 100 L 0 100 Z"}
        fill="url(#tealArea)"
      />
      <path
        d={generatePath(offset, 14, 50)}
        stroke="#0077FF"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={generatePath(offset + 60, 10, 65)}
        stroke="#00C2A8"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Dashboard() {
  return (
    <section id="dashboard" className="section-padding bg-[#081A2B] relative overflow-hidden">
      {/* BG layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-slow" />
            Live Platform Preview
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Your Oxygen Intelligence,{" "}
            <span className="text-gradient-hero">at a Glance</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything your biomedical team and hospital management need — unified in a single, beautiful dashboard.
          </p>
        </ScrollReveal>

        {/* Dashboard mockup */}
        <ScrollReveal delay={0.1}>
          <motion.div
            className="bg-[#0D2540]/80 backdrop-blur-sm rounded-3xl border border-white/8 shadow-2xl overflow-hidden"
            whileInView={{ y: [20, 0] }}
            viewport={{ once: true }}
          >
            {/* Dashboard top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-white/3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="text-white/50 text-xs ml-4">OxyTrack Platform — Kenyatta National Hospital</div>
              </div>
              <div className="flex items-center gap-2 text-teal-400 text-xs font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-slow" />
                Live · Updated just now
              </div>
            </div>

            <div className="p-6">
              {/* Top metric cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {metrics.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-white/5 rounded-2xl p-4 border border-white/8"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white/40 text-xs">{metric.label}</span>
                        <Icon size={14} className="text-white/30" />
                      </div>
                      <div className="text-white font-bold text-2xl mb-1">{metric.value}</div>
                      <div className="text-white/30 text-xs">{metric.sub}</div>
                      <div className={`text-xs mt-2 font-medium ${metric.positive ? "text-teal-400" : "text-amber-400"}`}>
                        {metric.delta}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Main content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Pressure Chart */}
                <div className="lg:col-span-2 bg-white/5 rounded-2xl p-5 border border-white/8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-white font-semibold text-sm">Pressure Trend — Last 24 Hours</div>
                      <div className="text-white/40 text-xs mt-0.5">ICU & Theatre — Live</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-0.5 bg-blue-400 rounded" />
                        <span className="text-white/40 text-xs">ICU</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-0.5 bg-teal-400 rounded" />
                        <span className="text-white/40 text-xs">Theatre</span>
                      </div>
                    </div>
                  </div>
                  <PressureChart />
                  <div className="flex justify-between text-white/20 text-xs mt-2">
                    {["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "Now"].map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Alerts */}
                <div className="bg-white/5 rounded-2xl p-5 border border-white/8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white font-semibold text-sm">Alert Feed</div>
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                      <Bell size={11} className="text-amber-400" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    {alertsData.map((alert, i) => (
                      <div key={i} className={`flex gap-3 p-3 rounded-xl text-xs border ${
                        alert.type === "critical" ? "bg-red-500/10 border-red-500/20" :
                        alert.type === "warning" ? "bg-amber-500/10 border-amber-500/20" :
                        "bg-blue-500/10 border-blue-500/20"
                      }`}>
                        <div className={`w-1 rounded flex-shrink-0 ${
                          alert.type === "critical" ? "bg-red-400" :
                          alert.type === "warning" ? "bg-amber-400" :
                          "bg-blue-400"
                        }`} />
                        <div>
                          <div className={`text-xs font-semibold mb-0.5 ${
                            alert.type === "critical" ? "text-red-300" :
                            alert.type === "warning" ? "text-amber-300" :
                            "text-blue-300"
                          }`}>{alert.time}</div>
                          <div className="text-white/60 leading-relaxed">{alert.msg}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ward Table */}
              <div className="mt-4 bg-white/5 rounded-2xl p-5 border border-white/8">
                <div className="text-white font-semibold text-sm mb-4">Ward-Level Status</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="text-white/30 border-b border-white/8">
                        <th className="text-left pb-3 font-medium">Ward</th>
                        <th className="text-left pb-3 font-medium">Pressure (bar)</th>
                        <th className="text-left pb-3 font-medium">Flow (L/min)</th>
                        <th className="text-left pb-3 font-medium">Consumption</th>
                        <th className="text-left pb-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      {wardData.map((ward, i) => (
                        <tr key={ward.ward} className="border-b border-white/5">
                          <td className="py-2.5 text-white font-medium">{ward.ward}</td>
                          <td className="py-2.5 text-white/70">{ward.pressure}</td>
                          <td className="py-2.5 text-white/70">{ward.flow}</td>
                          <td className="py-2.5">
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${ward.status === "warning" ? "bg-amber-400" : "bg-teal-400"}`}
                                  style={{ width: `${ward.consumption}%` }}
                                />
                              </div>
                              <span className="text-white/50">{ward.consumption}%</span>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              ward.status === "warning"
                                ? "bg-amber-500/15 text-amber-300 border border-amber-500/20"
                                : "bg-teal-500/15 text-teal-300 border border-teal-500/20"
                            }`}>
                              {ward.status === "warning" ? "⚠ Attention" : "● Normal"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

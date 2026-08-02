'use client';

import { useEffect, useState } from 'react';

function useTelemetry() {
  const [data, setData] = useState({
    pressure: 4.18,
    flow: 182,
    health: 97.8,
    uptime: 99.98,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        pressure: Number((4.1 + Math.random() * 0.25).toFixed(2)),
        flow: Math.round(176 + Math.random() * 12),
        health: Number((97 + Math.random() * 2).toFixed(1)),
        uptime: Number((99.95 + Math.random() * 0.04).toFixed(2)),
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return data;
}

export default function HeroExperience() {
  const telemetry = useTelemetry();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617]">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[40%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[180px]" />
      </div>

      {/* Navigation */}
      <header className="relative z-20">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
          <div className="text-xl font-semibold tracking-[0.2em]">
            OXYTRACK
          </div>

          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#platform" className="hover:text-cyan-300">
              Platform
            </a>
            <a href="#technology" className="hover:text-cyan-300">
              Technology
            </a>
            <a href="#architecture" className="hover:text-cyan-300">
              Architecture
            </a>
            <a href="#contact" className="hover:text-cyan-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-16 px-8 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Live oxygen telemetry network
          </div>

          <h1 className="text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Hospital oxygen infrastructure intelligence
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
            Real-time pressure monitoring, flow analytics, leak detection, and
            predictive maintenance for medical oxygen pipeline systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-slate-900 transition hover:bg-cyan-300">
              View live telemetry
            </button>

            <button className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300">
              Explore architecture
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          {/* Network frame */}
          <div className="relative rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Oxygen network
              </div>

              <div className="flex items-center gap-2 text-sm text-cyan-300">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Live
              </div>
            </div>

            {/* Animated network */}
            <svg
              viewBox="0 0 520 380"
              className="h-[380px] w-full"
            >
              <defs>
                <linearGradient id="pipe" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0EA5E9" />
                  <stop offset="100%" stopColor="#67E8F9" />
                </linearGradient>
              </defs>

              <circle cx="260" cy="190" r="12" fill="#19D4E8" />

              {[
                [260, 190, 430, 70],
                [260, 190, 430, 310],
                [260, 190, 90, 70],
                [260, 190, 90, 310],
                [260, 190, 470, 190],
                [260, 190, 50, 190],
              ].map(([x1, y1, x2, y2], i) => (
                <g key={i}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#pipe)"
                    strokeWidth="3"
                  />

                  <circle r="3" fill="#67E8F9">
                    <animateMotion
                      dur={`${3 + i * 0.3}s`}
                      repeatCount="indefinite"
                      path={`M ${x1} ${y1} L ${x2} ${y2}`}
                    />
                  </circle>
                </g>
              ))}

              {[
                [430, 70, 'ICU'],
                [430, 310, 'THEATRE'],
                [90, 70, 'ER'],
                [90, 310, 'NICU'],
                [470, 190, 'HDU'],
                [50, 190, 'WARD'],
              ].map(([x, y, label]) => (
                <g key={label as string}>
                  <circle
                    cx={x as number}
                    cy={y as number}
                    r="7"
                    fill="#22D3EE"
                  />
                  <text
                    x={x as number}
                    y={(y as number) + 24}
                    textAnchor="middle"
                    fill="#9FB3C8"
                    fontSize="10"
                    letterSpacing="1.5"
                  >
                    {label as string}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Floating telemetry */}
          <div className="absolute -left-8 top-12 w-56 rounded-2xl border border-white/10 bg-[#071A35]/90 p-4 backdrop-blur-xl">
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">
              ICU pressure
            </div>
            <div className="mt-2 text-3xl font-semibold text-white">
              {telemetry.pressure}<span className="text-lg text-cyan-300"> bar</span>
            </div>
          </div>

          <div className="absolute -right-8 bottom-10 w-60 rounded-2xl border border-white/10 bg-[#071A35]/90 p-4 backdrop-blur-xl">
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">
              Network flow
            </div>
            <div className="mt-2 text-3xl font-semibold text-white">
              {telemetry.flow}<span className="text-lg text-cyan-300"> L/min</span>
            </div>
          </div>

          <div className="absolute right-10 top-[-18px] rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 backdrop-blur-xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-300">
              Infrastructure health
            </div>
            <div className="mt-1 text-xl font-semibold text-white">
              {telemetry.health}%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

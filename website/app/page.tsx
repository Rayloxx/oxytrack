"use client";

import { useEffect, useState } from "react";

type Telemetry = {
  pressure: number;
  flow: number;
  health: number;
  uptime: number;
};

function generateTelemetry(): Telemetry {
  return {
    pressure: Number((4.08 + Math.random() * 0.25).toFixed(2)),
    flow: Number((176 + Math.random() * 12).toFixed(1)),
    health: Number((97.2 + Math.random() * 1.2).toFixed(1)),
    uptime: Number((99.94 + Math.random() * 0.05).toFixed(2)),
  };
}

export default function HomePage() {
  const [telemetry, setTelemetry] = useState(generateTelemetry());

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(generateTelemetry());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Navigation */}
      <header className="relative z-20 border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="text-2xl font-semibold tracking-tight">
            OxyTrack
          </div>

          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#platform" className="hover:text-cyan-400">
              Platform
            </a>
            <a href="#technology" className="hover:text-cyan-400">
              Technology
            </a>
            <a href="#architecture" className="hover:text-cyan-400">
              Architecture
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Live hospital telemetry platform
            </div>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Hospital oxygen infrastructure intelligence
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              Real-time pressure monitoring, flow analytics, leak detection,
              and predictive maintenance for medical oxygen pipeline systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-black transition hover:bg-cyan-300">
                View live telemetry
              </button>

              <button className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300">
                Explore architecture
              </button>
            </div>
          </div>

          {/* Telemetry + Network */}
          <div className="relative">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    Live system telemetry
                  </h3>
                  <p className="text-sm text-white/50">
                    Updated every 3 seconds
                  </p>
                </div>

                <div className="flex items-center gap-2 text-cyan-300">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  Live
                </div>
              </div>

              <div className="grid gap-4">
                <TelemetryCard
                  label="ICU pressure"
                  value={`${telemetry.pressure} bar`}
                />
                <TelemetryCard
                  label="Network flow"
                  value={`${telemetry.flow} L/min`}
                />
                <TelemetryCard
                  label="Infrastructure health"
                  value={`${telemetry.health}%`}
                />
                <TelemetryCard
                  label="Sensor uptime"
                  value={`${telemetry.uptime}%`}
                />
              </div>

              {/* Oxygen network visualization */}
              <div className="mt-10 rounded-3xl border border-cyan-500/10 bg-[#071A35] p-8">
                <div className="mb-6 text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Oxygen network
                </div>

                <svg
                  viewBox="0 0 420 220"
                  className="h-56 w-full"
                >
                  <line x1="50" y1="110" x2="140" y2="110" stroke="#19D4E8" strokeWidth="3" />
                  <line x1="140" y1="110" x2="230" y2="60" stroke="#19D4E8" strokeWidth="3" />
                  <line x1="140" y1="110" x2="230" y2="160" stroke="#19D4E8" strokeWidth="3" />
                  <line x1="230" y1="60" x2="340" y2="60" stroke="#19D4E8" strokeWidth="3" />
                  <line x1="230" y1="160" x2="340" y2="160" stroke="#19D4E8" strokeWidth="3" />

                  <circle cx="50" cy="110" r="8" fill="#19D4E8" />
                  <circle cx="140" cy="110" r="8" fill="#19D4E8" />
                  <circle cx="230" cy="60" r="8" fill="#19D4E8" />
                  <circle cx="230" cy="160" r="8" fill="#19D4E8" />
                  <circle cx="340" cy="60" r="8" fill="#19D4E8" />
                  <circle cx="340" cy="160" r="8" fill="#19D4E8" />

                  <text x="24" y="132" fill="#9FB3C8" fontSize="11">
                    Tank
                  </text>
                  <text x="118" y="132" fill="#9FB3C8" fontSize="11">
                    Manifold
                  </text>
                  <text x="214" y="44" fill="#9FB3C8" fontSize="11">
                    ICU
                  </text>
                  <text x="196" y="182" fill="#9FB3C8" fontSize="11">
                    Theatre
                  </text>
                  <text x="322" y="44" fill="#9FB3C8" fontSize="11">
                    Ward
                  </text>
                  <text x="300" y="182" fill="#9FB3C8" fontSize="11">
                    Emergency
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TelemetryCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <span className="text-white/60">{label}</span>
      <span className="font-semibold text-cyan-300">{value}</span>
    </div>
  );
}

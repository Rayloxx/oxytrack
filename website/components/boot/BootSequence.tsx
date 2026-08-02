'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function BootSequence({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);

  const [stage, setStage] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.2,
          onComplete,
        });
      },
    });

    // Initial darkness
    tl.set(containerRef.current, { opacity: 1 });
    tl.set(logoRef.current, { opacity: 0, scale: 0.9 });
    tl.set(pulseRef.current, { opacity: 0, scale: 0 });
    tl.set(networkRef.current, { opacity: 0 });

    // Logo ignition
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
    });

    tl.call(() => setStage(1));

    // Pressure pulse
    tl.to(
      pulseRef.current,
      {
        opacity: 1,
        scale: 6,
        duration: 1.4,
      },
      '-=0.2'
    );

    tl.to(
      pulseRef.current,
      {
        opacity: 0,
        duration: 0.8,
      },
      '-=0.4'
    );

    tl.call(() => setStage(2));

    // Network activation
    tl.to(
      networkRef.current,
      {
        opacity: 1,
        duration: 1.6,
      },
      '-=0.4'
    );

    tl.call(() => setStage(3));

    // Telemetry synchronization
    tl.to(
      logoRef.current,
      {
        boxShadow: '0 0 80px rgba(25,212,232,0.8)',
        duration: 1.2,
      },
      '-=0.2'
    );

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      {/* Pressure pulse */}
      <div
        ref={pulseRef}
        className="absolute h-32 w-32 rounded-full border border-cyan-400/50"
      />

      {/* Oxygen network */}
      <div
        ref={networkRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 1200 700" className="h-full w-full opacity-60">
          <defs>
            <linearGradient id="pipe" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>

          {/* Main manifold */}
          <line x1="600" y1="350" x2="850" y2="200" stroke="url(#pipe)" strokeWidth="3" />
          <line x1="600" y1="350" x2="850" y2="500" stroke="url(#pipe)" strokeWidth="3" />
          <line x1="600" y1="350" x2="350" y2="200" stroke="url(#pipe)" strokeWidth="3" />
          <line x1="600" y1="350" x2="350" y2="500" stroke="url(#pipe)" strokeWidth="3" />

          {/* Sensor nodes */}
          {[
            [600, 350],
            [850, 200],
            [850, 500],
            [350, 200],
            [350, 500],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="10" fill="#19D4E8">
                <animate
                  attributeName="r"
                  values="8;12;8"
                  dur="2.8s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={x}
                cy={y}
                r="22"
                stroke="#19D4E8"
                strokeOpacity="0.25"
                fill="none"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Logo */}
      <div
        ref={logoRef}
        className="relative z-20 text-center"
      >
        <div className="text-6xl font-bold tracking-[0.25em] text-white md:text-7xl">
          OXYTRACK
        </div>
        <div className="mt-4 text-sm uppercase tracking-[0.4em] text-cyan-300">
          Infrastructure intelligence
        </div>

        {stage >= 3 && (
          <div className="mt-8 text-cyan-400 text-sm tracking-[0.3em]">
            Synchronizing telemetry network...
          </div>
        )}
      </div>
    </div>
  );
}

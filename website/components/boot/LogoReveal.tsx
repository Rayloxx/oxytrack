'use client';

import Image from 'next/image';
import { forwardRef } from 'react';

const LogoReveal = forwardRef<HTMLDivElement>(function LogoReveal(_, ref) {
  return (
    <div
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617]"
    >
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />
      </div>

      {/* Central composition */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 scale-125 rounded-full bg-cyan-400/10 blur-[60px]" />

          <Image
            src="/logo/oxytrack-logo.png"
            alt="OxyTrack Technologies"
            width={260}
            height={260}
            priority
            className="relative h-auto w-[180px] md:w-[220px] lg:w-[260px] object-contain"
          />
        </div>

        {/* Wordmark */}
        <div className="mt-12 text-center">
          <h1 className="text-5xl font-semibold tracking-[0.32em] text-white md:text-6xl lg:text-7xl">
            OXYTRACK
          </h1>

          <div className="mt-5 text-sm uppercase tracking-[0.48em] text-cyan-300">
            Hospital oxygen infrastructure intelligence
          </div>

          <div className="mt-3 text-xs tracking-[0.34em] text-white/45">
            Pressure • Flow • Telemetry • Analytics
          </div>
        </div>
      </div>

      {/* Precision telemetry points */}
      <div className="absolute left-[18%] top-[30%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
      <div className="absolute right-[22%] top-[36%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
      <div className="absolute left-[30%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
      <div className="absolute right-[34%] bottom-[18%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
    </div>
  );
});

export default LogoReveal;

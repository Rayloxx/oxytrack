'use client';

import Image from 'next/image';
import { forwardRef } from 'react';

const LogoReveal = forwardRef<HTMLDivElement>(function LogoReveal(_, ref) {
  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center select-none"
    >
      {/* Precision ambient light */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/8 blur-[120px]" />
      <div className="absolute h-[260px] w-[260px] rounded-full border border-cyan-400/10" />

      {/* Logo */}
      <div className="relative z-10">
        <Image
          src="/logo/oxytrack-logo.svg"
          alt="OxyTrack Technologies"
          width={240}
          height={240}
          priority
          className="h-auto w-[180px] md:w-[220px] lg:w-[240px]"
        />
      </div>

      {/* Brand text */}
      <div className="relative z-10 mt-10 text-center">
        <h1 className="text-5xl font-semibold tracking-[0.28em] text-white md:text-6xl lg:text-7xl">
          OXYTRACK
        </h1>

        <div className="mt-5 text-sm uppercase tracking-[0.45em] text-cyan-300">
          Hospital oxygen infrastructure intelligence
        </div>

        <div className="mt-3 text-xs tracking-[0.3em] text-white/45">
          Pressure • Flow • Telemetry • Analytics
        </div>
      </div>

      {/* Telemetry anchor points */}
      <div className="absolute left-[22%] top-[28%] h-2 w-2 rounded-full bg-cyan-400" />
      <div className="absolute right-[24%] top-[34%] h-1.5 w-1.5 rounded-full bg-cyan-300" />
      <div className="absolute left-[34%] bottom-[26%] h-1 w-1 rounded-full bg-cyan-200" />
      <div className="absolute right-[36%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-cyan-300" />
    </div>
  );
});

export default LogoReveal;

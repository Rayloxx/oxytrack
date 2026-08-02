'use client';

import { forwardRef } from 'react';

const PressurePulse = forwardRef<HTMLDivElement>(function PressurePulse(_, ref) {
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      {/* Primary wave */}
      <div className="absolute h-28 w-28 rounded-full border border-cyan-300/70 pulse-wave pulse-wave-1" />

      {/* Secondary wave */}
      <div className="absolute h-28 w-28 rounded-full border border-cyan-400/50 pulse-wave pulse-wave-2" />

      {/* Tertiary wave */}
      <div className="absolute h-28 w-28 rounded-full border border-cyan-500/30 pulse-wave pulse-wave-3" />

      {/* Energy ring */}
      <div className="absolute h-16 w-16 rounded-full bg-cyan-400/20 pulse-core" />

      {/* Directional pressure rays */}
      <svg
        className="absolute h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pulseGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className="pulse-rays">
          <line x1="500" y1="500" x2="860" y2="500" stroke="url(#pulseGradient)" strokeWidth="1.5" />
          <line x1="500" y1="500" x2="140" y2="500" stroke="url(#pulseGradient)" strokeWidth="1.5" />
          <line x1="500" y1="500" x2="500" y2="140" stroke="url(#pulseGradient)" strokeWidth="1.5" />
          <line x1="500" y1="500" x2="500" y2="860" stroke="url(#pulseGradient)" strokeWidth="1.5" />

          <line x1="500" y1="500" x2="760" y2="240" stroke="url(#pulseGradient)" strokeWidth="1.2" />
          <line x1="500" y1="500" x2="240" y2="240" stroke="url(#pulseGradient)" strokeWidth="1.2" />
          <line x1="500" y1="500" x2="760" y2="760" stroke="url(#pulseGradient)" strokeWidth="1.2" />
          <line x1="500" y1="500" x2="240" y2="760" stroke="url(#pulseGradient)" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
});

export default PressurePulse;

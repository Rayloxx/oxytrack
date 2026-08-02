'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LogoReveal from './LogoReveal';
import PressurePulse from './PressurePulse';
import NetworkActivation from './NetworkActivation';
import OxygenAmbient from './OxygenAmbient';

export default function BootSequence({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    tl.set(containerRef.current, { opacity: 1 });

    // 0-1.2s darkness
    tl.to({}, { duration: 1.2 });

    // 1.2-2.4s logo ignition
    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
        scale: 0.94,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
      }
    );

    // 2.4-3.6s pressure pulse
    tl.fromTo(
      pulseRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 7,
        opacity: 1,
        duration: 1.4,
      },
      '-=0.3'
    );

    tl.to(
      pulseRef.current,
      {
        opacity: 0,
        duration: 0.6,
      },
      '-=0.4'
    );

    // 3.6-5.6s network activation
    tl.fromTo(
      networkRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      },
      '-=0.3'
    );

    // 5.6-7.6s synchronization
    tl.to({}, { duration: 2 });

    // Exit
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      onComplete,
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#020617]"
    >
      <OxygenAmbient />

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={networkRef}
          className="absolute inset-0 opacity-0"
        >
          <NetworkActivation />
        </div>

        <div
          ref={pulseRef}
          className="absolute h-32 w-32 rounded-full border border-cyan-400/40 opacity-0"
        />

        <div ref={logoRef} className="relative z-20">
          <LogoReveal />
        </div>
      </div>
    </div>
  );
}

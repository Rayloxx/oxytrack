'use client';

import { useEffect, useState } from 'react';
import BootSequence from '@/components/boot/BootSequence';
import HeroExperience from '@/components/hero/HeroExperience';
import DataFlowSection from '@/components/architecture/DataFlowSection';

export default function HomePage() {
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    document.documentElement.style.background = '#020617';
    document.body.style.background = '#020617';
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {!bootComplete && (
        <BootSequence onComplete={() => setBootComplete(true)} />
      )}

      <div
        className={`transition-opacity duration-1000 ${
          bootComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <HeroExperience />
      </div>
    </main>
  );
}

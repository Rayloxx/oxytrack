'use client';

import { useState } from 'react';

import BootSequence from '@/components/boot/BootSequence';
import GlobalNetworkField from '@/components/cinematic/GlobalNetworkField';
import { MotionTimelineProvider } from '@/components/cinematic/MotionTimeline';

import HeroExperience from '@/components/hero/HeroExperience';
import DataFlowSection from '@/components/sections/DataFlowSection';
import SensorPlatformSection from '@/components/sections/SensorPlatformSection';
import MissionControlSection from '@/components/sections/MissionControlSection';
import IntelligenceEngineSection from '@/components/sections/IntelligenceEngineSection';
import HospitalTopologySection from '@/components/sections/HospitalTopologySection';
import EconomicImpactSection from '@/components/sections/EconomicImpactSection';
import CommandCenterSection from '@/components/sections/CommandCenterSection';
import ClinicalReliabilitySection from '@/components/sections/ClinicalReliabilitySection';
import FinalCommandSection from '@/components/sections/FinalCommandSection';

export default function HomePage() {
const [bootComplete, setBootComplete] = useState(false);

return ( <MotionTimelineProvider> <main className='relative min-h-screen overflow-hidden bg-[#020617] text-white'>
{/* Global animated network field */} <GlobalNetworkField />

    {/* Cinematic boot sequence */}
    {!bootComplete && (
      <BootSequence onComplete={() => setBootComplete(true)} />
    )}

    {/* Main experience */}
    <div
      className={`relative z-10 transition-opacity duration-1000 ${
        bootComplete ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <HeroExperience />

      <DataFlowSection />

      <SensorPlatformSection />

      <MissionControlSection />

      <IntelligenceEngineSection />

      <HospitalTopologySection />

      <EconomicImpactSection />

      <CommandCenterSection />

      <ClinicalReliabilitySection />

      <FinalCommandSection />
    </div>
  </main>
</MotionTimelineProvider>

);
}

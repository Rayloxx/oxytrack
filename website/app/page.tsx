'use client';

import { useState } from 'react';

import BootSequence from '@/components/boot/BootSequence';
import GlobalNetworkField from '@/components/cinematic/GlobalNetworkField';
import TelemetryPulseBus from '@/components/cinematic/TelemetryPulseBus';
import NetworkContinuationBridge from '@/components/cinematic/NetworkContinuationBridge';
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
{/* Global cinematic background */} <GlobalNetworkField />

    {/* Global telemetry pulse bus */}
    <TelemetryPulseBus />

    {/* Cinematic boot sequence */}
    {!bootComplete && (
      <BootSequence onComplete={() => setBootComplete(true)} />
    )}

    {/* Main cinematic experience */}
    <div
      className={`relative z-10 transition-opacity duration-1000 ${
        bootComplete ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Hero experience */}
      <HeroExperience />

      {/* Hero → Architecture bridge */}
      <NetworkContinuationBridge />

      {/* Architecture */}
      <DataFlowSection />

      {/* Platform */}
      <SensorPlatformSection />

      {/* Mission control */}
      <MissionControlSection />

      {/* Intelligence */}
      <IntelligenceEngineSection />

      {/* Hospital topology */}
      <HospitalTopologySection />

      {/* Economic impact */}
      <EconomicImpactSection />

      {/* Command center */}
      <CommandCenterSection />

      {/* Clinical reliability */}
      <ClinicalReliabilitySection />

      {/* Final command */}
      <FinalCommandSection />
    </div>
  </main>
</MotionTimelineProvider>

);
}

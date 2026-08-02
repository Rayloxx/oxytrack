'use client';

import { useEffect, useState } from 'react';

import BootSequence from '@/components/boot/BootSequence';
import HeroExperience from '@/components/hero/HeroExperience';
import DataFlowSection from '@/components/architecture/DataFlowSection';
import SensorPlatformSection from '@/components/platform/SensorPlatformSection';
import MissionControlSection from '@/components/dashboard/MissionControlSection';
import IntelligenceEngineSection from '@/components/intelligence/IntelligenceEngineSection';
import HospitalTopologySection from '@/components/topology/HospitalTopologySection';
import EconomicImpactSection from '@/components/economics/EconomicImpactSection';
import CommandCenterSection from '@/components/command/CommandCenterSection';
import ClinicalReliabilitySection from '@/components/reliability/ClinicalReliabilitySection';
import FinalCommandSection from '@/components/cta/FinalCommandSection';

export default function HomePage() {
const [bootComplete, setBootComplete] = useState(false);

useEffect(() => {
document.documentElement.style.background = '#020617';
document.body.style.background = '#020617';
}, []);

return ( <main className='min-h-screen bg-[#020617] text-white overflow-hidden'>
{!bootComplete && (
<BootSequence onComplete={() => setBootComplete(true)} />
)}

  <div
    className={`transition-opacity duration-1000 ${
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

);
}

'use client';

import TelemetryHUD from '@/components/hero/TelemetryHUD';

import OxygenNetwork3D from '@/components/network/OxygenNetwork3D';

import PressureWaveEngine from '@/components/network/PressureWaveEngine';

import TelemetryPulseOverlay from '@/components/network/TelemetryPulseOverlay';

import HolographicTelemetry from '@/components/network/HolographicTelemetry';

import CameraDirector from '@/components/cinematic/CameraDirector';

import HeroCopy from '@/components/hero/HeroCopy';

export default function HeroExperience() {
return ( <section className='relative min-h-screen overflow-hidden bg-[#020617]'>
{/* Background atmosphere */} <div className='absolute inset-0'> <div className='absolute left-1/2 top-[42%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[180px]' /> </div>

```
  {/* Navigation */}
  <header className='relative z-20'>
    <div className='mx-auto flex h-24 max-w-7xl items-center justify-between px-8'>
      <div className='text-xl font-semibold tracking-[0.22em] text-white'>
        OXYTRACK
      </div>

      <nav className='hidden items-center gap-8 text-sm text-white/70 md:flex'>
        <a href='#platform' className='transition hover:text-cyan-300'>
          Platform
        </a>
        <a href='#technology' className='transition hover:text-cyan-300'>
          Technology
        </a>
        <a href='#architecture' className='transition hover:text-cyan-300'>
          Architecture
        </a>
        <a href='#contact' className='transition hover:text-cyan-300'>
          Contact
        </a>
      </nav>
    </div>
  </header>

  <div className='relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-20 px-8 py-16 lg:grid-cols-[1fr_1.15fr]'>
    {/* Left column */}
    <HeroCopy />
    {/* Right column */}
    <div className="relative h-[720px]">
  <TelemetryHUD />
  <PressureWaveEngine />
  <TelemetryPulseOverlay />
  <HolographicTelemetry />

  <div className="absolute inset-0 rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
    <CameraDirector>
      <OxygenNetwork3D />
    </CameraDirector>
  </div>
</div>
  </div>
</section>

);
}

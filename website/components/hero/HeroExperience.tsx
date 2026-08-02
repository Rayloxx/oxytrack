'use client';

import TelemetryHUD from '@/components/hero/TelemetryHUD';

import OxygenNetwork3D from '@/components/network/OxygenNetwork3D';

import PressureWaveEngine from '@/components/network/PressureWaveEngine';

import TelemetryPulseOverlay from '@/components/network/TelemetryPulseOverlay';

import HolographicTelemetry from '@/components/network/HolographicTelemetry';

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
    <div>
      <div className='mb-6 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300'>
        Real-time oxygen telemetry
      </div>

      <h1 className='text-5xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl'>
        Every breath
        <br />
        accounted for.
      </h1>

      <p className='mt-8 max-w-xl text-lg leading-8 text-white/65'>
        OxyTrack gives hospitals continuous visibility into oxygen pressure,
        flow rate, consumption, leaks, and infrastructure health across the
        entire medical gas network.
      </p>

      <div className='mt-10 flex flex-wrap gap-4'>
        <button className='rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-slate-900 transition hover:bg-cyan-300'>
          View live telemetry
        </button>

        <button className='rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300'>
          Explore architecture
        </button>
      </div>

      <div className='mt-14 grid grid-cols-2 gap-6'>
        <div>
          <div className='text-3xl font-semibold text-white'>4.21 bar</div>
          <div className='mt-1 text-sm text-white/50'>
            Average network pressure
          </div>
        </div>

        <div>
          <div className='text-3xl font-semibold text-white'>182 L/min</div>
          <div className='mt-1 text-sm text-white/50'>
            Live oxygen flow
          </div>
        </div>

        <div>
          <div className='text-3xl font-semibold text-white'>97.8%</div>
          <div className='mt-1 text-sm text-white/50'>
            Infrastructure health
          </div>
        </div>

        <div>
          <div className='text-3xl font-semibold text-white'>99.98%</div>
          <div className='mt-1 text-sm text-white/50'>
            Telemetry uptime
          </div>
        </div>
      </div>
    </div>

    {/* Right column */}
    <div className="relative h-[720px]">
  <TelemetryHUD />
  <PressureWaveEngine />
  <TelemetryPulseOverlay />
  <HolographicTelemetry />

  <div className="absolute inset-0 rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
    <OxygenNetwork3D />
  </div>
</div>
  </div>
</section>

);
}

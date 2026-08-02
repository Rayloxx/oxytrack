'use client';

import { motion } from 'framer-motion';
import { useTelemetrySync } from '@/components/network/TelemetrySync';

export default function HeroCopy() {
const telemetry = useTelemetrySync();

const phaseText =
telemetry.phase === 'propagating'
? 'Pressure wave propagating across oxygen infrastructure'
: telemetry.phase === 'stabilizing'
? 'Network stabilizing after telemetry synchronization'
: 'Continuous oxygen infrastructure monitoring';

return ( <div className='relative z-10 max-w-2xl'>
<motion.div
initial={{ opacity: 0, y: 24 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className='mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2'
> <div className='h-2 w-2 rounded-full bg-cyan-300 animate-pulse' /> <span className='text-sm text-cyan-300'>
{phaseText} </span>
</motion.div>

  <motion.h1
    initial={{ opacity: 0, y: 32 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.0, delay: 0.2 }}
    className='text-6xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl'
  >
    Hospitals monitor
    <br />
    patients continuously.
    <br />
    OxyTrack monitors
    <br />
    oxygen infrastructure
    <br />
    continuously.
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.5 }}
    className='mt-10 max-w-xl text-xl leading-9 text-white/65'
  >
    A real-time telemetry platform for hospital medical gas systems,
    providing pressure intelligence, flow analytics, leak detection,
    predictive maintenance, and infrastructure visibility from the central
    oxygen source to every critical care unit.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className='mt-12 flex flex-wrap gap-4'
  >
    <button className='rounded-2xl bg-cyan-400 px-7 py-3 font-medium text-slate-900 transition hover:bg-cyan-300'>
      Explore the platform
    </button>

    <button className='rounded-2xl border border-white/15 px-7 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300'>
      View system architecture
    </button>
  </motion.div>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.0, delay: 1.1 }}
    className='mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-8'
  >
    <div>
      <div className='text-4xl font-semibold text-white'>
        {telemetry.pressure.toFixed(2)} bar
      </div>
      <div className='mt-2 text-sm text-white/50'>
        Live network pressure
      </div>
    </div>

    <div>
      <div className='text-4xl font-semibold text-white'>
        {telemetry.flow} L/min
      </div>
      <div className='mt-2 text-sm text-white/50'>
        Oxygen flow telemetry
      </div>
    </div>

    <div>
      <div className='text-4xl font-semibold text-white'>
        {telemetry.health.toFixed(1)}%
      </div>
      <div className='mt-2 text-sm text-white/50'>
        Infrastructure health
      </div>
    </div>

    <div>
      <div className='text-4xl font-semibold text-white'>
        {telemetry.purity.toFixed(1)}%
      </div>
      <div className='mt-2 text-sm text-white/50'>
        Oxygen purity visibility
      </div>
    </div>
  </motion.div>
</div>

);
}

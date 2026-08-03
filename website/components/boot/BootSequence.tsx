'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

type BootSequenceProps = {
onComplete: () => void;
};

const phases = [
{ id: 'logo', label: 'OxyTrack Technologies', duration: 900 },
{ id: 'core', label: 'Initializing oxygen intelligence core', duration: 900 },
{ id: 'network', label: 'Activating hospital telemetry network', duration: 1000 },
{ id: 'sync', label: 'Synchronizing pressure and flow telemetry', duration: 1000 },
{ id: 'ready', label: 'Mission control online', duration: 700 },
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
const [phaseIndex, setPhaseIndex] = useState(0);

useEffect(() => {
if (phaseIndex >= phases.length) {
const timeout = setTimeout(onComplete, 300);
return () => clearTimeout(timeout);
}

const timeout = setTimeout(() => {
  setPhaseIndex((current) => current + 1);
}, phases[phaseIndex].duration);

return () => clearTimeout(timeout);

}, [phaseIndex, onComplete]);

const current = phases[Math.min(phaseIndex, phases.length - 1)];
const progress = Math.min((phaseIndex + 1) / phases.length, 1);

return ( <AnimatePresence>
<motion.div
className='fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#01040B]'
initial={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.9 }}
>
{/* Ambient glow */}
<motion.div
className='absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]'
animate={{
scale: [0.9, 1.05, 1],
opacity: [0.08, 0.18, 0.12],
}}
transition={{
duration: 4,
repeat: Infinity,
ease: 'easeInOut',
}}
/>

    {/* Grid */}
    <div className='absolute inset-0 opacity-15'>
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]' />
    </div>

    {/* Concentric activation rings */}
    {[1, 2, 3].map((ring) => (
      <motion.div
        key={ring}
        className='absolute left-1/2 top-1/2 rounded-full border border-cyan-400/20'
        style={{
          width: `${ring * 180}px`,
          height: `${ring * 180}px`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.22, 0.08],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          delay: ring * 0.25,
        }}
      />
    ))}

    <div className='relative z-10 flex w-full max-w-2xl flex-col items-center px-8'>
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='relative'
      >
        <motion.div
          className='absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl'
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [0.9, 1.08, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <img
          src='/logo/oxytrack-logo.png'
          alt='OxyTrack'
          className='relative h-24 w-24 object-contain'
        />
      </motion.div>

      {/* Brand */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className='mt-8 text-4xl font-semibold tracking-tight text-white'
      >
        OxyTrack
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className='mt-2 text-sm uppercase tracking-[0.32em] text-cyan-300'
      >
        Hospital oxygen infrastructure intelligence
      </motion.div>

      {/* Status */}
      <div className='mt-14 w-full max-w-lg'>
        <div className='flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40'>
          <span>System boot</span>
          <span>{Math.round(progress * 100)}%</span>
        </div>

        <div className='mt-4 h-1.5 overflow-hidden rounded-full bg-white/10'>
          <motion.div
            className='h-full rounded-full bg-cyan-300'
            initial={{ width: '0%' }}
            animate={{ width: `${progress * 100}%` }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

        <div className='mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl'>
          <motion.div
            className='h-2 w-2 rounded-full bg-cyan-300'
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
          />

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className='text-white/80'
          >
            {current.label}
          </motion.div>
        </div>
      </div>

      {/* Telemetry markers */}
      <div className='mt-16 flex items-center gap-8 text-xs uppercase tracking-[0.22em] text-white/35'>
        {['Pressure', 'Flow', 'Network', 'Cloud'].map((item, index) => (
          <motion.div
            key={item}
            className='flex items-center gap-2'
            initial={{ opacity: 0 }}
            animate={{
              opacity: phaseIndex >= index + 1 ? 1 : 0.3,
            }}
            transition={{ duration: 0.4 }}
          >
            <div className='h-1.5 w-1.5 rounded-full bg-cyan-300' />
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
</AnimatePresence>

);
}

'use client';

import { motion } from 'framer-motion';

export default function GlobalNetworkField() {
return ( <div className='pointer-events-none fixed inset-0 z-0 overflow-hidden'>
{/* Deep atmosphere */} <div className='absolute inset-0 bg-[#020617]' />

  {/* Large cyan field */}
  <motion.div
    className='absolute left-1/2 top-1/2 h-[1600px] w-[1600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[260px]'
    animate={{
      scale: [1, 1.05, 1],
      opacity: [0.03, 0.05, 0.03],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />

  {/* Secondary field */}
  <motion.div
    className='absolute left-[25%] top-[20%] h-[900px] w-[900px] rounded-full bg-cyan-400/[0.02] blur-[180px]'
    animate={{
      x: [0, 40, 0],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />

  {/* Infrastructure grid */}
  <div className='absolute inset-0 opacity-[0.05]'>
    <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]' />
  </div>

  {/* Horizontal infrastructure conduits */}
  {Array.from({ length: 6 }).map((_, i) => (
    <motion.div
      key={i}
      className='absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent'
      style={{
        top: `${15 + i * 14}%`,
      }}
      animate={{
        opacity: [0.08, 0.24, 0.08],
      }}
      transition={{
        duration: 4 + i,
        repeat: Infinity,
        delay: i * 0.3,
      }}
    />
  ))}

  {/* Floating telemetry particles */}
  {Array.from({ length: 28 }).map((_, i) => (
    <motion.div
      key={i}
      className='absolute h-1.5 w-1.5 rounded-full bg-cyan-300/40'
      initial={{
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [
          `${Math.random() * 100}%`,
          `${Math.random() * 100}%`,
          `${Math.random() * 100}%`,
        ],
        y: [
          `${Math.random() * 100}%`,
          `${Math.random() * 100}%`,
          `${Math.random() * 100}%`,
        ],
        opacity: [0.08, 0.45, 0.08],
      }}
      transition={{
        duration: 12 + Math.random() * 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  ))}
</div>

);
}

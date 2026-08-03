'use client';

import { motion } from 'framer-motion';

export default function GlobalNetworkField() {
return ( <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>
{/* Base network glow */}
<motion.div
className='absolute left-1/2 top-0 h-[1400px] w-[1400px] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[260px]'
animate={{
opacity: [0.04, 0.08, 0.04],
scale: [1, 1.08, 1],
}}
transition={{
duration: 12,
repeat: Infinity,
ease: 'easeInOut',
}}
/>

  {/* Vertical energy columns */}
  {[18, 34, 50, 66, 82].map((x, i) => (
    <motion.div
      key={x}
      className='absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent'
      style={{ left: `${x}%` }}
      animate={{
        opacity: [0.08, 0.28, 0.08],
      }}
      transition={{
        duration: 6 + i,
        repeat: Infinity,
        delay: i * 0.4,
      }}
    />
  ))}

  {/* Horizontal network grid */}
  {[15, 30, 45, 60, 75, 90].map((y, i) => (
    <motion.div
      key={y}
      className='absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent'
      style={{ top: `${y}%` }}
      animate={{
        opacity: [0.04, 0.14, 0.04],
      }}
      transition={{
        duration: 8 + i,
        repeat: Infinity,
        delay: i * 0.3,
      }}
    />
  ))}

  {/* Floating telemetry particles */}
  {Array.from({ length: 24 }).map((_, i) => (
    <motion.div
      key={i}
      className='absolute h-1 w-1 rounded-full bg-cyan-300/60'
      initial={{
        x: `${(i * 11) % 100}%`,
        y: '110%',
      }}
      animate={{
        y: '-10%',
        opacity: [0, 0.7, 0],
      }}
      transition={{
        duration: 12 + (i % 5),
        repeat: Infinity,
        delay: i * 0.6,
        ease: 'linear',
      }}
    />
  ))}
</div>

);
}

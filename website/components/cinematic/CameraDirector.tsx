'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useTelemetrySync } from '@/components/network/TelemetrySync';

export default function CameraDirector({
children,
}: {
children: React.ReactNode;
}) {
const controls = useAnimation();
const telemetry = useTelemetrySync();

useEffect(() => {
async function sequence() {
// Phase 1: manifold focus
await controls.start({
scale: 1.18,
y: 24,
filter: 'blur(0px)',
transition: {
duration: 1.4,
ease: [0.22, 1, 0.36, 1],
},
});

  // Phase 2: pressure ignition
  await controls.start({
    scale: 1.08,
    y: 8,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  // Phase 3: network expansion
  await controls.start({
    scale: 1,
    y: 0,
    transition: {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    },
  });
}

sequence();

}, [controls]);

return (
<motion.div
animate={controls}
className='relative h-full w-full transform-gpu'
style={{
transformOrigin: '50% 50%',
}}
>
{/* Cinematic vignette */} <div className='absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_center,transparent_0%,transparent_58%,rgba(2,6,23,0.28)_82%,rgba(2,6,23,0.72)_100%)] pointer-events-none' />

  {/* Dynamic atmospheric glow */}
  <motion.div
    className='absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none'
    animate={{
      scale:
        telemetry.phase === 'propagating'
          ? 1.12
          : telemetry.phase === 'stabilizing'
          ? 1.04
          : 1,
      opacity:
        telemetry.phase === 'propagating'
          ? 0.22
          : telemetry.phase === 'stabilizing'
          ? 0.16
          : 0.12,
    }}
    transition={{
      duration: 0.8,
      ease: 'easeOut',
    }}
  />

  {/* Core content */}
  <motion.div
    animate={{
      filter:
        telemetry.phase === 'propagating'
          ? 'brightness(1.08)'
          : 'brightness(1)',
    }}
    transition={{
      duration: 0.6,
    }}
    className='relative h-full w-full'
  >
    {children}
  </motion.div>
</motion.div>

);
}

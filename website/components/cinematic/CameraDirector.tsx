'use client';

import { motion } from 'framer-motion';
import { useMotionTimeline } from '@/components/cinematic/MotionTimeline';

export default function CameraDirector({
children,
}: {
children: React.ReactNode;
}) {
const timeline = useMotionTimeline();

const state =
timeline.phase === 'boot'
? { scale: 1.25, y: 32, glow: 0.08 }
: timeline.phase === 'logo'
? { scale: 1.18, y: 24, glow: 0.12 }
: timeline.phase === 'ignition'
? { scale: 1.12, y: 12, glow: 0.18 }
: timeline.phase === 'network'
? { scale: 1.05, y: 4, glow: 0.22 }
: timeline.phase === 'telemetry'
? { scale: 1.02, y: 0, glow: 0.18 }
: timeline.phase === 'dashboard'
? { scale: 1, y: 0, glow: 0.14 }
: { scale: 1, y: 0, glow: 0.12 };

return (
<motion.div
animate={{
scale: state.scale,
y: state.y,
}}
transition={{
duration: 1.2,
ease: [0.22, 1, 0.36, 1],
}}
className='relative h-full w-full transform-gpu'
style={{
transformOrigin: '50% 50%',
}}
>
<motion.div
className='absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[140px] pointer-events-none'
animate={{
opacity: state.glow,
scale: state.scale,
}}
transition={{
duration: 1,
}}
/>

  <motion.div
    className='relative h-full w-full'
    animate={{
      filter:
        timeline.phase === 'ignition'
          ? 'brightness(1.08)'
          : timeline.phase === 'network'
          ? 'brightness(1.04)'
          : 'brightness(1)',
    }}
    transition={{
      duration: 0.8,
    }}
  >
    {children}
  </motion.div>
</motion.div>

);
}

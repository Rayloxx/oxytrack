'use client';

import { motion } from 'framer-motion';
import { useMotionTimeline } from '@/components/cinematic/MotionTimeline';

export default function TelemetryPulseBus() {
const timeline = useMotionTimeline();

const architecture = timeline.phase === 'architecture';
const platform = timeline.phase === 'platform';
const command = timeline.phase === 'command';

const intensity = command ? 1 : platform ? 0.75 : architecture ? 0.55 : 0.35;

return ( <div className='pointer-events-none fixed inset-0 z-[1] overflow-hidden'>
{/* Main telemetry spine */}
<motion.div
className='absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/40 via-cyan-300/70 to-cyan-300/20'
animate={{
opacity: [0.15 * intensity, 0.7 * intensity, 0.15 * intensity],
scaleY: [0.98, 1.02, 0.98],
}}
transition={{
duration: 2.2,
repeat: Infinity,
ease: 'easeInOut',
}}
/>

  {/* Traveling telemetry packets */}
  {Array.from({ length: 16 }).map((_, i) => (
    <motion.div
      key={i}
      className='absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300'
      initial={{ top: '-10%' }}
      animate={{
        top: ['-10%', '110%'],
        opacity: [0, intensity, intensity, 0],
        scale: [0.6, 1.1, 1, 0.4],
      }}
      transition={{
        duration: 4.8 - intensity,
        repeat: Infinity,
        delay: i * 0.22,
        ease: 'linear',
      }}
    />
  ))}

  {/* Architecture node */}
  <motion.div
    className='absolute left-1/2 top-[28%] h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300'
    animate={{
      scale: architecture ? [1, 1.5, 1] : [1, 1.08, 1],
      boxShadow: architecture
        ? [
            '0 0 12px rgba(34,211,238,0.3)',
            '0 0 30px rgba(34,211,238,0.8)',
            '0 0 12px rgba(34,211,238,0.3)',
          ]
        : [
            '0 0 6px rgba(34,211,238,0.12)',
            '0 0 14px rgba(34,211,238,0.25)',
            '0 0 6px rgba(34,211,238,0.12)',
          ],
    }}
    transition={{
      duration: 1.6,
      repeat: Infinity,
    }}
  />

  {/* Platform node */}
  <motion.div
    className='absolute left-1/2 top-[52%] h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300'
    animate={{
      scale: platform ? [1, 1.5, 1] : [1, 1.08, 1],
      boxShadow: platform
        ? [
            '0 0 12px rgba(34,211,238,0.3)',
            '0 0 30px rgba(34,211,238,0.8)',
            '0 0 12px rgba(34,211,238,0.3)',
          ]
        : [
            '0 0 6px rgba(34,211,238,0.12)',
            '0 0 14px rgba(34,211,238,0.25)',
            '0 0 6px rgba(34,211,238,0.12)',
          ],
    }}
    transition={{
      duration: 1.6,
      repeat: Infinity,
    }}
  />

  {/* Command node */}
  <motion.div
    className='absolute left-1/2 top-[74%] h-5 w-5 -translate-x-1/2 rounded-full bg-cyan-300'
    animate={{
      scale: command ? [1, 1.6, 1] : [1, 1.1, 1],
      boxShadow: command
        ? [
            '0 0 16px rgba(34,211,238,0.4)',
            '0 0 42px rgba(34,211,238,0.95)',
            '0 0 16px rgba(34,211,238,0.4)',
          ]
        : [
            '0 0 8px rgba(34,211,238,0.15)',
            '0 0 18px rgba(34,211,238,0.3)',
            '0 0 8px rgba(34,211,238,0.15)',
          ],
    }}
    transition={{
      duration: 1.4,
      repeat: Infinity,
    }}
  />
</div>

);
}

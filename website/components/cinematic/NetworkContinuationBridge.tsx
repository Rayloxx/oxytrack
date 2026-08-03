'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useMotionTimeline } from '@/components/cinematic/MotionTimeline';

export default function NetworkContinuationBridge() {
const timeline = useMotionTimeline();
const architectureActive = timeline.phase === 'architecture';

const { scrollYProgress } = useScroll();

const scaleY = useTransform(scrollYProgress, [0, 0.15], [0.7, 1.4]);
const opacity = useTransform(scrollYProgress, [0, 0.18], [0.85, 0.25]);
const bridgeGlow = useTransform(scrollYProgress, [0, 0.18], [0.12, 0.32]);

return (
<motion.div
className='relative -mt-16 h-56 overflow-hidden bg-[#020617]'
animate={{
opacity: architectureActive ? 1 : 0.9,
}}
transition={{ duration: 0.6 }}
>
{/* Ambient bridge glow */}
<motion.div
className='absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]'
style={{ opacity: bridgeGlow }}
animate={{
scale: architectureActive ? [1, 1.08, 1] : [1, 1.03, 1],
}}
transition={{
duration: 3,
repeat: Infinity,
ease: 'easeInOut',
}}
/>

  {/* Volumetric conduit shell */}
  <motion.div
    className='absolute left-1/2 top-0 h-full w-[12px] -translate-x-1/2 rounded-full bg-cyan-400/15'
    style={{ scaleY, opacity }}
  />

  {/* Inner oxygen core */}
  <motion.div
    className='absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-cyan-300'
    style={{ scaleY }}
    animate={{
      boxShadow: [
        '0 0 12px rgba(34,211,238,0.25)',
        '0 0 30px rgba(34,211,238,0.85)',
        '0 0 12px rgba(34,211,238,0.25)',
      ],
    }}
    transition={{
      duration: 2.2,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />

  {/* Pressure wave rings */}
  {[1, 2].map((ring) => (
    <motion.div
      key={ring}
      className='absolute left-1/2 top-10 rounded-full border border-cyan-400/15'
      style={{
        width: `${ring * 120}px`,
        height: `${ring * 120}px`,
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        scale: architectureActive ? [1, 1.12, 1] : [1, 1.05, 1],
        opacity: architectureActive ? [0.08, 0.22, 0.08] : [0.05, 0.12, 0.05],
      }}
      transition={{
        duration: 2.6,
        repeat: Infinity,
        delay: ring * 0.25,
      }}
    />
  ))}

  {/* Synchronized oxygen packets */}
  {Array.from({ length: 10 }).map((_, i) => (
    <motion.div
      key={i}
      className='absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]'
      initial={{ top: '-5%' }}
      animate={{
        top: architectureActive ? ['-5%', '105%'] : ['-5%', '42%'],
        opacity: architectureActive ? [0, 1, 1, 0] : [0, 0.45, 0],
        scale: architectureActive ? [0.6, 1.2, 1, 0.5] : [0.6, 1, 0.6],
      }}
      transition={{
        duration: architectureActive ? 1.5 : 2.8,
        repeat: Infinity,
        delay: i * 0.18,
        ease: 'linear',
      }}
    />
  ))}

  {/* Branch expansion geometry */}
  <motion.svg
    className='absolute inset-0 h-full w-full'
    viewBox='0 0 1000 220'
    style={{ opacity }}
  >
    <defs>
      <linearGradient id='bridgeGlow' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stopColor='#22D3EE' stopOpacity='0.9' />
        <stop offset='100%' stopColor='#67E8F9' stopOpacity='0.35' />
      </linearGradient>
    </defs>

    <motion.path
      d='M500 20 C500 80 420 120 300 180'
      stroke='url(#bridgeGlow)'
      strokeWidth='4'
      strokeLinecap='round'
      initial={{ pathLength: 0 }}
      animate={{
        pathLength: 1,
        opacity: architectureActive ? 1 : 0.75,
      }}
      transition={{ duration: 1.3 }}
    />

    <motion.path
      d='M500 20 C500 80 580 120 700 180'
      stroke='url(#bridgeGlow)'
      strokeWidth='4'
      strokeLinecap='round'
      initial={{ pathLength: 0 }}
      animate={{
        pathLength: 1,
        opacity: architectureActive ? 1 : 0.75,
      }}
      transition={{ duration: 1.3, delay: 0.12 }}
    />
  </motion.svg>

  {/* Terminal activation node */}
  <motion.div
    className='absolute bottom-4 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-cyan-300'
    animate={
      architectureActive
        ? {
            scale: [1, 1.6, 1],
            boxShadow: [
              '0 0 12px rgba(34,211,238,0.3)',
              '0 0 36px rgba(34,211,238,0.9)',
              '0 0 12px rgba(34,211,238,0.3)',
            ],
          }
        : {
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 8px rgba(34,211,238,0.15)',
              '0 0 16px rgba(34,211,238,0.35)',
              '0 0 8px rgba(34,211,238,0.15)',
            ],
          }
    }
    transition={{
      duration: architectureActive ? 1.2 : 2.4,
      repeat: Infinity,
    }}
  />

  {/* Architecture activation cue */}
  <motion.div
    className='absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-cyan-300'
    animate={{
      opacity: architectureActive ? [0.4, 1, 0.4] : [0.2, 0.5, 0.2],
      y: architectureActive ? [0, -2, 0] : 0,
    }}
    transition={{
      duration: 1.8,
      repeat: Infinity,
    }}
  >
    architecture link
  </motion.div>
</motion.div>

);
}

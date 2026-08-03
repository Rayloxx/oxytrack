'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useMotionTimeline } from '@/components/cinematic/MotionTimeline';

export default function NetworkContinuationBridge() {
const timeline = useMotionTimeline();
const architectureActive = timeline.phase === 'architecture';

const { scrollYProgress } = useScroll();

const scaleY = useTransform(scrollYProgress, [0, 0.15], [0.7, 1.4]);
const opacity = useTransform(scrollYProgress, [0, 0.18], [0.85, 0.25]);

return ( <div className='relative -mt-16 h-56 overflow-hidden bg-[#020617]'>
{/* Central conduit */}
<motion.div
className='absolute left-1/2 top-0 h-full w-[10px] -translate-x-1/2 rounded-full bg-cyan-400/20'
style={{ scaleY, opacity }}
/>

  {/* Inner oxygen core */}
  <motion.div
    className='absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-cyan-300'
    style={{ scaleY }}
    animate={{
      boxShadow: [
        '0 0 12px rgba(34,211,238,0.25)',
        '0 0 24px rgba(34,211,238,0.7)',
        '0 0 12px rgba(34,211,238,0.25)',
      ],
    }}
    transition={{
      duration: 2.4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />

  {/* Synchronized oxygen packets */}
  {Array.from({ length: 8 }).map((_, i) => (
    <motion.div
      key={i}
      className='absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300'
      initial={{ top: '-5%' }}
      animate={{
        top: architectureActive ? ['-5%', '105%'] : ['-5%', '40%'],
        opacity: architectureActive ? [0, 1, 1, 0] : [0, 0.4, 0],
      }}
      transition={{
        duration: architectureActive ? 1.6 : 2.8,
        repeat: Infinity,
        delay: i * 0.22,
        ease: 'linear',
      }}
    />
  ))}

  {/* Branch expansion */}
  <motion.svg
    className='absolute inset-0 h-full w-full'
    viewBox='0 0 1000 220'
    style={{ opacity }}
  >
    <defs>
      <linearGradient id='bridgeGlow' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stopColor='#22D3EE' stopOpacity='0.8' />
        <stop offset='100%' stopColor='#67E8F9' stopOpacity='0.3' />
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
        opacity: architectureActive ? 1 : 0.7,
      }}
      transition={{ duration: 1.4 }}
    />

    <motion.path
      d='M500 20 C500 80 580 120 700 180'
      stroke='url(#bridgeGlow)'
      strokeWidth='4'
      strokeLinecap='round'
      initial={{ pathLength: 0 }}
      animate={{
        pathLength: 1,
        opacity: architectureActive ? 1 : 0.7,
      }}
      transition={{ duration: 1.4, delay: 0.15 }}
    />
  </motion.svg>
</div>

);
}

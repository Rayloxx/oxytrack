'use client';

import { motion } from 'framer-motion';
import { useMotionTimeline } from '@/components/cinematic/MotionTimeline';

const branches = [
{ id: 'ICU', x: 86, y: 18 },
{ id: 'THEATRE', x: 90, y: 74 },
{ id: 'HDU', x: 94, y: 46 },
{ id: 'ER', x: 12, y: 18 },
{ id: 'NICU', x: 10, y: 78 },
{ id: 'WARDS', x: 6, y: 46 },
];

export default function OxygenNetwork3D() {
const timeline = useMotionTimeline();

const active = timeline.phase !== 'boot';

return ( <div className='relative h-[680px] w-full overflow-hidden rounded-[40px] border border-white/10 bg-[#031124]'>
{/* Background depth */} <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10)_0%,transparent_65%)]' />

  <div className='absolute inset-0 opacity-20'>
    <div className='absolute left-0 top-0 h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]' />
  </div>

  {/* Ambient glow */}
  <motion.div
    className='absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[140px]'
    animate={{
      opacity: active ? 0.12 : 0,
      scale: active ? 1 : 0.85,
    }}
    transition={{ duration: 1.2 }}
  />

  {/* SVG network */}
  <svg
    className='absolute inset-0 h-full w-full'
    viewBox='0 0 1000 700'
    preserveAspectRatio='none'
  >
    <defs>
      <linearGradient id='pipe' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stopColor='#22D3EE' stopOpacity='0.9' />
        <stop offset='100%' stopColor='#67E8F9' stopOpacity='0.7' />
      </linearGradient>

      <filter id='glow'>
        <feGaussianBlur stdDeviation='3' result='blur' />
        <feMerge>
          <feMergeNode in='blur' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>

    {/* Main trunk */}
    <motion.path
      d='M500 350 L500 120'
      stroke='url(#pipe)'
      strokeWidth='4'
      strokeLinecap='round'
      filter='url(#glow)'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: active ? 1 : 0 }}
      transition={{ duration: 1.2 }}
    />

    <motion.path
      d='M500 350 L500 580'
      stroke='url(#pipe)'
      strokeWidth='4'
      strokeLinecap='round'
      filter='url(#glow)'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: active ? 1 : 0 }}
      transition={{ duration: 1.2 }}
    />

    {/* Branches */}
    <motion.path
      d='M500 350 C640 260 740 180 860 130'
      stroke='url(#pipe)'
      strokeWidth='3'
      strokeLinecap='round'
      filter='url(#glow)'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: active ? 1 : 0 }}
      transition={{ duration: 1.4, delay: 0.1 }}
    />

    <motion.path
      d='M500 350 C660 350 800 350 930 350'
      stroke='url(#pipe)'
      strokeWidth='3'
      strokeLinecap='round'
      filter='url(#glow)'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: active ? 1 : 0 }}
      transition={{ duration: 1.4, delay: 0.2 }}
    />

    <motion.path
      d='M500 350 C640 440 760 520 880 560'
      stroke='url(#pipe)'
      strokeWidth='3'
      strokeLinecap='round'
      filter='url(#glow)'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: active ? 1 : 0 }}
      transition={{ duration: 1.4, delay: 0.3 }}
    />

    <motion.path
      d='M500 350 C360 260 240 180 120 130'
      stroke='url(#pipe)'
      strokeWidth='3'
      strokeLinecap='round'
      filter='url(#glow)'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: active ? 1 : 0 }}
      transition={{ duration: 1.4, delay: 0.1 }}
    />

    <motion.path
      d='M500 350 C320 350 180 350 70 350'
      stroke='url(#pipe)'
      strokeWidth='3'
      strokeLinecap='round'
      filter='url(#glow)'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: active ? 1 : 0 }}
      transition={{ duration: 1.4, delay: 0.2 }}
    />

    <motion.path
      d='M500 350 C360 440 220 520 100 560'
      stroke='url(#pipe)'
      strokeWidth='3'
      strokeLinecap='round'
      filter='url(#glow)'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: active ? 1 : 0 }}
      transition={{ duration: 1.4, delay: 0.3 }}
    />
  </svg>

  {/* Flow particles */}
  {active && (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={`flow-${i}`}
          className='absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]'
          animate={{
            x: [0, 260],
            y: [0, -170],
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.35,
            ease: 'linear',
          }}
        />
      ))}

      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`flow-left-${i}`}
          className='absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]'
          animate={{
            x: [0, -280],
            y: [0, 180],
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            delay: i * 0.45,
            ease: 'linear',
          }}
        />
      ))}
    </>
  )}

  {/* Central manifold */}
  <motion.div
    className='absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-cyan-400/30 bg-cyan-500/15 shadow-[0_0_50px_rgba(34,211,238,0.25)]'
    animate={{
      scale: active ? [1, 1.06, 1] : 1,
      boxShadow: active
        ? [
            '0 0 30px rgba(34,211,238,0.15)',
            '0 0 60px rgba(34,211,238,0.30)',
            '0 0 30px rgba(34,211,238,0.15)',
          ]
        : '0 0 0px rgba(34,211,238,0)',
    }}
    transition={{
      duration: 2.4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <div className='absolute inset-0 flex items-center justify-center'>
      <motion.div
        className='h-5 w-5 rounded-full bg-cyan-300'
        animate={{
          scale: active ? [1, 1.4, 1] : 1,
          opacity: active ? [0.8, 1, 0.8] : 0.5,
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      />
    </div>
  </motion.div>

  {/* Branch nodes */}
  {branches.map((branch, index) => (
    <motion.div
      key={branch.id}
      className='absolute'
      style={{
        left: `${branch.x}%`,
        top: `${branch.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: active ? 1 : 0,
        opacity: active ? 1 : 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.6 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className='flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/15 shadow-[0_0_24px_rgba(34,211,238,0.18)]'
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          delay: index * 0.15,
        }}
      >
        <div className='h-2 w-2 rounded-full bg-cyan-300' />
      </motion.div>

      <div className='mt-2 text-center text-[11px] uppercase tracking-[0.18em] text-cyan-300'>
        {branch.id}
      </div>
    </motion.div>
  ))}

  {/* Telemetry overlay */}
  <div className='absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-xl'>
    <div>
      <div className='text-xs uppercase tracking-[0.18em] text-cyan-300'>
        Network state
      </div>
      <div className='mt-1 text-lg font-semibold text-white'>
        {active ? 'Oxygen infrastructure synchronized' : 'System offline'}
      </div>
    </div>

    <div className='text-right'>
      <div className='text-xs uppercase tracking-[0.18em] text-white/40'>
        Telemetry
      </div>
      <div className='mt-1 text-lg font-semibold text-cyan-300'>
        {active ? 'LIVE' : 'IDLE'}
      </div>
    </div>
  </div>
</div>

);
}

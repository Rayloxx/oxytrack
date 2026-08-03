'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import CameraDirector from '@/components/cinematic/CameraDirector';
import OxygenNetwork3D from '@/components/network/OxygenNetwork3D';
import { SECTION_IDS } from '@/lib/sectionRegistry';

export default function HeroExperience() {
const { scrollYProgress } = useScroll();

// Cinematic camera pull-back
const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.96]);
const heroY = useTransform(scrollYProgress, [0, 0.18], [0, -40]);
const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.92]);

// Ambient glow
const glowScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.08]);
const glowOpacity = useTransform(scrollYProgress, [0, 0.2], [0.08, 0.04]);

return ( <section
   id={SECTION_IDS.hero}
   className='relative min-h-screen overflow-hidden bg-[#020617]'
 >
{/* Ambient background */} <div className='absolute inset-0'>
<motion.div
className='absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[220px]'
style={{
scale: glowScale,
opacity: glowOpacity,
}}
/>

    <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06)_0%,transparent_60%)]' />
  </div>

  {/* Engineering grid */}
  <div className='absolute inset-0 opacity-[0.08]'>
    <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]' />
  </div>

  {/* Cinematic camera layer */}
  <motion.div
    className='relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8 py-24'
    style={{
      scale: heroScale,
      y: heroY,
      opacity: heroOpacity,
    }}
  >
    <div className='grid w-full items-center gap-16 lg:grid-cols-[0.45fr_0.55fr]'>
      {/* Left narrative */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3'
        >
          <div className='h-2 w-2 rounded-full bg-cyan-300 animate-pulse' />
          <span className='text-sm uppercase tracking-[0.22em] text-cyan-300'>
            Hospital oxygen infrastructure intelligence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className='mt-10 text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl'
        >
          Every oxygen
          <br />
          network has a
          <br />
          hidden story.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className='mt-10 max-w-xl text-xl leading-9 text-white/65'
        >
          OxyTrack transforms pressure and flow telemetry into real-time
          operational intelligence for hospital oxygen infrastructure,
          enabling predictive maintenance, leak detection, and continuous
          biomedical visibility.
        </motion.p>

        {/* Primary metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='mt-12 grid gap-6 sm:grid-cols-3'
        >
          <div>
            <div className='text-3xl font-semibold text-white'>24/7</div>
            <div className='mt-2 text-sm text-white/50'>
              Infrastructure monitoring
            </div>
          </div>

          <div>
            <div className='text-3xl font-semibold text-white'>
              Real time
            </div>
            <div className='mt-2 text-sm text-white/50'>
              Pressure and flow telemetry
            </div>
          </div>

          <div>
            <div className='text-3xl font-semibold text-white'>
              Predictive
            </div>
            <div className='mt-2 text-sm text-white/50'>
              Infrastructure intelligence
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-14 flex flex-wrap gap-4'
        >
          <a
            href={`#${SECTION_IDS.technology}`}
            className='rounded-2xl bg-cyan-400 px-8 py-4 font-medium text-slate-900 transition hover:bg-cyan-300'
          >
            View mission control
          </a>

          <a
            href={`#${SECTION_IDS.architecture}`}
            className='rounded-2xl border border-white/15 px-8 py-4 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300'
          >
            Explore the architecture
          </a>
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className='mt-16 border-t border-white/10 pt-8'
        >
          <div className='text-sm uppercase tracking-[0.25em] text-white/35'>
            Designed for biomedical engineering teams
          </div>
        </motion.div>
      </div>

      {/* Right cinematic network */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.25 }}
        className='relative h-[760px]'
      >
        <motion.div
          className='absolute inset-0 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.08)]'
          animate={{
            boxShadow: [
              '0 0 60px rgba(34,211,238,0.05)',
              '0 0 90px rgba(34,211,238,0.12)',
              '0 0 60px rgba(34,211,238,0.05)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <CameraDirector>
            <OxygenNetwork3D />
          </CameraDirector>
        </motion.div>

        {/* Floating telemetry card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='absolute -bottom-8 -left-8 w-72 rounded-[28px] border border-white/10 bg-[#071A35]/80 p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.08)]'
        >
          <div className='text-sm uppercase tracking-[0.22em] text-cyan-300'>
            Mission status
          </div>

          <div className='mt-4 text-3xl font-semibold text-white'>
            Network online
          </div>

          <div className='mt-6 space-y-3 text-sm'>
            <div className='flex justify-between'>
              <span className='text-white/50'>Pressure</span>
              <span className='text-cyan-300'>4.21 bar</span>
            </div>

            <div className='flex justify-between'>
              <span className='text-white/50'>Flow</span>
              <span className='text-cyan-300'>182 L/min</span>
            </div>

            <div className='flex justify-between'>
              <span className='text-white/50'>Health</span>
              <span className='text-cyan-300'>97.8%</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>

  {/* Cinematic transition cue */}
  <motion.div
    className='absolute bottom-10 left-1/2 z-20 -translate-x-1/2'
    animate={{
      y: [0, 12, 0],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: 2.2,
      repeat: Infinity,
    }}
  >
    <div className='flex flex-col items-center gap-2 text-cyan-300'>
      <div className='h-10 w-px bg-gradient-to-b from-cyan-300 to-transparent' />
      <span className='text-[10px] uppercase tracking-[0.3em]'>
        Infrastructure continues
      </span>
    </div>
  </motion.div>
</section>

);
}

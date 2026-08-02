'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/layout/SectionContainer';

export default function FinalCommandSection() {
return ( <section className='relative overflow-hidden bg-[#01040B] py-36'>
{/* Background glow */} <div className='absolute inset-0'> <div className='absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[260px]' />

    <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0%,transparent_60%)]' />
  </div>

  <SectionContainer className='relative z-10'>
    {/* Network convergence animation */}
    <div className='mb-20 flex justify-center'>
      <div className='relative h-64 w-64'>
        {/* Outer rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className='absolute inset-0 rounded-full border border-cyan-400/20'
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: ring * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Radial network lines */}
        <svg
          className='absolute inset-0 h-full w-full'
          viewBox='0 0 256 256'
        >
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const radians = (angle * Math.PI) / 180;
            const x = 128 + Math.cos(radians) * 96;
            const y = 128 + Math.sin(radians) * 96;

            return (
              <line
                key={angle}
                x1='128'
                y1='128'
                x2={x}
                y2={y}
                stroke='#22D3EE'
                strokeOpacity='0.25'
                strokeWidth='1'
              />
            );
          })}
        </svg>

        {/* Branch nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const radians = (angle * Math.PI) / 180;
          const x = 128 + Math.cos(radians) * 96;
          const y = 128 + Math.sin(radians) * 96;

          return (
            <motion.div
              key={angle}
              className='absolute h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]'
              style={{
                left: x - 6,
                top: y - 6,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: angle / 120,
              }}
            />
          );
        })}

        {/* Central core */}
        <motion.div
          className='absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.9)]'
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>

    {/* Final message */}
    <div className='mx-auto max-w-4xl text-center'>
      <div className='text-sm uppercase tracking-[0.4em] text-cyan-300'>
        OxyTrack Technologies
      </div>

      <h2 className='mt-8 text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl'>
        From tank to bedside.
        <br />
        Every breath accounted for.
      </h2>

      <p className='mx-auto mt-10 max-w-2xl text-xl leading-9 text-white/65'>
        Continuous oxygen infrastructure intelligence for hospitals that
        cannot afford uncertainty.
      </p>

      {/* CTA buttons */}
      <div className='mt-14 flex flex-wrap justify-center gap-4'>
        <a
          href='#technology'
          className='rounded-2xl bg-cyan-400 px-8 py-4 font-medium text-slate-900 transition hover:bg-cyan-300'
        >
          Schedule a hospital demonstration
        </a>

        <a
          href='#platform'
          className='rounded-2xl border border-white/15 px-8 py-4 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300'
        >
          Explore the platform
        </a>
      </div>

      {/* Closing metrics */}
      <div className='mt-20 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3'>
        <div>
          <div className='text-3xl font-semibold text-white'>24/7</div>
          <div className='mt-2 text-white/50'>
            Infrastructure monitoring
          </div>
        </div>

        <div>
          <div className='text-3xl font-semibold text-white'>Real time</div>
          <div className='mt-2 text-white/50'>
            Pressure and flow telemetry
          </div>
        </div>

        <div>
          <div className='text-3xl font-semibold text-white'>Predictive</div>
          <div className='mt-2 text-white/50'>
            Infrastructure intelligence
          </div>
        </div>
      </div>

      <div className='mt-16 text-sm uppercase tracking-[0.25em] text-white/35'>
        OxyTrack Technologies • Hospital oxygen infrastructure intelligence
      </div>
    </div>
  </SectionContainer>
</section>

);
}

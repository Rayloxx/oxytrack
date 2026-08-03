'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/layout/SectionContainer';
import CinematicReveal from '@/components/cinematic/CinematicReveal';
import { useMotionTimeline } from '@/components/cinematic/MotionTimeline';
import { SECTION_IDS } from '@/lib/sectionRegistry';

const steps = [
{
title: 'Bulk oxygen source',
subtitle: 'Tank / PSA plant',
description:
'Primary oxygen supply enters the medical gas infrastructure through the central source manifold.',
},
{
title: 'Pressure regulation',
subtitle: 'Manifold and regulators',
description:
'Pressure is stabilized and distributed through the hospital oxygen pipeline network.',
},
{
title: 'Sensor layer',
subtitle: 'Pressure + flow telemetry',
description:
'OxyTrack sensors continuously measure pressure, flow rate, and infrastructure health at critical points.',
},
{
title: 'Edge intelligence',
subtitle: 'ESP32 telemetry gateway',
description:
'Sensor data is processed locally, buffered during outages, and transmitted securely through MQTT.',
},
{
title: 'Cloud platform',
subtitle: 'Real-time analytics',
description:
'Telemetry is aggregated, visualized, and analyzed for anomalies, leaks, and consumption patterns.',
},
{
title: 'Biomedical action',
subtitle: 'Maintenance and response',
description:
'Engineers receive live alerts, predictive maintenance insights, and network diagnostics before failures occur.',
},
];

export default function DataFlowSection() {
const timeline = useMotionTimeline();
const activated = timeline.phase === 'architecture';

return ( <section
   id={SECTION_IDS.architecture}
   className='relative overflow-hidden bg-[#020617] py-32'
 >
{/* Ambient background */} <div className='absolute inset-0'>
<motion.div
className='absolute left-1/2 top-0 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[180px]'
animate={
activated
? {
scale: [1, 1.08, 1],
opacity: [0.04, 0.08, 0.04],
}
: {}
}
transition={{
duration: 6,
repeat: Infinity,
ease: 'easeInOut',
}}
/> </div>

  <SectionContainer className='relative z-10'>
    {/* Section heading */}
    <CinematicReveal>
      <div className='max-w-3xl'>
        <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
          System architecture
        </div>

        <h2 className='mt-6 text-4xl font-semibold text-white md:text-5xl'>
          From tank to bedside
        </h2>

        <p className='mt-6 text-lg leading-8 text-white/65'>
          OxyTrack creates a continuous telemetry layer across the hospital
          oxygen network, transforming pressure and flow data into
          operational intelligence.
        </p>
      </div>
    </CinematicReveal>

    {/* Architecture flow */}
    <CinematicReveal delay={0.15}>
      <div className='mt-20 space-y-8'>
        {steps.map((step, index) => (
          <div key={step.title} className='relative'>
            {/* Vertical conduit */}
            {index < steps.length - 1 && (
              <>
                <div className='absolute left-8 top-16 h-24 w-px bg-gradient-to-b from-cyan-400/20 to-transparent' />

                <motion.div
                  className='absolute left-8 top-16 h-24 w-px bg-gradient-to-b from-cyan-300 via-cyan-400 to-transparent'
                  animate={
                    activated
                      ? {
                          opacity: [0.2, 1, 0.2],
                          scaleY: [0.95, 1.08, 0.95],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: index * 0.12,
                  }}
                />
              </>
            )}

            {/* Architecture card */}
            <motion.div
              className={`grid gap-8 rounded-[28px] border p-8 backdrop-blur-xl transition-all duration-700 md:grid-cols-[96px_1fr] ${
                activated && index === 0
                  ? 'border-cyan-400/40 bg-cyan-500/[0.08] shadow-[0_0_40px_rgba(34,211,238,0.12)]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
              animate={
                activated
                  ? {
                      y: [0, -3, 0],
                    }
                  : {}
              }
              transition={{
                duration: 2.6,
                repeat: Infinity,
                delay: index * 0.08,
              }}
            >
              {/* Node indicator */}
              <div className='flex items-start justify-center md:justify-start'>
                <motion.div
                  className='relative flex h-16 w-16 items-center justify-center rounded-2xl border'
                  animate={
                    activated && index === 0
                      ? {
                          scale: [1, 1.08, 1],
                          borderColor: [
                            'rgba(34,211,238,0.3)',
                            'rgba(34,211,238,0.8)',
                            'rgba(34,211,238,0.3)',
                          ],
                          backgroundColor: [
                            'rgba(34,211,238,0.10)',
                            'rgba(34,211,238,0.22)',
                            'rgba(34,211,238,0.10)',
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                >
                  <span className='text-xl font-semibold text-white'>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {activated && index === 0 && (
                    <motion.div
                      className='absolute inset-0 rounded-2xl border border-cyan-300/40'
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0, 0.4],
                      }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                      }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div>
                <div className='text-sm uppercase tracking-[0.28em] text-cyan-300'>
                  {step.subtitle}
                </div>

                <h3 className='mt-3 text-2xl font-semibold text-white'>
                  {step.title}
                </h3>

                <p className='mt-4 max-w-3xl leading-7 text-white/65'>
                  {step.description}
                </p>

                <motion.div
                  className='mt-6 h-px bg-gradient-to-r from-cyan-400/40 via-cyan-300/20 to-transparent'
                  animate={
                    activated
                      ? {
                          opacity: [0.3, 1, 0.3],
                          scaleX: [0.98, 1.02, 0.98],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </CinematicReveal>

    {/* Telemetry intelligence summary */}
    <CinematicReveal delay={0.3}>
      <motion.div
        className='mt-20 rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 p-10'
        animate={
          activated
            ? {
                borderColor: [
                  'rgba(34,211,238,0.2)',
                  'rgba(34,211,238,0.35)',
                  'rgba(34,211,238,0.2)',
                ],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
          End-to-end telemetry
        </div>

        <div className='mt-6 grid gap-6 md:grid-cols-3'>
          <div>
            <div className='text-3xl font-semibold text-white'>
              Real time
            </div>

            <div className='mt-2 text-white/60'>
              Pressure and flow monitoring across the oxygen network
            </div>
          </div>

          <div>
            <div className='text-3xl font-semibold text-white'>
              Predictive
            </div>

            <div className='mt-2 text-white/60'>
              Early leak detection and infrastructure health analytics
            </div>
          </div>

          <div>
            <div className='text-3xl font-semibold text-white'>
              Actionable
            </div>

            <div className='mt-2 text-white/60'>
              Biomedical engineering workflows and maintenance response
            </div>
          </div>
        </div>
      </motion.div>
    </CinematicReveal>
  </SectionContainer>
</section>

);
}

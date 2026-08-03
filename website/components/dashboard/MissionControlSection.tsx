'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/layout/SectionContainer';
import CinematicReveal from '@/components/cinematic/CinematicReveal';
import { useTelemetrySync } from '@/components/network/TelemetrySync';
import { useMotionTimeline } from '@/components/cinematic/MotionTimeline';

export default function MissionControlSection() {
const telemetry = useTelemetrySync();
const timeline = useMotionTimeline();
const commandActive = timeline.phase === 'command';

return ( <section
   id='technology'
   className='relative overflow-hidden bg-[#020617] py-32'
 > <div className='absolute inset-0'>
<motion.div
className='absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[220px]'
animate={
commandActive
? {
scale: [1, 1.06, 1],
opacity: [0.03, 0.07, 0.03],
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
    <CinematicReveal>
      <div className='max-w-3xl'>
        <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
          Mission control
        </div>

        <h2 className='mt-6 text-4xl font-semibold text-white md:text-5xl'>
          A control room for hospital oxygen infrastructure
        </h2>

        <p className='mt-6 text-lg leading-8 text-white/65'>
          OxyTrack transforms distributed sensor telemetry into operational
          intelligence, giving biomedical engineers continuous visibility
          into pressure stability, oxygen consumption, leak risk, and
          infrastructure health across the entire medical gas network.
        </p>
      </div>
    </CinematicReveal>

    <CinematicReveal delay={0.2}>
      <motion.div
        className='mt-20 rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl'
        animate={
          commandActive
            ? {
                borderColor: [
                  'rgba(255,255,255,0.08)',
                  'rgba(34,211,238,0.18)',
                  'rgba(255,255,255,0.08)',
                ],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        {/* Dashboard header */}
        <div className='flex flex-col gap-6 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between'>
          <div>
            <div className='text-sm uppercase tracking-[0.25em] text-cyan-300'>
              OxyTrack Mission Control
            </div>

            <div className='mt-2 text-2xl font-semibold text-white'>
              Moi Teaching & Referral Hospital
            </div>

            <div className='mt-2 text-white/50'>
              Central oxygen infrastructure command center
            </div>
          </div>

          <motion.div
            className='flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3'
            animate={
              commandActive
                ? {
                    boxShadow: [
                      '0 0 0 rgba(34,211,238,0)',
                      '0 0 24px rgba(34,211,238,0.18)',
                      '0 0 0 rgba(34,211,238,0)',
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className='h-2 w-2 rounded-full bg-cyan-300 animate-pulse' />

            <div>
              <div className='text-sm font-medium text-white'>
                Telemetry synchronized
              </div>

              <div className='text-xs text-cyan-300'>
                MQTT stream active
              </div>
            </div>
          </motion.div>
        </div>

        {/* KPI row */}
        <div className='mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {[
            {
              label: 'Network pressure',
              value: `${telemetry.pressure.toFixed(2)} bar`,
            },
            {
              label: 'Oxygen flow',
              value: `${telemetry.flow} L/min`,
            },
            {
              label: 'Infrastructure health',
              value: `${telemetry.health.toFixed(1)}%`,
            },
            {
              label: 'Telemetry uptime',
              value: '99.98%',
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className='rounded-2xl border border-white/10 bg-[#071A35]/80 p-6'
              animate={
                commandActive
                  ? {
                      y: [0, -4, 0],
                      borderColor: [
                        'rgba(255,255,255,0.08)',
                        'rgba(34,211,238,0.22)',
                        'rgba(255,255,255,0.08)',
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: index * 0.12,
              }}
            >
              <div className='text-xs uppercase tracking-[0.22em] text-cyan-300'>
                {item.label}
              </div>

              <div className='mt-3 text-3xl font-semibold text-white'>
                {item.value}
              </div>

              <div className='mt-2 text-sm text-white/50'>
                Live operational telemetry
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main dashboard */}
        <div className='mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]'>
          {/* Pressure trend */}
          <div className='rounded-[28px] border border-white/10 bg-[#071A35]/80 p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='text-sm uppercase tracking-[0.22em] text-cyan-300'>
                  Pressure stability
                </div>

                <div className='mt-1 text-xl font-semibold text-white'>
                  Main oxygen distribution line
                </div>
              </div>

              <motion.div
                className='rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300'
                animate={
                  commandActive
                    ? {
                        scale: [1, 1.05, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                }}
              >
                Stable
              </motion.div>
            </div>

            <div className='mt-8 h-64 rounded-2xl border border-white/10 bg-[#031124] p-4'>
              <svg
                viewBox='0 0 600 200'
                className='h-full w-full'
                preserveAspectRatio='none'
              >
                <defs>
                  <linearGradient
                    id='pressureLine'
                    x1='0'
                    y1='0'
                    x2='1'
                    y2='0'
                  >
                    <stop offset='0%' stopColor='#22D3EE' />
                    <stop offset='100%' stopColor='#67E8F9' />
                  </linearGradient>
                </defs>

                <motion.path
                  d='M0 110 C40 108 80 106 120 104 S200 102 240 100 S320 98 360 101 S440 105 480 102 S540 98 600 100'
                  stroke='url(#pressureLine)'
                  strokeWidth='3'
                  fill='none'
                  animate={
                    commandActive
                      ? {
                          pathLength: [0.95, 1, 0.95],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                  }}
                />

                <path
                  d='M0 200 L0 110 C40 108 80 106 120 104 S200 102 240 100 S320 98 360 101 S440 105 480 102 S540 98 600 100 L600 200 Z'
                  fill='rgba(34,211,238,0.08)'
                />
              </svg>
            </div>

            <div className='mt-6 grid grid-cols-3 gap-4'>
              <div>
                <div className='text-2xl font-semibold text-white'>
                  ±0.08
                </div>

                <div className='text-sm text-white/50'>
                  Pressure variation
                </div>
              </div>

              <div>
                <div className='text-2xl font-semibold text-white'>
                  24 hours
                </div>

                <div className='text-sm text-white/50'>
                  Continuous monitoring
                </div>
              </div>

              <div>
                <div className='text-2xl font-semibold text-white'>
                  0
                </div>

                <div className='text-sm text-white/50'>
                  Critical pressure events
                </div>
              </div>
            </div>
          </div>

          {/* Alert panel */}
          <div className='rounded-[28px] border border-white/10 bg-[#071A35]/80 p-6'>
            <div className='text-sm uppercase tracking-[0.22em] text-cyan-300'>
              Active alerts
            </div>

            <div className='mt-6 space-y-4'>
              {[
                {
                  title: 'ICU pressure stability',
                  value: '4.21 bar',
                  body: 'Pressure remains within operational tolerance.',
                },
                {
                  title: 'Theatre flow trend',
                  value: 'Normal',
                  body: 'Oxygen consumption remains within expected range.',
                },
                {
                  title: 'Infrastructure health',
                  value: '97.8%',
                  body: 'No leak signatures detected across monitored branches.',
                },
              ].map((alert, index) => (
                <motion.div
                  key={alert.title}
                  className={`rounded-2xl p-4 ${
                    index === 0
                      ? 'border border-cyan-500/20 bg-cyan-500/10'
                      : 'border border-white/10 bg-white/[0.03]'
                  }`}
                  animate={
                    commandActive
                      ? {
                          borderColor: [
                            'rgba(34,211,238,0.2)',
                            'rgba(34,211,238,0.5)',
                            'rgba(34,211,238,0.2)',
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <div className='flex items-center justify-between'>
                    <div className='font-medium text-white'>
                      {alert.title}
                    </div>

                    <div className='text-cyan-300'>{alert.value}</div>
                  </div>

                  <div className='mt-2 text-sm text-white/60'>
                    {alert.body}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className='mt-8 border-t border-white/10 pt-6'>
              <div className='text-sm uppercase tracking-[0.22em] text-cyan-300'>
                Predictive maintenance
              </div>

              <div className='mt-4 flex items-center justify-between'>
                <span className='text-white/60'>
                  Regulator inspection window
                </span>

                <span className='font-medium text-white'>
                  14 days
                </span>
              </div>

              <div className='mt-3 flex items-center justify-between'>
                <span className='text-white/60'>
                  Estimated leak probability
                </span>

                <span className='font-medium text-cyan-300'>Low</span>
              </div>

              <div className='mt-3 flex items-center justify-between'>
                <span className='text-white/60'>
                  Infrastructure confidence
                </span>

                <span className='font-medium text-cyan-300'>High</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </CinematicReveal>
  </SectionContainer>
</section>

);
}

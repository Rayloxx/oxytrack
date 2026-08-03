'use client';

import SectionContainer from '@/components/layout/SectionContainer';
import CinematicReveal from '@/components/cinematic/CinematicReveal';

const features = [
{
title: 'Pressure telemetry',
description:
'Continuous pressure monitoring across manifolds, ICU branches, theatre lines, HDU networks, and ward distribution points.',
metric: '4.21 bar',
},
{
title: 'Flow intelligence',
description:
'Real-time oxygen flow measurement with consumption analytics, abnormal demand detection, and ward-level utilization visibility.',
metric: '182 L/min',
},
{
title: 'Edge resilience',
description:
'ESP32 gateways with local buffering, offline data retention, automatic synchronization, and resilient MQTT telemetry delivery.',
metric: '24/7',
},
{
title: 'Predictive maintenance',
description:
'Leak detection, regulator degradation analysis, pressure instability detection, and infrastructure health scoring.',
metric: '97.8%',
},
];

export default function SensorPlatformSection() {
return ( <section
   id='platform'
   className='relative overflow-hidden bg-[#030712] py-32'
 > <div className='absolute inset-0'> <div className='absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[180px]' /> </div>

  <SectionContainer className='relative z-10'>
    <CinematicReveal>
      <div className='grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
        {/* Left content */}
        <div>
          <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
            Sensor platform
          </div>

          <h2 className='mt-6 text-4xl font-semibold text-white md:text-5xl'>
            Engineered for hospital oxygen infrastructure
          </h2>

          <p className='mt-8 text-lg leading-8 text-white/65'>
            OxyTrack combines industrial-grade pressure sensing, flow
            telemetry, embedded edge computing, and cloud analytics to
            create a continuous intelligence layer across medical gas
            pipeline systems.
          </p>

          <div className='mt-10 space-y-6'>
            {[
              'Pressure sensor arrays',
              'Flow rate monitoring',
              'ESP32 telemetry gateways',
              'MQTT communication',
              'Local offline buffering',
              'Predictive analytics',
            ].map((item) => (
              <div key={item} className='flex items-center gap-4'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10'>
                  <div className='h-2 w-2 rounded-full bg-cyan-300' />
                </div>

                <div className='text-white'>{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right feature cards */}
        <div className='grid gap-6 md:grid-cols-2'>
          {features.map((feature) => (
            <div
              key={feature.title}
              className='rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:border-cyan-500/20 hover:bg-white/[0.06]'
            >
              <div className='text-sm uppercase tracking-[0.25em] text-cyan-300'>
                {feature.title}
              </div>

              <div className='mt-5 text-4xl font-semibold text-white'>
                {feature.metric}
              </div>

              <p className='mt-5 leading-7 text-white/60'>
                {feature.description}
              </p>

              <div className='mt-8 h-px bg-gradient-to-r from-cyan-400/40 via-cyan-300/20 to-transparent' />

              <div className='mt-4 flex items-center justify-between text-sm'>
                <span className='text-white/40'>Telemetry active</span>
                <span className='text-cyan-300'>ONLINE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CinematicReveal>

    <CinematicReveal delay={0.25}>
      <div className='mt-24 rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl'>
        <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
          Hardware architecture
        </div>

        <div className='mt-10 grid items-center gap-8 md:grid-cols-5'>
          {[
            'Pressure sensor',
            'Flow sensor',
            'ESP32 gateway',
            'MQTT cloud',
            'Biomedical dashboard',
          ].map((label, index) => (
            <div key={label} className='relative text-center'>
              <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300'>
                {index + 1}
              </div>

              <div className='mt-4 text-sm text-white'>{label}</div>

              {index < 4 && (
                <div className='absolute left-full top-10 hidden h-px w-full bg-gradient-to-r from-cyan-400 to-transparent md:block' />
              )}
            </div>
          ))}
        </div>

        <div className='mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3'>
          <div>
            <div className='text-2xl font-semibold text-white'>Edge</div>
            <div className='mt-2 text-white/60'>
              Local telemetry processing and buffering
            </div>
          </div>

          <div>
            <div className='text-2xl font-semibold text-white'>Cloud</div>
            <div className='mt-2 text-white/60'>
              Real-time analytics and infrastructure intelligence
            </div>
          </div>

          <div>
            <div className='text-2xl font-semibold text-white'>
              Operations
            </div>
            <div className='mt-2 text-white/60'>
              Biomedical engineering workflows and predictive maintenance
            </div>
          </div>
        </div>
      </div>
    </CinematicReveal>
  </SectionContainer>
</section>

);
}

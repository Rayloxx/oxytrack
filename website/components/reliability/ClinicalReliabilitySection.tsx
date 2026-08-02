'use client';

import SectionContainer from '@/components/layout/SectionContainer';

const pillars = [
{
title: 'Offline resilience',
description:
'Local telemetry buffering preserves pressure and flow data during network interruptions.',
metric: '72 h',
},
{
title: 'Calibration integrity',
description:
'Sensor calibration records, maintenance history, and verification schedules remain auditable.',
metric: 'Traceable',
},
{
title: 'System redundancy',
description:
'Distributed telemetry architecture prevents a single point of failure across monitored branches.',
metric: 'Multi-node',
},
{
title: 'Operational continuity',
description:
'Continuous monitoring supports biomedical engineering workflows without interrupting oxygen delivery.',
metric: '24/7',
},
];

const checklist = [
'Pressure telemetry validation',
'Flow sensor calibration history',
'MQTT delivery confirmation',
'Offline synchronization logs',
'Maintenance audit trail',
'Infrastructure health scoring',
];

export default function ClinicalReliabilitySection() {
return ( <section className='relative overflow-hidden bg-[#020617] py-32'> <div className='absolute inset-0'> <div className='absolute right-0 top-1/2 h-[900px] w-[900px] -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[220px]' /> </div>

  <SectionContainer className='relative z-10'>
    <div className='max-w-3xl'>
      <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
        Clinical reliability
      </div>

      <h2 className='mt-6 text-4xl font-semibold text-white md:text-5xl'>
        Engineered for infrastructure that cannot fail
      </h2>

      <p className='mt-6 text-lg leading-8 text-white/65'>
        Hospital oxygen infrastructure supports critical care, emergency
        medicine, surgery, and neonatal services. OxyTrack is designed with
        resilience, auditability, and operational continuity as core
        engineering principles.
      </p>
    </div>

    <div className='mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
      {pillars.map((pillar) => (
        <div
          key={pillar.title}
          className='rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl'
        >
          <div className='text-sm uppercase tracking-[0.22em] text-cyan-300'>
            {pillar.title}
          </div>

          <div className='mt-5 text-4xl font-semibold text-white'>
            {pillar.metric}
          </div>

          <p className='mt-5 leading-7 text-white/60'>
            {pillar.description}
          </p>
        </div>
      ))}
    </div>

    <div className='mt-20 rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl'>
      <div className='grid gap-10 lg:grid-cols-[1fr_0.9fr]'>
        <div>
          <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
            Reliability architecture
          </div>

          <div className='mt-8 space-y-8'>
            <div className='rounded-2xl border border-white/10 bg-[#071A35]/70 p-6'>
              <div className='text-lg font-semibold text-white'>
                Local-first telemetry
              </div>
              <p className='mt-3 leading-7 text-white/60'>
                Every gateway retains telemetry locally before cloud
                synchronization, ensuring operational history is preserved
                even during connectivity disruptions.
              </p>
            </div>

            <div className='rounded-2xl border border-white/10 bg-[#071A35]/70 p-6'>
              <div className='text-lg font-semibold text-white'>
                Continuous audit trail
              </div>
              <p className='mt-3 leading-7 text-white/60'>
                Pressure readings, flow measurements, calibration events, and
                maintenance actions are recorded with timestamps for
                engineering accountability.
              </p>
            </div>

            <div className='rounded-2xl border border-white/10 bg-[#071A35]/70 p-6'>
              <div className='text-lg font-semibold text-white'>
                Predictive maintenance
              </div>
              <p className='mt-3 leading-7 text-white/60'>
                Telemetry trends identify regulator degradation, abnormal
                pressure behavior, and potential leak signatures before they
                affect clinical operations.
              </p>
            </div>
          </div>
        </div>

        <div className='rounded-[28px] border border-white/10 bg-[#071A35]/80 p-8'>
          <div className='text-sm uppercase tracking-[0.25em] text-cyan-300'>
            Engineering checklist
          </div>

          <div className='mt-8 space-y-5'>
            {checklist.map((item) => (
              <div key={item} className='flex items-center gap-4'>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10'>
                  <div className='h-2 w-2 rounded-full bg-cyan-300' />
                </div>
                <div className='text-white/70'>{item}</div>
              </div>
            ))}
          </div>

          <div className='mt-10 border-t border-white/10 pt-6'>
            <div className='text-sm uppercase tracking-[0.22em] text-cyan-300'>
              Infrastructure principle
            </div>

            <p className='mt-4 leading-7 text-white/60'>
              Oxygen delivery is clinical infrastructure. Telemetry must be
              resilient, verifiable, and continuously available.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</section>

);
}

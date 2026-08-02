'use client';

import SectionContainer from '@/components/layout/SectionContainer';

const layers = [
{
title: 'Sensor acquisition',
description:
'Pressure and flow sensors capture continuous telemetry from hospital oxygen pipelines.',
metric: '120 Hz',
},
{
title: 'Edge processing',
description:
'ESP32 gateways validate, buffer, timestamp, and encrypt telemetry before transmission.',
metric: '<50 ms',
},
{
title: 'MQTT transport',
description:
'Reliable publish-subscribe telemetry architecture with offline synchronization and replay.',
metric: '99.98%',
},
{
title: 'Analytics engine',
description:
'Leak detection, pressure anomaly analysis, consumption forecasting, and infrastructure health scoring.',
metric: 'AI',
},
];

export default function IntelligenceEngineSection() {
return ( <section className='relative overflow-hidden bg-[#030712] py-32'> <div className='absolute inset-0'> <div className='absolute right-0 top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[180px]' /> </div>

  <SectionContainer className='relative z-10'>
    <div className='max-w-3xl'>
      <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
        Intelligence engine
      </div>

      <h2 className='mt-6 text-4xl font-semibold text-white md:text-5xl'>
        Telemetry becomes infrastructure intelligence
      </h2>

      <p className='mt-6 text-lg leading-8 text-white/65'>
        OxyTrack is not a sensor dashboard. It is a distributed telemetry
        platform that transforms pressure and flow measurements into
        predictive operational intelligence for hospital oxygen
        infrastructure.
      </p>
    </div>

    <div className='mt-20 rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl'>
      <div className='grid gap-8 lg:grid-cols-[1fr_1.2fr]'>
        <div>
          <div className='text-sm uppercase tracking-[0.25em] text-cyan-300'>
            Processing pipeline
          </div>

          <div className='mt-8 space-y-8'>
            {layers.map((layer, index) => (
              <div key={layer.title} className='relative'>
                {index < layers.length - 1 && (
                  <div className='absolute left-5 top-14 h-12 w-px bg-gradient-to-b from-cyan-400 to-transparent' />
                )}

                <div className='flex gap-5'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300'>
                    {index + 1}
                  </div>

                  <div>
                    <div className='text-lg font-semibold text-white'>
                      {layer.title}
                    </div>

                    <p className='mt-2 leading-7 text-white/60'>
                      {layer.description}
                    </p>

                    <div className='mt-3 text-sm font-medium text-cyan-300'>
                      {layer.metric}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-[28px] border border-white/10 bg-[#071A35]/80 p-8'>
          <div className='text-sm uppercase tracking-[0.25em] text-cyan-300'>
            Predictive capabilities
          </div>

          <div className='mt-8 space-y-6'>
            <div className='rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
              <div className='flex items-center justify-between'>
                <span className='font-medium text-white'>
                  Leak probability model
                </span>
                <span className='text-cyan-300'>Low</span>
              </div>
              <div className='mt-3 h-2 rounded-full bg-white/10'>
                <div className='h-full w-[18%] rounded-full bg-gradient-to-r from-cyan-400 to-sky-400' />
              </div>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
              <div className='flex items-center justify-between'>
                <span className='font-medium text-white'>
                  Pressure anomaly confidence
                </span>
                <span className='text-cyan-300'>98.7%</span>
              </div>
              <div className='mt-3 h-2 rounded-full bg-white/10'>
                <div className='h-full w-[98%] rounded-full bg-gradient-to-r from-cyan-400 to-sky-400' />
              </div>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
              <div className='flex items-center justify-between'>
                <span className='font-medium text-white'>
                  Infrastructure health score
                </span>
                <span className='text-cyan-300'>97.8%</span>
              </div>
              <div className='mt-3 h-2 rounded-full bg-white/10'>
                <div className='h-full w-[97%] rounded-full bg-gradient-to-r from-cyan-400 to-sky-400' />
              </div>
            </div>
          </div>

          <div className='mt-8 border-t border-white/10 pt-6'>
            <div className='text-sm uppercase tracking-[0.22em] text-cyan-300'>
              Operational outcome
            </div>

            <p className='mt-4 leading-7 text-white/60'>
              Detect leaks before oxygen loss becomes measurable, identify
              regulator degradation before pressure instability reaches
              critical care units, and forecast oxygen demand before supply
              constraints occur.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</section>

);
}

'use client';

import SectionContainer from '@/components/layout/SectionContainer';

const metrics = [
{
value: '30–40%',
label: 'Potential reduction in undetected oxygen losses',
},
{
value: '24/7',
label: 'Continuous infrastructure monitoring',
},
{
value: '<5 min',
label: 'Time to detect pressure anomalies',
},
{
value: '1 dashboard',
label: 'Unified biomedical operations visibility',
},
];

const comparisons = [
{
title: 'Manual recording',
old: 'Clipboards, shift logs, delayed reporting',
new: 'Continuous telemetry with automatic history',
},
{
title: 'Leak detection',
old: 'Discovered after oxygen loss becomes significant',
new: 'Pressure anomaly detection and predictive alerts',
},
{
title: 'Infrastructure visibility',
old: 'Limited ward-level consumption insight',
new: 'Branch-level pressure and flow intelligence',
},
{
title: 'Maintenance',
old: 'Reactive regulator and pipeline servicing',
new: 'Predictive maintenance based on telemetry trends',
},
];

export default function EconomicImpactSection() {
return ( <section className='relative overflow-hidden bg-[#030712] py-32'> <div className='absolute inset-0'> <div className='absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[200px]' /> </div>

  <SectionContainer className='relative z-10'>
    <div className='max-w-3xl'>
      <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
        Economic impact
      </div>

      <h2 className='mt-6 text-4xl font-semibold text-white md:text-5xl'>
        Oxygen losses are expensive. Invisible losses are even more
        expensive.
      </h2>

      <p className='mt-6 text-lg leading-8 text-white/65'>
        Hospitals invest heavily in oxygen supply infrastructure, but many
        facilities lack continuous visibility into what happens after oxygen
        enters the building. OxyTrack converts infrastructure telemetry into
        measurable operational savings.
      </p>
    </div>

    {/* KPI strip */}
    <div className='mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className='rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl'
        >
          <div className='text-4xl font-semibold text-white'>
            {metric.value}
          </div>
          <div className='mt-3 leading-7 text-white/60'>
            {metric.label}
          </div>
        </div>
      ))}
    </div>

    {/* Before vs after */}
    <div className='mt-20 rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl'>
      <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
        Operational transformation
      </div>

      <div className='mt-10 grid gap-6'>
        {comparisons.map((item) => (
          <div
            key={item.title}
            className='grid gap-6 rounded-2xl border border-white/10 bg-[#071A35]/70 p-6 md:grid-cols-[220px_1fr_1fr]'
          >
            <div className='font-semibold text-white'>{item.title}</div>

            <div className='rounded-xl border border-white/10 bg-white/[0.03] p-4'>
              <div className='text-xs uppercase tracking-[0.2em] text-white/40'>
                Traditional
              </div>
              <p className='mt-2 text-white/60'>{item.old}</p>
            </div>

            <div className='rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4'>
              <div className='text-xs uppercase tracking-[0.2em] text-cyan-300'>
                OxyTrack
              </div>
              <p className='mt-2 text-white/80'>{item.new}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ROI panel */}
    <div className='mt-20 grid gap-10 lg:grid-cols-[1fr_0.9fr]'>
      <div className='rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl'>
        <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
          Why hospitals adopt telemetry
        </div>

        <div className='mt-8 space-y-5'>
          {[
            'Reduce oxygen wastage through early leak detection',
            'Improve biomedical engineering response time',
            'Create auditable oxygen consumption records',
            'Optimize maintenance scheduling',
            'Increase visibility across ICU, theatre, HDU, NICU, and wards',
            'Support data-driven procurement and infrastructure planning',
          ].map((item) => (
            <div key={item} className='flex items-start gap-4'>
              <div className='mt-2 h-2 w-2 rounded-full bg-cyan-300' />
              <div className='text-white/70'>{item}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 p-8 backdrop-blur-xl'>
        <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
          OxyTrack value equation
        </div>

        <div className='mt-8 space-y-6'>
          <div>
            <div className='text-white/50'>Pressure visibility</div>
            <div className='mt-2 text-2xl font-semibold text-white'>
              Continuous
            </div>
          </div>

          <div className='h-px bg-cyan-400/20' />

          <div>
            <div className='text-white/50'>Flow analytics</div>
            <div className='mt-2 text-2xl font-semibold text-white'>
              Real time
            </div>
          </div>

          <div className='h-px bg-cyan-400/20' />

          <div>
            <div className='text-white/50'>Leak detection</div>
            <div className='mt-2 text-2xl font-semibold text-white'>
              Predictive
            </div>
          </div>

          <div className='h-px bg-cyan-400/20' />

          <div>
            <div className='text-white/50'>Operational intelligence</div>
            <div className='mt-2 text-2xl font-semibold text-white'>
              Actionable
            </div>
          </div>
        </div>

        <div className='mt-10 rounded-2xl border border-cyan-400/20 bg-[#071A35]/80 p-5'>
          <div className='text-sm text-cyan-300'>
            From tank to bedside
          </div>
          <div className='mt-2 text-xl font-semibold text-white'>
            Every liter accounted for
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</section>

);
}

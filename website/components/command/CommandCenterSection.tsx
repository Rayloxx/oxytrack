'use client';

import SectionContainer from '@/components/layout/SectionContainer';

const alerts = [
{
title: 'ICU branch pressure stable',
time: '2 min ago',
severity: 'Normal',
},
{
title: 'Theatre flow trending upward',
time: '8 min ago',
severity: 'Monitor',
},
{
title: 'Regulator efficiency deviation detected',
time: '24 min ago',
severity: 'Advisory',
},
{
title: 'Telemetry synchronization complete',
time: 'Now',
severity: 'System',
},
];

const branches = [
{
name: 'ICU',
pressure: '4.21',
flow: '46',
health: '99.1%',
},
{
name: 'Theatre',
pressure: '4.18',
flow: '38',
health: '98.4%',
},
{
name: 'HDU',
pressure: '4.16',
flow: '29',
health: '97.9%',
},
{
name: 'NICU',
pressure: '4.15',
flow: '18',
health: '98.7%',
},
];

export default function CommandCenterSection() {
return ( <section className='relative overflow-hidden bg-[#020617] py-32'> <div className='absolute inset-0'> <div className='absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[220px]' /> </div>

```
  <SectionContainer className='relative z-10'>
    <div className='max-w-3xl'>
      <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
        Command center
      </div>

      <h2 className='mt-6 text-4xl font-semibold text-white md:text-5xl'>
        One operational view of the entire oxygen infrastructure
      </h2>

      <p className='mt-6 text-lg leading-8 text-white/65'>
        Biomedical engineers should not chase pressure readings across
        departments. OxyTrack provides a single operational command center
        for the entire medical gas network.
      </p>
    </div>

    <div className='mt-20 rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl'>
      {/* Header */}
      <div className='flex flex-col gap-6 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between'>
        <div>
          <div className='text-sm uppercase tracking-[0.25em] text-cyan-300'>
            OxyTrack Command Center
          </div>
          <div className='mt-2 text-2xl font-semibold text-white'>
            National referral hospital infrastructure
          </div>
        </div>

        <div className='flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3'>
          <div className='h-2 w-2 rounded-full bg-cyan-300 animate-pulse' />
          <div className='text-sm text-cyan-300'>
            Infrastructure synchronized
          </div>
        </div>
      </div>

      <div className='mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]'>
        {/* Branch table */}
        <div className='rounded-[28px] border border-white/10 bg-[#071A35]/80 p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <div className='text-sm uppercase tracking-[0.22em] text-cyan-300'>
                Branch telemetry
              </div>
              <div className='mt-1 text-xl font-semibold text-white'>
                Live oxygen distribution network
              </div>
            </div>

            <div className='rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300'>
              6 branches online
            </div>
          </div>

          <div className='mt-8 overflow-hidden rounded-2xl border border-white/10'>
            <div className='grid grid-cols-4 bg-white/[0.03] px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/50'>
              <div>Branch</div>
              <div>Pressure</div>
              <div>Flow</div>
              <div>Health</div>
            </div>

            {branches.map((branch) => (
              <div
                key={branch.name}
                className='grid grid-cols-4 items-center border-t border-white/10 px-5 py-4'
              >
                <div className='font-medium text-white'>{branch.name}</div>
                <div className='text-cyan-300'>{branch.pressure} bar</div>
                <div className='text-white/70'>{branch.flow} L/min</div>
                <div className='text-cyan-300'>{branch.health}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert stream */}
        <div className='rounded-[28px] border border-white/10 bg-[#071A35]/80 p-6'>
          <div className='text-sm uppercase tracking-[0.22em] text-cyan-300'>
            Alert stream
          </div>

          <div className='mt-6 space-y-4'>
            {alerts.map((alert) => (
              <div
                key={alert.title}
                className='rounded-2xl border border-white/10 bg-white/[0.03] p-4'
              >
                <div className='flex items-center justify-between'>
                  <div className='font-medium text-white'>
                    {alert.title}
                  </div>

                  <div className='text-xs text-cyan-300'>
                    {alert.time}
                  </div>
                </div>

                <div className='mt-3 flex items-center justify-between text-sm'>
                  <span className='text-white/50'>Severity</span>
                  <span className='text-cyan-300'>
                    {alert.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-8 border-t border-white/10 pt-6'>
            <div className='text-sm uppercase tracking-[0.22em] text-cyan-300'>
              Operational summary
            </div>

            <div className='mt-5 grid gap-4'>
              <div className='flex items-center justify-between'>
                <span className='text-white/60'>Active sensors</span>
                <span className='font-medium text-white'>24</span>
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-white/60'>Telemetry latency</span>
                <span className='font-medium text-white'>42 ms</span>
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-white/60'>Data retention</span>
                <span className='font-medium text-white'>365 days</span>
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-white/60'>System uptime</span>
                <span className='font-medium text-cyan-300'>
                  99.98%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</section>

);
}

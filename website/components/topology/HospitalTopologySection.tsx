'use client';

import SectionContainer from '@/components/layout/SectionContainer';

const branches = [
{
name: 'ICU',
pressure: '4.21 bar',
flow: '46 L/min',
status: 'Optimal',
x: '78%',
y: '18%',
},
{
name: 'Theatre',
pressure: '4.18 bar',
flow: '38 L/min',
status: 'Optimal',
x: '82%',
y: '74%',
},
{
name: 'HDU',
pressure: '4.16 bar',
flow: '29 L/min',
status: 'Stable',
x: '90%',
y: '46%',
},
{
name: 'ER',
pressure: '4.19 bar',
flow: '31 L/min',
status: 'Optimal',
x: '18%',
y: '22%',
},
{
name: 'NICU',
pressure: '4.15 bar',
flow: '18 L/min',
status: 'Stable',
x: '16%',
y: '78%',
},
{
name: 'General wards',
pressure: '4.12 bar',
flow: '20 L/min',
status: 'Monitor',
x: '10%',
y: '48%',
},
];

export default function HospitalTopologySection() {
return ( <section className='relative overflow-hidden bg-[#020617] py-32'> <div className='absolute inset-0'> <div className='absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[220px]' /> </div>

  <SectionContainer className='relative z-10'>
    <div className='max-w-3xl'>
      <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
        Hospital topology
      </div>

      <h2 className='mt-6 text-4xl font-semibold text-white md:text-5xl'>
        A digital twin of the oxygen network
      </h2>

      <p className='mt-6 text-lg leading-8 text-white/65'>
        OxyTrack creates a live operational map of the hospital oxygen
        infrastructure, giving biomedical engineers branch-level visibility
        from the central oxygen source to every critical care unit.
      </p>
    </div>

    <div className='mt-20 rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl'>
      <div className='flex items-center justify-between border-b border-white/10 pb-6'>
        <div>
          <div className='text-sm uppercase tracking-[0.25em] text-cyan-300'>
            Live network topology
          </div>
          <div className='mt-2 text-2xl font-semibold text-white'>
            Central oxygen distribution manifold
          </div>
        </div>

        <div className='rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300'>
          6 monitored branches
        </div>
      </div>

      <div className='mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]'>
        {/* Network visualization */}
        <div className='relative h-[560px] rounded-[28px] border border-white/10 bg-[#031124] overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0%,transparent_65%)]' />

          {/* Central manifold */}
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-500/15 shadow-[0_0_40px_rgba(34,211,238,0.18)]'>
              <div className='h-4 w-4 rounded-full bg-cyan-300 animate-pulse' />
            </div>
            <div className='mt-3 text-center text-xs uppercase tracking-[0.22em] text-cyan-300'>
              Manifold
            </div>
          </div>

          {/* Branch lines */}
          <svg
            className='absolute inset-0 h-full w-full'
            viewBox='0 0 1000 700'
            preserveAspectRatio='none'
          >
            <defs>
              <linearGradient
                id='branchLine'
                x1='0'
                y1='0'
                x2='1'
                y2='1'
              >
                <stop offset='0%' stopColor='#22D3EE' />
                <stop offset='100%' stopColor='#67E8F9' />
              </linearGradient>
            </defs>

            <path
              d='M500 350 C620 260 720 180 780 140'
              stroke='url(#branchLine)'
              strokeWidth='3'
              fill='none'
            />
            <path
              d='M500 350 C620 430 720 520 820 560'
              stroke='url(#branchLine)'
              strokeWidth='3'
              fill='none'
            />
            <path
              d='M500 350 C660 350 760 350 900 350'
              stroke='url(#branchLine)'
              strokeWidth='3'
              fill='none'
            />
            <path
              d='M500 350 C380 260 280 180 180 160'
              stroke='url(#branchLine)'
              strokeWidth='3'
              fill='none'
            />
            <path
              d='M500 350 C380 430 260 520 160 560'
              stroke='url(#branchLine)'
              strokeWidth='3'
              fill='none'
            />
            <path
              d='M500 350 C320 350 220 350 100 350'
              stroke='url(#branchLine)'
              strokeWidth='3'
              fill='none'
            />
          </svg>

          {/* Branch nodes */}
          {branches.map((branch) => (
            <div
              key={branch.name}
              className='absolute'
              style={{
                left: branch.x,
                top: branch.y,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/15 shadow-[0_0_24px_rgba(34,211,238,0.15)]'>
                <div className='h-2 w-2 rounded-full bg-cyan-300' />
              </div>
              <div className='mt-2 text-center text-[11px] uppercase tracking-[0.18em] text-cyan-300'>
                {branch.name}
              </div>
            </div>
          ))}
        </div>

        {/* Branch telemetry */}
        <div className='space-y-4'>
          {branches.map((branch) => (
            <div
              key={branch.name}
              className='rounded-2xl border border-white/10 bg-[#071A35]/80 p-5 backdrop-blur-xl'
            >
              <div className='flex items-center justify-between'>
                <div className='font-semibold text-white'>
                  {branch.name}
                </div>
                <div
                  className={`text-sm ${
                    branch.status === 'Optimal'
                      ? 'text-cyan-300'
                      : branch.status === 'Stable'
                      ? 'text-sky-300'
                      : 'text-amber-300'
                  }`}
                >
                  {branch.status}
                </div>
              </div>

              <div className='mt-4 grid grid-cols-2 gap-4'>
                <div>
                  <div className='text-xs uppercase tracking-[0.18em] text-white/40'>
                    Pressure
                  </div>
                  <div className='mt-1 text-xl font-semibold text-white'>
                    {branch.pressure}
                  </div>
                </div>

                <div>
                  <div className='text-xs uppercase tracking-[0.18em] text-white/40'>
                    Flow
                  </div>
                  <div className='mt-1 text-xl font-semibold text-white'>
                    {branch.flow}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionContainer>
</section>

);
}

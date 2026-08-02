'use client';

import { useTelemetrySync } from '@/components/network/TelemetrySync';

export default function MissionControlSection() {
const telemetry = useTelemetrySync();

return ( <section
   id='technology'
   className='relative overflow-hidden bg-[#020617] py-32'
 > <div className='absolute inset-0'> <div className='absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[220px]' /> </div>

  <div className='relative z-10 mx-auto max-w-7xl px-8'>
    <div className='max-w-3xl'>
      <div className='text-sm uppercase tracking-[0.35em] text-cyan-300'>
        Mission control
      </div>

      <h2 className='mt-6 text-4xl font-semibold text-white md:text-5xl'>
        A control room for hospital oxygen infrastructure
      </h2>

      <p className='mt-6 text-lg leading-8 text-white/65'>
        OxyTrack transforms distributed sensor telemetry into operational
        intelligence, giving biomedical engineers continuous visibility into
        pressure stability, oxygen consumption, leak risk, and infrastructure
        health across the entire medical gas network.
      </p>
    </div>

    <div className='mt-20 rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl'>
      {/* Dashboard header */}
      <div className='flex flex-col gap-6 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between'>
        <div>
          <div className='text-sm uppercase tracking-[0.25em] text-cyan-300'>
            OxyTrack Mission Control
          </div>
          <div className='mt-2 text-2xl font-semibold text-white'>
            Moi Teaching &amp; Referral Hospital
          </div>
        </div>

        <div className='flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3'>
          <div className='h-2 w-2 rounded-full bg-cyan-300 animate-pulse' />
          <div>
            <div className='text-sm font-medium text-white'>
              Telemetry synchronized
            </div>
            <div className='text-xs text-cyan-300'>
              MQTT stream active
            </div>
          </div>
        </div>
      </div>

      {/* KPI row */}
      <div className='mt-8 grid gap-6 md:grid-cols-4'>
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
        ].map((item) => (
          <div
            key={item.label}
            className='rounded-2xl border border-white/10 bg-[#071A35]/80 p-5'
          >
            <div className='text-xs uppercase tracking-[0.22em] text-cyan-300'>
              {item.label}
            </div>
            <div className='mt-3 text-3xl font-semibold text-white'>
              {item.value}
            </div>
          </div>
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

            <div className='rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300'>
              Stable
            </div>
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

              <path
                d='M0 110 C40 108 80 106 120 104 S200 102 240 100 S320 98 360 101 S440 105 480 102 S540 98 600 100'
                stroke='url(#pressureLine)'
                strokeWidth='3'
                fill='none'
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
                24 h
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
            <div className='rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4'>
              <div className='flex items-center justify-between'>
                <div className='font-medium text-white'>
                  ICU pressure stability
                </div>
                <div className='text-cyan-300'>4.21 bar</div>
              </div>
              <div className='mt-2 text-sm text-white/60'>
                Pressure remains within operational tolerance.
              </div>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/[0.03] p-4'>
              <div className='flex items-center justify-between'>
                <div className='font-medium text-white'>
                  Theatre flow trend
                </div>
                <div className='text-cyan-300'>Normal</div>
              </div>
              <div className='mt-2 text-sm text-white/60'>
                Oxygen consumption remains within expected range.
              </div>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/[0.03] p-4'>
              <div className='flex items-center justify-between'>
                <div className='font-medium text-white'>
                  Infrastructure health
                </div>
                <div className='text-cyan-300'>97.8%</div>
              </div>
              <div className='mt-2 text-sm text-white/60'>
                No leak signatures detected across monitored branches.
              </div>
            </div>
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
              <span className='font-medium text-cyan-300'>
                Low
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

);
}

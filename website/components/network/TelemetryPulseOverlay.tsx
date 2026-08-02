'use client';

import { useTelemetrySync } from '@/components/network/TelemetrySync';

const nodes = [
{ id: 'ICU', x: '78%', y: '22%', delay: 0 },
{ id: 'THEATRE', x: '78%', y: '78%', delay: 180 },
{ id: 'ER', x: '22%', y: '22%', delay: 360 },
{ id: 'NICU', x: '22%', y: '78%', delay: 540 },
{ id: 'HDU', x: '88%', y: '50%', delay: 720 },
{ id: 'WARD', x: '12%', y: '50%', delay: 900 },
];

export default function TelemetryPulseOverlay() {
const telemetry = useTelemetrySync();

return ( <div className='pointer-events-none absolute inset-0'>
{/* Central pressure origin */} <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'> <div
       key={telemetry.pulse}
       className='h-6 w-6 rounded-full bg-cyan-300 telemetry-core-pulse'
     /> </div>

  {/* Sensor activation choreography */}
  {nodes.map((node) => (
    <div
      key={`${telemetry.pulse}-${node.id}`}
      className='absolute'
      style={{
        left: node.x,
        top: node.y,
        transform: 'translate(-50%, -50%)',
        animationDelay: `${node.delay}ms`,
      }}
    >
      <div className='relative'>
        <div className='h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)]' />

        <div className='absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 telemetry-node-ring' />

        <div className='absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 telemetry-node-wave' />

        <div className='absolute left-1/2 top-[28px] -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-cyan-300/70'>
          {node.id}
        </div>
      </div>
    </div>
  ))}

  {/* Pipeline energy sweep */}
  <svg
    className='absolute inset-0 h-full w-full'
    viewBox='0 0 1000 700'
    preserveAspectRatio='none'
  >
    <defs>
      <linearGradient
        id='telemetrySweep'
        x1='0'
        y1='0'
        x2='1'
        y2='0'
      >
        <stop offset='0%' stopColor='#22D3EE' stopOpacity='0' />
        <stop offset='45%' stopColor='#67E8F9' stopOpacity='0.9' />
        <stop offset='55%' stopColor='#A5F3FC' stopOpacity='1' />
        <stop offset='100%' stopColor='#22D3EE' stopOpacity='0' />
      </linearGradient>
    </defs>

    {[
      'M500 350 L780 160',
      'M500 350 L780 540',
      'M500 350 L220 160',
      'M500 350 L220 540',
      'M500 350 L880 350',
      'M500 350 L120 350',
    ].map((path, index) => (
      <path
        key={`${telemetry.pulse}-${index}`}
        d={path}
        stroke='url(#telemetrySweep)'
        strokeWidth='3'
        fill='none'
        className='telemetry-path-sweep'
        style={{ animationDelay: `${index * 120}ms` }}
      />
    ))}
  </svg>
</div>

);
}

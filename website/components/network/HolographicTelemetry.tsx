'use client';

import { useTelemetrySync } from '@/components/network/TelemetrySync';

type NodePanelProps = {
title: string;
value: string;
unit: string;
status: 'optimal' | 'stable' | 'monitor';
x: string;
y: string;
};

function NodePanel({
title,
value,
unit,
status,
x,
y,
}: NodePanelProps) {
return (
<div
className='absolute w-52'
style={{
left: x,
top: y,
transform: 'translate(-50%, -50%)',
}}
>
{/* Data tether */} <div className='absolute left-1/2 top-full h-10 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400 to-transparent' />

  <div className='rounded-2xl border border-cyan-400/20 bg-[#071A35]/80 p-4 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.08)]'>
    <div className='flex items-center justify-between'>
      <div className='text-[10px] uppercase tracking-[0.25em] text-cyan-300'>
        {title}
      </div>

      <div
        className={`h-2 w-2 rounded-full ${
          status === 'optimal'
            ? 'bg-cyan-300'
            : status === 'stable'
            ? 'bg-cyan-400'
            : 'bg-amber-300'
        }`}
      />
    </div>

    <div className='mt-3 flex items-end gap-2'>
      <div className='text-3xl font-semibold text-white'>{value}</div>
      <div className='pb-1 text-sm text-cyan-300'>{unit}</div>
    </div>

    <div className='mt-3 h-px bg-gradient-to-r from-cyan-400/30 via-cyan-300/60 to-transparent' />

    <div className='mt-3 flex items-center justify-between text-xs'>
      <span className='text-white/50'>Sensor online</span>
      <span className='text-cyan-300'>SYNC</span>
    </div>
  </div>
</div>

);
}

export default function HolographicTelemetry() {
const telemetry = useTelemetrySync();

return ( <div className='pointer-events-none absolute inset-0'> <NodePanel
     title='ICU pressure'
     value={telemetry.pressure.toFixed(2)}
     unit='bar'
     status='optimal'
     x='82%'
     y='16%'
   />

  <NodePanel
    title='Theatre flow'
    value={String(telemetry.flow)}
    unit='L/min'
    status='stable'
    x='82%'
    y='84%'
  />

  <NodePanel
    title='ER purity'
    value={telemetry.purity.toFixed(1)}
    unit='%'
    status='optimal'
    x='18%'
    y='16%'
  />

  <NodePanel
    title='NICU health'
    value={telemetry.health.toFixed(1)}
    unit='%'
    status='optimal'
    x='18%'
    y='84%'
  />

  {/* Central intelligence panel */}
  <div className='absolute left-1/2 top-[8%] -translate-x-1/2'>
    <div className='rounded-2xl border border-cyan-400/20 bg-[#071A35]/90 px-6 py-4 backdrop-blur-2xl shadow-[0_0_48px_rgba(34,211,238,0.12)]'>
      <div className='text-[10px] uppercase tracking-[0.3em] text-cyan-300'>
        OxyTrack core
      </div>

      <div className='mt-2 flex items-center gap-6'>
        <div>
          <div className='text-2xl font-semibold text-white'>
            {telemetry.phase}
          </div>
          <div className='text-xs text-white/50'>Network phase</div>
        </div>

        <div className='h-10 w-px bg-white/10' />

        <div>
          <div className='text-2xl font-semibold text-white'>
            #{telemetry.pulse}
          </div>
          <div className='text-xs text-white/50'>Pulse sequence</div>
        </div>
      </div>
    </div>
  </div>
</div>

);
}

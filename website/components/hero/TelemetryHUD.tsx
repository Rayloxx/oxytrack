'use client';

import { useTelemetrySync } from '@/components/network/TelemetrySync';

function Metric({
label,
value,
unit,
}: {
label: string;
value: string | number;
unit?: string;
}) {
return ( <div className='rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl'> <div className='text-[11px] uppercase tracking-[0.28em] text-cyan-300'>
{label} </div>

```
  <div className='mt-3 flex items-end gap-2'>
    <div className='text-3xl font-semibold text-white'>{value}</div>

    {unit && (
      <div className='pb-1 text-sm text-cyan-300'>{unit}</div>
    )}
  </div>
</div>
```

);
}

export default function TelemetryHUD() {
const telemetry = useTelemetrySync();

return ( <div className='pointer-events-none absolute inset-0'>
{/* Top left */} <div className='absolute left-8 top-24 w-64'> <Metric
       label='Main line pressure'
       value={telemetry.pressure.toFixed(2)}
       unit='bar'
     /> </div>

```
  {/* Top right */}
  <div className='absolute right-8 top-24 w-64'>
    <Metric
      label='Oxygen flow rate'
      value={telemetry.flow}
      unit='L/min'
    />
  </div>

  {/* Bottom left */}
  <div className='absolute bottom-10 left-8 w-72 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl'>
    <div className='text-[11px] uppercase tracking-[0.28em] text-cyan-300'>
      Network status
    </div>

    <div className='mt-4 flex items-center justify-between'>
      <span className='text-white/70'>Infrastructure health</span>
      <span className='font-semibold text-white'>
        {telemetry.health.toFixed(1)}%
      </span>
    </div>

    <div className='mt-3 h-2 overflow-hidden rounded-full bg-white/10'>
      <div
        className='h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 transition-all duration-700'
        style={{ width: `${telemetry.health}%` }}
      />
    </div>

    <div className='mt-5 flex items-center justify-between'>
      <span className='text-white/70'>O₂ purity</span>
      <span className='font-semibold text-white'>
        {telemetry.purity.toFixed(1)}%
      </span>
    </div>

    <div className='mt-5 flex items-center justify-between'>
      <span className='text-white/70'>Telemetry phase</span>

      <span className='font-semibold text-cyan-300 uppercase'>
        {telemetry.phase}
      </span>
    </div>
  </div>

  {/* Bottom right */}
  <div className='absolute bottom-10 right-8 w-72 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5 backdrop-blur-xl'>
    <div className='flex items-center justify-between'>
      <div className='text-[11px] uppercase tracking-[0.28em] text-cyan-300'>
        Active telemetry
      </div>

      <div className='flex items-center gap-2'>
        <div
          className={`h-2 w-2 rounded-full ${
            telemetry.phase === 'propagating'
              ? 'bg-cyan-300'
              : telemetry.phase === 'stabilizing'
              ? 'bg-cyan-400'
              : 'bg-cyan-500'
          }`}
        />

        <span className='text-xs text-cyan-300 uppercase tracking-[0.2em]'>
          {telemetry.phase}
        </span>
      </div>
    </div>

    <div className='mt-5 grid grid-cols-2 gap-4'>
      <div>
        <div className='text-2xl font-semibold text-white'>6</div>
        <div className='mt-1 text-xs text-white/50'>Sensor nodes</div>
      </div>

      <div>
        <div className='text-2xl font-semibold text-white'>
          {telemetry.phase === 'propagating' ? 2 : 1}
        </div>
        <div className='mt-1 text-xs text-white/50'>Active alerts</div>
      </div>

      <div>
        <div className='text-2xl font-semibold text-white'>24/7</div>
        <div className='mt-1 text-xs text-white/50'>Monitoring</div>
      </div>

      <div>
        <div className='text-2xl font-semibold text-white'>MQTT</div>
        <div className='mt-1 text-xs text-white/50'>Telemetry</div>
      </div>
    </div>

    <div className='mt-6 border-t border-white/10 pt-4'>
      <div className='flex items-center justify-between text-sm'>
        <span className='text-white/60'>Synchronization pulse</span>
        <span className='font-mono text-cyan-300'>
          #{telemetry.pulse}
        </span>
      </div>
    </div>
  </div>
</div>

);
}

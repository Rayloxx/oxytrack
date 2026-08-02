'use client';

import { useEffect, useState } from 'react';

export default function PressureWaveEngine() {
const [pulse, setPulse] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setPulse((p) => p + 1);
}, 2800);

```
return () => clearInterval(interval);
```

}, []);

return ( <div className='pointer-events-none absolute inset-0'>
{/* Expanding pressure rings */}
<div key={`ring-${pulse}`} className='absolute left-1/2 top-1/2'> <div className='h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/60 pressure-ring pressure-ring-1' /> <div className='h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 pressure-ring pressure-ring-2' /> <div className='h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 pressure-ring pressure-ring-3' /> </div>

```
  {/* Energy flash */}
  <div key={`flash-${pulse}`} className='absolute left-1/2 top-1/2'>
    <div className='h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 pressure-flash' />
  </div>

  {/* Pipeline illumination */}
  <svg
    className='absolute inset-0 h-full w-full'
    viewBox='0 0 1200 800'
    preserveAspectRatio='xMidYMid meet'
  >
    <defs>
      <linearGradient id='wave' x1='0' y1='0' x2='1' y2='0'>
        <stop offset='0%' stopColor='#22D3EE' stopOpacity='0' />
        <stop offset='50%' stopColor='#67E8F9' stopOpacity='1' />
        <stop offset='100%' stopColor='#22D3EE' stopOpacity='0' />
      </linearGradient>
    </defs>

    {[
      'M600 400 L900 200',
      'M600 400 L900 600',
      'M600 400 L300 200',
      'M600 400 L300 600',
      'M600 400 L1040 400',
      'M600 400 L160 400',
    ].map((path, i) => (
      <path
        key={`${pulse}-${i}`}
        d={path}
        stroke='url(#wave)'
        strokeWidth='4'
        fill='none'
        className={`pressure-path pressure-path-${i + 1}`}
      />
    ))}
  </svg>
</div>
```

);
}

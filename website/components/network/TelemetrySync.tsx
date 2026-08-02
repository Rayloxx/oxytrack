'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type TelemetryState = {
pulse: number;
pressure: number;
flow: number;
health: number;
purity: number;
phase: 'idle' | 'propagating' | 'stabilizing';
};

const TelemetryContext = createContext<TelemetryState>({
pulse: 0,
pressure: 4.18,
flow: 182,
health: 97.8,
purity: 99.6,
phase: 'idle',
});

export function TelemetryProvider({
children,
}: {
children: React.ReactNode;
}) {
const [pulse, setPulse] = useState(0);
const [phase, setPhase] = useState<
'idle' | 'propagating' | 'stabilizing'

> ('idle');

useEffect(() => {
const interval = setInterval(() => {
setPulse((p) => p + 1);
setPhase('propagating');

```
  setTimeout(() => setPhase('stabilizing'), 900);
  setTimeout(() => setPhase('idle'), 1800);
}, 2800);

return () => clearInterval(interval);
```

}, []);

const telemetry = useMemo(() => {
const pressure =
phase === 'propagating'
? 4.28
: phase === 'stabilizing'
? 4.22
: 4.18;

```
const flow =
  phase === 'propagating'
    ? 188
    : phase === 'stabilizing'
    ? 184
    : 182;

return {
  pulse,
  pressure,
  flow,
  health: 97.8,
  purity: 99.6,
  phase,
};
```

}, [pulse, phase]);

return (
<TelemetryContext.Provider value={telemetry}>
{children}
</TelemetryContext.Provider>
);
}

export function useTelemetrySync() {
return useContext(TelemetryContext);
}

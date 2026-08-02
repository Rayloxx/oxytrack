'use client';

import {
createContext,
useContext,
useEffect,
useMemo,
useState,
} from 'react';

type Phase =
| 'boot'
| 'logo'
| 'ignition'
| 'network'
| 'telemetry'
| 'dashboard'
| 'ready';

type TimelineState = {
phase: Phase;
progress: number;
};

const MotionTimelineContext = createContext<TimelineState>({
phase: 'boot',
progress: 0,
});

export function MotionTimelineProvider({
children,
}: {
children: React.ReactNode;
}) {
const [state, setState] = useState<TimelineState>({
phase: 'boot',
progress: 0,
});

useEffect(() => {
const sequence = [
{ phase: 'boot', duration: 700 },
{ phase: 'logo', duration: 900 },
{ phase: 'ignition', duration: 900 },
{ phase: 'network', duration: 1000 },
{ phase: 'telemetry', duration: 1000 },
{ phase: 'dashboard', duration: 900 },
{ phase: 'ready', duration: 0 },
] as const;

let index = 0;
let cancelled = false;

function advance() {
  if (cancelled || index >= sequence.length) return;

  const current = sequence[index];

  setState({
    phase: current.phase,
    progress: index / (sequence.length - 1),
  });

  index += 1;

  if (current.duration > 0) {
    setTimeout(advance, current.duration);
  }
}

advance();

return () => {
  cancelled = true;
};

}, []);

const value = useMemo(() => state, [state]);

return (
<MotionTimelineContext.Provider value={value}>
{children}
</MotionTimelineContext.Provider>
);
}

export function useMotionTimeline() {
return useContext(MotionTimelineContext);
}

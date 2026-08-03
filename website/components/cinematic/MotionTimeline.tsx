'use client';

import {
createContext,
useContext,
useEffect,
useMemo,
useState,
} from 'react';
import { SECTION_IDS } from '@/lib/sectionRegistry';

export type MotionPhase =
| 'boot'
| 'hero'
| 'bridge'
| 'architecture'
| 'platform'
| 'command';

type MotionTimelineContextType = {
phase: MotionPhase;
};

const MotionTimelineContext =
createContext<MotionTimelineContextType | null>(null);

export function MotionTimelineProvider({
children,
}: {
children: React.ReactNode;
}) {
const [phase, setPhase] = useState<MotionPhase>('hero');

useEffect(() => {
const sections = [
{ id: SECTION_IDS.hero, phase: 'hero' as MotionPhase },
{ id: SECTION_IDS.architecture, phase: 'architecture' as MotionPhase },
{ id: SECTION_IDS.platform, phase: 'platform' as MotionPhase },
{ id: SECTION_IDS.technology, phase: 'command' as MotionPhase },
];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = sections.find((s) => s.id === entry.target.id);
        if (section) {
          setPhase(section.phase);
        }
      }
    });
  },
  {
    threshold: 0.35,
    rootMargin: '-10% 0px -30% 0px',
  }
);

sections.forEach((section) => {
  const element = document.getElementById(section.id);
  if (element) {
    observer.observe(element);
  }
});

return () => observer.disconnect();

}, []);

const value = useMemo(() => ({ phase }), [phase]);

return (
<MotionTimelineContext.Provider value={value}>
{children}
</MotionTimelineContext.Provider>
);
}

export function useMotionTimeline() {
const context = useContext(MotionTimelineContext);

if (!context) {
throw new Error(
'useMotionTimeline must be used within MotionTimelineProvider'
);
}

return context;
}

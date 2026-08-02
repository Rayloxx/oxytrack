import { gsap } from 'gsap';

export interface BootRefs {
  container: HTMLDivElement;
  logo: HTMLDivElement;
  pulse: HTMLDivElement;
  network: HTMLDivElement;
  ambient: HTMLDivElement;
}

export function createBootTimeline(
  refs: BootRefs,
  onStage: (stage: number) => void,
  onComplete: () => void
) {
  const tl = gsap.timeline({
    defaults: {
      ease: 'power3.out',
    },
    onComplete,
  });

  // Initial state
  tl.set(refs.container, { opacity: 1 });
  tl.set(refs.logo, {
    opacity: 0,
    scale: 0.9,
    filter: 'blur(12px)',
  });

  tl.set(refs.pulse, {
    opacity: 0,
    scale: 0,
  });

  tl.set(refs.network, {
    opacity: 0,
    scale: 1.02,
  });

  tl.set(refs.ambient, {
    opacity: 0,
  });

  // Stage 0 — darkness
  tl.call(() => onStage(0));
  tl.to({}, { duration: 1.2 });

  // Stage 1 — logo ignition
  tl.call(() => onStage(1));
  tl.to(refs.logo, {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    duration: 1.3,
  });

  tl.to(
    refs.logo,
    {
      textShadow:
        '0 0 24px rgba(25,212,232,0.45), 0 0 64px rgba(37,99,235,0.22)',
      duration: 0.8,
    },
    '-=0.4'
  );

  // Stage 2 — pressure pulse
  tl.call(() => onStage(2));
  tl.to(
    refs.pulse,
    {
      opacity: 1,
      scale: 8,
      duration: 1.5,
      ease: 'power2.out',
    },
    '-=0.2'
  );

  tl.to(
    refs.pulse,
    {
      opacity: 0,
      duration: 0.8,
      ease: 'power1.out',
    },
    '-=0.5'
  );

  // Stage 3 — ambient activation
  tl.call(() => onStage(3));
  tl.to(
    refs.ambient,
    {
      opacity: 1,
      duration: 1.2,
    },
    '-=0.4'
  );

  // Stage 4 — network activation
  tl.call(() => onStage(4));
  tl.to(
    refs.network,
    {
      opacity: 1,
      scale: 1,
      duration: 1.8,
      ease: 'power2.out',
    },
    '-=0.3'
  );

  // Stage 5 — telemetry synchronization
  tl.call(() => onStage(5));
  tl.to(
    refs.logo,
    {
      boxShadow: '0 0 120px rgba(25,212,232,0.35)',
      duration: 1.2,
    },
    '-=0.6'
  );

  // Stage 6 — hold
  tl.call(() => onStage(6));
  tl.to({}, { duration: 1.2 });

  return tl;
}

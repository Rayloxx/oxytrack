'use client';

export default function OxygenAmbient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep atmospheric gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#071A35_0%,#030712_45%,#020617_100%)]" />

      {/* Large volumetric glow */}
      <div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-[220px] ambient-orb-1" />
      <div className="absolute left-[28%] top-[38%] h-[700px] w-[700px] rounded-full bg-sky-500/6 blur-[180px] ambient-orb-2" />
      <div className="absolute right-[18%] bottom-[22%] h-[560px] w-[560px] rounded-full bg-cyan-400/5 blur-[160px] ambient-orb-3" />

      {/* Telemetry particles */}
      {Array.from({ length: 36 }).map((_, i) => {
        const left = `${8 + (i * 7) % 84}%`;
        const top = `${10 + (i * 13) % 78}%`;
        const size = i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1;

        return (
          <div
            key={i}
            className={`absolute rounded-full bg-cyan-300/70 ambient-particle ambient-particle-${(i % 6) + 1}`}
            style={{
              left,
              top,
              width: `${size * 2}px`,
              height: `${size * 2}px`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        );
      })}

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.18)_55%,rgba(2,6,23,0.82)_100%)]" />
    </div>
  );
}

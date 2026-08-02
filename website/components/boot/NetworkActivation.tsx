'use client';

export default function NetworkActivation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="h-full w-full" viewBox="0 0 1600 900">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="#22D3EE" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1600" height="900" fill="url(#grid)" />
        </svg>
      </div>

      {/* Oxygen network */}
      <svg
        className="relative z-10 h-full w-full max-w-[1400px]"
        viewBox="0 0 1400 800"
      >
        <defs>
          <linearGradient id="pipe" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#67E8F9" />
          </linearGradient>

          <filter id="pipeGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central manifold */}
        <circle
          cx="700"
          cy="400"
          r="18"
          fill="#19D4E8"
          filter="url(#pipeGlow)"
        />

        {/* Primary pipelines */}
        {[
          [700, 400, 980, 180],
          [700, 400, 980, 620],
          [700, 400, 420, 180],
          [700, 400, 420, 620],
          [700, 400, 1120, 400],
          [700, 400, 280, 400],
        ].map(([x1, y1, x2, y2], i) => (
          <g key={i}>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#pipe)"
              strokeWidth="3"
              filter="url(#pipeGlow)"
              className={`network-line network-line-${i + 1}`}
            />

            {/* Oxygen particle */}
            <circle r="3" fill="#67E8F9">
              <animateMotion
                dur={`${3.2 + i * 0.25}s`}
                begin={`${1 + i * 0.2}s`}
                repeatCount="indefinite"
                path={`M ${x1} ${y1} L ${x2} ${y2}`}
              />
            </circle>
          </g>
        ))}

        {/* Sensor nodes */}
        {[
          { x: 980, y: 180, label: 'ICU', delay: 0 },
          { x: 980, y: 620, label: 'THEATRE', delay: 0.3 },
          { x: 420, y: 180, label: 'EMERGENCY', delay: 0.6 },
          { x: 420, y: 620, label: 'NEONATAL', delay: 0.9 },
          { x: 1120, y: 400, label: 'HDU', delay: 1.2 },
          { x: 280, y: 400, label: 'WARD', delay: 1.5 },
        ].map((node) => (
          <g key={node.label} className="sensor-node">
            {/* Outer ring */}
            <circle
              cx={node.x}
              cy={node.y}
              r="18"
              stroke="#22D3EE"
              strokeWidth="1.5"
              fill="none"
              opacity="0.25"
            >
              <animate
                attributeName="r"
                values="14;22;14"
                dur="2.8s"
                begin={`${node.delay}s`}
                repeatCount="indefinite"
              />
            </circle>

            {/* Core */}
            <circle
              cx={node.x}
              cy={node.y}
              r="7"
              fill="#19D4E8"
            >
              <animate
                attributeName="opacity"
                values="0;1;1"
                dur="1.2s"
                begin={`${node.delay}s`}
                fill="freeze"
              />
            </circle>

            {/* Label */}
            <text
              x={node.x}
              y={node.y + 38}
              textAnchor="middle"
              fill="#9FB3C8"
              fontSize="11"
              letterSpacing="1.8"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Pressure pulse rings */}
        <circle
          cx="700"
          cy="400"
          r="20"
          stroke="#22D3EE"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        >
          <animate
            attributeName="r"
            values="20;320;20"
            dur="4s"
            begin="0.8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.6;0;0.6"
            dur="4s"
            begin="0.8s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

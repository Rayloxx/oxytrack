'use client';

import { useRef } from 'react';
import {
motion,
useMotionValue,
useSpring,
useTransform,
useScroll,
} from 'framer-motion';
import { useMotionTimeline } from '@/components/cinematic/MotionTimeline';

const branches = [
{ id: 'ICU', x: '84%', y: '18%', pressure: '4.21', flow: '46' },
{ id: 'THEATRE', x: '88%', y: '74%', pressure: '4.18', flow: '38' },
{ id: 'HDU', x: '94%', y: '46%', pressure: '4.16', flow: '29' },
{ id: 'ER', x: '12%', y: '18%', pressure: '4.19', flow: '31' },
{ id: 'NICU', x: '10%', y: '78%', pressure: '4.15', flow: '18' },
{ id: 'WARDS', x: '6%', y: '46%', pressure: '4.12', flow: '20' },
];

const conduitPaths = [
'M500 350 C640 260 740 180 860 130',
'M500 350 C660 350 800 350 930 350',
'M500 350 C640 440 760 520 880 560',
'M500 350 C360 260 240 180 120 130',
'M500 350 C320 350 180 350 70 350',
'M500 350 C360 440 220 520 100 560',
];

export default function OxygenNetwork3D() {
const timeline = useMotionTimeline();
const active = timeline.phase !== 'boot';

const containerRef = useRef<HTMLDivElement | null>(null);

const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
stiffness: 120,
damping: 20,
});

const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
stiffness: 120,
damping: 20,
});

const glowX = useTransform(mouseX, [-0.5, 0.5], ['35%', '65%']);
const glowY = useTransform(mouseY, [-0.5, 0.5], ['35%', '65%']);

const { scrollYProgress } = useScroll();

const networkScale = useSpring(
useTransform(scrollYProgress, [0, 0.22], [1, 1.18]),
{
stiffness: 120,
damping: 24,
}
);

const networkY = useSpring(
useTransform(scrollYProgress, [0, 0.22], [0, 120]),
{
stiffness: 120,
damping: 24,
}
);

const networkOpacity = useTransform(
scrollYProgress,
[0, 0.18, 0.28],
[1, 0.96, 0.9]
);

function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
const rect = containerRef.current?.getBoundingClientRect();
if (!rect) return;

const x = (e.clientX - rect.left) / rect.width - 0.5;
const y = (e.clientY - rect.top) / rect.height - 0.5;

mouseX.set(x);
mouseY.set(y);

}

function handlePointerLeave() {
mouseX.set(0);
mouseY.set(0);
}

return (
<motion.div
ref={containerRef}
onPointerMove={handlePointerMove}
onPointerLeave={handlePointerLeave}
className='relative h-full w-full overflow-hidden bg-[#031124]'
style={{
perspective: 1400,
rotateX,
rotateY,
transformStyle: 'preserve-3d',
}}
> <div className='absolute inset-0'>
<motion.div
className='absolute h-[720px] w-[720px] rounded-full bg-cyan-400/12 blur-[180px]'
style={{
left: glowX,
top: glowY,
x: '-50%',
y: '-50%',
}}
/>

    <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0%,transparent_65%)]' />

    <div className='absolute inset-0 opacity-15'>
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]' />
    </div>
  </div>

  <motion.div
    className='absolute inset-0'
    style={{
      transform: 'translateZ(40px)',
      scale: networkScale,
      y: networkY,
      opacity: networkOpacity,
    }}
  >
    <svg
      className='absolute inset-0 h-full w-full'
      viewBox='0 0 1000 700'
      preserveAspectRatio='none'
    >
      <defs>
        <linearGradient id='conduitGlow' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stopColor='#22D3EE' stopOpacity='0.9' />
          <stop offset='50%' stopColor='#67E8F9' stopOpacity='1' />
          <stop
            offset='100%'
            stopColor='#22D3EE'
            stopOpacity='0.75'
          />
        </linearGradient>

        <filter id='conduitBlur'>
          <feGaussianBlur stdDeviation='6' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {conduitPaths.map((path, index) => (
        <g key={index}>
          <motion.path
            d={path}
            stroke='rgba(34,211,238,0.12)'
            strokeWidth='12'
            strokeLinecap='round'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active ? 1 : 0 }}
            transition={{
              duration: 1.4,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <motion.path
            d={path}
            stroke='url(#conduitGlow)'
            strokeWidth='4'
            strokeLinecap='round'
            filter='url(#conduitBlur)'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active ? 1 : 0 }}
            transition={{
              duration: 1.6,
              delay: 0.2 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </g>
      ))}

      <g>
        <motion.path
          d='M500 120 L500 580'
          stroke='rgba(34,211,238,0.15)'
          strokeWidth='16'
          strokeLinecap='round'
          initial={{ pathLength: 0 }}
          animate={{ pathLength: active ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        />

        <motion.path
          d='M500 120 L500 580'
          stroke='url(#conduitGlow)'
          strokeWidth='5'
          strokeLinecap='round'
          filter='url(#conduitBlur)'
          initial={{ pathLength: 0 }}
          animate={{ pathLength: active ? 1 : 0 }}
          transition={{ duration: 1.4, delay: 0.15 }}
        />

        <motion.path
          d='M500 120 L500 580'
          stroke='#A5F3FC'
          strokeWidth='2'
          strokeLinecap='round'
          strokeDasharray='12 18'
          animate={{
            strokeDashoffset: [30, -30],
            opacity: [0.15, 0.8, 0.15],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </g>
    </svg>

    <motion.div
      className='absolute left-1/2 top-1/2 z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-cyan-400/30 bg-cyan-500/15'
      animate={{
        scale: active ? [1, 1.08, 1] : 1,
        boxShadow: active
          ? [
              '0 0 30px rgba(34,211,238,0.15)',
              '0 0 70px rgba(34,211,238,0.30)',
              '0 0 30px rgba(34,211,238,0.15)',
            ]
          : '0 0 0px rgba(34,211,238,0)',
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className='absolute inset-0 flex items-center justify-center'>
        <motion.div
          className='h-5 w-5 rounded-full bg-cyan-300'
          animate={{
            scale: active ? [1, 1.5, 1] : 1,
            opacity: active ? [0.8, 1, 0.8] : 0.5,
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>

    {[1, 2, 3].map((ring) => (
      <motion.div
        key={ring}
        className='absolute left-1/2 top-1/2 rounded-full border border-cyan-400/20'
        style={{
          width: `${ring * 140}px`,
          height: `${ring * 140}px`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: active ? [1, 1.12, 1] : 1,
          opacity: active ? [0.12, 0.28, 0.12] : 0,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: ring * 0.4,
        }}
      />
    ))}

    {branches.map((branch, index) => (
      <motion.div
        key={branch.id}
        className='absolute z-20'
        style={{
          left: branch.x,
          top: branch.y,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: active ? 1 : 0.8,
          opacity: active ? 1 : 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.7 + index * 0.06,
        }}
      >
        <motion.div
          className='rounded-2xl border border-cyan-400/20 bg-[#071A35]/80 px-4 py-3 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.12)]'
          animate={{
            y: [0, -3, 0],
            borderColor: [
              'rgba(34,211,238,0.2)',
              'rgba(34,211,238,0.4)',
              'rgba(34,211,238,0.2)',
            ],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            delay: index * 0.15,
          }}
        >
          <div className='text-[10px] uppercase tracking-[0.18em] text-cyan-300'>
            {branch.id}
          </div>

          <div className='mt-1 text-sm font-semibold text-white'>
            {branch.pressure} bar
          </div>

          <div className='text-xs text-white/50'>
            {branch.flow} L/min
          </div>
        </motion.div>
      </motion.div>
    ))}

    {active && (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]'
            animate={{
              x: [0, 260, 360],
              y: [0, -120, -170],
              opacity: [0, 1, 1, 0],
              scale: [0.6, 1.1, 1, 0.4],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              delay: i * 0.22,
              ease: 'linear',
            }}
          />
        ))}

        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`left-${i}`}
            className='absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]'
            animate={{
              x: [0, -260, -360],
              y: [0, 120, 180],
              opacity: [0, 1, 1, 0],
              scale: [0.6, 1.1, 1, 0.4],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              delay: i * 0.28,
              ease: 'linear',
            }}
          />
        ))}
      </>
    )}

    <motion.div
      className='absolute bottom-28 left-1/2 -translate-x-1/2'
      animate={{
        y: [0, 10, 0],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
      }}
    >
      <div className='flex flex-col items-center gap-2 text-cyan-300'>
        <div className='h-10 w-px bg-gradient-to-b from-cyan-300 to-transparent' />
        <span className='text-[10px] uppercase tracking-[0.3em]'>
          Network continues
        </span>
      </div>
    </motion.div>
  </motion.div>

  <motion.div
    className='absolute inset-0 z-30'
    style={{
      transform: 'translateZ(80px)',
    }}
  >
    <motion.div
      className='absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#071A35]/80 px-6 py-5 backdrop-blur-xl'
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: active ? 1 : 0,
        y: active ? 0 : 24,
      }}
      transition={{ duration: 0.8, delay: 1.1 }}
    >
      <div className='flex items-center justify-between'>
        <div>
          <div className='text-xs uppercase tracking-[0.18em] text-cyan-300'>
            Network state
          </div>
          <div className='mt-1 text-lg font-semibold text-white'>
            Oxygen infrastructure synchronized
          </div>
        </div>

        <div className='grid grid-cols-3 gap-8 text-right'>
          <div>
            <div className='text-xs text-white/40'>Branches</div>
            <div className='mt-1 text-white'>6 online</div>
          </div>

          <div>
            <div className='text-xs text-white/40'>Latency</div>
            <div className='mt-1 text-white'>42 ms</div>
          </div>

          <div>
            <div className='text-xs text-white/40'>Uptime</div>
            <div className='mt-1 text-cyan-300'>99.98%</div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
</motion.div>

);
}

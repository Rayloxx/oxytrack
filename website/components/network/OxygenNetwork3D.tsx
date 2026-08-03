'use client';

import { motion } from 'framer-motion';
import { useMotionTimeline } from '@/components/cinematic/MotionTimeline';

const branches = [
{
id: 'ICU',
label: 'Intensive Care',
x: '84%',
y: '18%',
pressure: '4.21',
flow: '46',
},
{
id: 'THEATRE',
label: 'Operating Theatre',
x: '88%',
y: '74%',
pressure: '4.18',
flow: '38',
},
{
id: 'HDU',
label: 'High Dependency',
x: '94%',
y: '46%',
pressure: '4.16',
flow: '29',
},
{
id: 'ER',
label: 'Emergency',
x: '12%',
y: '18%',
pressure: '4.19',
flow: '31',
},
{
id: 'NICU',
label: 'Neonatal ICU',
x: '10%',
y: '78%',
pressure: '4.15',
flow: '18',
},
{
id: 'WARDS',
label: 'General Wards',
x: '6%',
y: '46%',
pressure: '4.12',
flow: '20',
},
];

export default function OxygenNetwork3D() {
const timeline = useMotionTimeline();

const active = timeline.phase !== 'boot';

return ( <div className='relative h-full w-full overflow-hidden bg-[#031124]'>
{/* Background depth */} <div className='absolute inset-0'> <div className='absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]' />

    <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08)_0%,transparent_65%)]' />

    <div className='absolute inset-0 opacity-15'>
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]' />
    </div>
  </div>

  {/* Floating telemetry panel */}
  <motion.div
    className='absolute left-6 top-6 z-20 w-72 rounded-2xl border border-white/10 bg-[#071A35]/80 p-5 backdrop-blur-xl'
    initial={{ opacity: 0, y: -20 }}
    animate={{
      opacity: active ? 1 : 0,
      y: active ? 0 : -20,
    }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
    <div className='text-xs uppercase tracking-[0.2em] text-cyan-300'>
      Live telemetry
    </div>

    <div className='mt-4 space-y-4'>
      <div className='flex items-center justify-between'>
        <span className='text-white/60'>Network pressure</span>
        <span className='font-medium text-cyan-300'>4.21 bar</span>
      </div>

      <div className='flex items-center justify-between'>
        <span className='text-white/60'>Oxygen flow</span>
        <span className='font-medium text-cyan-300'>182 L/min</span>
      </div>

      <div className='flex items-center justify-between'>
        <span className='text-white/60'>Infrastructure health</span>
        <span className='font-medium text-cyan-300'>97.8%</span>
      </div>
    </div>
  </motion.div>

  {/* Status panel */}
  <motion.div
    className='absolute right-6 top-6 z-20 rounded-2xl border border-white/10 bg-[#071A35]/80 px-5 py-4 backdrop-blur-xl'
    initial={{ opacity: 0, x: 20 }}
    animate={{
      opacity: active ? 1 : 0,
      x: active ? 0 : 20,
    }}
    transition={{ duration: 0.8, delay: 1 }}
  >
    <div className='flex items-center gap-3'>
      <div className='h-2 w-2 rounded-full bg-cyan-300 animate-pulse' />

      <div>
        <div className='text-sm font-medium text-white'>
          Telemetry synchronized
        </div>

        <div className='text-xs text-cyan-300'>
          MQTT network active
        </div>
      </div>
    </div>
  </motion.div>

  {/* Central manifold */}
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

  {/* Pressure wave rings */}
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

  {/* Branch nodes */}
  {branches.map((branch, index) => (
    <motion.div
      key={branch.id}
      className='absolute z-10'
      style={{
        left: branch.x,
        top: branch.y,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: active ? 1 : 0,
        opacity: active ? 1 : 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.6 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className='flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/15'
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          delay: index * 0.15,
        }}
      >
        <div className='h-2 w-2 rounded-full bg-cyan-300' />
      </motion.div>

      <div className='mt-2 text-center text-[11px] uppercase tracking-[0.18em] text-cyan-300'>
        {branch.id}
      </div>
    </motion.div>
  ))}

  {/* Flow particles */}
  {active && (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={`flow-right-${i}`}
          className='absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-cyan-300'
          animate={{
            x: [0, 260],
            y: [0, -170],
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.35,
            ease: 'linear',
          }}
        />
      ))}

      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`flow-left-${i}`}
          className='absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-cyan-300'
          animate={{
            x: [0, -280],
            y: [0, 180],
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            delay: i * 0.45,
            ease: 'linear',
          }}
        />
      ))}
    </>
  )}

  {/* Bottom telemetry strip */}
  <motion.div
    className='absolute bottom-6 left-6 right-6 z-20 rounded-2xl border border-white/10 bg-[#071A35]/80 px-6 py-5 backdrop-blur-xl'
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
</div>

);
}

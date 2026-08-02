'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function GlassPipe({
start,
end,
}: {
start: [number, number, number];
end: [number, number, number];
}) {
const curve = useMemo(() => {
const s = new THREE.Vector3(...start);
const e = new THREE.Vector3(...end);
const mid = new THREE.Vector3(
(s.x + e.x) * 0.5,
(s.y + e.y) * 0.5,
0
);

return new THREE.CatmullRomCurve3([s, mid, e]);

}, [start, end]);

return ( <mesh>
<tubeGeometry args={[curve, 120, 0.045, 32, false]} /> <meshPhysicalMaterial
     color='#A5F3FC'
     transmission={1}
     thickness={0.9}
     roughness={0.02}
     metalness={0}
     ior={1.45}
     emissive='#0EA5E9'
     emissiveIntensity={0.35}
   /> </mesh>
);
}

function OxygenParticle({
start,
end,
speed = 2.8,
}: {
start: [number, number, number];
end: [number, number, number];
speed?: number;
}) {
const ref = useRef<THREE.Mesh>(null);

useFrame((state) => {
if (!ref.current) return;

const t = (state.clock.elapsedTime / speed) % 1;

ref.current.position.set(
  start[0] + (end[0] - start[0]) * t,
  start[1] + (end[1] - start[1]) * t,
  start[2] + (end[2] - start[2]) * t
);

});

return ( <mesh ref={ref}>
<sphereGeometry args={[0.025, 16, 16]} /> <meshBasicMaterial color='#E0FCFF' /> </mesh>
);
}

function PressureRegulator({
position,
}: {
position: [number, number, number];
}) {
const ref = useRef<THREE.Group>(null);

useFrame((state) => {
if (!ref.current) return;
ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.05;
});

return ( <group ref={ref} position={position}> <mesh>
<cylinderGeometry args={[0.09, 0.09, 0.18, 32]} /> <meshStandardMaterial
       color='#E5E7EB'
       metalness={0.95}
       roughness={0.08}
     /> </mesh>

  <mesh position={[0, 0.12, 0]}>
    <torusGeometry args={[0.06, 0.012, 16, 48]} />
    <meshStandardMaterial
      color='#22D3EE'
      emissive='#22D3EE'
      emissiveIntensity={0.8}
    />
  </mesh>
</group>

);
}

function SensorNode({
position,
}: {
position: [number, number, number];
}) {
const ring = useRef<THREE.Mesh>(null);

useFrame((state) => {
if (!ring.current) return;
ring.current.rotation.z = state.clock.elapsedTime * 0.4;
});

return ( <group position={position}> <mesh>
<sphereGeometry args={[0.05, 24, 24]} /> <meshStandardMaterial
       color='#FFFFFF'
       emissive='#22D3EE'
       emissiveIntensity={2}
     /> </mesh>

  <mesh ref={ring}>
    <torusGeometry args={[0.1, 0.008, 16, 64]} />
    <meshStandardMaterial
      color='#22D3EE'
      emissive='#22D3EE'
      emissiveIntensity={1.5}
    />
  </mesh>
</group>

);
}

function Manifold() {
return ( <group> <mesh>
<cylinderGeometry args={[0.22, 0.22, 0.6, 48]} /> <meshStandardMaterial
       color='#F3F4F6'
       metalness={0.95}
       roughness={0.06}
     /> </mesh>

  <mesh position={[0, 0.36, 0]}>
    <sphereGeometry args={[0.08, 24, 24]} />
    <meshStandardMaterial
      color='#22D3EE'
      emissive='#22D3EE'
      emissiveIntensity={3}
    />
  </mesh>
</group>

);
}

function Scene() {
const branches: Array<{
start: [number, number, number];
end: [number, number, number];
}> = [
{ start: [0, 0, 0], end: [1.4, 0.9, 0] },
{ start: [0, 0, 0], end: [1.4, -0.9, 0] },
{ start: [0, 0, 0], end: [-1.4, 0.9, 0] },
{ start: [0, 0, 0], end: [-1.4, -0.9, 0] },
{ start: [0, 0, 0], end: [2.0, 0, 0] },
{ start: [0, 0, 0], end: [-2.0, 0, 0] },
];

return ( <Float speed={0.7} rotationIntensity={0.12} floatIntensity={0.08}> <group> <Manifold />

    {branches.map((b, i) => (
      <group key={i}>
        <GlassPipe start={b.start} end={b.end} />
        <OxygenParticle
          start={b.start}
          end={b.end}
          speed={2.8 + i * 0.2}
        />
      </group>
    ))}

    <PressureRegulator position={[0.7, 0.45, 0]} />
    <PressureRegulator position={[-0.7, 0.45, 0]} />
    <PressureRegulator position={[0.7, -0.45, 0]} />
    <PressureRegulator position={[-0.7, -0.45, 0]} />

    <SensorNode position={[1.4, 0.9, 0]} />
    <SensorNode position={[1.4, -0.9, 0]} />
    <SensorNode position={[-1.4, 0.9, 0]} />
    <SensorNode position={[-1.4, -0.9, 0]} />
    <SensorNode position={[2.0, 0, 0]} />
    <SensorNode position={[-2.0, 0, 0]} />
  </group>
</Float>

);
}

export default function OxygenNetwork3D() {
return ( <div className='h-[680px] w-full'>
<Canvas
camera={{ position: [0, 0, 4.4], fov: 34 }}
gl={{ antialias: true, alpha: true }}
>
<color attach='background' args={['#020617']} />

    <ambientLight intensity={0.35} />
    <pointLight
      position={[3, 3, 3]}
      intensity={2.8}
      color='#67E8F9'
    />
    <pointLight
      position={[-3, -2, 2]}
      intensity={1.4}
      color='#0EA5E9'
    />

    <Environment preset='city' />

    <Scene />
  </Canvas>
</div>

);
}

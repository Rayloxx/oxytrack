'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Pipe({
start,
end,
}: {
start: [number, number, number];
end: [number, number, number];
}) {
const curve = useMemo(() => {
return new THREE.CatmullRomCurve3([
new THREE.Vector3(...start),
new THREE.Vector3(
(start[0] + end[0]) * 0.5,
start[1] * 0.6 + end[1] * 0.4,
0
),
new THREE.Vector3(...end),
]);
}, [start, end]);

return ( <mesh>
<tubeGeometry args={[curve, 80, 0.035, 24, false]} /> <meshPhysicalMaterial
     color='#67E8F9'
     emissive='#0EA5E9'
     emissiveIntensity={0.9}
     roughness={0.04}
     metalness={0.12}
     transmission={0.95}
     thickness={0.8}
   /> </mesh>
);
}

function Sensor({
position,
}: {
position: [number, number, number];
}) {
const ring = useRef<THREE.Mesh>(null);

useFrame((state) => {
if (!ring.current) return;
ring.current.rotation.z = state.clock.elapsedTime * 0.35;
});

return ( <group position={position}> <mesh>
<sphereGeometry args={[0.06, 32, 32]} /> <meshStandardMaterial
       color='#FFFFFF'
       emissive='#22D3EE'
       emissiveIntensity={1.8}
     /> </mesh>

```
  <mesh ref={ring}>
    <torusGeometry args={[0.11, 0.008, 16, 64]} />
    <meshStandardMaterial
      color='#22D3EE'
      emissive='#22D3EE'
      emissiveIntensity={1.2}
    />
  </mesh>
</group>
```

);
}

function OxygenFlow() {
const points = useRef<THREE.Points>(null);

const positions = useMemo(() => {
const array = new Float32Array(800 * 3);

```
for (let i = 0; i < 800; i++) {
  array[i * 3] = (Math.random() - 0.5) * 3.5;
  array[i * 3 + 1] = (Math.random() - 0.5) * 2.2;
  array[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
}

return array;
```

}, []);

useFrame((state) => {
if (!points.current) return;

```
points.current.rotation.z = state.clock.elapsedTime * 0.04;
```

});

return ( <points ref={points}> <bufferGeometry> <bufferAttribute
       attach='attributes-position'
       count={800}
       array={positions}
       itemSize={3}
     /> </bufferGeometry>

```
  <pointsMaterial
    color='#A5F3FC'
    size={0.018}
    transparent
    opacity={0.75}
  />
</points>
```

);
}

function PressureHalo() {
const halo = useRef<THREE.Mesh>(null);

useFrame((state) => {
if (!halo.current) return;

```
const s = 1 + Math.sin(state.clock.elapsedTime * 1.8) * 0.08;
halo.current.scale.set(s, s, s);
```

});

return ( <mesh ref={halo}>
<ringGeometry args={[0.26, 0.29, 64]} /> <meshBasicMaterial color='#22D3EE' transparent opacity={0.4} /> </mesh>
);
}

function Manifold() {
return ( <group> <mesh>
<cylinderGeometry args={[0.16, 0.16, 0.42, 48]} /> <meshPhysicalMaterial
       color='#E5E7EB'
       metalness={0.92}
       roughness={0.08}
     /> </mesh>

```
  <mesh>
    <sphereGeometry args={[0.08, 32, 32]} />
    <meshStandardMaterial
      color='#22D3EE'
      emissive='#22D3EE'
      emissiveIntensity={2.2}
    />
  </mesh>

  <PressureHalo />
</group>
```

);
}

function Scene() {
return ( <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.12}> <group> <Manifold />

```
    <Pipe start={[0, 0, 0]} end={[1.25, 0.75, 0]} />
    <Pipe start={[0, 0, 0]} end={[1.25, -0.75, 0]} />
    <Pipe start={[0, 0, 0]} end={[-1.25, 0.75, 0]} />
    <Pipe start={[0, 0, 0]} end={[-1.25, -0.75, 0]} />
    <Pipe start={[0, 0, 0]} end={[1.9, 0, 0]} />
    <Pipe start={[0, 0, 0]} end={[-1.9, 0, 0]} />

    <Sensor position={[1.25, 0.75, 0]} />
    <Sensor position={[1.25, -0.75, 0]} />
    <Sensor position={[-1.25, 0.75, 0]} />
    <Sensor position={[-1.25, -0.75, 0]} />
    <Sensor position={[1.9, 0, 0]} />
    <Sensor position={[-1.9, 0, 0]} />

    <OxygenFlow />
  </group>
</Float>
```

);
}

export default function OxygenNetwork3D() {
return ( <div className='h-[680px] w-full'>
<Canvas
camera={{ position: [0, 0, 4.2], fov: 34 }}
gl={{ antialias: true, alpha: true }}
>
<color attach='background' args={['#020617']} />

```
    <ambientLight intensity={0.35} />
    <pointLight
      position={[3, 3, 3]}
      intensity={2.6}
      color='#67E8F9'
    />
    <pointLight
      position={[-3, -2, 2]}
      intensity={1.3}
      color='#0EA5E9'
    />

    <Environment preset='city' />

    <Scene />
  </Canvas>
</div>
```

);
}

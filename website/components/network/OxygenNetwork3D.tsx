'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Pipeline({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const points = useMemo(
    () => [new THREE.Vector3(...start), new THREE.Vector3(...end)],
    [start, end]
  );

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 64, 0.04, 16, false]} />
      <meshPhysicalMaterial
        color="#67E8F9"
        emissive="#0EA5E9"
        emissiveIntensity={0.8}
        roughness={0.05}
        metalness={0.1}
        transmission={0.9}
        thickness={0.6}
      />
    </mesh>
  );
}

function SensorNode({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#22D3EE"
          emissiveIntensity={1.5}
        />
      </mesh>

      <mesh>
        <torusGeometry args={[0.12, 0.01, 16, 64]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

function Manifold() {
  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.18, 0.18, 0.5, 48]} />
        <meshPhysicalMaterial
          color="#E5E7EB"
          metalness={0.9}
          roughness={0.12}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}

function OxygenParticles() {
  const points = useMemo(() => {
    const positions = new Float32Array(300 * 3);

    for (let i = 0; i < 300; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }

    return positions;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={300}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#67E8F9"
        size={0.02}
        transparent
        opacity={0.7}
      />
    </points>
  );
}

export default function OxygenNetwork3D() {
  return (
    <div className="h-[720px] w-full">
      <Canvas
        camera={{ position: [0, 0, 3.6], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#020617"]} />

        <ambientLight intensity={0.35} />
        <pointLight position={[3, 3, 3]} intensity={2.4} color="#67E8F9" />
        <pointLight position={[-3, -2, 2]} intensity={1.2} color="#0EA5E9" />

        <Environment preset="city" />

        <group>
          <Manifold />

          <Pipeline start={[0, 0, 0]} end={[1.2, 0.9, 0]} />
          <Pipeline start={[0, 0, 0]} end={[1.2, -0.9, 0]} />
          <Pipeline start={[0, 0, 0]} end={[-1.2, 0.9, 0]} />
          <Pipeline start={[0, 0, 0]} end={[-1.2, -0.9, 0]} />
          <Pipeline start={[0, 0, 0]} end={[1.8, 0, 0]} />
          <Pipeline start={[0, 0, 0]} end={[-1.8, 0, 0]} />

          <SensorNode position={[1.2, 0.9, 0]} />
          <SensorNode position={[1.2, -0.9, 0]} />
          <SensorNode position={[-1.2, 0.9, 0]} />
          <SensorNode position={[-1.2, -0.9, 0]} />
          <SensorNode position={[1.8, 0, 0]} />
          <SensorNode position={[-1.8, 0, 0]} />
        </group>

        <OxygenParticles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
        />
      </Canvas>
    </div>
  );
}

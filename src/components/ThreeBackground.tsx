
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box, Torus } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating geometric shapes component
const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Orange spheres */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere position={[-8, 4, -5]} args={[0.8]}>
          <meshStandardMaterial color="#ff6b35" opacity={0.3} transparent />
        </Sphere>
      </Float>
      
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere position={[6, -3, -8]} args={[0.6]}>
          <meshStandardMaterial color="#ff8c42" opacity={0.25} transparent />
        </Sphere>
      </Float>

      {/* Dark geometric shapes */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Box position={[4, 6, -6]} args={[0.7, 0.7, 0.7]}>
          <meshStandardMaterial color="#2d2d2d" opacity={0.2} transparent />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.4}>
        <Torus position={[-5, -4, -7]} args={[1, 0.3, 16, 100]} scale={0.5}>
          <meshStandardMaterial color="#ff6b35" opacity={0.15} transparent wireframe />
        </Torus>
      </Float>

      {/* Additional floating elements */}
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.7}>
        <Box position={[8, 2, -10]} args={[0.4, 0.4, 0.4]}>
          <meshStandardMaterial color="#ff5722" opacity={0.2} transparent />
        </Box>
      </Float>

      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.3}>
        <Sphere position={[-6, 8, -9]} args={[0.5]}>
          <meshStandardMaterial color="#333333" opacity={0.15} transparent />
        </Sphere>
      </Float>
    </group>
  );
};

// Simplified particles component
const AnimatedParticles = () => {
  const particlesRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.001;
      particlesRef.current.rotation.y += 0.002;
    }
  });

  const particles = Array.from({ length: 20 }, (_, i) => (
    <Float key={i} speed={Math.random() * 2 + 1} rotationIntensity={0.1} floatIntensity={0.2}>
      <Sphere 
        position={[
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        ]} 
        args={[Math.random() * 0.1 + 0.05]}
      >
        <meshStandardMaterial 
          color={Math.random() > 0.5 ? "#ff6b35" : "#666666"} 
          opacity={Math.random() * 0.3 + 0.1} 
          transparent 
        />
      </Sphere>
    </Float>
  ));

  return <group ref={particlesRef}>{particles}</group>;
};

const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff6b35" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ffffff" />
      
      {/* 3D Elements */}
      <FloatingShapes />
      <AnimatedParticles />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;

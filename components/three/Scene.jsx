'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html, Box, Bounds, Center } from '@react-three/drei';
import { useStore } from '../../store/useStore';
import { ModelLoader } from './ModelLoader';

// Error Boundary for catching 3D model loading errors
class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <group>
          <Box args={[2, 2, 2]}>
            <meshStandardMaterial color="red" wireframe />
          </Box>
          <Html center position={[0, -2, 0]}>
            <div className="bg-red-500 text-white px-4 py-2 rounded-md font-bold whitespace-nowrap shadow-lg">
              Model file not found
            </div>
          </Html>
        </group>
      );
    }
    return this.props.children;
  }
}

// Separate component to handle rotation within the Canvas
function SceneContent({ modelUrl }) {
  const groupRef = useRef();
  const autoRotate = useStore((state) => state.autoRotate);

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <ModelErrorBoundary>
        <Center>
          <ModelLoader url={modelUrl} />
        </Center>
      </ModelErrorBoundary>
    </group>
  );
}

// Fallback loader while Suspending
function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
        <div className="text-white font-medium shadow-sm">Loading 3D Model...</div>
      </div>
    </Html>
  );
}

export function Scene({ modelUrl }) {
  return (
    <div className="w-full h-full relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
        <color attach="background" args={['#111827']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={1024}
        />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        <Suspense fallback={<Loader />}>
          <Bounds fit clip observe margin={1.2}>
            <SceneContent modelUrl={modelUrl} />
          </Bounds>
          <Environment preset="city" />
        </Suspense>

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

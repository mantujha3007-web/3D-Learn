'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useStore } from '../../store/useStore';
import * as THREE from 'three';

export function ModelLoader({ url }) {
  const { scene } = useGLTF(url);
  const isWireframe = useStore((state) => state.isWireframe);
  const setHoveredPart = useStore((state) => state.setHoveredPart);
  const setClickedPart = useStore((state) => state.setClickedPart);
  const clickedPart = useStore((state) => state.clickedPart);
  
  // Clone the scene to ensure we can mutate it safely
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    clonedScene.traverse((node) => {
      if (node.isMesh) {
        // Cast and receive shadows
        node.castShadow = true;
        node.receiveShadow = true;
        
        // Apply wireframe material property if toggled
        if (node.material) {
          // If the mesh has multiple materials, handle array
          if (Array.isArray(node.material)) {
            node.material.forEach((mat) => {
              mat.wireframe = isWireframe;
            });
          } else {
            node.material.wireframe = isWireframe;
          }
        }
      }
    });
  }, [clonedScene, isWireframe]);

  const [hoveredMesh, setHoveredMesh] = useState(null);

  const handlePointerOver = (e) => {
    e.stopPropagation();
    const meshName = e.object.name || 'Unnamed Part';
    setHoveredMesh(e.object.uuid);
    setHoveredPart(meshName);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    setHoveredMesh(null);
    setHoveredPart(null);
    document.body.style.cursor = 'auto';
  };

  const handleClick = (e) => {
    e.stopPropagation();
    const meshName = e.object.name || 'Unnamed Part';
    setClickedPart(meshName === clickedPart ? null : meshName);
  };

  // Mutate meshes based on interactions
  useEffect(() => {
    clonedScene.traverse((node) => {
      if (node.isMesh) {
        // Highlight logic
        const isHovered = node.uuid === hoveredMesh;
        const isClicked = node.name === clickedPart && clickedPart !== null;
        
        if (isHovered || isClicked) {
          if (node.material && node.material.emissive) {
            node.material.emissive = new THREE.Color(isClicked ? '#3b82f6' : '#60a5fa');
            node.material.emissiveIntensity = 0.5;
          }
        } else {
          if (node.material && node.material.emissive) {
            node.material.emissive = new THREE.Color('#000000');
            node.material.emissiveIntensity = 0;
          }
        }
      }
    });
  }, [clonedScene, hoveredMesh, clickedPart]);

  return (
    <primitive 
      object={clonedScene} 
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    />
  );
}

'use client';

import React from 'react';
import { useStore } from '../../store/useStore';
import { Box, Info, Navigation, MousePointer2 } from 'lucide-react';

export function InfoPanel({ model }) {
  const hoveredPart = useStore((state) => state.hoveredPart);
  const clickedPart = useStore((state) => state.clickedPart);

  return (
    <div className="flex flex-col h-full bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl overflow-y-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-2 drop-shadow-sm">
          {model.name}
        </h1>
        <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
          <span className="bg-white/10 px-2 py-1 rounded-md capitalize">{model.category}</span>
          <span>•</span>
          <span className="flex items-center"><Box className="w-4 h-4 mr-1" /> {model.id}</span>
        </div>
        <p className="text-gray-300 leading-relaxed font-light">
          {model.description}
        </p>
      </div>

      <div className="mt-auto space-y-4">
        <div className="bg-black/30 rounded-xl p-4 border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex items-center text-blue-400 mb-2 font-semibold">
            <MousePointer2 className="w-5 h-5 mr-2" />
            Hovered Part
          </div>
          <div className="text-xl text-white font-medium pl-7">
            {hoveredPart || <span className="text-gray-500 italic">None</span>}
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-4 border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex items-center text-emerald-400 mb-2 font-semibold">
            <Navigation className="w-5 h-5 mr-2" />
            Selected Part
          </div>
          <div className="text-xl text-white font-medium pl-7">
            {clickedPart || <span className="text-gray-500 italic">None</span>}
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex items-start p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-200 text-sm">
        <Info className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
        <p>Use your mouse to interact with the 3D model. Drag to rotate, scroll to zoom, and click parts to select them.</p>
      </div>
    </div>
  );
}

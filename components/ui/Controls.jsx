'use client';

import React from 'react';
import { useStore } from '../../store/useStore';
import { Cuboid, Rotate3D, Settings2 } from 'lucide-react';

export function Controls() {
  const isWireframe = useStore((state) => state.isWireframe);
  const autoRotate = useStore((state) => state.autoRotate);
  const toggleWireframe = useStore((state) => state.toggleWireframe);
  const toggleAutoRotate = useStore((state) => state.toggleAutoRotate);

  return (
    <div className="flex flex-col h-full bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl w-full">
      <div className="flex items-center mb-8 border-b border-white/10 pb-4">
        <Settings2 className="w-6 h-6 text-gray-400 mr-3" />
        <h2 className="text-xl font-bold text-white tracking-wide">Controls</h2>
      </div>

      <div className="space-y-6 flex-grow">
        <div className="group">
          <button 
            onClick={toggleWireframe}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
              isWireframe 
                ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-blue-400' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <div className="flex items-center font-medium">
              <Cuboid className={`w-5 h-5 mr-3 ${isWireframe ? 'text-white' : 'text-blue-400 group-hover:text-blue-300'}`} />
              Wireframe Mode
            </div>
            <div className={`w-10 h-5 rounded-full relative transition-colors ${isWireframe ? 'bg-blue-400' : 'bg-gray-600'}`}>
              <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${isWireframe ? 'translate-x-5.5 left-0.5' : 'left-0.5'}`} style={{ transform: isWireframe ? 'translateX(1.1rem)' : 'translateX(0)' }}></div>
            </div>
          </button>
          <p className="text-xs text-gray-500 mt-2 px-1">Toggle structural grid view for engineering precision.</p>
        </div>

        <div className="group">
          <button 
            onClick={toggleAutoRotate}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
              autoRotate 
                ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] border border-emerald-400' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <div className="flex items-center font-medium">
              <Rotate3D className={`w-5 h-5 mr-3 ${autoRotate ? 'text-white' : 'text-emerald-400 group-hover:text-emerald-300'}`} />
              Auto-Rotate
            </div>
            <div className={`w-10 h-5 rounded-full relative transition-colors ${autoRotate ? 'bg-emerald-400' : 'bg-gray-600'}`}>
              <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${autoRotate ? 'translate-x-5.5 left-0.5' : 'left-0.5'}`} style={{ transform: autoRotate ? 'translateX(1.1rem)' : 'translateX(0)' }}></div>
            </div>
          </button>
          <p className="text-xs text-gray-500 mt-2 px-1">Enable continuous cinematic rotation of the scene.</p>
        </div>
      </div>
      
      <div className="mt-auto pt-6 border-t border-white/10">
        <button 
          onClick={() => window.location.reload()}
          className="w-full py-3 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl font-medium transition-colors border border-white/10 active:scale-95"
        >
          Reset View
        </button>
      </div>
    </div>
  );
}

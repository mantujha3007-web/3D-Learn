import React from 'react';

export default function Favorites() {
  return (
    <div className="p-8 w-full flex-1 overflow-y-auto custom-scrollbar">
      <h1 className="text-3xl font-bold text-white mb-6">Favorites</h1>
      <div className="bg-white/5 border border-white/5 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
        <p className="text-gray-400 text-lg">Your favorite 3D models will appear here...</p>
      </div>
    </div>
  );
}

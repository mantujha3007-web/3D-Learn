import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { id: 'engineering', name: 'Engineering', count: 12, color: 'blue' },
  { id: 'biology', name: 'Biology', count: 8, color: 'emerald' },
  { id: 'construction', name: 'Construction', count: 6, color: 'orange' },
  { id: 'physics', name: 'Physics', count: 6, color: 'purple' },
];

export default function ExploreModels() {
  return (
    <div className="p-8 w-full flex-1 overflow-y-auto custom-scrollbar">
      <h1 className="text-3xl font-bold text-white mb-2">Explore Models</h1>
      <p className="text-gray-400 mb-8">Browse our collection of interactive 3D educational models by category.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(cat => (
          <Link 
            key={cat.id}
            href={`/dashboard/category/${cat.id}`} 
            className={`relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[#151c2c] to-[#0f1422] border border-white/5 p-6 hover:border-${cat.color}-500/30 transition-all cursor-pointer h-56 flex flex-col justify-between block`}
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{cat.name}</h3>
              <p className="text-sm text-gray-400">{cat.count} Models</p>
            </div>
            <Image 
              src={`/images/category-${cat.id}.png`} 
              alt={cat.name} 
              width={160} 
              height={160} 
              className="absolute -bottom-6 -right-6 object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl" 
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

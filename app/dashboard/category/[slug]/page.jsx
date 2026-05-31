import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Box, Info } from 'lucide-react';
import { modelData } from '../../../../data/models';

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  
  // Format slug to Title Case (e.g., 'engineering' -> 'Engineering')
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);
  const models = modelData[slug] || [];

  return (
    <div className="p-8 w-full flex-1 overflow-y-auto custom-scrollbar">
      
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link href="/dashboard/explore" className="mr-4 p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">{title} Models</h1>
          <p className="text-gray-400">Explore interactive 3D {slug} models and their specifications.</p>
        </div>
      </div>

      {/* Models Grid */}
      {models.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <div key={model.id} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col">
              
              <div className="h-48 bg-black/40 rounded-xl mb-6 relative flex items-center justify-center overflow-hidden">
                <Image 
                  src={`/images/category-${slug}.png`} 
                  alt={model.name} 
                  fill 
                  className="object-contain p-4 drop-shadow-xl" 
                />
              </div>
              
              <div className="mb-4 flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
                <p className="text-sm text-gray-400 flex items-start">
                  <Info className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-blue-400" />
                  {model.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <Link 
                  href={`/viewer/${slug}/${model.id}`}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center"
                >
                  <Box className="w-4 h-4 mr-2" /> Open in 3D Viewer
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/5 border border-white/5 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
          <Box className="w-12 h-12 text-gray-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No models found</h3>
          <p className="text-gray-400 max-w-md">There are currently no 3D models available in the {title} category. Check back later!</p>
        </div>
      )}
      
    </div>
  );
}

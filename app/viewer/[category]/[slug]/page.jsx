import { modelData } from '../../../../data/models';
import { Scene } from '../../../../components/three/Scene';
import { InfoPanel } from '../../../../components/ui/InfoPanel';
import { Controls } from '../../../../components/ui/Controls';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const params = [];
  for (const [category, models] of Object.entries(modelData)) {
    for (const model of models) {
      params.push({
        category,
        slug: model.id,
      });
    }
  }
  return params;
}

export default async function ViewerPage({ params }) {
  const { category, slug } = await params;
  
  // Find the model
  const categoryModels = modelData[category];
  if (!categoryModels) {
    notFound();
  }
  
  const model = categoryModels.find(m => m.id === slug);
  if (!model) {
    notFound();
  }

  // Ensure model has its category attached
  const enrichedModel = { ...model, category };

  return (
    <div className="min-h-screen bg-black overflow-hidden flex flex-col font-sans text-white">
      {/* Dynamic Grid Layout */}
      <div className="flex-1 w-full h-screen grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
        
        {/* Left Column: Information Panel */}
        <div className="lg:col-span-3 h-[40vh] lg:h-full z-10">
          <InfoPanel model={enrichedModel} />
        </div>

        {/* Center Column: 3D Scene */}
        <div className="lg:col-span-6 h-[50vh] lg:h-full relative z-0">
          <Scene modelUrl={enrichedModel.file} />
        </div>

        {/* Right Column: Controls */}
        <div className="lg:col-span-3 h-auto lg:h-full z-10">
          <Controls />
        </div>

      </div>
      
      {/* Global CSS for Tailwind utility overrides if necessary */}
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
      `}} />
    </div>
  );
}

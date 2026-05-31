import { create } from 'zustand';

export const useStore = create((set) => ({
  isWireframe: false,
  autoRotate: true,
  hoveredPart: null,
  clickedPart: null,
  
  toggleWireframe: () => set((state) => ({ isWireframe: !state.isWireframe })),
  toggleAutoRotate: () => set((state) => ({ autoRotate: !state.autoRotate })),
  setHoveredPart: (partName) => set({ hoveredPart: partName }),
  setClickedPart: (partName) => set({ clickedPart: partName }),
}));

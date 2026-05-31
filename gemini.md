# PROMPT: Senior Full-Stack 3D Architect Mode

**Act as a Senior Full-Stack Developer specializing in Three.js and Next.js.** Your goal is to build the "Interactive 3D Learning Platform." This must be production-ready, modular, and performance-optimized.

### 🧩 1. Tech Stack & Architecture
* **Framework:** Next.js 14 (App Router).
* **Styling:** Tailwind CSS.
* **3D Engine:** Three.js via `@react-three/fiber`.
* **Utility Library:** `@react-three/drei` (Mandatory for loaders and controls).
* **Constraint:** Use `"use client"` strictly for 3D components. Implement `React.Suspense` for loading states to prevent hydration mismatches.

### 📂 2. Directory Structure to Generate
* `/app/viewer/[category]/[slug]/page.jsx` (Dynamic route for models)
* `/components/three/Scene.jsx` (The Canvas wrapper)
* `/components/three/ModelLoader.jsx` (Recursive GLTF processor)
* `/components/ui/InfoPanel.jsx` & `Controls.jsx` (HTML Overlays)
* `/data/models.js` (The configuration schema)

### ⚙️ 3. Core Logic Requirements
1.  **The Model Loader:** Use `useGLTF` from Drei. Inside the component, use `scene.traverse` to assign materials and shadows. Enable a `mesh.onClick` event that captures the `name` of the specific part clicked.
2.  **State Management:** Use a React Context or a simple Zustand store to share state between the **HTML Controls** (wireframe, rotation, reset) and the **3D Mesh**.
3.  **Interaction:** * Highlight mesh on hover (emission or scale change).
    * Dynamic wireframe toggle for engineering models.
    * "Auto-rotate" toggle via `useFrame`.
4.  **Error Handling:** Implement a fallback if a `.glb` file is missing in `/public/models/`.

### 🗂️ 4. Data Schema (`/data/models.js`)
Initialize with this structure:
```javascript
export const modelData = {
  engineering: [
    { id: 'gear', name: 'Industrial Gear', file: '/models/gear.glb', description: 'Mechanical power transmission unit.' }
  ],
  biology: [
    { id: 'heart', name: 'Human Heart', file: '/models/heart.glb', description: 'Beating cardiovascular organ.' }
  ],
  construction: [
    { id: 'beam', name: 'Steel I-Beam', file: '/models/beam.glb', description: 'Structural load-bearing element.' }
  ]
};
```

### 🚀 5. Deliverables
1.  **Setup Instructions:** (npm installs for `three`, `@react-three/fiber`, `@react-three/drei`, `lucide-react`).
2.  **Modular Code:** Provide the code for the **ModelLoader**, the **Scene** (including lighting/environment), and the **Dynamic Viewer Page**.
3.  **UI Layout:** Create a professional 3-column layout:
    * **Left:** Details & Metadata.
    * **Center:** Interactive 3D Canvas.
    * **Right:** Controls (Wireframe, Rotation, Camera Reset).

**Begin by generating the folder structure and the 3D core components.**
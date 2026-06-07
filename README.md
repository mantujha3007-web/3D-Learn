# Interactive 3D Learning Platform

This is a modern, interactive 3D learning platform built to visualize complex models in an intuitive web environment. 

You can view this website on : https://3-d-learn.vercel.app/dashboard

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **3D Engine:** [Three.js](https://threejs.org/) via [`@react-three/fiber`](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **3D Utilities:** [`@react-three/drei`](https://github.com/pmndrs/drei) (for loaders, controls, and helpers)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

First, install the dependencies if you haven't already:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔮 Future Optimizations

To ensure the platform scales and maintains high performance, the following optimizations can be implemented in the future:

1. **Model Compression (Draco):** Compress `.glb`/`.gltf` files using Draco compression to significantly reduce load times and payload sizes.
2. **Lazy Loading 3D Components:** Use `next/dynamic` to lazy-load the `<Canvas>` and heavy 3D components, preventing them from blocking the initial page hydration.
3. **GLTFJSX:** Convert standard `.glb` files into declarative React components using `gltfjsx` for finer control over materials and better performance.
4. **Advanced State Management:** As the application grows, integrate [Zustand](https://github.com/pmndrs/zustand) for more efficient and scalable state sharing between the HTML UI layer and the 3D Canvas.
5. **Asset Preloading:** Utilize `<Preload>` from `@react-three/drei` to ensure all textures and models are loaded before rendering the scene, avoiding pop-in effects.
6. **Shadow Baking:** Use `BakeShadows` for static scenes to improve rendering performance by calculating shadows once instead of every frame.

## 📁 Directory Structure

- `/app/viewer/[category]/[slug]/page.jsx`: Dynamic route for rendering specific models.
- `/components/three/`: Contains 3D-specific components like `Scene.jsx` and `ModelLoader.jsx`.
- `/components/ui/`: Contains HTML overlays and UI controls.
- `/data/models.js`: Configuration schema mapping categories and slugs to 3D model files.
- `/public/models/`: Static directory for `.glb` assets.

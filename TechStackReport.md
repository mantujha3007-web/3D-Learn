# Interactive 3D Learning Platform - Tech Stack Report

## 🌐 Project Overview
This project (**msebc-app**) is an **Interactive 3D Learning Platform**. It is designed to visualize complex 3D models in an intuitive web environment. The application is built as a modern, single-page application using React and features server-side rendering capabilities.

---

## 💻 Core Tech Stack

### 1. Framework & Core UI
*   **Next.js (16.2.4)**: The core framework powering the application. It uses the modern **App Router** (`/app` directory) for routing.
*   **React & React DOM (19.2.4)**: The latest stable version of React is being used for building the user interface.

### 2. 3D Rendering & Visualization
*   **Three.js (^0.184.0)**: The underlying WebGL 3D engine used to render the learning models.
*   **@react-three/fiber (^9.6.0)**: A React reconciler for Three.js, allowing you to build 3D scenes declaratively using React components.
*   **@react-three/drei (^10.7.7)**: A growing ecosystem of useful helpers, controls (like `OrbitControls`), and abstractions (like model loaders) for `@react-three/fiber`.

### 3. Styling & UI Components
*   **Tailwind CSS (^4.0)**: The utility-first CSS framework used for styling. It is configured alongside `@tailwindcss/postcss` for modern Next.js v14+ integration.
*   **Lucide React (^1.11.0)**: Used for beautiful, consistent SVG iconography across the UI.
*   **Recharts (^3.8.1)**: A composable charting library built on React components, indicating that the app includes dashboards or data visualization alongside the 3D models.

### 4. State Management
*   **Zustand (^5.0.12)**: A small, fast, and scalable bearbones state-management solution. Used here to efficiently share state between the HTML/React UI layer and the WebGL/Three.js Canvas (configured in `/store/useStore.js`).

### 5. Code Quality & Linting
*   **ESLint (^9)**: Used for linting Javascript/React code to maintain code quality, integrated with `eslint-config-next`.

---

## 📂 Directory Structure & Architecture

The project follows a clean, modular structure typical of modern Next.js applications:

*   **`/app`**: Contains the Next.js App Router logic. 
    *   `/app/login` & `/app/register`: Authentication pages.
    *   `/app/dashboard`: The dashboard area (likely utilizing the `recharts` library for analytics).
    *   `/app/viewer/[category]/[slug]`: A dynamic route responsible for rendering specific 3D models based on URL parameters.
*   **`/components`**: Divided into two logical domains:
    *   `/components/three/`: Contains 3D-specific React components (e.g., `Scene.jsx`, `ModelLoader.jsx`, Canvas setups).
    *   `/components/ui/`: Contains standard 2D HTML/Tailwind UI elements (buttons, overlays, navbars).
*   **`/store`**: Contains `useStore.js` for centralized Zustand state management.
*   **`/data`**: Contains `models.js`, which serves as a configuration schema or database mapping categories and slugs to their respective 3D model files.
*   **`/public/models`**: The static directory where your raw 3D assets (e.g., `.glb` or `.gltf` files) are hosted and served to the browser.

---

## 🚀 Future Optimizations Outlined
According to the project's `README.md`, there is already a roadmap for scaling the platform:
1.  **Draco Compression:** Using Draco to compress `.glb`/`.gltf` files to reduce load times.
2.  **Lazy Loading:** Using Next.js `next/dynamic` to prevent heavy 3D canvases from blocking initial page load.
3.  **GLTFJSX:** Converting 3D assets into declarative React components for better control over materials.
4.  **Asset Preloading & Shadow Baking:** Utilizing `@react-three/drei` features to preload textures and bake shadows to improve rendering frame rates on lower-end devices.

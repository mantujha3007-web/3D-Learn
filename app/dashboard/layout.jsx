import React from 'react';
import Sidebar from '../../components/ui/Sidebar';
import TopNav from '../../components/ui/TopNav';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0f1c] font-sans selection:bg-blue-500/30 flex text-gray-300">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto custom-scrollbar flex">
          {children}
        </main>
      </div>
    </div>
  );
}

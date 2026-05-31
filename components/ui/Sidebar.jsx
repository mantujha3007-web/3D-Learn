"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, Compass, BookOpen, Heart, Folder, ClipboardList, BarChart2, Settings,
  Crown, Flame, CheckCircle2, Cuboid
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Explore Models', href: '/dashboard/explore', icon: Compass },
    { name: 'My Library', href: '/dashboard/library', icon: BookOpen },
    { name: 'Favorites', href: '/dashboard/favorites', icon: Heart },
    { name: 'My Projects', href: '/dashboard/projects', icon: Folder },
    { name: 'Assignments', href: '/dashboard/assignments', icon: ClipboardList },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
  ];

  return (
    <aside className="w-64 border-r border-white/5 bg-[#0a0f1c] hidden lg:flex flex-col h-screen sticky top-0 overflow-y-auto custom-scrollbar flex-shrink-0">
      {/* Logo */}
      <div className="p-6 flex items-center space-x-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Cuboid className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-white tracking-wide">Learn3D</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg group transition-colors ${
                isActive 
                  ? 'bg-blue-600/10 text-blue-400' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? '' : 'group-hover:text-gray-300 transition-colors'}`} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
        <Link 
          href="/dashboard/settings" 
          className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg group transition-colors mt-4 ${
            pathname === '/dashboard/settings'
              ? 'bg-blue-600/10 text-blue-400' 
              : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
          }`}
        >
          <Settings className={`w-5 h-5 ${pathname === '/dashboard/settings' ? '' : 'group-hover:text-gray-300 transition-colors'}`} />
          <span className="font-medium">Settings</span>
        </Link>
      </nav>

      {/* Bottom Widgets */}
      <div className="p-4 mt-auto">
        {/* Go Premium Card */}
        <div className="bg-white/5 border border-white/5 rounded-xl p-4 mb-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
          <div className="flex items-center space-x-2 mb-2 text-yellow-500">
            <Crown className="w-5 h-5" />
            <span className="font-bold text-white">Go Premium</span>
          </div>
          <p className="text-xs text-gray-400 mb-3">Unlock advanced features, offline access & more.</p>
          <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-blue-500/20">
            Upgrade Now
          </button>
        </div>

        {/* Learning Streak */}
        <div className="bg-white/5 border border-white/5 rounded-xl p-4 mb-4">
          <div className="text-sm font-semibold text-white mb-1">Learning Streak</div>
          <div className="flex items-baseline space-x-2 mb-3">
            <span className="text-2xl font-bold text-yellow-500">12</span>
            <span className="text-xs text-gray-400">days</span>
            <span className="text-xs text-yellow-500 ml-auto flex items-center"><Flame className="w-3 h-3 mr-1"/> Keep it up!</span>
          </div>
          <div className="flex justify-between items-center text-xs text-gray-500">
            {['M','T','W','T','F','S','S'].map((day, i) => (
              <div key={i} className="flex flex-col items-center space-y-1">
                <span>{day}</span>
                <div className={`w-4 h-4 rounded-full flex items-center justify-center ${i < 5 ? 'bg-cyan-500/20 text-cyan-400' : 'border border-gray-700 text-transparent'}`}>
                  {i < 5 && <CheckCircle2 className="w-3 h-3" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

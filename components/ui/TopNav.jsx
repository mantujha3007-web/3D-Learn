"use client";

import React from 'react';
import Link from 'next/link';
import { Search, Moon, Bell } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="sticky top-0 z-20 flex justify-between items-center px-8 py-4 bg-[#0a0f1c]/80 backdrop-blur-md border-b border-white/5 flex-shrink-0">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input 
          type="text" 
          placeholder="Search models, topics, or categories..." 
          className="w-full pl-10 pr-12 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 font-medium px-1.5 py-0.5 border border-white/10 rounded">Ctrl /</div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Moon className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border border-[#0a0f1c]"></span>
        </button>
        <div className="w-px h-6 bg-white/10 mx-2"></div>
        <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Log In
        </Link>
        <Link href="/register" className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-lg shadow-blue-500/20">
          Sign Up
        </Link>
      </div>
    </header>
  );
}

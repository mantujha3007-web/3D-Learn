"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cuboid, Clock, CheckCircle2, Flame, Upload, FileQuestion, FolderPlus, Users, ArrowRight, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { modelData } from '../../data/models';

const weeklyData = [
  { name: 'Mon', hours: 2 },
  { name: 'Tue', hours: 3 },
  { name: 'Wed', hours: 3.5 },
  { name: 'Thu', hours: 5 },
  { name: 'Fri', hours: 4.5 },
  { name: 'Sat', hours: 6 },
  { name: 'Sun', hours: 7 }
];

export default function Dashboard() {
  return (
    <>
        {/* Dashboard Content */}
        <div className="p-8 flex-1 overflow-y-auto custom-scrollbar max-w-7xl mx-auto w-full space-y-10">
          
          {/* Welcome Header */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Nithin! 👋</h1>
            <p className="text-gray-400">Continue exploring interactive 3D models and enhance your understanding.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-start justify-between group hover:bg-white/10 transition-colors">
              <div>
                <div className="text-sm text-gray-400 mb-2">Total Models</div>
                <div className="text-3xl font-bold text-white mb-1">18</div>
                <div className="text-xs font-medium text-emerald-400">+3 this week</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Cuboid className="w-5 h-5" />
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-start justify-between group hover:bg-white/10 transition-colors">
              <div>
                <div className="text-sm text-gray-400 mb-2">Hours Learned</div>
                <div className="text-3xl font-bold text-white mb-1">36.5</div>
                <div className="text-xs font-medium text-emerald-400">+5.2 this week</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-start justify-between group hover:bg-white/10 transition-colors">
              <div>
                <div className="text-sm text-gray-400 mb-2">Quizzes Completed</div>
                <div className="text-3xl font-bold text-white mb-1">24</div>
                <div className="text-xs font-medium text-emerald-400">+6 this week</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-start justify-between group hover:bg-white/10 transition-colors">
              <div>
                <div className="text-sm text-gray-400 mb-2">Current Streak</div>
                <div className="text-3xl font-bold text-white mb-1">12 <span className="text-sm text-gray-500 font-normal">days</span></div>
                <div className="text-xs font-medium text-yellow-500">Keep it up!</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Explore Categories */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Explore Categories</h2>
              <Link href="/dashboard/explore" className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/dashboard/category/engineering" className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[#151c2c] to-[#0f1422] border border-white/5 p-5 hover:border-blue-500/30 transition-all cursor-pointer h-40 flex flex-col justify-between block">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Engineering</h3>
                  <p className="text-xs text-gray-400">12 Models</p>
                </div>
                <Image src="/images/category-engineering.png" alt="Engineering" width={120} height={120} className="absolute -bottom-4 -right-4 object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl" />
              </Link>

              <Link href="/dashboard/category/biology" className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[#151c2c] to-[#0f1422] border border-white/5 p-5 hover:border-emerald-500/30 transition-all cursor-pointer h-40 flex flex-col justify-between block">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Biology</h3>
                  <p className="text-xs text-gray-400">8 Models</p>
                </div>
                <Image src="/images/category-biology.png" alt="Biology" width={120} height={120} className="absolute -bottom-4 -right-4 object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl" />
              </Link>

              <Link href="/dashboard/category/construction" className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[#151c2c] to-[#0f1422] border border-white/5 p-5 hover:border-orange-500/30 transition-all cursor-pointer h-40 flex flex-col justify-between block">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Construction</h3>
                  <p className="text-xs text-gray-400">6 Models</p>
                </div>
                <Image src="/images/category-construction.png" alt="Construction" width={120} height={120} className="absolute -bottom-4 -right-4 object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl" />
              </Link>

              <Link href="/dashboard/category/physics" className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[#151c2c] to-[#0f1422] border border-white/5 p-5 hover:border-purple-500/30 transition-all cursor-pointer h-40 flex flex-col justify-between block">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Physics</h3>
                  <p className="text-xs text-gray-400">6 Models</p>
                </div>
                <Image src="/images/category-physics.png" alt="Physics" width={120} height={120} className="absolute -bottom-4 -right-4 object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl" />
              </Link>
            </div>
          </div>

          {/* Continue Learning */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* DC Motor Model */}
              <Link href="/viewer/engineering/dc_motor" className="group bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors flex flex-col block">
                <div className="h-40 bg-black/40 rounded-xl mb-4 relative flex items-center justify-center overflow-hidden">
                   <Image src="/images/category-engineering.png" alt="DC Motor" fill className="object-contain p-4 drop-shadow-xl" />
                </div>
                <div className="text-xs font-semibold text-blue-400 mb-1 tracking-wider uppercase">Engineering</div>
                <h3 className="text-lg font-bold text-white mb-4">DC Motor</h3>
                <div className="mt-auto">
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 mb-4">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
                    <Activity className="w-4 h-4 mr-2" /> Continue
                  </div>
                </div>
              </Link>

              {/* Heart Model */}
              <Link href="/viewer/biology/heart" className="group bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors flex flex-col block">
                <div className="h-40 bg-black/40 rounded-xl mb-4 relative flex items-center justify-center overflow-hidden">
                   <Image src="/images/category-biology.png" alt="Heart" fill className="object-contain p-4 drop-shadow-xl" />
                </div>
                <div className="text-xs font-semibold text-emerald-400 mb-1 tracking-wider uppercase">Biology</div>
                <h3 className="text-lg font-bold text-white mb-4">Human Heart</h3>
                <div className="mt-auto">
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 mb-4">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex items-center text-sm font-medium text-emerald-400 group-hover:text-emerald-300">
                    <Activity className="w-4 h-4 mr-2" /> Continue
                  </div>
                </div>
              </Link>

              {/* Beam Model */}
              <Link href="/viewer/construction/beam" className="group bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors flex flex-col block">
                <div className="h-40 bg-black/40 rounded-xl mb-4 relative flex items-center justify-center overflow-hidden">
                   <Image src="/images/category-construction.png" alt="Beam" fill className="object-contain p-4 drop-shadow-xl" />
                </div>
                <div className="text-xs font-semibold text-orange-400 mb-1 tracking-wider uppercase">Construction</div>
                <h3 className="text-lg font-bold text-white mb-4">Steel I-Beam</h3>
                <div className="mt-auto">
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 mb-4">
                    <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="flex items-center text-sm font-medium text-orange-400 group-hover:text-orange-300">
                    <Activity className="w-4 h-4 mr-2" /> Continue
                  </div>
                </div>
              </Link>

            </div>
          </div>

          {/* Recommended For You */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Recommended For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Mechanical Valve', cat: 'Engineering', rating: '4.5', src: '/images/category-engineering.png' },
                { name: 'DNA Structure', cat: 'Biology', rating: '4.8', src: '/images/category-biology.png' },
                { name: 'Bridge Model', cat: 'Construction', rating: '4.6', src: '/images/category-construction.png' },
                { name: 'Electric Motor', cat: 'Physics', rating: '4.7', src: '/images/category-physics.png' },
              ].map((item, idx) => (
                <Link href="#" key={idx} className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center space-x-4 hover:bg-white/10 cursor-pointer transition-colors block">
                  <div className="w-16 h-16 bg-black/40 rounded-lg relative overflow-hidden flex-shrink-0">
                     <Image src={item.src} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                    <p className="text-xs text-gray-400">{item.cat}</p>
                    <p className="text-xs text-yellow-500 mt-1">{item.rating} ★</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

      {/* RIGHT SIDEBAR */}
      <aside className="w-80 border-l border-white/5 bg-[#0a0f1c] hidden xl:flex flex-col h-full flex-shrink-0 overflow-y-auto custom-scrollbar">
        <div className="p-6 space-y-10">
          
          {/* Recent Activity */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">Recent Activity</h2>
              <button className="text-xs text-blue-400 hover:text-blue-300 font-medium bg-blue-500/10 px-2 py-1 rounded">View All</button>
            </div>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 relative overflow-hidden">
                  <Image src="/images/category-biology.png" alt="Skeleton" fill className="object-contain p-1 opacity-70" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Explored Human Skeleton</p>
                  <p className="text-xs text-gray-500">Biology</p>
                </div>
                <span className="text-xs text-gray-500">2h ago</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Completed Quiz</p>
                  <p className="text-xs text-gray-500">DC Motor</p>
                </div>
                <span className="text-xs text-gray-500">5h ago</span>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 relative overflow-hidden">
                  <Image src="/images/category-construction.png" alt="Beam" fill className="object-contain p-1 opacity-70" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Added Steel I-Beam to Library</p>
                  <p className="text-xs text-gray-500">Construction</p>
                </div>
                <span className="text-xs text-gray-500">1d ago</span>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 relative overflow-hidden">
                  <Image src="/images/category-biology.png" alt="Heart" fill className="object-contain p-1 opacity-70" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Viewed Human Heart</p>
                  <p className="text-xs text-gray-500">Biology</p>
                </div>
                <span className="text-xs text-gray-500">2d ago</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/10 transition-colors group">
                <Upload className="w-5 h-5 text-blue-400 mb-2 group-hover:-translate-y-1 transition-transform" />
                <span className="text-xs text-gray-300 font-medium">Upload Model</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/10 transition-colors group">
                <FileQuestion className="w-5 h-5 text-emerald-400 mb-2 group-hover:-translate-y-1 transition-transform" />
                <span className="text-xs text-gray-300 font-medium">Create Quiz</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/10 transition-colors group">
                <FolderPlus className="w-5 h-5 text-cyan-400 mb-2 group-hover:-translate-y-1 transition-transform" />
                <span className="text-xs text-gray-300 font-medium">New Project</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/10 transition-colors group">
                <Users className="w-5 h-5 text-purple-400 mb-2 group-hover:-translate-y-1 transition-transform" />
                <span className="text-xs text-gray-300 font-medium">Join Class</span>
              </button>
            </div>
          </div>

          {/* Weekly Progress Chart */}
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Weekly Progress</h2>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#6b7280', fontSize: 10 }}
                      dy={10}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0a0f1c', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#3b82f6' }}
                      labelStyle={{ color: '#9ca3af' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="hours" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ r: 4, fill: '#0a0f1c', stroke: '#3b82f6', strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-xs text-gray-400">Total: <span className="text-white font-medium">26.5 hours</span></div>
                <div className="text-xs text-emerald-400 font-medium">+18% from last week</div>
              </div>
            </div>
          </div>

        </div>
      </aside>

    </>
  );
}

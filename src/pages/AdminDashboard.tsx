import React, { useState } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { GlassCard } from '../components/ui/GlassCard';
import {
  Users,
  DollarSign,
  Calendar,
  CheckCircle,
  TrendingUp,
  Search,
  Filter,
  Download,
  AlertCircle,
  X
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const registrants = [
    { id: 'REG-101', name: 'Alice Smith', track: 'Hackathon', college: 'MIT Tech', status: 'Approved', paid: '$50' },
    { id: 'REG-102', name: 'Bob Johnson', track: 'Paper Presentation', college: 'Stanford Eng', status: 'Pending', paid: '$30' },
    { id: 'REG-103', name: 'Carol Williams', track: 'AI Workshop', college: 'Harvard CS', status: 'Approved', paid: '$40' },
    { id: 'REG-104', name: 'David Miller', track: 'Hackathon', college: 'Berkeley', status: 'Approved', paid: '$50' },
    { id: 'REG-105', name: 'Eva Davis', track: 'Paper Presentation', college: 'CMU', status: 'Rejected', paid: '$0' },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex">
      <Sidebar role="admin" />

      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        {/* Dismissible Announcement Banner */}
        {bannerVisible && (
          <div className="vibrant-flow rounded-2xl p-4 text-white flex items-center justify-between mb-8 shadow-lg">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm font-semibold">
                📢 Registration Deadline Reminder: 52 pending applications require jury review today!
              </p>
            </div>
            <button onClick={() => setBannerVisible(false)} className="p-1 hover:bg-white/20 rounded-lg">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
              Admin Analytics & Control
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Live registration statistics, revenue, track capacities, and paper reviews.
            </p>
          </div>

          <button className="px-5 py-2.5 bg-gray-900 text-white font-bold rounded-xl shadow-md hover:bg-gray-800 text-sm flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Registration CSV
          </button>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Registrations', val: '528', icon: Users, change: '+14% vs last week' },
            { label: 'Revenue Collected', val: '$21,450', icon: DollarSign, change: '+22% vs target' },
            { label: 'Active Events', val: '18 Events', icon: Calendar, change: '100% capacity' },
            { label: 'Approved Papers', val: '64 Papers', icon: CheckCircle, change: 'Verified' },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <GlassCard key={i} className="p-6 border border-white/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase">{card.label}</span>
                  <div className="p-2.5 rounded-xl bg-[#004ac6]/10 text-[#004ac6]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">{card.val}</div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{card.change}</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Registrants Table */}
        <GlassCard className="p-6 border border-white/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-lg font-bold text-gray-900">Recent Registrations</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search participant..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 text-xs bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004ac6] focus:outline-none"
                />
              </div>
              <button className="p-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 text-xs font-semibold flex items-center gap-1">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-100/80 text-gray-600 uppercase font-bold">
                <tr>
                  <th className="p-3 rounded-l-xl">ID</th>
                  <th className="p-3">Participant Name</th>
                  <th className="p-3">Track</th>
                  <th className="p-3">Institution</th>
                  <th className="p-3">Fee</th>
                  <th className="p-3 rounded-r-xl">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {registrants.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-3 font-bold text-gray-900">{r.id}</td>
                    <td className="p-3 font-semibold text-gray-800">{r.name}</td>
                    <td className="p-3 text-gray-600">{r.track}</td>
                    <td className="p-3 text-gray-500">{r.college}</td>
                    <td className="p-3 font-bold text-gray-900">{r.paid}</td>
                    <td className="p-3">
                      <span
                        className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                          r.status === 'Approved'
                            ? 'bg-emerald-100 text-emerald-700'
                            : r.status === 'Pending'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </main>
    </div>
  );
};

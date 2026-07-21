import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Code,
  Award,
  Settings,
  LogOut,
  Bell,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  role?: 'admin';
}

export const Sidebar: React.FC<SidebarProps> = ({ role = 'admin' }) => {
  const location = useLocation();

  const adminLinks = [
    { name: 'Analytics Overview', path: '/admin', icon: LayoutDashboard },
    { name: 'Registrations', path: '/admin', icon: Award },
    { name: 'System Settings', path: '/admin', icon: Settings },
  ];

  const links = adminLinks;

  return (
    <aside className="w-64 bg-white border-r border-gray-200/80 min-h-screen flex flex-col p-4 shrink-0 shadow-sm">
      {/* Sidebar Header */}
      <div className="px-3 py-3 border-b border-gray-100 mb-4 bg-gray-50/80 rounded-2xl flex flex-col items-center justify-center text-center gap-1.5">
        <div>
          <h3 className="font-extrabold text-xs text-gray-900">
            Admin Control Center
          </h3>
          <span className="text-[10px] text-gray-500 font-semibold">CS Department Admin</span>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-[#004ac6]/10 text-[#004ac6] shadow-xs'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#004ac6]' : 'text-gray-400'}`} />
                <span>{link.name}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4 text-[#004ac6]" />}
            </Link>
          );
        })}
      </nav>

      {/* Notifications widget */}
      <div className="p-3.5 bg-gradient-to-br from-[#004ac6]/5 to-[#712ae2]/10 rounded-2xl border border-[#004ac6]/15 my-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#004ac6] mb-1">
          <Bell className="w-4 h-4" />
          Live Update
        </div>
        <p className="text-xs text-gray-600 leading-snug">
          Google Form Registrations live & receiving responses!
        </p>
      </div>

      {/* User Footer */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between px-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-xs">
            AD
          </div>
          <div className="text-xs">
            <p className="font-bold text-gray-900">Admin User</p>
            <p className="text-gray-500">CS-Dept Admin</p>
          </div>
        </div>
        <Link to="/" title="Exit Admin Panel" className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50">
          <LogOut className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  );
};

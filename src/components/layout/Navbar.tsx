import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Menu, X, ArrowRight, UserCheck, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hackathon', path: '/hackathon' },
    { name: 'Paper Presentation', path: '/papers' },
    { name: 'Registration', path: '/register' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 transition-all shadow-md">
      {/* Official College Top Header Banner */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Main VCET College Logo */}
          <Link to="/" className="flex items-center hover:opacity-95 transition-opacity">
            <img
              src="/vcet-logo.png"
              alt="Velalar College of Engineering and Technology (Autonomous) - 25 Years of Academic Excellence"
              className="h-10 sm:h-14 md:h-16 w-auto object-contain max-w-full"
            />
          </Link>

          {/* Institution Accreditations & Info Badges */}
          <div className="hidden md:flex items-center gap-3 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800">
              <ShieldCheck className="w-4 h-4 text-[#1e3a8a]" />
              <span>Autonomous Institution</span>
            </div>
            <div className="px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 font-bold text-[11px]">
              NAAC 'A+' Grade
            </div>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 font-medium">Erode, Tamil Nadu</span>
          </div>
        </div>
      </div>

      {/* Main Department Navigation Bar */}
      <div className="bg-[#0f172a] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Department Title */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-[#1e3a8a] flex items-center justify-center text-white shadow-sm shrink-0">
                <Cpu className="w-4 h-4 stroke-[2.25]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-bold tracking-wide text-white group-hover:text-blue-300 transition-colors">
                    CS-SYMPOSIUM
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    2026
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium hidden sm:block">
                  Dept. of Computer Science & Engineering
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-md text-xs lg:text-sm font-semibold transition-all ${
                      active
                        ? 'bg-[#1e3a8a] text-white shadow-xs font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/admin"
                className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Admin Portal"
              >
                <UserCheck className="w-4 h-4" />
              </Link>
              
              <Link
                to="/register"
                className="px-5 py-2 rounded-md bg-[#2563eb] hover:bg-blue-600 text-white font-bold text-xs lg:text-sm transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                to="/register"
                className="px-3 py-1.5 rounded bg-[#2563eb] text-white font-bold text-xs"
              >
                Register
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded bg-slate-800 text-slate-200 hover:text-white font-bold border border-slate-700 transition-all active:scale-95"
                aria-label="Toggle Menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#0f172a] px-4 py-4 shadow-xl">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-md text-sm font-semibold transition-all ${
                    isActive(link.path)
                      ? 'bg-[#1e3a8a] text-white font-bold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}

              <div className="pt-3 border-t border-slate-800 mt-2">
                <Link
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-slate-700 text-slate-300 font-semibold text-xs hover:bg-slate-800"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Admin Dashboard</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};




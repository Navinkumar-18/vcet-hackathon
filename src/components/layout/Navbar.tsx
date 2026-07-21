import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Menu, X, ArrowRight, UserCheck } from 'lucide-react';

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
    <header className="sticky top-0 z-50 transition-all">
      {/* Official College Top Header Banner */}
      <div className="bg-white border-b border-gray-200/80 py-2 sm:py-2.5 px-3 sm:px-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center hover:opacity-95 transition-opacity py-0.5">
            <img
              src="/vcet-logo.png"
              alt="Velalar College of Engineering and Technology (Autonomous) - 25 Years of Academic Excellence"
              className="h-9 sm:h-12 md:h-14 lg:h-15 w-auto object-contain max-w-full"
            />
          </Link>
          <div className="hidden sm:flex items-center gap-2 lg:gap-3 text-[11px] lg:text-xs font-extrabold text-gray-700 shrink-0">
            <span className="px-2.5 py-1 rounded-full bg-blue-50/80 text-[#004ac6] border border-blue-200/60 shadow-2xs">
              AUTONOMOUS
            </span>
            <span className="px-2.5 py-1 rounded-full bg-purple-50/80 text-[#712ae2] border border-purple-200/60 shadow-2xs">
              Erode, Tamil Nadu
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="backdrop-blur-xl bg-white/90 border-b border-gray-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Brand / Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#004ac6] to-[#712ae2] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.25]" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-lg font-black tracking-tight text-gray-900 group-hover:text-[#004ac6] transition-colors">
                  CS-SYMPOSIUM
                </span>
                <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-[#712ae2]/10 text-[#712ae2]">
                  '26
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Bar (Visible on md screens and above) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-gray-100/80 p-1.5 rounded-full border border-gray-200/60 shadow-inner">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-1.5 rounded-full text-xs lg:text-sm font-bold transition-all relative ${
                      active
                        ? 'bg-white text-[#004ac6] shadow-sm border border-gray-200/50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#004ac6]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons & CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/admin"
                className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                title="Admin Portal"
              >
                <UserCheck className="w-4 h-4 lg:w-5 lg:h-5" />
              </Link>
              
              <Link
                to="/register"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#004ac6] to-[#712ae2] hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xs lg:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center gap-1.5 group active:scale-95"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button (Hidden on md and desktop) */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                to="/register"
                className="px-3 py-1.5 rounded-lg bg-[#004ac6] text-white font-bold text-xs flex items-center gap-1 shadow-sm"
              >
                <span>Register</span>
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200/80 text-gray-800 font-bold border border-gray-200 transition-all active:scale-95"
                aria-label="Toggle Menu"
              >
                {menuOpen ? <X className="w-5 h-5 text-gray-800" /> : <Menu className="w-5 h-5 text-gray-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-2xl px-4 py-4 shadow-2xl transition-all">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    isActive(link.path)
                      ? 'bg-[#004ac6] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </Link>
              ))}

              <div className="pt-2 border-t border-gray-100 mt-1 flex flex-col gap-2">
                <Link
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50"
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



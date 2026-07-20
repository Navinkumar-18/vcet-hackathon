import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hackathon', path: '/hackathon' },
    { name: 'Paper Presentation', path: '/papers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/75 border-b border-gray-200/60 shadow-sm transition-all [transform:translateZ(0)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Hamburger Menu Toggle Button at Top Left */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-2xl bg-gray-100 hover:bg-gray-200/80 text-gray-800 font-bold text-xs sm:text-sm border border-gray-200 transition-all shadow-sm active:scale-95"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-5 h-5 text-gray-800" /> : <Menu className="w-5 h-5 text-gray-800" />}
              <span className="hidden sm:inline">{menuOpen ? 'Close' : 'Menu'}</span>
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#004ac6] to-[#712ae2] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.25]" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-xl font-black tracking-tight text-gray-900 group-hover:text-[#004ac6] transition-colors">
                  CS-SYMPOSIUM
                </span>
                <span className="text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full bg-[#712ae2]/10 text-[#712ae2]">
                  '26
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Hamburger Dropdown Drawer */}
      {menuOpen && (
        <div className="border-b border-gray-200/80 bg-white/95 backdrop-blur-2xl px-4 sm:px-8 py-5 shadow-xl transition-all">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <nav className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between sm:justify-start gap-3 px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                    isActive(link.path)
                      ? 'bg-[#004ac6] text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 sm:hidden opacity-60" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

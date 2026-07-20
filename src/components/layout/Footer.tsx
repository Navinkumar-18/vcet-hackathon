import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Globe, Share2, MessageSquare, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-gray-800">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#004ac6] to-[#712ae2] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Cpu className="w-5 h-5 stroke-[2.25]" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                CS-SYMPOSIUM <span className="text-[#712ae2]">'26</span>
              </span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The Annual Department of Computer Science & Engineering Technical Symposium and Department Hackathon. Innovate, Collaborate, & Transform.
            </p>
            <div className="flex gap-3 pt-2">
              {[Globe, Share2, MessageSquare, ExternalLink].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#004ac6] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-4">Event Tracks</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/hackathon" className="hover:text-white transition-colors">6hr Hackathon</Link></li>
              <li><Link to="/papers" className="hover:text-white transition-colors">Paper Presentations</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Registration Form</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] sm:text-xs text-gray-500">
          <p>© 2026 CS-SYMPOSIUM '26. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Participation</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

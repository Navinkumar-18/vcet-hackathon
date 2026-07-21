import React from 'react';
import { Link } from 'react-router-dom';
import { ZentroLogo } from '../ui/ZentroLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-gray-800">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link to="/">
              <ZentroLogo variant="full" size="lg" />
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              ZENTRO '26 — The Annual Department of Computer Science & Engineering Technical Symposium and Hackathon. Innovate, Collaborate, & Transform.
            </p>
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
              <li>
                <a
                  href="https://forms.gle/nX6WSxo9KhGrD5sB9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Registration Form
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] sm:text-xs text-gray-500">
          <p>© 2026 ZENTRO '26 • CSE Department. All rights reserved.</p>
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

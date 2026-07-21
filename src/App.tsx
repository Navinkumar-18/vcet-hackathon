import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminDashboard } from './pages/AdminDashboard';
import { PaperPresentation } from './pages/PaperPresentation';
import { HackathonDetails } from './pages/HackathonDetails';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/papers" element={<PaperPresentation />} />
        <Route path="/hackathon" element={<HackathonDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

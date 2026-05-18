import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import PhilosophyPage from './pages/PhilosophyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DownloadPage from './pages/DownloadPage';
import LandingPage1 from './pages/LandingPage1';
import LandingPage2 from './pages/LandingPage2';
import LandingPage3 from './pages/LandingPage3';
import LandingPage4 from './pages/LandingPage4';

const STANDALONE_ROUTES = ['/memory', '/family-health', '/life-admin', '/focus'];

function App() {
  const location = useLocation();
  const isStandalone = STANDALONE_ROUTES.some((r) => location.pathname.startsWith(r));

  return (
    <div className="App">
      {!isStandalone && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/memory" element={<LandingPage1 />} />
        <Route path="/family-health" element={<LandingPage2 />} />
        <Route path="/life-admin" element={<LandingPage3 />} />
        <Route path="/focus" element={<LandingPage4 />} />
        {/* Legacy redirects */}
        <Route path="/lp1" element={<Navigate to="/memory" replace />} />
        <Route path="/lp2" element={<Navigate to="/family-health" replace />} />
        <Route path="/lp3" element={<Navigate to="/life-admin" replace />} />
        <Route path="/lp4" element={<Navigate to="/focus" replace />} />
      </Routes>
      {!isStandalone && <Footer />}
    </div>
  );
}

export default App;

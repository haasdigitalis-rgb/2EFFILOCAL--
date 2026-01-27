import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TrustSection from './components/TrustSection';
import AISection from './components/AISection';
import MagicCombo from './components/MagicCombo';
import AuditSection from './components/AuditSection';
import Services from './components/Services';
import WhiteLabel from './components/WhiteLabel';
import Reporting from './components/Reporting';
import PressRelease from './components/PressRelease';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <TrustSection />
        <AISection />
        <MagicCombo />
        <AuditSection />
        <Services />
        <WhiteLabel />
        <Reporting />
        <PressRelease />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

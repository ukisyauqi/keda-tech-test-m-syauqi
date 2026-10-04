import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact.jsx';
import LoginModal from './components/LoginModal.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan) => {
    console.log('Selected plan:', plan);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col relative selection:bg-cyan-500 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar onOpenLogin={() => setLoginModalOpen(true)} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero 
          onOpenLogin={() => setLoginModalOpen(true)}
          onSelectPricing={scrollToPricing}
        />
        <About />
        <Pricing onSelectPlan={handleSelectPlan} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Login Modal */}
      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
      />
    </div>
  );
}

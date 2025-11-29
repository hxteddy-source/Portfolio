import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      {/* Mobile Menu Toggle Button */}
      <button 
        onClick={toggleMobileNav}
        className="fixed top-4 right-4 z-[60] p-2 bg-primary text-white rounded-full lg:hidden shadow-lg"
      >
        {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Left Sidebar */}
      <Sidebar isOpen={mobileNavOpen} toggleSidebar={toggleMobileNav} />

      {/* Main Content Area */}
      <main className="lg:ml-[300px] relative transition-all duration-300">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="bg-[#f5f8fd] py-8 text-center text-gray-500 text-sm lg:hidden">
            <p>&copy; 2025 Hari Venkat. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
import React from 'react';
import { Home, User, BookOpen, FileText, Mail, Linkedin, Facebook, Instagram, Github, Twitter } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { label: 'Home', href: '#home', icon: <Home size={20} /> },
    { label: 'About', href: '#about', icon: <User size={20} /> },
    { label: 'Skills', href: '#skills', icon: <BookOpen size={20} /> },
    { label: 'Projects', href: '#projects', icon: <FileText size={20} /> },
    { label: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  const socialLinks = [
    { icon: <Twitter size={18} />, href: '#' },
    { icon: <Facebook size={18} />, href: '#' },
    { icon: <Instagram size={18} />, href: '#' },
    { icon: <Github size={18} />, href: '#' },
    { icon: <Linkedin size={18} />, href: '#' },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 bottom-0 z-50 w-[300px] bg-sidebar text-white transition-transform duration-300 ease-in-out overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div className="flex flex-col items-center p-8">
        {/* Profile Image - Using a placeholder professional avatar */}
        <div className="w-32 h-32 rounded-full border-8 border-[#2c2f3f] overflow-hidden mb-4">
          <img 
            src="https://picsum.photos/id/1005/400/400" 
            alt="Hari Venkat" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-2xl font-bold font-heading mb-2 text-center">Hari Venkat</h1>
        
        {/* Social Icons */}
        <div className="flex gap-2 mt-2 mb-8">
          {socialLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              className="w-9 h-9 bg-[#212431] hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Navigation */}
        <nav className="w-full">
          <ul className="flex flex-col gap-1 w-full">
            {navItems.map((item) => (
              <li key={item.label} className="w-full">
                <a 
                  href={item.href}
                  onClick={() => {
                    // Close sidebar on mobile when clicked
                    if (window.innerWidth < 1024) toggleSidebar();
                  }}
                  className="group flex items-center gap-4 px-2 py-3 text-[#a8a9b4] hover:text-white transition-colors duration-300"
                >
                  <span className="text-[#a8a9b4] group-hover:text-primary transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-lg font-light">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="absolute bottom-4 w-full text-center text-xs text-[#a8a9b4] p-4">
        <p>&copy; 2025 Hari Venkat</p>
      </div>
    </div>
  );
};

export default Sidebar;
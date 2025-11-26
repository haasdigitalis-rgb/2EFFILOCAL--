import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Calendar, Moon, Sun } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Theme initialization
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center gap-2">
              <div className="relative">
                <MapPin className="h-8 w-8 text-brand-red" />
                <div className="absolute top-2 left-2.5 w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className={`font-bold text-2xl tracking-tight ${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>
                effi<span className="text-brand-red">local</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-800 dark:text-gray-100'}`}
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors ${scrolled ? 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800' : 'text-gray-700 hover:bg-white/20 dark:text-gray-200'}`}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="https://calendar.app.google/k63agnXQbMcGGE1J7"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-red text-white px-5 py-2.5 rounded-full font-medium hover:bg-red-700 transition-colors shadow-md hover:shadow-lg text-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full ${scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-800 dark:text-gray-100'}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-800 dark:text-gray-100'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-red hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a
                href="https://calendar.app.google/k63agnXQbMcGGE1J7"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-red text-white px-5 py-3 rounded-lg font-medium hover:bg-red-700 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Prendre RDV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

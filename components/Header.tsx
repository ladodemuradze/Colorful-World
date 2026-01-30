import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, SiteContent } from '../types';

interface HeaderProps {
  content: SiteContent['nav'];
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ content, language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLanguage(language === 'GE' ? 'EN' : 'GE');
  };

  const navLinks = [
    { label: content.home, href: '#' },
    { label: content.about, href: '#about' },
    { label: content.programs, href: '#programs' },
    { label: content.gallery, href: '#gallery' },
    { label: content.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
         isScrolled ? 'bg-white/90 backdrop-blur-lg rounded-full shadow-lg border border-white/20 mt-2 mx-4 md:mx-auto' : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer relative z-50">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center transform group-hover:rotate-12 transition-transform">
               <span className="text-2xl">🌈</span>
            </div>
            <span className={`text-xl md:text-2xl font-bold ${language === 'GE' ? 'font-georgian' : 'font-display'} text-slate-900`}>
              {language === 'GE' ? 'ფერადი სამყარო' : 'Colorful World'}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-bold text-slate-700 hover:text-orange-500 transition-colors ${
                  language === 'GE' ? 'font-georgian' : 'font-sans'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-xs font-bold text-slate-700"
              aria-label="Switch Language"
            >
              <Globe size={14} />
              {language}
            </button>

            <a
               href="#contact"
               className={`bg-black hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-lg transform hover:-translate-y-0.5 ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}
            >
              {content.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3 relative z-50">
             <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-2 rounded-full bg-slate-100 text-xs font-bold text-slate-700"
            >
              {language}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-orange-500 focus:outline-none bg-white/80 p-2 rounded-lg backdrop-blur-sm"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full Screen Fixed */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-fade-in md:hidden">
           <div className="w-full max-w-sm space-y-4 text-center">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`block px-6 py-4 rounded-2xl text-xl font-bold text-slate-900 hover:bg-orange-50 hover:text-orange-600 transition-all active:scale-95 animate-fade-in-up ${
                    language === 'GE' ? 'font-georgian' : 'font-sans'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div 
                className="pt-6 animate-fade-in-up" 
                style={{ animationDelay: `${navLinks.length * 100}ms` }}
              >
                 <a
                   href="#contact"
                   onClick={() => setIsOpen(false)}
                   className={`block w-full bg-black text-white px-8 py-5 rounded-2xl text-xl font-bold shadow-xl active:scale-95 transition-transform ${language === 'GE' ? 'font-georgian' : 'font-sans'}`}
                >
                  {content.cta}
                </a>
              </div>
           </div>
           
           {/* Decorative background elements for menu */}
           <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
           <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-20 -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      )}
    </nav>
  );
};

export default Header;
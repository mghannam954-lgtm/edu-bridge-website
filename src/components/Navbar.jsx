import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check local storage for theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
      setIsLight(true);
    } else {
      document.documentElement.classList.remove('light');
      setIsLight(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('light')) {
      root.classList.remove('light');
      setIsLight(false);
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      setIsLight(true);
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-card-bg/95 backdrop-blur-md shadow-lg border-b border-black/10 dark:border-white/10 py-3' 
        : 'bg-transparent border-b border-black/5 dark:border-white/5 py-5'
    }`} dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo with transparent image */}
        <a href="#" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img src="/logo.png" className="h-12 w-auto object-contain" alt="EduBridge Logo" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-text-dark/80">
          <a href="#about" className="hover:text-primary transition-colors">عن المشروع</a>
          <a href="#audience" className="hover:text-primary transition-colors">الفئات المستهدفة</a>
          <a href="#features" className="hover:text-primary transition-colors">ميزات النظام</a>
          <a href="#demo" className="hover:text-primary transition-colors">المحاكي التفاعلي</a>
          <a href="#team" className="hover:text-primary transition-colors">المطورون</a>
          <a href="#contact" className="hover:text-primary transition-colors">تواصل معنا</a>
        </div>

        {/* Theme Toggle & CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2.5 rounded-xl bg-card-bg border border-white/5 hover:border-primary/20 text-primary transition-all shadow-md"
            title="تبديل المظهر"
          >
            {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          
          <a 
            href="#demo" 
            className="bg-primary text-black font-bold px-6 py-2.5 rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-0.5"
          >
            تجربة المحاكي
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-xl bg-card-bg border border-white/5 text-primary"
          >
            {isLight ? <Moon className="w-5.5 h-5.5" /> : <Sun className="w-5.5 h-5.5" />}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-text-dark hover:text-primary focus:outline-none p-1"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card-bg/95 backdrop-blur-md border-b border-white/5 py-6 px-8 absolute top-full left-0 right-0 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-5 text-lg font-semibold text-text-dark/80">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-primary py-1 border-b border-white/5">عن المشروع</a>
            <a href="#audience" onClick={() => setIsOpen(false)} className="hover:text-primary py-1 border-b border-white/5">الفئات المستهدفة</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-primary py-1 border-b border-white/5">ميزات النظام</a>
            <a href="#demo" onClick={() => setIsOpen(false)} className="hover:text-primary py-1 border-b border-white/5">المحاكي التفاعلي</a>
            <a href="#team" onClick={() => setIsOpen(false)} className="hover:text-primary py-1 border-b border-white/5">المطورون</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-primary py-1 border-b border-white/5">تواصل معنا</a>
            <a 
              href="#demo" 
              onClick={() => setIsOpen(false)}
              className="bg-primary text-black text-center font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors shadow-md mt-2"
            >
              تجربة المحاكي
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

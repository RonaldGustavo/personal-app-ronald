'use client';
import { useState, useEffect, useCallback } from 'react';
import { NAV_ITEMS } from '@/data';

const BRAND = 'RonaldG.';
const RESUME_PATH = '/assets/document/cv-resume-cv.pdf';
const RESUME_FILENAME = 'RonaldG-resume.pdf';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.toLowerCase())
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_PATH;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-14 py-4 backdrop-blur-md ${
          isScrolled ? 'bg-[#0b0c10]/90 shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={() => scrollToSection('home')}
            className="gradient-text text-xl md:text-2xl font-bold tracking-widest uppercase"
            aria-label="Go to home"
          >
            {BRAND}
          </button>

          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative pb-1 font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'text-white gradient-underline'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            onClick={handleDownload}
            className="hidden md:block border border-purple-500/60 text-purple-300 px-5 py-2 rounded-lg hover:bg-purple-500/20 transition-colors duration-200 font-semibold text-sm"
          >
            Resume
          </button>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-white focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden fixed top-[64px] left-0 right-0 z-40 bg-[#0b0c10]/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          <ul className="flex flex-col items-center gap-3" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    aria-current={isActive ? 'page' : undefined}
                    className={`font-semibold transition-colors ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            onClick={handleDownload}
            className="border border-purple-500/60 text-purple-300 px-6 py-2 rounded-lg hover:bg-purple-500/20 transition-colors duration-200 font-semibold text-sm"
          >
            Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

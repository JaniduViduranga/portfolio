import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef<HTMLElement>(null);

  // Handle scroll detection for sticky navbar background and active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Section tracking
      const sections = portfolioData.navigation.map((item) => item.id);
      const scrollPosition = scrollY + 120; // offset for detection

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click and ESC key to close mobile menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll with navbar height offset
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = navRef.current?.offsetHeight || 76;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <nav
      ref={navRef}
      id="navbar"
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      aria-label="Main Navigation"
    >
      <div className="nav-container">
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <h3>{portfolioData.personalInfo.name}</h3>
        </a>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          {portfolioData.navigation.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          id="hamburger"
          aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

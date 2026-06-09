import React, { useState, useEffect, useMemo } from "react";
import { useScrollSpy, useTypingEffect } from "./hooks";
import { getThemeColors, ROLES, NAV_LINKS } from "./constants";
import {
  Navbar,
  Hero,
  AboutSection,
  Services,
  Portfolio,
  Testimonials,
  Contact,
  Footer
} from "./components";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });
  const [scrolled, setScrolled] = useState(false);
  
  const typedText = useTypingEffect(ROLES);
  const activeNav = useScrollSpy(NAV_LINKS);
  const theme = useMemo(() => getThemeColors(dark), [dark]);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Apply CSS variables
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
    root.style.setProperty("--skill-bg", dark ? "rgba(255,255,255,.07)" : "rgba(37,99,235,.1)");
    root.style.setProperty("--border", theme.border);
  }, [theme, dark]);

  return (
    <div
      id="portfolio-root"
      style={{
        fontFamily: "'Syne', sans-serif",
        background: theme.bg,
        color: theme.txt,
        overflowX: "hidden",
        transition: "background .4s, color .4s",
      }}
    >
      <GlobalStyles dark={dark} theme={theme} />
      
      <Navbar 
        scrolled={scrolled}
        dark={dark}
        activeNav={activeNav}
        onThemeToggle={() => setDark(prev => !prev)}
        onNavClick={scrollToSection}
        theme={theme}
      />
      
      <Hero 
        typedText={typedText}
        dark={dark}
        theme={theme}
        onScrollTo={scrollToSection}
      />
      
      <AboutSection dark={dark} theme={theme} />
      <Services dark={dark} theme={theme} />
      <Portfolio dark={dark} theme={theme} />
      <Testimonials dark={dark} theme={theme} />
      <Contact dark={dark} theme={theme} />
      <Footer dark={dark} theme={theme} onLogoClick={() => scrollToSection("Home")} />
    </div>
  );
}

// Global Styles Component
const GlobalStyles = ({ dark, theme }) => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
    
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    html {
      scroll-behavior: smooth;
    }
    
    .blink {
      display: inline-block;
      width: 3px;
      height: 0.82em;
      background: #2563eb;
      margin-left: 3px;
      animation: blink 1s infinite;
      vertical-align: middle;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    .dot-bg {
      background-image: radial-gradient(circle, var(--dot) 1.5px, transparent 1.5px);
      background-size: 42px 42px;
    }
    
    .hover-card:hover {
      transform: translateY(-7px);
    }
    
    .social-icon:hover {
      background: #2563eb;
      border-color: #2563eb;
      color: #fff;
      transform: scale(1.1);
    }
    
    .primary-btn {
      background: #2563eb;
      color: #fff;
      border: none;
      padding: 12px 34px;
      border-radius: 99px;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0.08em;
      cursor: pointer;
      transition: background 0.2s, transform 0.2s;
    }
    
    .primary-btn:hover {
      background: #3b82f6;
      transform: scale(1.04);
    }
    
    .primary-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }
    
    .outline-btn {
      background: transparent;
      border: 2px solid ${dark ? "rgba(255,255,255,.4)" : "rgba(13,27,46,.35)"};
      color: var(--txt);
      padding: 12px 34px;
      border-radius: 99px;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0.08em;
      cursor: pointer;
      transition: border-color 0.2s, transform 0.2s;
    }
    
    .outline-btn:hover {
      border-color: #2563eb;
      transform: scale(1.04);
    }
    
    .form-input {
      background: ${dark ? "rgba(255,255,255,.05)" : "rgba(37,99,235,.06)"};
      border: 1px solid var(--border);
      color: var(--txt);
      padding: 11px 15px;
      border-radius: 11px;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      width: 100%;
      outline: none;
      transition: border-color 0.2s;
    }
    
    .form-input:focus {
      border-color: #2563eb;
    }
    
    .form-input::placeholder {
      color: var(--txt-dim);
    }
    
    @media (max-width: 900px) {
      .hero-grid { grid-template-columns: 1fr !important; }
      .portrait-col { display: none !important; }
      .two-col { grid-template-columns: 1fr !important; }
      .three-col { grid-template-columns: 1fr 1fr !important; }
    }
    
    @media (max-width: 640px) {
      .three-col { grid-template-columns: 1fr !important; }
      nav { padding: 0 24px !important; }
      section { padding: 60px 24px !important; }
    }
  `}</style>
);
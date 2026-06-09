import React, { memo } from "react";
import ThemeToggle from "./ThemeToggle";
import NavigationLink from "./NavigationLink";
import { NAV_LINKS } from "../constants";

const Navbar = memo(({ scrolled, dark, activeNav, onThemeToggle, onNavClick, theme }) => {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 200,
      background: scrolled ? theme.bgNav : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? `1px solid ${theme.navBorder}` : "none",
      transition: "background .3s, border .3s",
      padding: "0 48px",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 35,
            letterSpacing: "-.02em",
            cursor: "pointer",
          }}
          onClick={() => onNavClick("Home")}
        >
          <span style={{ color: "#2563eb" }}>Aditya</span>
          <span style={{ color: theme.txt }}>YADAV</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <NavigationLink
              key={link}
              label={link}
              isActive={activeNav === link}
              onClick={onNavClick}
            />
          ))}
          <ThemeToggle dark={dark} onToggle={onThemeToggle} />
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
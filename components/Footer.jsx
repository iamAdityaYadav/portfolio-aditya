import React, { memo } from "react";

const Footer = memo(({ dark, theme, onLogoClick }) => {
  return (
    <footer style={{
      borderTop: `1px solid ${theme.border}`,
      padding: "28px 48px",
      textAlign: "center",
      fontFamily: "'DM Sans', sans-serif",
      color: theme.txtDim,
      fontSize: 13,
    }}>
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 20,
          marginBottom: 10,
          cursor: "pointer",
        }}
        onClick={onLogoClick}
      >
        <span style={{ color: "#2563eb" }}>Aditya</span>
        <span style={{ color: dark ? "#fff" : theme.txt }}>YADAV</span>
      </div>
      <p>© 2026 Aditya's Portfolio — Designed &amp; Built with ❤️</p>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
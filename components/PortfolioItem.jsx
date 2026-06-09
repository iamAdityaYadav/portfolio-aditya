import React, { memo } from "react";

const PortfolioItem = memo(({ title, category, darkBg, lightBg, theme, onClick }) => (
  <div
    onClick={onClick}
    className="hover-card"
    style={{
      background: theme.dark ? darkBg : lightBg,
      border: `1px solid ${theme.border}`,
      borderRadius: 16,
      height: 200,
      padding: 24,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      position: "relative",
      overflow: "hidden",
      transition: "transform .3s ease",
    }}
  >
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.04,
      background: "radial-gradient(circle at 70% 30%, #fff, transparent)",
    }} />
    <span style={{
      fontSize: 11,
      color: theme.dark ? "rgba(255,255,255,.5)" : theme.txtMuted,
      textTransform: "uppercase",
      letterSpacing: ".12em",
      fontWeight: 600,
    }}>{category}</span>
    <h3 style={{
      fontFamily: "'Syne', sans-serif",
      fontWeight: 800,
      fontSize: 19,
      marginTop: 4,
      color: theme.dark ? "#fff" : theme.txt,
    }}>{title}</h3>
  </div>
));

PortfolioItem.displayName = "PortfolioItem";
export default PortfolioItem;
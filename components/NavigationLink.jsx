import React, { memo } from "react";

const NavigationLink = memo(({ label, isActive, onClick }) => (
  <button
    onClick={() => onClick(label)}
    className={`nav-link${isActive ? " active" : ""}`}
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "'Syne', sans-serif",
      fontWeight: 600,
      fontSize: 14,
      color: isActive ? "#2563eb" : "var(--txt-muted)",
      transition: "color .2s",
      padding: "4px 0",
      position: "relative",
    }}
  >
    {label}
    <style jsx>{`
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: ${isActive ? '100%' : '0'};
        height: 2px;
        background: #2563eb;
        transition: width .3s;
      }
      .nav-link:hover::after {
        width: 100%;
      }
    `}</style>
  </button>
));

NavigationLink.displayName = "NavigationLink";
export default NavigationLink;
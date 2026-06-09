import React, { memo } from "react";

const ThemeToggle = memo(({ dark, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
    style={{
      width: 52,
      height: 28,
      borderRadius: 99,
      border: "none",
      cursor: "pointer",
      background: dark ? "#1a3366" : "#b8d0f0",
      position: "relative",
      transition: "background .3s",
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
    }}
  >
    <span
      style={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: "#fff",
        position: "absolute",
        left: dark ? 3 : 27,
        top: 3,
        transition: "left .3s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
      }}
    >
      {dark ? "🌙" : "☀️"}
    </span>
  </button>
));

ThemeToggle.displayName = "ThemeToggle";
export default ThemeToggle;
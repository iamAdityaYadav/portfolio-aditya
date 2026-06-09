import React, { memo } from "react";

const TestimonialCard = memo(({ name, role, text, theme }) => (
  <div className="hover-card" style={{
    background: theme.bgCard,
    border: `1px solid ${theme.border}`,
    borderRadius: 18,
    padding: 28,
    position: "relative",
    cursor: "default",
    transition: "transform .3s ease",
  }}>
    <div style={{ color: "#2563eb", fontSize: 52, fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: 10 }}>"</div>
    <p style={{ fontFamily: "'DM Sans', sans-serif", color: theme.txtMuted, fontSize: 14, lineHeight: 1.8, marginBottom: 22 }}>{text}</p>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: 14,
        color: "#fff",
      }}>{name[0]}</div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{name}</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", color: theme.txtMuted, fontSize: 12, marginTop: 2 }}>{role}</div>
      </div>
    </div>
    <div style={{ position: "absolute", top: 20, right: 20, color: "#facc15", fontSize: 12, letterSpacing: 2 }}>★★★★★</div>
  </div>
));

TestimonialCard.displayName = "TestimonialCard";
export default TestimonialCard;
import React, { memo } from "react";

const ServiceCard = memo(({ icon, title, description, theme }) => (
  <div className="hover-card" style={{
    background: theme.bgCard,
    border: `1px solid ${theme.border}`,
    borderRadius: 18,
    padding: 32,
    cursor: "default",
    transition: "transform .3s ease",
  }}>
    <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{title}</h3>
    <p style={{ fontFamily: "'DM Sans', sans-serif", color: theme.txtMuted, fontSize: 14, lineHeight: 1.75 }}>{description}</p>
    <div style={{ marginTop: 20, width: 30, height: 3, background: "#2563eb", borderRadius: 99 }} />
  </div>
));

ServiceCard.displayName = "ServiceCard";
export default ServiceCard;
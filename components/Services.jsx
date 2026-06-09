import React, { memo } from "react";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../constants";

const Services = memo(({ dark, theme }) => {
  return (
    <section id="services" style={{ padding: "100px 64px", background: theme.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ color: "#2563eb", fontSize: 12, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase" }}>
            What I Do
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 40,
            marginTop: 8,
            color: dark ? "#fff" : theme.txt,
          }}>
            My <span style={{ color: "#2563eb" }}>Services</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="three-col">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";
export default Services;
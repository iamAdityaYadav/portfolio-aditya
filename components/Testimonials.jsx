import React, { memo } from "react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../constants";

const Testimonials = memo(({ dark, theme }) => {
  return (
    <section id="testimonials" style={{ padding: "100px 64px", background: theme.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ color: "#2563eb", fontSize: 12, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase" }}>
            Client Words
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 40,
            marginTop: 8,
            color: dark ? "#fff" : theme.txt,
          }}>
            <span style={{ color: "#2563eb" }}>Testimonials</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="three-col">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";
export default Testimonials;
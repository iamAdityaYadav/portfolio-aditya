import React, { memo } from "react";
import SkillBar from "./SkillBar";
import { SKILLS, ABOUT_CARDS } from "../constants";

const AboutSection = memo(({ dark, theme }) => {
  return (
    <section id="about" style={{ padding: "100px 64px", background: theme.bgAlt }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col">
        <div>
          <span style={{ color: "#2563eb", fontSize: 12, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase" }}>
            Who I Am
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 40,
            marginTop: 8,
            marginBottom: 18,
            color: dark ? "#fff" : theme.txt,
          }}>
            About <span style={{ color: "#2563eb" }}>Me</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: theme.txtMuted, lineHeight: 1.85, marginBottom: 14, fontSize: 15 }}>
            I'm a passionate designer and developer with 3+ years of experience crafting beautiful digital experiences that blend aesthetics with functionality.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: theme.txtMuted, lineHeight: 1.85, marginBottom: 30, fontSize: 15 }}>
            My approach combines strategic thinking with creative execution. I work closely with clients to transform their vision into compelling digital products.
          </p>
          {SKILLS.map((skill) => (
            <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} color="#2563eb" />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {ABOUT_CARDS.map((card) => (
            <div key={card.title} className="hover-card" style={{
              background: theme.bgCard,
              border: `1px solid ${theme.border}`,
              borderRadius: 16,
              padding: 24,
              cursor: "default",
            }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{card.title}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", color: theme.txtMuted, fontSize: 12, lineHeight: 1.6 }}>
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
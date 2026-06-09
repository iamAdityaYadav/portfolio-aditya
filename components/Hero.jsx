import React, { memo } from "react";
import SocialIcon from "./SocialIcon";
import { SOCIAL_LINKS } from "../constants";
// Import your photo - Change this path to match your photo location
import AdityaPhoto from "../assets/aditya-photo.jpg"; // Change filename as needed

const Hero = memo(({ typedText, dark, theme, onScrollTo }) => {
  const stats = [
    ["3+", "Years Exp."],
    ["50+", "Projects"],
    ["30+", "Clients"],
  ];

  return (
    <section
      id="home"
      className="dot-bg"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        overflow: "hidden",
        paddingTop: 64,
      }}
    >
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "10vh",
          gridColumn: "1/-1",
        }}
      >
        {/* Left Content - Text Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 48px 64px 64px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Background Glow Effect */}
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "5%",
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: dark ? "rgba(37,99,235,.07)" : "rgba(37,99,235,.05)",
              filter: "blur(55px)",
              pointerEvents: "none",
            }}
          />

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 36,
              justifyContent: "center",
            }}
          >
            {SOCIAL_LINKS.map((social) => (
              <SocialIcon key={social.name} {...social} />
            ))}
          </div>

          {/* Heading with Typing Effect */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              marginBottom: 22,
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(34px, 4vw, 58px)",
                lineHeight: 1.08,
                color: dark ? "#fff" : theme.txt,
                whiteSpace: "nowrap",
              }}
            >
              I'm a <br /> {typedText}
              <span className="blink" />
            </h1>
            <div
              style={{
                width: 3,
                height: 64,
                background: dark
                  ? "rgba(255,255,255,.2)"
                  : "rgba(13,27,46,.15)",
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: theme.txtMuted,
              fontSize: 15,
              lineHeight: 1.85,
              maxWidth: 440,
              marginBottom: 38,
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            I'm a Designer with extensive experience for over 3 years. My
            expertise is to create and design Websites, Apps, Mockups and many
            more...
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="primary-btn"
              onClick={() => onScrollTo("Portfolio")}
            >
              MY WORK
            </button>
            <button
              className="outline-btn"
              onClick={() => onScrollTo("Contact")}
            >
              HIRE ME
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 52,
              paddingTop: 28,
              borderTop: `1px solid ${theme.border}`,
              justifyContent: "center",
            }}
          >
            {stats.map(([number, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 30,
                    color: "#2563eb",
                  }}
                >
                  {number}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: theme.txtMuted,
                    marginTop: 3,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Photo/Portrait */}
        <div
          className="portrait-col"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: dark
                ? "linear-gradient(150deg,#0c1930 0%,#152438 35%,#1c3050 65%,#0c1930 100%)"
                : "linear-gradient(150deg,#c0d4ee 0%,#cce0ff 40%,#d8eaff 65%,#c0d4ee 100%)",
            }}
          >
            {/* Your Photo - Aditya Yadav */}
            <img
              src={AdityaPhoto}
              alt="Aditya Yadav - Portfolio"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 50%", // Adjust to focus on face
              }}
            />

            {/* Gradient Overlay for better text readability */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "30%",
                background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
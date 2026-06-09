import React, { useState, useMemo, memo } from "react";
import PortfolioItem from "./PortfolioItem";
import { PORTFOLIO_ITEMS } from "../constants";

const Portfolio = memo(({ dark, theme }) => {
  const [filter, setFilter] = useState("All");
  
  const categories = useMemo(() => ["All", ...new Set(PORTFOLIO_ITEMS.map(p => p.category))], []);
  const visiblePortfolio = useMemo(() => 
    filter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === filter),
    [filter]
  );

  return (
    <section id="portfolio" style={{ padding: "100px 64px", background: theme.bgAlt }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ color: "#2563eb", fontSize: 12, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase" }}>
            My Work
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 40,
            marginTop: 8,
            color: dark ? "#fff" : theme.txt,
          }}>
            Recent <span style={{ color: "#2563eb" }}>Projects</span>
          </h2>
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={{
                padding: "8px 22px",
                borderRadius: 99,
                border: `1px solid ${filter === category ? "#2563eb" : theme.border}`,
                background: filter === category ? "#2563eb" : "transparent",
                color: filter === category ? "#fff" : theme.txtMuted,
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                transition: "all .2s",
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="three-col">
          {visiblePortfolio.map((item, index) => (
            <PortfolioItem key={index} {...item} theme={{ dark, ...theme }} />
          ))}
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";
export default Portfolio;
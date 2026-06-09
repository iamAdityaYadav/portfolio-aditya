import React, { memo, useEffect, useRef } from "react";

const SkillBar = memo(({ skill, percentage, color }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            barRef.current.style.width = `${percentage}%`;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 7 }}>
        <span style={{ fontWeight: 600 }}>{skill}</span>
        <span style={{ color }}>{percentage}%</span>
      </div>
      <div style={{
        height: 5,
        background: "var(--skill-bg)",
        borderRadius: 99,
        overflow: "hidden",
      }}>
        <div
          ref={barRef}
          style={{
            width: 0,
            height: "100%",
            background: color,
            borderRadius: 99,
            transition: "width 1.4s ease",
          }}
        />
      </div>
    </div>
  );
});

SkillBar.displayName = "SkillBar";
export default SkillBar;
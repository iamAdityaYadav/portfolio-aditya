import React, { memo } from "react";

const SocialIcon = memo(({ name, icon, url }) => {
  const getIconPath = () => {
    switch (icon) {
      case "facebook":
        return <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />;
      case "twitter":
        return <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />;
      case "instagram":
        return <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>;
      case "linkedin":
        return <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>;
      case "dribbble":
        return <>
          <circle cx="12" cy="12" r="10" />
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
        </>;
      default:
        return null;
    }
  };

  if (name === "Behance") {
    return (
      <a href={url} className="social-icon" title={name} style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#2563eb",
        textDecoration: "none",
        transition: "all .2s",
        flexShrink: 0,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 800,
        fontSize: 13,
      }}>
        Bē
      </a>
    );
  }

  return (
    <a href={url} className="social-icon" title={name} style={{
      width: 38,
      height: 38,
      borderRadius: "50%",
      border: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#2563eb",
      textDecoration: "none",
      transition: "all .2s",
      flexShrink: 0,
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {getIconPath()}
      </svg>
    </a>
  );
});

SocialIcon.displayName = "SocialIcon";
export default SocialIcon;
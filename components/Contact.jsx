import React, { useState, memo } from "react";
import { CONTACT_INFO } from "../constants";

const Contact = memo(({ dark, theme }) => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <section id="contact" style={{ padding: "100px 64px", background: theme.bgAlt }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ color: "#2563eb", fontSize: 12, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase" }}>
            Get In Touch
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 40,
            marginTop: 8,
            color: dark ? "#fff" : theme.txt,
          }}>
            Contact <span style={{ color: "#2563eb" }}>Me</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="two-col">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: theme.txtMuted, lineHeight: 1.85, marginBottom: 36, fontSize: 15 }}>
              Have a project in mind? Let's create something extraordinary together. Available for freelance, full-time, and collaboration opportunities worldwide.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {CONTACT_INFO.map((info) => (
                <div key={info.label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    background: dark ? "rgba(37,99,235,.14)" : "rgba(37,99,235,.09)",
                    border: `1px solid ${theme.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    flexShrink: 0,
                  }}>{info.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: theme.txtMuted, textTransform: "uppercase", letterSpacing: ".1em" }}>
                      {info.label}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginTop: 3 }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{
            background: theme.bgCard,
            border: `1px solid ${theme.border}`,
            borderRadius: 20,
            padding: 32,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ fontSize: 12, color: theme.txtMuted, display: "block", marginBottom: 7, fontFamily: "'DM Sans', sans-serif" }}>
                  Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label style={{ fontSize: 12, color: theme.txtMuted, display: "block", marginBottom: 7, fontFamily: "'DM Sans', sans-serif" }}>
                  Email
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 12, color: theme.txtMuted, display: "block", marginBottom: 7, fontFamily: "'DM Sans', sans-serif" }}>
                Subject
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>
            <div style={{ marginBottom: 22 }}>
              <label style={{ fontSize: 12, color: theme.txtMuted, display: "block", marginBottom: 7, fontFamily: "'DM Sans', sans-serif" }}>
                Message
              </label>
              <textarea
                rows="4"
                className="form-input"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                style={{ resize: "vertical" }}
              />
            </div>
            {submitStatus === "success" && (
              <div style={{
                marginBottom: 16,
                padding: 10,
                background: "#10b981",
                color: "#fff",
                borderRadius: 8,
                textAlign: "center",
                fontSize: 14,
              }}>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            <button
              type="submit"
              className="primary-btn"
              disabled={isSubmitting}
              style={{ width: "100%", padding: "14px", fontSize: 14 }}
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;
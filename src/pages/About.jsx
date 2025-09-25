import React from "react";

function About() {

  const leadership = [
    { name: "Dr. Sbusiso Nkosi", role: "Founder & CEO" },
    { name: "Andiswa msweli", role: "Operations Manager" },
    { name: "Sakhile tembe", role: "Technical Lead" },
  ];

  const achievements = [
      "Established 26 branches across South Africa which are fully operating and other branches are in progress",
      "Over 10,000 students empowered",
      "Awarded Best Education Initiative 2024",
  ];
  const gallery = [
    "/images/graduation1.jpg",
    "/images/graduation2.jpg",
    "/images/graduation3.jpg",
  ];
  return (
    <div style={{
      maxWidth: 900,
      margin: "40px auto",
      padding: 32,
      borderRadius: 12,
      boxShadow: "0 4px 24px rgba(25, 118, 210, 0.08)"
    }}>
      <h1 style={{ fontSize: 36, marginBottom: 20, color: "#1976d2", textAlign: "center", letterSpacing: 1 }}>📖 About Us</h1>
      <section style={{ marginBottom: 32, background: "#e3f2fd", borderRadius: 8, padding: 20 }}>
        <h2 style={{ fontSize: 26, color: "#1976d2", marginBottom: 10, letterSpacing: 1 }}>NaTeSA History & Mission</h2>
        <p style={{ color: "#1976d2", fontSize: 18, fontWeight: 500 }}>
          NaTeSA was founded to bridge educational gaps and empower communities across South Africa. Our mission is to provide accessible, high-quality learning opportunities and support for all.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 26, color: "#1565c0", marginBottom: 10 }}>Leadership Team</h2>
        <ul style={{ background: "#e3f2fd", borderRadius: 8, padding: 16, margin: 0 }}>
          {leadership.map((leader, idx) => (
            <li key={idx} style={{ marginBottom: 8, color: "#1976d2", fontSize: 17 }}>
              <strong>{leader.name}</strong> — {leader.role}
            </li>
          ))}
        </ul>
        {/* In future, fetch leadership from database */}
      </section>

      <section style={{ marginBottom: 32, background: "#e3f2fd", borderRadius: 8, padding: 20 }}>
        <h2 style={{ fontSize: 26, color: "#1976d2", marginBottom: 10, letterSpacing: 1 }}>Our Achievements & Impact</h2>
        <ul style={{ margin: 0 }}>
          {achievements.map((item, idx) => (
            <li key={idx} style={{ marginBottom: 8, color: "#1565c0", fontSize: 17, fontWeight: 500 }}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: 26, color: "#1565c0", marginBottom: 10 }}>Photo Gallery</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {gallery.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`gallery-${idx}`}
              style={{
                width: 260,
                height: 180,
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 4px 16px #1976d2",
                border: "3px solid #fff",
                cursor: "pointer"
              }}
              onClick={() => window.open(url, "_blank")}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;



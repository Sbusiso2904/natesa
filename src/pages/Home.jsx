const Home = () => {
  return <h2 className="text-center text-xl">Welcome to natesa page!</h2>;
};


import React from "react";

export default function HomePage() {
  return (
    <div style={{ padding: 30, fontFamily: "Arial, sans-serif", background: "#f9fbfd" }}>
      {/* Welcome */}
      <h1
        style={{
          textAlign: "center",
          color: "#1976d2",
          fontSize: "40px",
          marginBottom: "10px",
        }}
      >
        Welcome to NaTeSA
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#444",
          maxWidth: "700px",
          margin: "0 auto 40px",
        }}
      >
        NaTeSA (Nazareth Tertiary Students' Association) is an organisation that represents and 
        empowers the tertiary student population in South Africa. It gives students a combined voice for education, 
        social, religious and leadership issues across one of the largest university/college campus populations in South Africa. 
        NaTeSA’s role is to support student growth, encourage their interests and continue building upon that progress 
        through events, campaigns and alliances with alumni.
      </p>

      {/* Quick Links */}
      <h2
        style={{
          color: "#1976d2",
          borderBottom: "2px solid #1976d2",
          paddingBottom: "5px",
          marginTop: "40px",
        }}
      >
        Quick Links
      </h2>
      <ul style={{ fontSize: "16px", marginBottom: "40px" }}>
        <li>
          <a href="/nec" style={{ color: "#1976d2", textDecoration: "none" }}>
            National Executive Committee
          </a>
        </li>
        <li>
          <a href="/bec" style={{ color: "#1976d2", textDecoration: "none" }}>
            Branch Executive Committee
          </a>
        </li>
        <li>
          <a href="/alumni" style={{ color: "#1976d2", textDecoration: "none" }}>
            Alumni
          </a>
        </li>
        <li>
          <a href="/generalmembers" style={{ color: "#1976d2", textDecoration: "none" }}>
            General Members
          </a>
        </li>
      </ul>

      {/* Contact Information */}
      <h2
        style={{
          color: "#1976d2",
          borderBottom: "2px solid #1976d2",
          paddingBottom: "5px",
          marginTop: "40px",
        }}
      >
        Contact Us
      </h2>
      <p style={{ fontSize: "16px", color: "#333" }}>
        📧 Email: natesanec@ymail.com
      </p>
      <p style={{ fontSize: "16px", color: "#333" }}>📞 Phone: +27 76 047 5636</p>
      <p style={{ fontSize: "16px", color: "#333" }}>
        📍 Address: 10th Floor Sangro House, 423 Anton Lembede, Durban, 4001
      </p>
    </div>
  );
}

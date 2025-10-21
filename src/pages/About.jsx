import React from "react";

export default function About() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        padding: "1px 1px",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          padding: "50px 60px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(8px)",
          textAlign: "justify",
          lineHeight: "1.9",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.4rem",
            color: "#fff",
            marginBottom: "25px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          About Me
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            color: "#f1eaea",
            marginBottom: "20px",
          }}
        >
          Hello! My name is Kimberly, and I’m currently a BSIT student with a
          strong interest in web development, design, and technology. I created
          this portfolio to document my progress and share my learning
          experience. Even though I’m still at the beginning of my journey, I’m
          dedicated to improving every day and excited about what’s ahead.
        </p>

        <p
          style={{
            fontSize: "1.15rem",
            color: "#f7f5f5",
            fontStyle: "italic",
            textAlign: "center",
            marginTop: "30px",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            paddingTop: "20px",
          }}
        >
          I believe that consistency and curiosity are the keys to growth.
        </p>
      </div>
    </section>
  );
}

import React from "react";
import "./Home.css"; // import the CSS file

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-text">
        <h1>Welcome to My Portfolio</h1>
        <h4>Hi, I’m Kimberly</h4>
        <p>
          I’m an aspiring BSIT student passionate about learning technology and
          building creative projects. I may still be developing my skills, but
          I’m always eager to explore new tools, take on challenges, and grow in
          the tech industry. This portfolio is a glimpse of my journey from what
          I’m learning to what I’m creating along the way.
        </p>
      </div>

      <div className="home-image">
        <img src="/images/kim1.png" alt="Kimberly" />
      </div>
    </section>
  );
}

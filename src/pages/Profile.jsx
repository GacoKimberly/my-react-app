import React from "react";
import "./Profile.css";
import profileImg from "../assets/kimm.jpg"; // adjust the path if needed

export default function Profile() {
  return (
    <section className="profile-page">
      <h1 className="profile-title">Profile</h1>

      <div className="profile-content">
        <div className="profile-image-wrapper">
          <img
            src={profileImg}
            alt="Kimberly Gaco"
            className="profile-photo"
          />
        </div>

        <div className="profile-info">
          <p><strong>Name:</strong> Kimberly Gaco</p>
          <p><strong>Course:</strong> Bachelor of Science in Information Technology</p>
          <p><strong>School:</strong> Cebu Technological University - Danao Campus</p>
        </div>
      </div>
    </section>
  );
}

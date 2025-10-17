import React from "react";
import "./Profile.css";
import profileImg from "../assets/kim.png"; // adjust the path if needed



export default function Profile() {
  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-content">
        <img src={profileImg} alt="Kimberly" className="profile-photo" />
        <div className="profile-info">
          <p><strong>Name:</strong> Kimberly Gaco</p>
          <p><strong>Course:</strong> Bachelor of Science Information Technology</p>
          <p><strong>School:</strong> Cebu Technological University-Danao Campus</p>
        </div>
      </div>
    </div>
  );
}

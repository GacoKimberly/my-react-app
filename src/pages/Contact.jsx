import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <h1>Contact Me</h1>
      <p className="contact-text">
        Feel free to reach out through any of the following:
      </p>

      <div className="contact-info">
        <p><FontAwesomeIcon icon={faPhone} />  +63 969 220 0281</p>
        <p><FontAwesomeIcon icon={faEnvelope} />  gacokimberly18@gmail.com</p>
        <p>
          <FontAwesomeIcon icon={faGithub} />  
          <a href="https://github.com/GacoKimberly" target="_blank" rel="noreferrer">
            https://github.com/GacoKimberly
          </a>
        </p>
      </div>
    </div>
  );
}

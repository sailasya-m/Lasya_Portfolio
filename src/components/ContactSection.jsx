/* --------------------------------------------------------------
   Responsive Contact & Social Section (React / CRA compatible)
-------------------------------------------------------------- */

import React from 'react';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import contactImg from "../assets/img/girl lap-Photoroom.png-Photoroom.png";

const SOCIAL_LINKS = [
  {
    icon: 'https://unpkg.com/tabler-icons@latest/icons/brand-github.svg',
    label: 'GitHub',
    url: 'https://github.com/YOUR_HANDLE',
  },
  {
    icon: 'https://unpkg.com/tabler-icons@latest/icons/brand-linkedin.svg',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/YOUR_HANDLE',
  },
  {
    icon: 'https://unpkg.com/tabler-icons@latest/icons/brand-instagram.svg',
    label: 'Instagram',
    url: 'https://instagram.com/YOUR_HANDLE',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">

      {/* -------- Avatar ---------- */}
      <div className="contact-avatar">
        <TrackVisibility>
          {({ isVisible }) => (
            <img
              src={contactImg}
              alt="Avatar at laptop"
              className={isVisible ? "animate__animated animate__zoomIn" : ""}
            />
          )}
        </TrackVisibility>
      </div>

      {/* ----- Card group (two cards) ----- */}
      <div className="contact-cards">

        {/* Contact card */}
        <article className="contact-card info">
          <span className="contact-icon">
            <img
              src="https://unpkg.com/tabler-icons@latest/icons/mail.svg"
              alt="mail icon"
              width={20}
              height={20}
              loading="lazy"
            />
          </span>
          <h3>Contact</h3>
          <p className="contact-details">
            mynampatisailasya@gmail.com
            <br />
            +91&nbsp;7094399917
            <br />
            Bangalore, India
          </p>
        </article>

        {/* Social card */}
        <article className="contact-card social">
          <span className="contact-icon">
            <img
              src="https://unpkg.com/tabler-icons@latest/icons/world.svg"
              alt="world icon"
              width={20}
              height={20}
              loading="lazy"
            />
          </span>
          <h3>Find&nbsp;Me&nbsp;Online</h3>
          <ul className="social-list">
            {SOCIAL_LINKS.map(({ icon, label, url }) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noreferrer" className="social-btn">
                  <img src={icon} alt="" width={16} height={16} loading="lazy" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </article>

      </div>{/* /.contact-cards */}

    </section>
  );
} 
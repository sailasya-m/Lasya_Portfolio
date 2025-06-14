import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/girl lap-Photoroom.png-Photoroom.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <p className="contact-intro">
                  Let's connect and explore opportunities together! I'm always excited to discuss new projects, collaborations, and innovative ideas.
                </p>
                
                <div className="contact-section">
                  <div className="contact-item-wrapper">
                    <div className="contact-header">
                      <div className="contact-icon-circle">
                        <span>📧</span>
                      </div>
                      <h4>Email Me</h4>
                    </div>
                    <div className="contact-info-text">
                      <a href="mailto:mynampatisailasya@gmail.com" className="email-link">
                        mynampatisailasya@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-item-wrapper">
                    <div className="contact-header">
                      <div className="contact-icon-circle">
                        <span>🌐</span>
                      </div>
                      <h4>Find Me</h4>
                    </div>
                    <div className="contact-info-text">
                      <div className="social-platforms">
                        <a href="https://www.linkedin.com/in/sailasya/" target="_blank" rel="noopener noreferrer" className="platform-link">
                          <img src={navIcon1} alt="LinkedIn" />
                          <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/sailasya-m" target="_blank" rel="noopener noreferrer" className="platform-link">
                          <img src={navIcon2} alt="GitHub" />
                          <span>GitHub</span>
                        </a>
                        <a href="https://www.instagram.com/___.lasya._____/" target="_blank" rel="noopener noreferrer" className="platform-link">
                          <img src={navIcon3} alt="Instagram" />
                          <span>Instagram</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

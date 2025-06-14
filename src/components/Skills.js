import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from "../assets/img/met2.png";
import meter2 from "../assets/img/met2.png";
import meter3 from "../assets/img/met3.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills" style={{ backgroundColor: '#bcb3cb' }}>
      <Container>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>These are the skills that I have developed in my career as a Software Developer.</p>
              <Row className="skill-grid">
                <Col xs={12} sm={6} md={4} lg={2} className="skill-item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Web Development</h5>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2} className="skill-item">
                  <img src={meter2} alt="Software Engineering" />
                  <h5>Software Engineering</h5>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2} className="skill-item">
                  <img src={meter3} alt="Backend Development" />
                  <h5>Backend Development</h5>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2} className="skill-item">
                  <img src={meter1} alt="Cloud Computing" />
                  <h5>Cloud Computing</h5>
                </Col>
                <Col xs={12} sm={6} md={4} lg={2} className="skill-item">
                  <img src={meter2} alt="Database Management" />
                  <h5>Database Management</h5>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
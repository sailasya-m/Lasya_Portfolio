import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const education = {
  degree: 'B.Tech. Computer Science Engineering',
  institution: 'Amrita Vishwa Vidyapeetam',
  graduation: 'May 2024',
  achievements: [
    'Top-10 finalist – PSG i-Tech Delta Hackathon 2022',
    'Presented two IEEE conference papers on front-end performance'
  ]
};

export const Education = () => {
  return (
    <section className="education section" id="education">
      <Container>
        <h2 className="text-center mb-5">Education</h2>
        <Row className="align-items-start">
          <Col md={6} className="mb-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h4 className="fw-bold mb-2">{education.degree}</h4>
              <p className="mb-1">{education.institution}</p>
              <small className="text-muted">Graduated • {education.graduation}</small>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h5 className="fw-bold mb-3">Achievements</h5>
              <ul className="mb-0 ps-3">
                {education.achievements.map((a, idx) => <li key={idx}>{a}</li>)}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}; 
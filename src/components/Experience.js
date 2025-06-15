import React from 'react';
import { Container } from 'react-bootstrap';

const experienceData = [
  {
    company: 'Codeclause',
    title: 'Web Development Intern',
    period: 'May 2023 – Aug 2023',
    bullets: [
      'Built facial-recognition login portal',
      'Developed PDF-to-Word converter',
      'Helped migrate TensorFlow models to BrainChip MetaTF'
    ]
  },
  {
    company: 'Alphonic Network Solutions',
    title: 'ReactJS Developer Intern',
    period: 'Sep 2023 – Dec 2023',
    bullets: [
      'Delivered fully responsive React SPA',
      'Implemented complex reusable UI components',
      'Collaborated on pixel-perfect design hand-off'
    ]
  },
  {
    company: 'Ralfsoft Technologies',
    title: 'UI/UX Designer Intern',
    period: 'Jan 2024 – Apr 2024',
    bullets: [
      'Designed SaaS dashboards & onboarding flows',
      'Conducted moderated usability tests',
      'Produced high-fidelity Figma prototypes'
    ]
  }
];

export const Experience = () => {
  return (
    <section className="experience section alt" id="experience">
      <Container>
        <h2 className="text-center mb-5">Experience</h2>
        <div className="timeline position-relative ms-2">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="timeline-item mb-4 position-relative ps-4">
              <span className="timeline-dot position-absolute top-0 start-0 translate-middle bg-primary rounded-circle"></span>
              <h5 className="mb-1 fw-bold">{exp.title} – {exp.company}</h5>
              <small className="text-muted d-block mb-2">{exp.period}</small>
              <ul className="mb-0">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
          <span className="timeline-line position-absolute top-0 start-0 h-100 border-start border-2 border-primary"></span>
        </div>
      </Container>
    </section>
  );
}; 
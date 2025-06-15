import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bakery_1_1000x600.jpg";
import projImg3 from "../assets/img/clothing_2_1000x600.jpg";
import projImg4 from "../assets/img/restaurant_2_1000x600.jpg";
import projImg5 from "../assets/img/coffe1_2_1000x600.jpg";
import projImg6 from "../assets/img/travel-web_2_1000x600.jpg";
import projImg2 from "../assets/img/petshop_2_1000x600.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Online Bakery – The Baking Factory",
      description: "React.js · Contentful CMS",
      imgUrl: projImg1,
    },
    {
      title: "Meal On-Demand App",
      description: "React Native · Redux · Firebase · Google Maps API",
      imgUrl: projImg4,
    },
    {
      title: "Espresso Express Café",
      description: "HTML · CSS · JavaScript",
      imgUrl: projImg5,
    },
    {
      title: "Clothing Store",
      description: "Next.js · Stripe · Contentful CMS",
      imgUrl: projImg3,
    },
    {
      title: "Travel Booking Website",
      description: "Vue.js · Vuex · REST / third-party APIs",
      imgUrl: projImg6,
    },
    {
      title: "Pet Shop Website",
      description: "HTML · CSS · JavaScript",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are my projects, each a testament to my dedication and expertise. They span across various fields and showcase my ability to deliver results. I'm proud to present them as evidence of my skills and accomplishments, ready to tackle new challenges ahead.</p>
                
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decorative background pattern"></img>
    </section>
  )
}

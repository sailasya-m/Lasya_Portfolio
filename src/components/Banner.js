import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/girl_lap.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn banner-content" : "banner-content"}>
                <h1>Hi! I'm Sai Lasya Mynampati</h1>
                <h2 className="banner-role">
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h2>
                
                <p className="banner-intro">
                  Frontend Developer crafting responsive, engaging web experiences that bridge design and functionality.
                </p>
                
                <div className="banner-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">💼</span>
                    <span>Frontend Developer at Ralfsoft Technologies</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🎓</span>
                    <span>Graduate from Amrita Vishwa Vidyapeetham</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">✨</span>
                    <span>Passionate about intuitive digital experiences</span>
                  </div>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

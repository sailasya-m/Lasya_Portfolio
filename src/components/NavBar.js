import { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/flower-unscreen.gif';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const handleSetActive = (to) => {
    setActiveLink(to);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={handleSetActive}
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={handleSetActive}
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={handleSetActive}
                className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={handleSetActive}
                className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'}
              >
                Education
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to='#contact'>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
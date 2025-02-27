import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/navbar.css';

function TheNavbar() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="mynavbar fixed-top">
          <Container>
            <Navbar.Brand href="/">MONISHA MEKALA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="p-2 ms-auto">
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#certifications">Certifications</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#myResume">My Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default TheNavbar;
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "../styles/Navbar.css"


export const NavBar = () => {
  return (
    <Navbar fixed="top" expand="lg" className="navbar-custom" style={{ backgroundColor: "black" }}>
    <Container className="d-flex justify-content-between align-items-center">
      {/* <Navbar.Brand href="#home">
        <Link
          to="home"        
          spy={true}          
          smooth={true}      
          offset={-70}       
          duration={150}      
        >
        <img
        src={main_logo}
        alt="main_lgo"
        width="60"  
        height="50"
        className="d-inline-block align-top"
        />
        </Link>
      </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <Nav.Link
          as={Link}
          to="home"
     
          smooth={true} 
          duration={150} 
          className="me-5 fs-7 nav-link">Home</Nav.Link>
          <Nav.Link
          as={Link}
          to="aboutme"
          smooth={true} 
          duration={150}   
          className="me-5 fs-7 nav-link">About Me</Nav.Link>
          <Nav.Link
          as={Link}
          to="projects"
 
          smooth={true} 
          duration={150} 
          className="me-5 fs-7 nav-link">Works</Nav.Link>
          <Nav.Link
          as={Link}
          to="contact"
 
          smooth={true} 
          duration={150} 
          className="me-5 fs-7 nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}
export default NavBar;
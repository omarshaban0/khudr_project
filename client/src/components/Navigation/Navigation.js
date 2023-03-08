import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/styles.css'
import '../../styles/nav_styles.css'
import logo from '../../images/khudr_logo_1.png'

const Navigation = () => {
  return (
    <Navbar className="Navbar">
      <Container>
        <Navbar.Brand href="/"><img className= "img-logo" src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="nav-text-container">
            <Nav className="me-auto">
              <Nav.Link className="nav-text" href="/diseases">Diseases</Nav.Link>
              <Nav.Link className="nav-text" href="/prevent">Prevent</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
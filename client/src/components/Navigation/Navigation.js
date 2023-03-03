import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/styles.css'
import logo from '../../images/khudr_logo_1.png'

const Navigation = () => {
  return (
    <Navbar className="Navbar">
      <Container>
        <Navbar.Brand href="/"><img className= "img-logo" src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/diseases">Diseases</Nav.Link>
            <Nav.Link href="/prevent">Prevent</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
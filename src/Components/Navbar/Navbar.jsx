import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Button, Image } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="navbarxd">

        {/* Botón de colapso */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Logo siempre visible y centrado */}
        {/* Elementos colapsables */}
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
          <div className='text-center'>
          <Navbar.Brand href="/" className='navbar-logo'>
              <Image src={logo} roundedCircle className='navbar-logo-img'/>
            
          </Navbar.Brand>
          </div>
          <Nav className="me-auto left-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/servicios">Servicios</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
          </Nav>
          
          <Nav className="ms-auto right-nav">
            <Nav.Link href="/ayuda">Ayuda</Nav.Link>
            <Button href="login" variant="primary">Iniciar sesión</Button>
            <Button href="signup" variant="secondary">Registrarse</Button>

          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}

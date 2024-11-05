import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TeamsNavBar.css';
import logo from '../../assets/logo.png';
import defaultAvatar from '../../assets/avatar-undefined.svg'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TeamsNavBar() {
  return (
    <Navbar expand="lg" className="teamsnavbarxd">

        {/* Botón de colapso */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="teamsnavbar-container"/>
        
            {/* Logo siempre visible y centrado */}

            <Navbar.Brand href="/" className='teamsnavbar-logo'>
                <Image src={logo} roundedCircle className='teamsnavbar-logo-img'/>
            
            </Navbar.Brand>

            {/* Elementos colapsables */}
            <Navbar.Collapse id="basic-navbar-nav" className='teamsnavbar-collapse'>
            <Nav className="teamsleft-nav">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/equipos">Equipos</Nav.Link>
                <Nav.Link href="/ayuda">Ayuda</Nav.Link>
            </Nav>
            
            <Nav className="ms-auto teamsright-nav">
                <Link to="/añadirequipo">
                    <button className="btn-nuevoequipo">Añadir equipo</button>
                </Link>

                <Navbar.Brand href="/profile">
                    <Image src={defaultAvatar} roundedCircle className='teamsavatar'/>
                </Navbar.Brand>

            </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}

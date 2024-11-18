import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TeamsNavBar.css';
import logo from '../../assets/logo.png';
import defaultAvatar from '../../assets/avatar-undefined.svg'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TeamsNavBar() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (event) => {
    // Prevenir la navegación
    event.preventDefault();
    // Mostrar el mensaje con alert
    alert("Función no implementada");
    // Opcionalmente, si deseas mostrar el mensaje de forma visual en lugar de un alert:
    // setShowMessage(true);
  };

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
          {/* Botón para Añadir equipo */}
          <Link to="equipos" onClick={handleClick}>
            <button className="btn-nuevoequipo">Añadir equipo</button>
          </Link>

          {/* Avatar del usuario */}
          <Navbar.Brand href="/profile">
            <Image src={defaultAvatar} roundedCircle className='teamsavatar'/>
          </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

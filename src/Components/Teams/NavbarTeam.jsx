import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarTeam.css';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  return (
    <Navbar expand="lg" className="navbart">
      <Nav className="left-nav">
        <Button href="/Teams" className={activePage === '/Teams' ? 'but but-primary' : 'but'}>INFORMACION</Button>
        <Button href="/Urgente" className={activePage === '/Urgente' ? 'but but-primary' : 'but'}>URGENTE</Button>
        <Button href="/General" className={activePage === '/General' ? 'but but-primary' : 'but'}>GENERAL</Button>
        <Button href="/Ultimo" className={activePage === '/Ultimo' ? 'but but-primary' : 'but'}>ULTIMO</Button>
      </Nav>
    </Navbar>
  );
}

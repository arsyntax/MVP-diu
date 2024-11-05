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
        <Button href="/teaminfo" className={activePage === '/teaminfo' ? 'but but-primary' : 'but'}>INFORMACION</Button>
        <Button href="/urgente" className={activePage === '/urgente' ? 'but but-primary' : 'but'}>URGENTE</Button>
        <Button href="/general" className={activePage === '/general' ? 'but but-primary' : 'but'}>GENERAL</Button>
        <Button href="/ultimo" className={activePage === '/ultimo' ? 'but but-primary' : 'but'}>ULTIMO</Button>
      </Nav>
    </Navbar>
  );
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/Navbar.jsx';
import App from './App.jsx'; // Asegúrate de que tienes un componente App o similar

createRoot(document.getElementById('root')).render(
  <StrictMode className="mainpage">
    <div className="mainpage">
    <NavBar />

    <App /> {/* Este será tu componente principal que contiene las rutas */}
    </div>
  </StrictMode>,
);

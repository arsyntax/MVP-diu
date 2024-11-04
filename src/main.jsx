import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar.jsx';
import App from './App.jsx'; // Asegúrate de que tienes un componente App o similar

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <App /> {/* Este será tu componente principal que contiene las rutas */}
    </BrowserRouter>
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'; // Asegúrate de que tienes un componente App o similar
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="mainpage">
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </div>
  </StrictMode>,
);

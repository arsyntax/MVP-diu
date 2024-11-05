import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'; // Importa tus componentes de página

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Agrega más rutas según sea necesario */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;

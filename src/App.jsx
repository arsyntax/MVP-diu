import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'; // Importa tus componentes de página
import ScrumSurvey from './Components/ScrumSurvey/ScrumSurvey.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios/encuestas-pendientes" element={<ScrumSurvey />} />

      {/* Agrega más rutas según sea necesario */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;

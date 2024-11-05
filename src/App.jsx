import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'; // Importa tus componentes de página
import Teams from './Components/Teams/Teams.jsx';
import General from './Components/Teams/General.jsx';
import Urgente from './Components/Teams/Urgente.jsx';
import Ultimo from './Components/Teams/Ultimo.jsx';
import ScrumSurvey from './Components/ScrumSurvey/ScrumSurvey.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Teams" element={<Teams />} />
      <Route path="/General" element={<General />} />
      <Route path="/Urgente" element={<Urgente />} />
      <Route path="/Ultimo" element={<Ultimo />} />
      <Route path="/servicios/encuestas-pendientes" element={<ScrumSurvey />} />
      
      

      {/* Agrega más rutas según sea necesario */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;

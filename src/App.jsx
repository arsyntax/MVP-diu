import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'; // Importa tus componentes de página
import TeamInfo from './Components/TeamInfo/TeamInfo.jsx';
import General from './Components/TeamInfo/General.jsx';
import Urgente from './Components/TeamInfo/Urgente.jsx';
import Ultimo from './Components/TeamInfo/Ultimo.jsx';
import ScrumSurvey from './Components/ScrumSurvey/ScrumSurvey.jsx';
import Profile from "./Components/Profile/Profile.jsx"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teaminfo" element={<TeamInfo />} />
      <Route path="/general" element={<General />} />
      <Route path="/urgente" element={<Urgente />} />
      <Route path="/ultimo" element={<Ultimo />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/servicios/encuestas-pendientes" element={<ScrumSurvey />} />
      
      

      {/* Agrega más rutas según sea necesario */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;

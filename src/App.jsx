import { Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home.jsx'; // Importa tus componentes de página

import Teams from './Components/Teams/Teams.jsx';
import NavBar from './Components/Navbar/Navbar.jsx';
import { useLocation } from 'react-router-dom';
import TeamInfo from './Components/TeamInfo/TeamInfo.jsx';
import General from './Components/TeamInfo/General.jsx';
import Urgente from './Components/TeamInfo/Urgente.jsx';
import Ultimo from './Components/TeamInfo/Ultimo.jsx';
import ScrumSurvey from './Components/ScrumSurvey/ScrumSurvey.jsx';
import Profile from "./Components/Profile/Profile.jsx"


function App() {
  const location = useLocation();
  const excludedRoutes = ['/equipos'];
  //console.log(useLocation().pathname);
  
  return (
    <>
    {!(excludedRoutes.includes(location.pathname)) && <NavBar />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/equipos" element={<Teams/>}/>
      <Route path="/teaminfo" element={<TeamInfo />} />
      <Route path="/general/:id" element={<General />} />
      <Route path="/urgente/:id" element={<Urgente />} />
      <Route path="/ultimo/:id" element={<Ultimo />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/encuesta/:id" element={<ScrumSurvey />} />
      
      {/* Ruta default por si se entra a un link que no existe */}
      <Route path="*" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;

import { Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home.jsx'; // Importa tus componentes de página
import Teams from './Components/Teams/Teams.jsx';
import NavBar from './Components/Navbar/Navbar.jsx';
import { useLocation } from 'react-router-dom';
import ScrumSurvey from './Components/ScrumSurvey/ScrumSurvey.jsx';


function App() {
  const location = useLocation();
  const excludedRoutes = ['/equipos'];
  console.log(useLocation().pathname);
  
  return (
    <>
    {!(excludedRoutes.includes(location.pathname)) && <NavBar />}
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/equipos" element={<Teams/>}/>

      <Route path="/servicios/encuestas-pendientes" element={<ScrumSurvey />} />


      <Route path="*" element={<Home />} />
      {/* Agrega más rutas según sea necesario */}
    </Routes>
    </>
  );
}

export default App;

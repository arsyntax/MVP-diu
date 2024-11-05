import { Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home.jsx'; // Importa tus componentes de página
import Teams from './Components/Teams/Teams.jsx';
import NavBar from './Components/Navbar/Navbar.jsx';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const excludedRoutes = ['/teams'];
  console.log(useLocation().pathname);
  
  return (
    <>
    {!(excludedRoutes.includes(location.pathname)) && <NavBar />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<Teams/>}/>
      {/* Agrega más rutas según sea necesario */}
    </Routes>
    </>
  );
}

export default App;

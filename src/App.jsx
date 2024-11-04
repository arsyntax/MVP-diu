// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'; // Importa tus componentes de página

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Agrega más rutas según sea necesario */}
    </Routes>
  );
}

export default App;

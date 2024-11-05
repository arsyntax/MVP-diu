import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="homepage">
          <div className="home-circle"></div>
          <div className="home-rectangle"></div>
          <div className="home-info">
            <h1 className="home-maintitle">Comprometidos con el Desarrollo</h1>
            <h4 className="home-description">Ayudando en la salud del trabajo de equipo</h4>
            <Link to="/equipos">
              <button className='home-comenzar'>Comenzar</button>
            </Link>
          </div>
        </div>
      );
}
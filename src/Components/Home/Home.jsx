import './Home.css';


export default function Home() {
    return (
        <div className="homepage">
          <div className="circle"></div>
          <div className="rectangle"></div>
          <div className="info">
            <h1 className="maintitle">Comprometidos con el Desarrollo</h1>
            <h4 className="description">Ayudando en la salud del trabajo de equipo</h4>
            <button className='contacto'>Contactar</button>
          </div>
        </div>
      );
}
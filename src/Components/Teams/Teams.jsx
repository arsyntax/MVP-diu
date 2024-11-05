import "./Teams.css";
import leon from "../../assets/leon.png";
import NAV from "./NavbarTeam.jsx"

const Layout = () => {
   return (
      <div className="Page">
         <div className="Name">
            <img src={leon} className="logoteam"></img>
            <h1>KingsSoftware</h1>
         </div>
         <NAV/>
         <div className="info">
            <p>Nombre equipo: KingSoftware</p>
            <p>Encargado: Matias Ferrero</p>
            <p>Numero de participantes: 6</p>
            <p>Fecha de creacino: 10/09/2018</p>
         </div>
      </div>
   )
}

export default Layout
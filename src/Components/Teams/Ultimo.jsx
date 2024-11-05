import "./Teams.css";
import leon from "../../assets/leon.png";
import NAV from "./NavbarTeam.jsx"
import SpiderChart from "./SpiderChart.jsx";

const Layout = () => {
   return (
      <div className="Page">
         <div className="Name">
            <img src={leon} className="logoteam"></img>
            <h1>KingsSoftware</h1>
         </div>
         <NAV/>
         <div className="info">
            <p>Resultados de la ultima encuesta:</p>
            <p>Numero de participantes: 5</p>
            <p>Fecha de realizacion: 05/11/2024</p>
            <div className="graficoS">
               <SpiderChart/>
            </div>
         </div>
         
      </div>
   )
}

export default Layout
import "./Teams.css";
import leon from "../../assets/leon.png";
import NAV from "./NavbarTeam.jsx"
import LineChart from "./LineChart.jsx";

const Layout = () => {
   return (
      <div className="Page">
         <div className="Name">
            <img src={leon} className="logoteam"></img>
            <h1>KingsSoftware</h1>
         </div>
         <NAV/>
         <div className="info">
            <p>Valores del equipo a traves del tiempo</p>
            <div className="graficoL">
               <LineChart/>
            </div>
         </div>
      </div>
   )
}

export default Layout
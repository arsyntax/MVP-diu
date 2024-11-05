import "./TeamInfo.css";
import leon from "../../assets/leon.png";
import NAV from "./NavbarTeam.jsx"
import LineChart from "./LineChart.jsx";

const General = () => {
   return (
      <div className="Page">
         <div className="team-Name">
            <img src={leon} className="team-logoteam"></img>
            <h1>KingsSoftware</h1>
         </div>
         <NAV/>
         <div className="team-info">
            <p>Valores del equipo a traves del tiempo</p>
            <div className="graficoL">
               <LineChart/>
            </div>
         </div>
      </div>
   )
}

export default General;
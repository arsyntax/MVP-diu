import "./TeamInfo.css";
import leon from "../../assets/leon.png";
import NAV from "./NavbarTeam.jsx"

const TeamInfo = () => {
   return (
      <div className="Page">
         <div className="team-Name">
            <img src={leon} className="team-logoteam"></img>
            <h1>KingsSoftware</h1>
         </div>
         <NAV/>
         <div className="team-info">
            <div className="table-container">
               <table className="simple-table">
                  <tbody>
                     <tr>
                        <td className="team-categoria">Nombre equipo</td>
                        <td>:</td>
                        <td>KingSoftware</td>
                     </tr>
                     <tr>
                        <td className="team-categoria">Encargado</td>
                        <td>:</td>
                        <td>Matias Ferrero</td>
                     </tr>
                     <tr>
                        <td className="team-categoria">Numero de participantes</td>
                        <td>:</td>
                        <td>6</td>
                     </tr>
                     <tr>
                        <td className="team-categoria">Fecha de creacion</td>
                        <td>:</td>
                        <td>10/09/2018</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}

export default TeamInfo
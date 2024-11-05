import "./Profile.css";
import photo from "../../assets/user-photo.png";

const Layout = () => {
   return (
      <div className="Page">
         <div className="Name">
            <img src={photo} className="logoteam"></img>
            <h1>Mario Fuentes</h1>
         </div>
         <div className="info">
            <div className="table-container">
               <table className="simple-table">
               <tbody>
                  <tr>
                     <td className="categoria">Nombre</td>
                     <td>:</td>
                     <td>Mario Andres Fuentes Astudillo</td>
                  </tr>
                  <tr>
                     <td className="categoria">Email</td>
                     <td>:</td>
                     <td>Mario.Fuentes@usm.cl</td>
                  </tr>
                  <tr>
                     <td className="categoria">Telefono</td>
                     <td>:</td>
                     <td>+569 1234 5678</td>
                  </tr>
                  <tr>
                     <td className="categoria">Fecha ingreso</td>
                     <td>:</td>
                     <td>12/10/2019</td>
                  </tr>
                  <tr>
                     <td className="categoria">Equipos</td>
                     <td>:</td>
                     <td><a href="/Teams">KingSoftware</a> </td>
                  </tr>
               </tbody>
               </table>
            </div>
         </div>
      </div>
            
   )
}

export default Layout
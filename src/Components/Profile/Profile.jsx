import "./Profile.css";
import photo from "../../assets/user-photo.png";

const Profile = () => {
   return (
      <div className="Page">
         <div className="profile-Name">
            <img src={photo} className="profile-logoteam"></img>
            <h1>Mario Fuentes</h1>
         </div>
         <div className="profile-info">
            <div className="table-container">
               <table className="simple-table">
               <tbody>
                  <tr>
                     <td className="profile-categoria">Nombre</td>
                     <td>:</td>
                     <td>Mario Andres Fuentes Astudillo</td>
                  </tr>
                  <tr>
                     <td className="profile-categoria">Email</td>
                     <td>:</td>
                     <td>Mario.Fuentes@usm.cl</td>
                  </tr>
                  <tr>
                     <td className="profile-categoria">Telefono</td>
                     <td>:</td>
                     <td>+569 1234 5678</td>
                  </tr>
                  <tr>
                     <td className="profile-categoria">Fecha ingreso</td>
                     <td>:</td>
                     <td>12/10/2019</td>
                  </tr>
                  <tr>
                     <td className="profile-categoria">Equipos</td>
                     <td>:</td>
                     <td><a href="/teaminfo" className="profile-teamname">KingSoftware</a> </td>
                  </tr>
               </tbody>
               </table>
            </div>
         </div>
      </div>
            
   )
}

export default Profile;
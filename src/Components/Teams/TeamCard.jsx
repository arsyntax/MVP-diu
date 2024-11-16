/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function TeamCard({ equipo }) {  // Desestructuración de la propiedad equipo
    return (
        <Link to="/teaminfo">
            <div className="teamsItem">
                {equipo.id} - {equipo.nombre}  {/* Accede a las propiedades id y nombre */}
            </div>
        </Link>
    );
}

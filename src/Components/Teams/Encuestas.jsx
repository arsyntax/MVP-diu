import { Link } from "react-router-dom";
import "./Encuestas.css";

export default function Encuestas() {
    const encuestasDisponibles = [
        { titulo: "Encuesta mes Noviembre", equipo: "Kingsoftware" },
        { titulo: "Encuesta xd", equipo: "equipo2" }
    ];

    return (
        <div className="encuestasContainer">
            <div className="encuestasTitle">Encuestas pendientes</div>
            <div className="encuestasList">
                {encuestasDisponibles.length > 0 ? (
                    encuestasDisponibles.map((encuesta, index) => (
                        <div key={index} className="encuestaItem">
                            <p>{encuesta.titulo} - {encuesta.equipo}</p>
                            <div className="encuestaOptions">
                                <Link to="/encuesta">Responder</Link> |
                                <p> Recordar despues</p> |
                                <p>  No responder</p>
                                
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay encuestas pendientes</p>
                )}
            </div>
        </div>
    );
}

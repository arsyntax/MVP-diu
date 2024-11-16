import "./Encuestas.css";
import { EncuestaCard } from "./EncuestaCard";

export default function Encuestas() {
    const encuestasDisponibles = [
        { titulo: "Encuesta mes Noviembre", equipo: "Kingsoftware", respondida: false },
        { titulo: "Encuesta xd", equipo: "equipo2", respondida: false }
    ];
    return (
        <div className="encuestasContainer">
            <div className="encuestasTitle">Encuestas pendientes</div>
            <div className="encuestasList">
                {encuestasDisponibles.length > 0 ? (
                    encuestasDisponibles.map((encuesta, index) => (
                        (!encuesta.respondida ? 
                            <EncuestaCard key={index} id={index} encuesta={encuesta} />
                            : <></>
                        )
                    ))
                ) : (
                    <p>No hay encuestas pendientes</p>
                )}
            </div>
        </div>
    );
}

import "./Encuestas.css";
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

export default function Encuestas() {
    const navigate = useNavigate();
    const encuestasDisponibles = [
        { titulo: "Encuesta mes Noviembre", equipo: "Kingsoftware" },
        { titulo: "Encuesta xd", equipo: "equipo2" }
    ];

    const handleResponder = () => {
        navigate("/encuesta/responder");
    }

    const handleRecordar = () => {
        alert("Función no implementada");
    }
    const handleNoResponder = () => {
        alert("Función no implementada");
    }
    return (
        <div className="encuestasContainer">
            <div className="encuestasTitle">Encuestas pendientes</div>
            <div className="encuestasList">
                {encuestasDisponibles.length > 0 ? (
                    encuestasDisponibles.map((encuesta, index) => (
                        <div key={index} className="encuestaItem">
                            <p>{encuesta.titulo} - {encuesta.equipo}</p>
                            <div className="encuestaOptions">
                                <p onClick={handleResponder} className="encuestaOption">Responder</p> |
                                <p onClick={handleRecordar} className="encuestaOption"> Recordar despues</p> |
                                <p onClick={handleRecordar} className="encuestaOption">  No responder</p>
                                
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

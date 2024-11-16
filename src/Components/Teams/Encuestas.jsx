import "./Encuestas.css";
import { useState, useEffect } from "react";
import { EncuestaCard } from "./EncuestaCard";

export default function Encuestas() {
    const [encuestasDisponibles, setEncuestasDisponibles] = useState([]);

    // Cargar el JSON dinámicamente
    useEffect(() => {
        const fetchEncuestas = async () => {
            try {
                const response = await fetch("/data/encuestas.json");
                if (!response.ok) {
                    throw new Error("Error al cargar las encuestas");
                }
                const data = await response.json();
                setEncuestasDisponibles(data.encuestasDisponibles);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchEncuestas();
    }, []);

    return (
        <div className="encuestasContainer">
            <div className="encuestasTitle">Encuestas pendientes</div>
            <div className="encuestasList">
                {encuestasDisponibles.length > 0 ? (
                    encuestasDisponibles.map((encuesta, index) => (
                        (!encuesta.respondida ? 
                            <EncuestaCard key={index} id={index} encuesta={encuesta} />
                            : null
                        )
                    ))
                ) : (
                    <p>No hay encuestas pendientes</p>
                )}
            </div>
        </div>
    );
}

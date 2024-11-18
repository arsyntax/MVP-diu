import "./Encuestas.css";
import { useState, useEffect } from "react";
import { EncuestaCard } from "./EncuestaCard";

export default function Encuestas() {
  const [encuestasDisponibles, setEncuestasDisponibles] = useState([]);

  useEffect(() => {
    const fetchEncuestas = async () => {
      try {
        const response = await fetch("/data/encuestas.json");
        if (!response.ok) {
          throw new Error("Error al cargar las encuestas");
        }
        const data = await response.json();
        // Filtra las encuestas que no han sido respondidas
        const encuestasPendientes = data.encuestasDisponibles.filter((encuesta, index) => {
          const responded = localStorage.getItem(`encuestaRespondida-${index}`);
          console.log(encuesta,responded);
          return !responded;
        });
        setEncuestasDisponibles(encuestasPendientes);
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
            <EncuestaCard key={index} id={index} encuesta={encuesta} />
          ))
        ) : (
          <p>No hay encuestas pendientes</p>
        )}
      </div>
    </div>
  );
}

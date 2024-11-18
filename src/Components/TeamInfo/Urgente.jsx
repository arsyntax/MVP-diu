import React from 'react';
import "./TeamInfo.css";
import leon from "../../assets/leon.png";
import NAV from "./NavbarTeam.jsx";
import { useParams } from "react-router-dom";

const Layout = () => {
  const { id } = useParams();
  const lastSurvey = JSON.parse(localStorage.getItem(`scrumSurveyResponses-${id}`)) || [];

  // Filtrar solo valores numéricos válidos
  const validSurvey = lastSurvey.filter(value => typeof value === 'number' && !isNaN(value));

  // Obtener el valor mínimo
  const value = validSurvey.length > 0 ? Math.min(...validSurvey) : null;

  // Obtener el índice del valor mínimo en la encuesta
  const tipo = validSurvey.length > 0 ? validSurvey.indexOf(value) : -1;

  // Mensaje basado en el índice del valor mínimo
  const mensaje = tipo === 0 ? "Compromiso" 
    : tipo === 1 ? "Coraje" 
    : tipo === 2 ? "Enfoque" 
    : tipo === 3 ? "Apertura"
    : tipo === 4 ? "Respeto"
    : "NONE";

  return (
    <div className="Page">
      <div className="team-Name">
        <img src={leon} className="team-logoteam" alt="Logo" />
        <h1>KingsSoftware</h1>
      </div>
      <NAV />
      <div className="team-info">
        {value !== null ? (
          <div>
            <p>Los niveles de {mensaje} están muy bajos:</p>
            <b className="urgente">{value}</b>
            <p>Se recomienda tomar medidas prontamente.</p>
          </div>
        ) : (
          <p>No hay datos disponibles.</p> // Mensaje alternativo si no hay valores válidos
        )}
      </div>
    </div>
  );
};

export default Layout;

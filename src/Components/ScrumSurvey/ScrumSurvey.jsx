import React from 'react';
import './ScrumSurvey.css';
import { Button } from 'react-bootstrap';

function ScrumSurvey() {
  const scrumValues = [
    { name: "Compromiso", description: "Is the team committed to the Sprint goal and their tasks?" },
    { name: "Coraje", description: "Does the team show courage to do the right thing and work on tough problems?" },
    { name: "Enfoque", description: "Is the team focused on the Sprint goal and prioritizing tasks accordingly?" },
    { name: "Apertura", description: "Is the team open to feedback and transparent in communication?" },
    { name: "Respeto", description: "Does the team show respect for each other's skills and opinions?" }
  ];

  return (
    <div className="container">
      <header className="header">
        <h2>Encuesta Mes Noviembre - Kingsoftware</h2>
      </header>

      {/* Instrucciones */}
      <div className="instructions">
        <p>Por favor, califique cada valor Scrum de acuerdo a la siguiente escala:</p>
        <p>“1” significa “El valor Scrum no se practica en absoluto” y “5” significa “el equipo Scrum es perfecto en [valor Scrum].”</p>
      </div>

      {/* Contenedor de preguntas */}
      <div className="survey-container">
        <div className="question-list">
          <div className="question-header">
            <span>Valor Scrum</span>
            {[1, 2, 3, 4, 5].map((level) => (
              <span key={level}>Nivel {level}</span>
            ))}
          </div>

          {/* Preguntas dinámicas basadas en scrumValues */}
          {scrumValues.map((value, i) => (
            <div key={i} className="question-row">
              <span>{value.name}</span>
              {[1, 2, 3, 4, 5].map((option) => (
                <div key={option} className="radio-container">
                  <input
                    type="radio"
                    name={`scrumValue${i}`}
                    value={option}
                    className="radio-input"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer de la encuesta con botones de Bootstrap */}
      <footer className="footer">
        <Button variant="danger" className="me-2">Salir</Button>
        <Button variant="info" className="me-2">Guardar y salir</Button>
        <Button variant="success">Enviar</Button>
      </footer>
    </div>
  );
}

export default ScrumSurvey;

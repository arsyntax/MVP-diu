import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { useParams } from "react-router-dom";
Chart.register(...registerables); // Registra todos los componentes de Chart.js

const SpiderChart = () => {
  const { id } = useParams();
  const lastSurvey = JSON.parse(localStorage.getItem(`scrumSurveyResponses-0`)) || {};
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const data = {
      labels: ['Compromiso', 'Coraje', 'Enfoque', 'Apertura', 'Respeto'],
      datasets: [
        {
          label: 'Agosto',
          data: lastSurvey,
          backgroundColor: 'rgba(207, 206, 255, 0.6)',
          borderColor: 'rgba(0, 0, 0, 0.3)',
          borderWidth: 1,
          fill: true,
        },
      ],
    };

    const options = {
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: {
            display: true,
          },
          angleLines: {
            display: true,
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.4)',
          },
        },
      },
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };

    const myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: options,
    });

    return () => {
      myRadarChart.destroy(); // Limpia el gráfico cuando se desmonta el componente
    };
  }, []);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

export default SpiderChart;

import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Registra todos los componentes de Chart.js

const SpiderChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const data = {
      labels: ['Compromiso', 'Coraje', 'Enfoque', 'Apertura', 'Respeto'],
      datasets: [
        {
          label: '',
          data: [19, 28, 27, 43, 39],
          backgroundColor: 'rgba(207, 206, 255, 1)',
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
          max: 50,
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

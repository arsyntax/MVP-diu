import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Registra todos los componentes de Chart.js

const LineChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const data = {
      labels: ['Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'], // Etiquetas de tiempo
      datasets: [
        {
          label: 'Compromiso',
          data: [60, 50, 67, 52, 39], // Datos de compromiso
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Coraje',
          data: [70, 62, 53, 44, 56], // Datos de coraje
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Enfoque',
          data: [51, 60, 46, 50, 55], // Datos de enfoque
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Apertura',
          data: [60, 68, 72, 79, 85], // Datos de apertura
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Respeto',
          data: [70, 59, 67, 72, 78], // Datos de respeto
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          fill: false,
          tension: 0.1,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Niveles de Compromiso a Través del Tiempo',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Meses',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Niveles (%)',
          },
          min: 0,
          max: 100,
        },
      },
    };

    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });

    // Cleanup chart on component unmount
    return () => {
      myLineChart.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} width={600} height={400} />;
};

export default LineChart;

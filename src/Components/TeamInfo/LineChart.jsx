import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { useParams } from "react-router-dom";
Chart.register(...registerables);

const LineChart = () => {
  const canvasRef = useRef(null);
  const { id } = useParams();
  const store = JSON.parse(localStorage.getItem(`scrumSurveyResponses-${id}`)) || {};

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const data = {
      labels: ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
      datasets: [
        {
          label: 'Compromiso',
          data: [1, 2, 3, 3, store[0] || 0],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Coraje',
          data: [0, 3, 4, 2, store[1] || 0],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Enfoque',
          data: [4, 2, 1, 0, store[2] || 0],
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Apertura',
          data: [1, 1, 0, 3, store[3] || 0],
          borderColor: 'rgba(82, 183, 44, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Respeto',
          data: [1, 2, 3, 1, store[4] || 0],
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
            text: 'Niveles',
          },
          min: 0,
          max: 5,
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

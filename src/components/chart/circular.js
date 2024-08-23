import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const CircularProgress = ({ value, label, color }) => {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, '#563999'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: () => `${value}%`,
        },
      },
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    cutout: '80%', // Adjust cutout size to create the ring effect
  };

  return (
    <div className="relative w-48 h-48 m-2">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-2xl font-semibold ${color}`}>{value}%</span>
        <div className="text-sm">{label}</div>
      </div>
    </div>
  );
};

export default CircularProgress;

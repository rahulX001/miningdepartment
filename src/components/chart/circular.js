// src/components/EquipmentChart.js

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const EquipmentChart = () => {
  // Data for the chart
  const data = {
    labels: [
      'Equipment Availability (92%)',
      'Downtime Reduction (8%)',
      'Maintenance Schedule Compliance (89%)',
      'Recent Alerts (1 Drill due for maintenance in 2 days)',
    ],
    datasets: [
      {
        label: 'Metrics',
        data: [92, 8, 89, 1],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`,
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <div className="w-full max-w-md">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default EquipmentChart;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['Series A', 'Other'],
    datasets: [
      {
        data: [67, 33],
        backgroundColor: ['#ff9999', '#66b3ff'],
        hoverBackgroundColor: ['#ff6666', '#3399ff'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '70%',
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className=''>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;

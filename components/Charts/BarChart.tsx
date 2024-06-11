import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {}

const BarChart: React.FC<BarChartProps> = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Series A',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#ff9999',
        barThickness: 'flex' as const, // Adjust bar width here
      },
      {
        label: 'Series B',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: '#66b3ff',
        barThickness: 'flex' as const, // Adjust bar width here
      },
      {
        label: 'Series C',
        data: [35, 41, 54, 60, 72, 65, 58],
        backgroundColor: '#99ff99',
        barThickness: 'flex' as const, // Adjust bar width here
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Emails Sent',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} className='w-full h-full' />;
};

export default BarChart;

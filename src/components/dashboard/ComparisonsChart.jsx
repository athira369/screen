import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register all necessary Chart.js components
Chart.register(...registerables);

const ComparisonChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for this week and last week performance
    const thisWeekData = [0, 30, 75, 27, 0, 15, 27, 26, 5, 26, 55, 50];
    const lastWeekData = [25, 28, 26, 15, 18, 38, 50, 28, 15, 55, 75, 50];

    // Labels for the X-axis (Months)
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Create the chart when the component mounts
    const ctx = chartRef.current.getContext('2d');
    const performanceChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: 'This Week',
            data: thisWeekData,
            borderColor: 'rgba(210, 105, 30, 0.7)', // Light brown color
            backgroundColor: 'rgba(210, 105, 30, 0.2)', // Light brown shadow
            fill: true,
            tension: 0.4, // For a sine-like curve effect
            borderWidth: 2,
            pointRadius: 3,
          },
          {
            label: 'Last Week',
            data: lastWeekData,
            borderColor: 'rgba(255, 223, 186, 0.7)', // Light yellow color
            backgroundColor: 'rgba(255, 223, 186, 0.2)', // Light yellow shadow
            fill: true,
            tension: 0.4, // For a sine-like curve effect
            borderWidth: 2,
            pointRadius: 3,
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          x: {
            grid: {
              display: true,
              color: 'rgba(200, 200, 200, 0.3)', // Light gray vertical lines
            },
            title: {
              display: true,
              text: 'Months',
              color: '#333',
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(200, 200, 200, 0.3)', // Light gray horizontal lines
            },
            title: {
              display: true,
              text: 'Performance',
              color: '#333',
            },
          },
        },
      }
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => performanceChart.destroy();
  }, []);

  return (
    <div className="wrapper">
      <canvas id="performanceChart" ref={chartRef}></canvas>
    </div>
  );
};

export default ComparisonChart;

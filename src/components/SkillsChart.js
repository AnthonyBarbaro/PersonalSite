import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

function SkillsChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'HTML'],
        datasets: [
          {
            label: 'Skill Level',
            data: [85, 70, 75, 90, 85, 85],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        scale: {
          ticks: { beginAtZero: true },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef}></canvas>;
}

export default SkillsChart;

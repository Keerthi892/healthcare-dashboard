import React from 'react';
import Chart from 'react-apexcharts';
import './DonutChart.css';

const DonutChart = () => {
  const chartOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Vitals Normal', 'Checkups Done', 'Pending Follow-ups'],
    colors: ['#10b981', '#3b82f6', '#f59e0b'],
    legend: {
      position: 'bottom',
    },
    dataLabels: {
      enabled: true,
    },
  };

  const chartSeries = [45, 35, 20]; 

  return (
    <div className="donut-chart-container">
      <h3>Health Summary</h3>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width="100%"
      />
    </div>
  );
};

export default DonutChart;

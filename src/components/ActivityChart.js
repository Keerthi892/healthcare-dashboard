import React from 'react';
import Chart from 'react-apexcharts';
import './ActivityChart.css';

const ActivityChart = () => {
  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
        distributed: true,
        borderRadius: 6,
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Mon', '', '',
        'Tue', '', '',
        'Wed', '', '',
        'Thu', '', '',
        'Fri', '', '',
        'Sat', '', '',
        'Sun', '', ''
      ],
      labels: {
        style: {
          fontSize: '10px',
          colors: [
            '#000', '', '',
            '#000', '', '',
            '#000', '', '',
            '#000', '', '',
            '#000', '', '',
            '#000', '', '',
            '#000', '', ''
          ],
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: [
      '#d1d5db', '#3b82f6', '#06b6d4',
      '#d1d5db', '#3b82f6', '#06b6d4',
      '#d1d5db', '#3b82f6', '#06b6d4',
      '#d1d5db', '#3b82f6', '#06b6d4',
      '#d1d5db', '#3b82f6', '#06b6d4',
      '#d1d5db', '#3b82f6', '#06b6d4',
      '#d1d5db', '#3b82f6', '#06b6d4',
    ],
  };

  const series = [
    {
      name: 'Activity',
      data: [
        70, 45, 65,  
        68, 42, 60,  
        62, 47, 67,  
        66, 41, 58,  
        85, 70, 80,  
        60, 52, 54,  
        72, 50, 66   
      ],
    },
  ];

  return (
    <div className="activity-chart">
      <div className="header">
        <h3>Activity</h3>
        <span>3 appointments this week</span>
      </div>
      <Chart options={options} series={series} type="bar" height={190} />
    </div>
  );
};

export default ActivityChart;

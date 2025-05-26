import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PatientBarChart = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    colors: ['#008FFB'],
    title: {
      text: 'Monthly Patient Visits',
      align: 'left',
      style: {
        fontSize: '18px',
        color: '#333'
      }
    }
  };

  const chartSeries = [
    {
      name: 'Patients',
      data: [300, 450, 200, 278, 389, 500]
    }
  ];

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default PatientBarChart;

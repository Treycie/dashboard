import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as chartjs, ArcElement, Tooltip, Legend } from 'chart.js';

chartjs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  
  const data1 = {
    labels: ['Red', 'Remaining'],
    datasets: [
      {
        data: [82, 18],
        backgroundColor: ['#FF6384', '#DDDDDD'],
      },
    ],
  };

  
  const data2 = {
    labels: ['Blue', 'Remaining'],
    datasets: [
      {
        data: [22, 78],
        backgroundColor: ['#36A2EB', '#DDDDDD'],
      },
    ],
  };

  
  const data3 = {
    labels: ['Green', 'Remaining'],
    datasets: [
      {
        data: [62, 38],
        backgroundColor: ['#4CAF50', '#DDDDDD'],
      },
    ],
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ width: '300px' }}>
        <Doughnut data={data1} />
      </div>

      
      <div style={{ width: '300px' }}>
        <Doughnut data={data2} />
      </div>

      
      <div style={{ width: '300px' }}>
        <Doughnut data={data3} />
      </div>
    </div>
  );
};

export default DoughnutChart;







// import React from 'react'
// import { Doughnut } from 'react-chartjs-2';
// import{
//     Chart as ChartJs,
//     ArcElement,
//     Tooltip,
//     Legend
// } from 'chart.js';
// ChartJs.register(
// ArcElement,
// Tooltip,
// Legend
// );


// const DoughnutChart = () => {
//   return (
//     <div></div>
//   )
// }

// export default DoughnutChart
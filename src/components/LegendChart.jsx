import React from 'react';
import { Line } from 'react-chartjs-2';

const LegendChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2020',
        data: [10000, 12000, 11000, 15000, 14000, 16000, 18000, 19000, 20000, 22000, 21000, 23000],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: false,
        tension: 0.6
      },
      {
        label: '2021',
        data: [14000, 16000, 15000, 18000, 17000, 19000, 20000, 22000, 21000, 23000, 24000, 22000],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
        tension: 0.6
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          callback: function(value, index, values) {
            return '$' + value / 1000 + 'k';
          }
        }
      }]
    }
  };

  return (
    <div>
      <h2>Total Revenue for 2020 and 2021</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LegendChart;




















// import React from 'react'
// import { Line } from 'react-chartjs-2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';

//   const LegendChart = () => {
    
//     const data = {
//       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
//       datasets: [
//         {
//           label: '2020',
//           data: [10000, 12000, 11000, 15000, 14000, 16000],
//           backgroundColor:[
//             'rgba(225, 26, 104, 0.2) '
//           ],
//           fill: false,
//           borderColor: 'rgb(75, 192, 192)',
//           tension: 0.1
//         },
//         {
//           label: '2021',
//           data: [14000, 16000, 15000, 18000, 17000, 19000],
//           fill: false,
//           borderColor: 'rgb(255, 99, 132)',
//           tension: 0.1
//         }
//       ]
//     };
  
    
//     const options = {
//       plugins: {
//         legend: {
//           display: false
//         }
//       }
//     };
  
    
//     const legendOptions = {
//       display: true,
//       position: 'top',
//       align: 'start',
//       labels: {
//         generateLabels: function (chart) {
//           const datasets = chart.data.datasets;
//           const legendLabels = datasets.map((dataset, index) => {
//             const label = dataset.label;
//             const color = dataset.borderColor;
  
//             return {
//               text: label,
//               fillStyle: color,
//               strokeStyle: color,
//               lineWidth: 2,
//               pointStyle: 'circle',
//               pointRadius: 5,
//               pointBorderColor: color,
//               pointBackgroundColor: '#fff',
//               pointHoverRadius: 6,
//               pointHoverBorderColor: color,
//               pointHoverBackgroundColor: color,
//               hidden: chart.getDatasetMeta(index).hidden
//             };
//           });
  
//           return legendLabels;
//         }
//       }
//     };
  
  
  
  
//   return (
//     <div>
//       <h2>Total Revenue for 2020 and 2021</h2>
//       <Line data={data} options={options} plugins={legendOptions} />
//     </div>
//   )
// }

// export default LegendChart
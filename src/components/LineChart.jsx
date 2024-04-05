import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as chartjs, LineElement, CategoryScale, LinearScale, PointElement, Title } from 'chart.js';

chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title
);

const LineChart = () => {
  const data = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      data: [8, 7.8, 6, 8, 7, 5, 6],
      backgroundColor: 'transparent',
      borderColor: 'rgba(54, 162, 235, 1)', 
      borderWidth: 3,
      tension: 0.4 
    }]
  };

  const options = {
    plugins: {
      legend: false,
      title: {
        display: true,
        text: 'Weekly Data',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'black', 
          font: {
            weight: 'bold' 
          }
        }
      },
      y: {
        display: false, 
        min: 2,
        max: 10
      }
    },
    elements: {
      line: {
        borderWidth: 3, 
        borderColor: 'rgba(54, 162, 235, 1)', 
        shadowColor: 'rgba(54, 162, 235, 0.5)', 
        shadowBlur: 20,
        tension: 0.4 
      }
    }
  };

  return (
    <div style={{ width: '500px', height: '500px', marginLeft: '20px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;






// import React from 'react'
// import {Line} from "react-chartjs-2";
// import{Chart as chartjs, LineElement, CategoryScale, LinearScale, PointElement} from "chart.js"
  

//   chartjs.register(
//     LineElement,
//     CategoryScale,
//     LinearScale,
//     PointElement
//   )
//   const LineChart = () => {
//     const data ={
//         labels:["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//         datasets:[{
//           data:[8, 7.8, 6, 8 ,7, 5, 6],
//           backgroundColor:'transparent',
//           borderColor:'#f26c6d',
//           pointBorderColor:'transparent',
//           pointBorderWidth: 4
//         }]
//       };
//       const options ={
//         plugins:{
//           legend:false
//         },
//         scales:{
//           x:{
//             grid:{
//               display:false
//             }
//           },
//           y:{
//             min:2,
//             max: 10,
//             ticks:{
//               stepSixe: 2,
//               callback: (value) => value + "K"
//             },
//             grid:{
    
//             }
//           }
//         }
//       };
//       return (
//         <div style={{width:'500px',height:'5oopx',marginLeft:'20px'}}>
//          <Line data={data} options={options}></Line>
//         </div>
//       );
//     }
    
// export default LineChart
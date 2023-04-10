import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,  Title, Tooltip, Legend} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)



const Chart = ({chartData=[], currency, days}) => {


    const currencySymbol = currency === 'usd' ? '$': currency === 'inr' ? '₹' : currency === 'pkr' ? 'Re' : '€';

    const prices = []
    const dates = [];

    for (let i = 0; i < chartData?.length; i++) {
        if(days === '24h') dates.push(new Date(chartData[i][0]).toLocaleTimeString())
       else dates.push(new Date(chartData[i][0]).toLocaleDateString())
        prices.push(chartData[i][1])
    }
    const data = {
        labels:dates,
        datasets : [{
            label : `price in ${currencySymbol}`,
            data : prices,
            borderColor : 'rgba(255, 99, 132)', 
            backgroundColor : 'rgba(255, 99, 132, 0.5)',
        }]
    }
    

  return (
    <Line  
    
    options={{
        responsive:true
    }}

    data={
        data
    }



    />
  )
}

export default Chart
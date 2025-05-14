'use client'

import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface YieldChartProps {
  historicalData: { [key: number]: number }
  forecastData: { [key: number]: number } | null
}

const YieldChart: React.FC<YieldChartProps> = ({ historicalData, forecastData  }) => {
  const years = Object.keys(historicalData).map(Number)
  const yields = Object.values(historicalData)

  let forecastYears: number[] = []
  let forecastYields: number[] = []

  if (forecastData) {
    forecastYears = Object.keys(forecastData).map(Number)
    forecastYields = Object.values(forecastData)
  }
  
  const allYears = [...new Set([...years, ...forecastYears])].sort((a, b) => a - b)

  const chartData = {
    labels: allYears,
    datasets: [
      {
        label: 'Yield (Tons)',
        data: years.map(year => ({ x: year, y: historicalData[year] })),
        fill: false,
        backgroundColor: 'rgb(20, 20, 192)',
        borderColor: 'rgba(20, 20, 192, 0.8)',
      },
      {
        label: 'Forecast Yield',
        data: forecastYears.map(year => ({ x: year, y: forecastData?.[year] })),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.8)',
        pointRadius: (context) => context.dataIndex === 0 ? 0 : 3,
      }
    ],
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Yield Data',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Yield (Tons)',
        },
      },
    },
  }

  return <Line data={chartData} options={options} />
}

export default YieldChart


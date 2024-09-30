'use client'

import { useCallback, useEffect, useState } from 'react';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    Line,
    LineChart,
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis
} from 'recharts';

// Updated interface for the data
interface DataPoint {
  month: string;
  softwareSales: number;
  hardwareSales: number;
  serviceSales: number;
  digitalSales: number;
}

// Updated mock data representing sales across different categories
const mockData: DataPoint[] = [
  { month: 'Jan', softwareSales: 4000, hardwareSales: 2400, serviceSales: 2400, digitalSales: 3200 },
  { month: 'Feb', softwareSales: 3000, hardwareSales: 1398, serviceSales: 2210, digitalSales: 2800 },
  { month: 'Mar', softwareSales: 2000, hardwareSales: 9800, serviceSales: 2290, digitalSales: 3500 },
  { month: 'Apr', softwareSales: 2780, hardwareSales: 3908, serviceSales: 2000, digitalSales: 3100 },
  { month: 'May', softwareSales: 1890, hardwareSales: 4800, serviceSales: 2181, digitalSales: 2900 },
  { month: 'Jun', softwareSales: 2390, hardwareSales: 3800, serviceSales: 2500, digitalSales: 3300 },
  { month: 'Jul', softwareSales: 3490, hardwareSales: 4300, serviceSales: 2100, digitalSales: 3700 },
  { month: 'Aug', softwareSales: 4000, hardwareSales: 5200, serviceSales: 2700, digitalSales: 4000 },
  { month: 'Sep', softwareSales: 3500, hardwareSales: 4800, serviceSales: 2400, digitalSales: 3800 },
  { month: 'Oct', softwareSales: 2800, hardwareSales: 4100, serviceSales: 2300, digitalSales: 3400 },
  { month: 'Nov', softwareSales: 3200, hardwareSales: 4600, serviceSales: 2600, digitalSales: 3600 },
  { month: 'Dec', softwareSales: 3800, hardwareSales: 5000, serviceSales: 2800, digitalSales: 4200 },
]

const chartTypes = ['area', 'radar','stackedBar', 'line', 'bar'] as const
type ChartType = typeof chartTypes[number]

// Function to generate HSL color with a given hue
const generateHslColor = (hue: number): string => `hsl(${hue}, 35%, 74%)`;

// Base hue
const baseHue = 170;

// Generate color scheme using a gradient
const colorScheme: Record<keyof Omit<DataPoint, 'month'>, string> = {
  softwareSales: generateHslColor(baseHue),
  hardwareSales: generateHslColor(baseHue + 30),
  serviceSales: generateHslColor(baseHue + 60),
  digitalSales: generateHslColor(baseHue + 90),
}

export const MainPaneVisual: React.FC = () => {
  const [chartType, setChartType] = useState<ChartType>(chartTypes[0])

  const cycleChartType = useCallback(() => {
    const currentIndex = chartTypes.indexOf(chartType)
    const nextIndex = (currentIndex + 1) % chartTypes.length
    setChartType(chartTypes[nextIndex])
  }, [chartType])

  useEffect(() => {
    const intervalId = setInterval(cycleChartType, 5000)
    return () => clearInterval(intervalId)
  }, [cycleChartType])

  const formatYAxis = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-gray-800 p-4 rounded shadow-lg border border-gray-700">
          <p className="label text-gray-200 font-bold">{`${label}`}</p>
          {payload.map((entry, index) => {
            const formattedName = entry.name
              ? entry.name.replace(/([A-Z])/g, ' $1').trim().replace(/^./, str => str.toUpperCase())
              : '';
            const formattedValue = entry.value
              ? `$${Number(entry.value).toLocaleString()}`
              : 'N/A';
            return (
              <p key={`item-${index}`} style={{ color: entry.color }}>
                {`${formattedName}: ${formattedValue}`}
              </p>
            );
          })}
        </div>
      );
    }
    return null;
  }

  const renderChart = () => {
    const commonProps = {
      data: mockData,
      margin: { top: 10, right: 30, left: 30, bottom: 0 },
    }

    switch (chartType) {
      case 'area':
        return (
          <AreaChart {...commonProps}>
            <defs>
              {Object.entries(colorScheme).map(([key, color]) => (
                <linearGradient key={key} id={`color${key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={color} stopOpacity={0}/>
                </linearGradient>
              ))}
            </defs>
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" tickFormatter={formatYAxis} />
            <Tooltip content={<CustomTooltip />} />
            {Object.entries(colorScheme).map(([key, color]) => (
              <Area key={key} type="monotone" dataKey={key} stroke={color} fillOpacity={1} fill={`url(#color${key})`} />
            ))}
          </AreaChart>
        )
      case 'radar':
        return (
          <RadarChart outerRadius={150} width={500} height={500} data={mockData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="month" stroke="#888" />
            <Tooltip content={<CustomTooltip />} />
            {Object.entries(colorScheme).map(([key, color]) => (
              <Radar key={key} name={key.replace(/([A-Z])/g, ' $1').trim()} dataKey={key} stroke={color} fill={color} fillOpacity={0.6} />
            ))}
          </RadarChart>
        )
      case 'stackedBar':
        return (
          <BarChart {...commonProps}>
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" tickFormatter={formatYAxis} />
            <Tooltip content={<CustomTooltip />} />
            {Object.entries(colorScheme).map(([key, color]) => (
              <Bar key={key} dataKey={key} fill={color} stackId="a" />
            ))}
          </BarChart>
        )
      case 'line':
        return (
          <LineChart {...commonProps}>
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" tickFormatter={formatYAxis} />
            <Tooltip content={<CustomTooltip />} />
            {Object.entries(colorScheme).map(([key, color]) => (
              <Line key={key} type="monotone" dataKey={key} stroke={color} strokeWidth={2} dot={false} />
            ))}
          </LineChart>
        )
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" tickFormatter={formatYAxis} />
            <Tooltip content={<CustomTooltip />} />
            {Object.entries(colorScheme).map(([key, color]) => (
              <Bar key={key} dataKey={key} fill={color} />
            ))}
          </BarChart>
        )
      default:
        return null
    }
  }

  return (
    <ResponsiveContainer width="100%" height={400} >
      {renderChart() || <div>No chart data available</div>}
    </ResponsiveContainer>
  )
}
import React from "react"
import {
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts"
import {data} from './LanguageData'

export default function Language() {
  return (
    <>
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={data}
      >
        <PolarGrid 
          gridType="polygon"
        />
        <PolarAngleAxis 
          dataKey="subject"
          stroke="#FFFFFF"
        />
        <PolarRadiusAxis 
          domain={[0, 100]}
        />
        <Radar
          dataKey="A"
          stroke="#6AD1ED"
          fill="#6AD1ED"
          fillOpacity={0.6}
        />
      </RadarChart>
    </>
  );
}

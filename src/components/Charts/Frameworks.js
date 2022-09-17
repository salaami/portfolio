
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Brush, LabelList } from 'recharts';
import { data } from './FrameworksData'

export default function Frameworks() {
    return (
        <div>Data Technologies
            <BarChart
            width={500}
            height={300}
            layout="vertical"
            data={data}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                type="number" 
                hide
            />
            <YAxis 
                type="category" 
                dataKey="name"
                stroke="#FFFFFF"
            />
            <Bar 
                dataKey="value" 
                fill="#6AD1ED" 
                background={{ fill: '#B1B5CC' }}
            >
                <LabelList 
                    dataKey="value"
                    position="insideRight" 
                    stroke="#FFFFFF"
                />
            </Bar>
        </BarChart>
      </div>
          );
};


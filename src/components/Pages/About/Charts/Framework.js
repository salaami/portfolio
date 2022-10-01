import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';
import { data } from './FrameworkData'

export default function Framework() {
    return (
        <>
            <BarChart
            width={500}
            height={200}
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
      </>
          );
};


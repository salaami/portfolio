
import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import { data } from './TongueData'

export default function Frameworks() {
    return (
        <div> Linguistic Skills
            <RadialBarChart
                width={500}
                height={300}
                innerRadius="20%"
                outerRadius="90%"
                startAngle={180}
                endAngle={0}
                data={data}
            >
            <RadialBar
                minAngle={15}
                label={{ 
                    fill: '#2A2A2A',
                    position: 'insideStart'
                }}
                background clockWise={true}
                dataKey='value'
            />
            <Legend
                inconSize={10}
                width={120}
                height={140}
                layout='vertical'
                verticalAlign='middle'
                align='right'
            />
        </RadialBarChart>
      </div>
          );
};


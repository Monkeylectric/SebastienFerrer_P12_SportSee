import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
// import './ScoreRadialBarChart.css';

function ScoreRadialBarChart(props) {
    const score = props.data;

    const radialData = [
        {
            fill: "#FF0000",
            todayScore: (score * 100)
        },
        {
            fill: "#FBFBFB",
            todayScore: 100
        },
        
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" data={radialData} startAngle={90} endAngle={450} innerRadius="100%" width={"100%"} height={"100%"}>
                <RadialBar clockWise dataKey="todayScore" />
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default ScoreRadialBarChart;
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
// import './PerformanceRadarChart.css';

function PerformanceRadarChart(props) {
    const performance = props.data;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey={(data) => performance.kind[data.kind]} />
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default PerformanceRadarChart;
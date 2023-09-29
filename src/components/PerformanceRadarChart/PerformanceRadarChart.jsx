import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function PerformanceRadarChart(props) {
    const performance = props.data;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={performance}>
                <PolarGrid radialLines={false} stroke="#FFF" strokeWidth={2} />
                <PolarAngleAxis dataKey={(data) => data.name} stroke='#FFF' />
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default PerformanceRadarChart;
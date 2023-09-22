import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import './WeightBarChart.css';

function WeightBarChart(props) {
    const CustomTooltip = ({ active, payload, label }) => {
        const customTooltipStyle = {
            background: "#E60000",
            color: "#FFF",
            padding: "4px 12px",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "20px",
            borderRadius: "5px"
        }
    
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={customTooltipStyle}>
                    <p className="label">{`${payload[0].value}${payload[0].unit}`}</p>
                    <p className="label">{`${payload[1].value}${payload[1].unit}`}</p>
                </div>
            );
        }
      
        return null;
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={600} height={400} data={props.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis axisLine={false} dataKey="day"></XAxis>
                <YAxis axisLine={false} orientation="right" />
                <Tooltip 
                    content={<CustomTooltip />}
                />
                <Legend 
                    verticalAlign="top" 
                    align="right" 
                    iconType="circle" 
                    height={54} 
                    iconSize={8} 
                />
                <Bar 
                    dataKey="kilogram" 
                    name="Poids (kg)" 
                    unit="kg" 
                    fill="#282D30" 
                    barSize={7} 
                    radius={[3, 3, 0, 0]}
                />
                <Bar 
                    dataKey="calories" 
                    name="Calories brûlées (kCal)" 
                    unit="kCal" 
                    fill="#E60000" 
                    barSize={7} 
                    radius={[3, 3, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default WeightBarChart;
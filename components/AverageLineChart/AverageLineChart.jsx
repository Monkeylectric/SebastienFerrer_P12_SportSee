import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import './AverageLineChart.css';

function AverageLineChart(props) {
    const average = props.data;
    const letterDays = ["L", "M", "M", "J", "V", "S", "D"];

    const CustomTooltip = ({ active, payload, label }) => {
        const customTooltipStyle = {
            background: "#FFF",
            color: "#000",
            padding: "4px 12px",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "20px",
            borderRadius: "5px"
        }
    
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={customTooltipStyle}>
                    <p className="label">{`${payload[0].value} min`}</p>
                </div>
            );
        }
      
        return null;
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={average}
                margin={{
                    top: 40,
                    right: 10,
                    bottom: 10,
                    left: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={(data) => letterDays[data.day - 1]} stroke="#FFF" />
                <Tooltip 
                    content={<CustomTooltip />}
                />
                <Line type="monotone" dataKey="sessionLength" stroke="#FFF" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default AverageLineChart;
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';

function AverageLineChart(props) {
    const average = props.data;

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

    const CustomizedCursor = ({ points }) => {
		return <Rectangle fill="black" opacity={0.4} x={points[1].x} width={500} height={500} />;
	}

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
                <XAxis axisLine={false} dataKey="day" stroke="#FFF" />
                <YAxis hide={true} dataKey="sessionLength" padding={{top : 60, bottom : 30}} />
                <Tooltip 
                    content={<CustomTooltip />}
                    cursor={<CustomizedCursor />}
                />
                <Line type="natural" dataKey="sessionLength" stroke="#FFF" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default AverageLineChart;

import React from "react";
import {  LineChart, Line, XAxis, YAxis ,Tooltip, CartesianGrid } from "recharts";
const pdata = [
  {
    name: "Monday",
    ActivityRank: 13,
    Activity: 89
  },
  {
    name: "Tuesday",
    ActivityRank: 18,
    Activity: 33
  },
  {
    name: "Wednesday",
    ActivityRank: 88,
    Activity: 78
  },
  {
    name: "Thrusday",
    ActivityRank: 12,
    Activity: 10
  },
  {
    name: "Friday",
    ActivityRank: 4,
    Activity: 34
  },
  {
    name: "Sunday",
    ActivityRank: 4,
    Activity: 34
  },
  {
    name: "Sunday",
    ActivityRank: 4,
    Activity: 34
  },
];

export default function LineCharts() {
  return (
    <div>
     
        <LineChart className="line_chart" data={pdata} width={1800} height={550} margin={{ top: 8, right: 5, bottom: 5, left: 5 }}>
            <XAxis dataKey="name" interval={'preserveStartEnd'}/>
          <Line type="monotone" dataKey="Activity" fill="#FFAC00" stroke="#FFAC00" activeDot={{r: 20}} />
          <CartesianGrid stroke="#ccc" />
          <YAxis dataKey="ActivityRank" />
          <Tooltip contentStyle={{border:'1px solid #FFAC00', borderRadius:'5px'}} />
         
        </LineChart>
    
    </div>
  );
}

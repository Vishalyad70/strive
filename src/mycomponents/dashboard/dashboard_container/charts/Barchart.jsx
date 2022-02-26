import React from "react";
import { BarChart, Bar , XAxis, YAxis ,Tooltip } from "recharts";

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

export default function Barchart() {
  return (
    <div>
      <BarChart width={700} height={400} data={pdata}>
      <XAxis dataKey="name" />
      <YAxis dataKey="Activity" />
      <Bar dataKey="ActivityRank" fill="#FFA500" />
      <Tooltip  cursor={{ backgroundColor:'transparent'}}   contentStyle={{ border: "1px solid #FFAC00", borderRadius: "5px" }} />
      </BarChart>
    
     
       
    
    </div>
  );
}

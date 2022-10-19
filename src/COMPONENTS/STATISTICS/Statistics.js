import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const datas = useLoaderData();
  const barChartData = [];
  // eslint-disable-next-line array-callback-return
  datas.data.map((item) => {
    if (item.id && item.total) {
      barChartData.push({ name: item.name, total: item.total });
    }
  });
  console.log(barChartData);

  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     total: 10,
  //   },

  // ];
  return (
    <div className="container">
      <div className="StatisticsHeader">
        <h2>Quiz Statistics Overview</h2>
        <p>
          The overview of subject that is show in the XAxis with total number of
          question available in each topic
        </p>
      </div>
      <div className="barChart">
        <BarChart
          width={350}
          height={300}
          data={barChartData}
          margin={{
            top: 5,
            right: 30,
            left: -30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />
          <Legend />
          <Bar dataKey="name" fill="#fb2576" />
          <Bar dataKey="total" fill="#3F0071" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;

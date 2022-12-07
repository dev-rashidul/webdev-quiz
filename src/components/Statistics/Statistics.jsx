import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { QuizCategoryContext } from "../../layout/Main";
import './Statistics.css';

const Statistics = () => {
  const quizeData = useContext(QuizCategoryContext);

  const statisticsData = quizeData.data;

  return (
    <div className="text-center py-24 container mx-auto">
      <h2 className="text-2xl md:text-3xl text-cyan-400 text-center font-semibold">Statistics</h2>
      <div className="chart pt-10" style={{ width: '60%', height: 500, margin: 'auto' }}>
        <ResponsiveContainer>
          <BarChart width={700} height={350} data={statisticsData}>
            <XAxis dataKey="name" stroke="#55D8EC" />
            <YAxis/>
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="total" fill="#55D8EC" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;

'use client';
import { format } from "path";
import { useState } from "react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// Import necessary modules and types


// Define the data type
interface ExchangeRateData {
  date: string;
  rate: number;
}

// Mock data for USD/JPY exchange rates
const mockData: ExchangeRateData[] = [
  { date: "2024-09-20", rate: 147.65 },
  { date: "2024-09-21", rate: 147.90 },
  { date: "2024-09-22", rate: 148.15 },
  { date: "2024-09-23", rate: 148.05 },
  { date: "2024-09-24", rate: 148.30 },
  { date: "2024-09-25", rate: 148.45 },
  { date: "2024-09-26", rate: 148.55 },
];

const FormatData = (data:ExchangeRateData[]) => {
    const formattedData = data.map((item) => {
        const date = new Date(item.date);
        // yyyy/mm/ddの形式に変換する
        const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        return {
            date: formattedDate,
            rate: item.rate,
        };
    })
    return formattedData;
}

const FormatMockData = FormatData(mockData);

// Create the ExchangeRateChart component
const ExchangeRateChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>USD/JPY Exchange Rate</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={FormatMockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="rate" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};


export default ExchangeRateChart;

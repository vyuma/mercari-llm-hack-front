"use client";
import { useState } from "react";
import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
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
  { date: "2024-09-21", rate: 147.9 },
  { date: "2024-09-22", rate: 148.15 },
  { date: "2024-09-23", rate: 148.05 },
  { date: "2024-09-24", rate: 148.3 },
  { date: "2024-09-25", rate: 148.45 },
  { date: "2024-09-26", rate: 148.55 },
];

const FormatData = (data: ExchangeRateData[]) => {
  const formattedData = data.map((item) => {
    const date = new Date(item.date);
    // yyyy/mm/ddの形式に変換する
    const formattedDate = `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`;
    return {
      date: formattedDate,
      rate: item.rate,
    };
  });
  return formattedData;
};

const FormatMockData = FormatData(mockData);

// Create the ExchangeRateChart component
const ExchangeRateChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>USD/JPY Exchange Rate</h2>
      <ResponsiveContainer>
        <AreaChart
          width={730}
          height={250}
          data={FormatMockData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis domain={["auto", "auto"]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="rate"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExchangeRateChart;

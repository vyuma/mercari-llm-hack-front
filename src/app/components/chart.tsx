"use client";
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
import {ExchangeRateData} from "@/app/API/FX";
// Define the data type

type ExchangeBuyerAndSellerDataType = {
  date: string;
  sellerCountry: number;
  buyerCountry: number;
};

type ExchangeType = {
  buyerCountry: ExchangeRateData[];
  sellerCountry: ExchangeRateData[];
}

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
  console.log(formattedData);
  return formattedData;
};

const FormatDataBuyerAndSeller = (data: ExchangeType) => {
  const formattedDataBuyer = FormatData(data.buyerCountry);
  const formattedDataSeller = FormatData(data.sellerCountry);
  // Buyerとsellerのデータを ExchangeBuyerAndSellerDataType に変換する
  const formattedData: ExchangeBuyerAndSellerDataType[] = [];
  for (let i = 0; i < data.buyerCountry.length; i++) {
    formattedData.push({
      date: formattedDataBuyer[i].date,
      sellerCountry: formattedDataSeller[i].rate,
      buyerCountry: formattedDataBuyer[i].rate,
    });
  };
  return formattedData;
};


// Create the ExchangeRateChart component
const ExchangeRateChart: React.FC = () => {
  const mockData ={
    buyerCountry: [
      { date: "2024-09-20", rate: 21407 },
      { date: "2024-09-21", rate: 27000 },
      { date: "2024-09-22", rate: 26480 },
      { date: "2024-09-23", rate: 26000 },
      { date: "2024-09-24", rate: 28000 },
      { date: "2024-09-25", rate: 27001 },
      { date: "2024-09-26", rate: 25000 },
    ],
    sellerCountry: [
      { date: "2024-09-20", rate: 26000 },
      { date: "2024-09-21", rate: 28000 },
      { date: "2024-09-22", rate: 27000 },
      { date: "2024-09-23", rate: 29000 },
      { date: "2024-09-24", rate: 28000 },
      { date: "2024-09-25", rate: 26000 },
      { date: "2024-09-26", rate: 28000 },
    ],
  };

  const FormatMockData = FormatDataBuyerAndSeller(mockData);

  // nameを変える
  const CustomTooltipFormatter = (value: string, name: string) => {
    const nameMapping: {[key: string]: string} = {
      "sellerCountry": '日本',
      "buyerCountry": 'アメリカ',
    };
    
    return [value, nameMapping[name] || name];
  };


  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <AreaChart
          width={730}
          height={250}
          data={FormatMockData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2ac1ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#2ac1ff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0676cd" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0676cd" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis domain={["auto", "auto"]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip formatter={CustomTooltipFormatter}/>
          <Area
            type="monotone"
            dataKey="sellerCountry"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="buyerCountry"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExchangeRateChart;

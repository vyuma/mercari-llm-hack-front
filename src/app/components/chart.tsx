"use client";
import React, { useState } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
// import {useRef} from "react"
import { useEffect } from "react";

// Import necessary modules and types

import fetchFX from "@/app/API/FX";
import {ExchangeRateData} from "@/app/API/FX";
import { buffer } from "stream/consumers";
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


type BuyerCountryType = {
  buyerCountry: string;
  saleRate: ExchangeRateData[];
}

const formatBuyerCountry = [
  {
    buyerCountry: "アメリカ",
    saleRate: [
      { date: "2024-09-20", rate: 147.65 },
      { date: "2024-09-21", rate: 147.90 },
      { date: "2024-09-22", rate: 148.15 },
      { date: "2024-09-23", rate: 148.05 },
      { date: "2024-09-24", rate: 148.30 },
      { date: "2024-09-25", rate: 148.45 },
      { date: "2024-09-26", rate: 148.55 },
    ],
  },
  {
    buyerCountry: "日本",
    saleRate : [
      { date: "2024-09-20", rate: 145.65 },
      { date: "2024-09-21", rate: 143.90 },
      { date: "2024-09-22", rate: 142.15 },
      { date: "2024-09-23", rate: 144.05 },
      { date: "2024-09-24", rate: 144.30 },
      { date: "2024-09-25", rate: 142.45 },
      { date: "2024-09-26", rate: 141.55 },
    ],
  },
  {
    buyerCount: "中国",
    saleRate : [
      { date: "2024-09-20", rate: 147.65 },
      { date: "2024-09-21", rate: 147.90 },
      { date: "2024-09-22", rate: 148.15 },
      { date: "2024-09-23", rate: 148.05 },
      { date: "2024-09-24", rate: 147.30 },
      { date: "2024-09-25", rate: 147.45 },
      { date: "2024-09-26", rate: 146.55 },
    ]
  }
]

const FormatBuyerCountry = (data: BuyerCountryType[]) => {
  const formattedData = data.map((item) => {
    const date = new Date(item.saleRate[0].date);
    // yyyy/mm/ddの形式に変換する
    const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    return {
      date: formattedDate,
      rate: item.saleRate[0].rate,
    };
  });
  console.log(formattedData);
  return formattedData;
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
      { date: "2024-09-20", rate: 147.65 },
      { date: "2024-09-21", rate: 147.90 },
      { date: "2024-09-22", rate: 148.15 },
      { date: "2024-09-23", rate: 148.05 },
      { date: "2024-09-24", rate: 148.30 },
      { date: "2024-09-25", rate: 148.45 },
      { date: "2024-09-26", rate: 148.55 },
    ],
    sellerCountry: [
      { date: "2024-09-20", rate: 145.65 },
      { date: "2024-09-21", rate: 143.90 },
      { date: "2024-09-22", rate: 142.15 },
      { date: "2024-09-23", rate: 144.05 },
      { date: "2024-09-24", rate: 144.30 },
      { date: "2024-09-25", rate: 142.45 },
      { date: "2024-09-26", rate: 141.55 },
    ],
  }
  const [exchangeData, setExchangeData] = useState<ExchangeType>(mockData);
    const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     // Fetch the data when the component mounts
    //     const fetchData = async () => {
    //         try {
    //             const data = await fetchFX();
    //             setExchangeData(data);
    //         } catch (err) {
    //             setError('Failed to fetch data');
    //             console.error(err);
    //         }
    //     };
    //     fetchData();
    // }, []); 
    console.log(exchangeData);

  const FormatMockData = FormatDataBuyerAndSeller(exchangeData);

  // nameを変える
  const CustomTooltipFormatter = (value, name) => {
    const nameMapping = {
      sellerCountry: '日本',
      buyerCountry: 'アメリカ',
    };
    
    return [value, nameMapping[name] || name];
  };


  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>相場</h2>
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
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
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

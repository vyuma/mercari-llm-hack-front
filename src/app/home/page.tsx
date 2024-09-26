'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const ExchangeRateChart = dynamic(() => import('../components/chart'), {
  ssr: false,
});


export default function Page() {
  return (
    <div>
      {/* usTojpを用いる */}
      < ExchangeRateChart/>
    </div>
  );
}
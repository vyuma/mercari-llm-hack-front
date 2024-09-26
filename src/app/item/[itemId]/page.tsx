"use client";
import dynamic from "next/dynamic";

const ExchangeRateChart = dynamic(() => import("../../components/chart"), {
  ssr: false,
});

import Image from "next/image";

export default function TitleDetail({
//   params: { itemId },
}: {
  params: { itemId: string };
}) {
//   const item = {
//     id: itemId,
//     name: "supreme ロゴパーカー",
//   };

  return (
    <div>
      <Image
        src="/images/item_1.png"
        width={375}
        height={375}
        alt="item1"
      ></Image>
      <Image
        src="/images/item_2.png"
        width={375}
        height={375}
        alt="item2"
      ></Image>
      <Image
        src="/images/item_3.png"
        width={375}
        height={375}
        alt="item3"
      ></Image>
      <div className="m-4 mb-12">
        <div className="text-gray-500 text-base font-bold border-b-2 pb-4 mb-4 border-gray-100">
            売買相場
        </div>
        <ExchangeRateChart />
      </div>
      <Image
        src="/images/item_4.png"
        width={375}
        height={375}
        alt="item4"
      ></Image>
    </div>
  );
}

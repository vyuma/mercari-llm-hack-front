"use client";
import dynamic from "next/dynamic";

const ExchangeRateChart = dynamic(() => import("../../components/chart"), {
  ssr: false,
});

import Image from "next/image";

export default function TitleDetail({
  params: { itemId },
}: {
  params: { itemId: string };
}) {
  const item = {
    id: itemId,
    name: "ルフィ フィギュア",
  };

  return (
    <div>
      <Image
        src="/images/figure.webp"
        width={430}
        height={292}
        alt="figure"
      ></Image>
      <div className="p-4">
        <div className="text-base font-bold border-b-2 border-gray-100">
          <div className="mr-4 mb-4 mt-4">{item.name}</div>
        </div>
        <div className="flex flex-row items-center justify-between border-b-2 border-gray-100">
          <div className="text-left font-bold">カテゴリー</div>
          <div className="flex flex-col p-4">
            <div>ゲーム・おもちゃ・グッズ&gt;</div>
            <div>フィギュア&gt;</div>
            <div>コミック・アニメ&gt;</div>
            <div>ワンピース</div>
          </div>
        </div>
        <div className="m-4 mb-12">
          <ExchangeRateChart />
        </div>
        <div>
          <div className="text-base font-bold text-gray-500">
            売れているところ
          </div>
          <Image src="/images/area.png" width={475} height={430} alt="area" />
        </div>
      </div>
    </div>
  );
}

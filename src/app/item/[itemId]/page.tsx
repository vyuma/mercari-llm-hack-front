"use client";
import dynamic from "next/dynamic";

const ExchangeRateChart = dynamic(() => import("../../components/chart"), {
  ssr: false,
});

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TitleDetail({}: //   params: { itemId },
{
  params: { itemId: string };
}) {
  //   const item = {
  //     id: itemId,
  //     name: "supreme ロゴパーカー",
  //   };
  const [visibleComment, setVisibleComment] = useState(false);
  const [visibleChara, setVisibleChara] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleComment(true);
    }, 1000);
    const timer2 = setTimeout(() => {
      setVisibleChara(true);
    }, 0);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  const handleClick = () => {
    setVisibleComment(!visibleComment);
  };

  return (
    <div className="mb-16 pb-4">
      <div>
        <Image
          src="/images/item_1.png"
          width={430}
          height={430}
          alt="item1"
        ></Image>
        <Image
          src="/images/item_2.png"
          width={430}
          height={430}
          alt="item2"
        ></Image>
        <Image
          src="/images/item_3.png"
          width={430}
          height={430}
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
          width={430}
          height={430}
          alt="item4"
        ></Image>
      </div>
      <div className="flex flex-row items-start justify-between fixed bottom-20 mb-12 right-0">
        <div
          className={`relative bottom-4 left-2 drop-shadow-lg p-4 bg-contain bg-no-repeat bg-[url('/images/fukidashi.png')] transition-opacity duration-1000 ${
            visibleComment ? "opacity-100" : "opacity-0"
          }`}
        >
          円安進行中！今が買い時かもね〜
        </div>

        <Image
          className={`drop-shadow-xl transition-opacity duration-1000 ${
            visibleChara ? "opacity-100" : "opacity-0"
          } `}
          src="/images/chara.png"
          height={128}
          width={74}
          alt="chara"
          onClick={handleClick}
        ></Image>
      </div>
      <div className="bg-white p-2 footer-buttons w-full flex flex-row items-center justify-around fixed bottom-16 mb-2">
        <div className="rounded-md border-red-500 border-2 text-red-500 box-border px-6 py-2">
          定額払いで購入
        </div>
        <div className="rounded-md bg-red-500 text-white box-border px-8 py-2">
          <Link href="/">購入手続きへ</Link>
        </div>
      </div>
    </div>
  );
}

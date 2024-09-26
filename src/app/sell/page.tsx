'use client'
import Header from "../components/Header";
import ItemButtons from "../components/ItemButtons";
import CategoryButtons from "../components/CategoryButtons";
import { Category } from "../components/CategoryButtons/schema";
import { Item } from "../components/ItemButtons/schema";
import  TagSelector from "./tag"
import {useEffect, useState} from 'react'

export default function Page() {
  const [tags, setTags] = useState<string[]>([]);
  
  const categories: Category[] = [
    {
      id: "1",
      name: "アニメ",
    },
    {
      id: "2",
      name: "フィギュア",
    },
  ];

  const items: Item[] = [
      {
        "id": "1",
        "name": "ルフィ フィギュア"
      },
      {
        "id": "2",
        "name": "炭治郎 フィギュア"
      },
      {
        "id": "3",
        "name": "初音ミク アクリルスタンド"
      },
      {
        "id": "4",
        "name": "エヴァンゲリオン 初号機 プラモデル"
      },
      {
        "id": "5",
        "name": "キティちゃん ぬいぐるみ"
      },
      {
        "id": "6",
        "name": "ワンピース ポスター"
      },
      {
        "id": "7",
        "name": "乃木坂46 キーホルダー"
      },
      {
        "id": "8",
        "name": "ドラえもん フィギュア"
      },
      {
        "id": "9",
        "name": "ラブライブ！ サンシャイン!! CD"
      },
      {
        "id": "10",
        "name": "リゼロ レム フィギュア"
      }
    
  ];

  // 検索機能
  // 
  const [searchItem, setSearchItem] = useState<Category[]>([]);
  
  useEffect(() => {
    const isAllIncludes = (tags:string[], target:Category) => tags.every(el => target.name.includes(el));
    const filteredItem = items.filter(item => isAllIncludes(tags, item));

    setSearchItem(filteredItem);

  }, [tags]);


  return (
    <div className="p-1.5">
      <TagSelector tags={tags} setTags={setTags}/>
      <Header title={"ランキング"} />
      <div className="m-3">
        <ItemButtons items={searchItem} />
      </div>
    </div>
  );
}

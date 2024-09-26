import Header from "../components/Header";
import ItemButtons from "../components/ItemButtons";
import CategoryButtons from "../components/CategoryButtons";
import { Category } from "../components/CategoryButtons/schema";
import { Item } from "../components/ItemButtons/schema";

export default function Page() {
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
      id: "1",
      name: "ルフィ フィギュア",
    },
    {
      id: "2",
      name: "炭治郎 フィギュア",
    },
  ];
  return (
    <div className="p-1.5">
      <Header title={"ランキング"} />
      <div className="m-3">
        <div className="mb-3">
          <CategoryButtons categories={categories}></CategoryButtons>
        </div>
        <ItemButtons items={items} />
      </div>
    </div>
  );
}

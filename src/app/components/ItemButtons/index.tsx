import { Item } from "./schema";
import Link from "next/link";

export default function ItemButtons({ items }: { items: Item[] }) {
  return (
    <div>
      {items.map((item) => (
        <Link key={item.id} href={"/" + item.id}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

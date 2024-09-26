import { Item } from "./schema";
import Link from "next/link";
import Image from "next/image";

export default function ItemButtons({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-col border-b-2 border-gray-100">
      {items.map((item, index) => (
        <Link
          key={item.id}
          className="flex flex-row p-4 border-t-2 border-gray-100 justify-between"
          href={"sell/" + item.id}
        >
          <div className="text-base">
            {index}. {item.name}
          </div>
          <Image
            src="/images/dots_vertical.png"
            alt="dots_vertical"
            width={24}
            height={24}
            color="gray"
          />
        </Link>
      ))}
    </div>
  );
}

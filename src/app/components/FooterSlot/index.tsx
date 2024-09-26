import Link from "next/link";
import { SlotItem } from "./schema";
import Image from "next/image";

export default function FooterSlot({ SlotItems }: { SlotItems: SlotItem[] }) {
  return (
    <div className="flex flex-row fixed bottom-0 left-0 z-20 w-full pt-4 pb-4 bg-white border-t border-gray-200 shadow items-center justify-between dark:bg-gray-800 dark:border-gray-600">
      {SlotItems.map((SlotItem) => (
        <Link key={SlotItem.name} href={"/" + SlotItem.name}>
          <div className="flex flex-col items-center text-center w-16">
            <Image src={SlotItem.icon} width={24} height={24} alt="icon" />
            <div className="text-xs">{SlotItem.buttonName}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

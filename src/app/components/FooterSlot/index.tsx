"use client";

import Link from "next/link";
import { SlotItem } from "./schema";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FooterSlot({ SlotItems }: { SlotItems: SlotItem[] }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex flex-row fixed bottom-0 left-0 z-20 w-full pt-4 pb-4 bg-white border-t border-gray-200 shadow items-center justify-between dark:bg-gray-800 dark:border-gray-600">
      {SlotItems.map((SlotItem) => (
        <Link key={SlotItem.buttonName} href={"/" + SlotItem.name}>
          <div className="flex flex-col items-center text-center w-16">
            <Image
              src={
                pathname === `/${SlotItem.name}`
                  ? SlotItem.icon_filled
                  : SlotItem.icon
              }
              width={24}
              height={24}
              alt="icon"
            />
            <div className="text-xs">{SlotItem.buttonName}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

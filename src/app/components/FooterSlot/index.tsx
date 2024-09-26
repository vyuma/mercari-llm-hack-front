import Link from "next/link";
import { SlotItem } from "./schema";

export default function FooterSlot({ SlotItems }: { SlotItems: SlotItem[] }) {
  return (
    <div>
      {SlotItems.map((SlotItem) => (
        <Link key={SlotItem.name} href={"/" + SlotItem.name}>
          {SlotItem.icon}
        </Link>
      ))}
    </div>
  );
}

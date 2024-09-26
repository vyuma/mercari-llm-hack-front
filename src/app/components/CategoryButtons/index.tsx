import { Category } from "./schema";
import Link from "next/link";

export default function CategoryButtons({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div>
      {categories.map((category) => (
        <Link key={category.id} href={"/" + category.id}>
          {category.name}
        </Link>
      ))}
    </div>
  );
}

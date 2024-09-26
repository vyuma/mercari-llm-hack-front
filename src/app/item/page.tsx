import Image from "next/image";
import Link from "next/link";

export default function TitleDetail({
//   params: { itemId },
}: {
  params: { itemId: string };
}) {

  return (
    <div>
        <Link href="/item/1">
      <Image
        src="/images/top_image.png"
        width={375}
        height={375}
        alt="top_image"
      ></Image>
      </Link>
    </div>
  );
}

import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, cover, excerpt } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <div
      className="max-w-sm rounded-xl overflow-hidden shadow-xl transform   transition duration-300 hover:scale-105
    ">
      <Link href={`/posts/${id}`}>
        <Image
          className="w-full "
          src={cover}
          width={500}
          height={500}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>{" "}
          <p className="text-gray-700 text-base">{excerpt}</p>
          <div className="px-4 pt-4 pb-2"></div>
        </div>
      </Link>
    </div>
  );
}

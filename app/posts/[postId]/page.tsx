import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    cover: post.cover,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml, cover, excerpt } = await getPostData(
    postId
  );

  const pubDate = getFormattedDate(date);

  return (
    <main className=" w-full px-6 md:w-1/2  flex flex-col ">
      {" "}
      <h1 className="text-3xl  text-center ">{title}</h1>
      <Image
        className="w-full"
        src={cover}
        width={500}
        height={500}
        alt="Sunset in the mountains"
      />{" "}
      <p className="mt-0">{pubDate}</p>
      <div>{excerpt}</div>
      <article className="prose">
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>{" "}
      <div className="w-full">
        {" "}
        <Call />
      </div>
      <p className="pt-6">
        <Link href="/blog">← Terug naar blog</Link>
      </p>
    </main>
  );
}

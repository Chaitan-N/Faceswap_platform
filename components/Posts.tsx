import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <div className="container mx-auto ">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-12">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

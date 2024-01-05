import CardBlog from "@/app/ui/CardBlog";
import { fetchPosts } from "../../lib/data";
 
export default async function Blog() {
  const posts = await fetchPosts();

  return (
    <div className="mt-36 grid grid-cols-1 sm:grid-cols-1 gap-3">
      {posts.map((post) => (
        <CardBlog
          key={post.id}
          title={`${post.title}`}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." 
          url={`/blog/${post.title}`}
          date="2021-10-10"
        />
      ))} 
    </div>
  );
}

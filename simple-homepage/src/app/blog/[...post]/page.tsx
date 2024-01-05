import Link from "next/link"; 
import Post1 from "@/app/posts/post-1";
import Post2 from "@/app/posts/post-2";
import Post3 from "@/app/posts/post-3";

const posts = [
  { title : "post-1", component: <Post1 />},
  { title : "post-2", component: <Post2 />},
  { title : "post-3", component: <Post3 />}
];

export default function Post({ params }: { params: { post: string } }) {
  const { post } = params;
  console.log(post)
  return (
    <div className="flex flex-col justify-center px-64">
      <div className="bg-slate-300 min-h-screen">
        {post && posts.find((p) => p.title === post[0])?.component}
      </div>        
    </div>
  );
}
import Link from "next/link";
import {useState} from "react"
import {Introduccion, Contenido, Conclusion} from "@/content/javascript"
import { useEffect } from "react";

const content = [
  {
    title: "post-1",
    index_content: [
        { ref: "introduccion", name: "Introducción", component: <Introduccion /> },
        { ref: "contenido", name: "Contenido", component: <Contenido /> },
        { ref: "conclusion", name: "Conclusión", component: <Conclusion /> }
    ],
  },
];
 
export default function Post({ params }: { params: { post: string } }) {
  const post = content.find((post) => post.title === params.post[0]);
  
  if(!post) return <h1>No encontramos tu Post...</h1>
  return (
    <div className="mt-36 grid grid-cols-6">
      <div className="col-span-2">
        <h2 className="text-xl text-slate-800 dark:text-slate-200">
          Tabla Contenido:  
        </h2>
        <ul>
          {post?.index_content.map((con, index) => (
            <li>
              <Link
                className="text-blue-600 dark:text-slate-200"
                href={`/blog/${post.title}/${con.ref}`}
              >
                {con.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-4 border-l border-slate-200 pl-4">
        {params.post[1] && (post?.index_content.find((x) => x.ref === params.post[1]))?.component}
        {!params.post[1] && post?.index_content[0].component}
      </div>
    </div>
  );
}

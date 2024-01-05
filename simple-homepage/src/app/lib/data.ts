import { sql } from '@vercel/postgres'; 

type Posts = {
    id:number;
    title:string, 
    claps:number
}
 
export async function fetchPosts() { 
  try {  
    const data = await sql<Posts>`SELECT * FROM posts`; 
    
    return data.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch posts data.');
  }
}

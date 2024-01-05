const { db } = require('@vercel/postgres');
const { create } = require('domain');
  
const posts = [
    {id: '1', title: 'post-1', claps: 0 },
    {id: '2', title: 'post-2', claps: 0 },
    {id: '3', title: 'post-3', claps: 0 }
]

async function seedPost(client) {
  try {
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS posts (
        id INT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        claps INT
      );
    `;

    console.log(`Created "posts" table`);

    // Insert data into the "posts" table
    const insertedPosts = await Promise.all(
        posts.map(async (post) => {            
            return client.sql`
            INSERT INTO posts (id, title, claps)
            VALUES (${post.id}, ${post.title}, ${post.claps})
            ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedPosts.length} posts`);

    return {
      createTable,
      users: insertedPosts,
    };
  } catch (error) {
    console.error('Error seeding posts:', error);
    throw error;
  }
} 

async function seedContact(client){
    try {
        // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
          CREATE TABLE IF NOT EXISTS contact (
            id serial PRIMARY KEY,
            nombre VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP            
          );
        `;
    
        console.log(`Created "contact" table`);
    
        // Insert data into the "contact" table
        // const insertedConta = await Promise.all(
        //     posts.map(async (post) => {            
        //         return client.sql`
        //         INSERT INTO posts (id, title, claps)
        //         VALUES (${post.id}, ${post.title}, ${post.claps})
        //         ON CONFLICT (id) DO NOTHING;
        //     `;
        //   }),
        // );
    
        //console.log(`Seeded ${insertedPosts.length} posts`);
    
        return { 
            createTable
        };
      } catch (error) {
        console.error('Error seeding posts:', error);
        throw error;
      }
}

async function main() {
  const client = await db.connect();

  //await seedPost(client); 
  await seedContact(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

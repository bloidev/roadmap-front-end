import CardBlog from "@/ui/CardBlog"

const post_list = [
    {
        title: "Post 1", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", 
        image: "https://picsum.photos/200/200",
        date: "2021-03-01",
        url: "/blog/post-1"
    },
    {
        title: "Post 2", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", 
        image: "https://picsum.photos/200/200",
        date: "2021-03-01",
        url: "/blog/post-2"
    },
    {
        title: "Javascript", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", 
        image: "https://picsum.photos/200/200",
        date: "2021-03-01",
        url: "/blog/javascript"
    },
]

export default function Blog(){
    return (
        <div className="mt-36 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {post_list.map((post, index) => (
                <CardBlog {...post} />
            ))}
        </div>
    )
}
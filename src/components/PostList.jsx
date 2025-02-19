import { useEffect, useState } from "react"

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            setPosts(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching posts", error);
            setLoading(false);
        });
    }, []);

    if (loading) return <p className="text-center">Loading posts...</p>
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'


const Articles = () => {

    const [posts, setPosts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://svproduction.github.io/financial-market-news-blog-project.json`)
            .then((response) => {
                const newPosts = response.data.map((item, index) => ({
                    ...item,
                    id: index + 1
                }));
                setPosts(newPosts);
            });
    }, []);

    return (

        <div className="wrap-art">
            {
                posts.filter(post => post.id == id).map(post => {
                    return (
                        <>
                            <h1>{post.title}</h1>
                            <img src={post.imageUrl} alt="Card cap" />
                            <p className="body">{post.description}</p>

                            <div className="exp-comment">
                                <p className="comment">Experts Comment</p>
                                <p className="comment-body"> {post.expertComment}
                                </p>
                            </div>
                        </>
                    )
                })
            }



        </div>
    )
}

export default Articles;
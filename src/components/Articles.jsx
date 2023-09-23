import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {ref, onValue} from "firebase/database"
import {db} from '../firebase'


const Articles = () => {

    const [posts, setPosts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const starCountRef = ref(db);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const newPosts = data.map((item, index) => ({
                ...item,
                id: index + 1
                }));
            return setPosts(newPosts);
        })
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
//import { useParams } from "react-router-dom"
import { useEffect, useId, useState } from "react"
import axios from 'axios'
import { useLocation } from "react-router";


const Articles = () => {

    const [post, setPost] = useState({});

    const id = useId();

    console.log(id, '12324')
    
    const location = useLocation();

    //const { title } = useParams();

    useEffect(() => {
        axios
        .get(`https://svproduction.github.io/financial-market-news-blog-project.json/${id}`)
        .then(({ data} ) => {
            setPost(data);
        });
    }, []);

    //const { title , body } = post  //добавить здесь

    return (

        

        <div className="wrap-art">
            {location.pathname}

            <h1>{post.title}</h1>
            <img src='https://images.barrons.com/im-298585' alt="Card cap" />
            <p className="body">{post.body}</p>

            <div className="exp-comment">
                <p className="comment">Experts Comment</p>
                <p className="comment-body"> {post.body}
                </p>
            </div>

            </div>
    )
}

export default Articles;
import { useEffect, useState } from 'react';
import Card from './Card';
import { db } from '../../firebase';
import axios from 'axios';

const Index = () => {



    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://svproduction.github.io/financial-market-news-blog-project.json')
            .then((resp) => {
                return resp.json();
            })
            .then((json) => setPosts(json))
    }, []);

    useEffect(() => {
        axios.get('https://financial-news-ecaa8-default-rtdb.europe-west1.firebasedatabase.app/')
            .then((resp) => console.log(resp, 'ewretbr'))
    }, [])

    const newPosts = posts.map((post, index) => ({
        ...post,
        id: index + 1
    }));

    return (
        <div className='app-content'>

            {newPosts.map(({ title, body, id, imageUrl }) => {
                return <Card title={title} body={body} key={id} id={id} imageUrl={imageUrl} />
            })}

        </div>
    )
}

export default Index;
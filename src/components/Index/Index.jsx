import { useEffect, useState } from 'react';
import Card from './Card';

const Index = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://svproduction.github.io/financial-market-news-blog-project.json')
            .then((resp) => {
                return resp.json();
            })
            .then((json) => setPosts(json))
    }, []);

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
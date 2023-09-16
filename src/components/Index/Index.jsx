import { useEffect, useState } from 'react';
import Card from './Card';


const Index = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://svproduction.github.io/financial-market-news-blog-project.json')
            .then((resp) => {
                return resp.json();
            })
            .then((json) => setPosts(json))
    }, []);


    return (
        <div className='app-content'>

            {posts.map(({ title, body, id, imageUrl }) => {
                return <Card title={title} body={body} key={id} id={id} imageUrl={imageUrl} />
            })}

        </div>
    )
}

export default Index;
import { useEffect, useState } from 'react';
import Card from './Card';
import { db } from '../../firebase';
import {ref, onValue} from 'firebase/database'


const Index = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const starCountRef = ref(db);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            return setPosts(data);
        })
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
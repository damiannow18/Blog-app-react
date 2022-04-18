import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import {auth, db} from '../firebase-config';

function Home({isLoggedIn}) {
    const [postsList, setPostsList] = useState([]);

    const postsCollection = collection(db, "posts");

    const deletePost = async (id) => {
        const post = doc(db, 'posts', id)
        await deleteDoc(post);
    }

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollection);
            setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getPosts();
    })
    return <div className='homePage'>{postsList.map((post) => {
        return <div className='post'>
            <div className='postHeader'>
                <div className='postTitle'>
                    <h1>{post.title}</h1>
                </div>
                <div className='deletePost'>
                {isLoggedIn && post.author.id === auth.currentUser.uid &&   <button onClick={() => {
                        deletePost(post.id);
                        }}
                    >x</button>
                }
                </div>
            </div>
            <div className='postContentContainer'>{post.content}</div>
            <h3>@{post.author.name}</h3>
        </div>
    })}</div>;
}

export default Home;
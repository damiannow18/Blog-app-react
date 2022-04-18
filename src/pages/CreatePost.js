import {React, useEffect, useState} from 'react';
import {addDoc, collection} from 'firebase/firestore';
import {db, auth} from '../firebase-config';
import { useNavigate } from 'react-router-dom';


function CreatePost({isLoggedIn}) {
const [title, setTitle] = useState("");
const [content, setContent] = useState("");

const postsCollection = collection(db, "posts");
let navigate = useNavigate();

const createPost = async () => {
  await addDoc(postsCollection, {
    title,
    content,
    author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }
    });
    navigate("/");
};

useEffect(() => {
  if(!isLoggedIn){
    navigate("/login");
  }

}, []);

    return ( 
    <div className='createPostPage'>
      <div className='createPostContainer'>
      <h1>Create a post</h1>
        <div className='inputGroup'>
          <label>Title: </label>
          <input onChange={(event) => {
            setTitle(event.target.value);
          }}/>
        </div>
        <div className='inputGroup' >
          <label>Content: </label>
          <textarea onChange={(event) => {
            setContent(event.target.value);
          }}/>
        </div>
        <button onClick={createPost}>Submit post</button>
      </div> 
    </div>
    );
}

export default CreatePost;
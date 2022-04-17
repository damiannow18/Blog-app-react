import React from 'react'

function CreatePost() {
    return ( 
    <div className='createPostPage'>
      <div className='createPostContainer'>
      <h1>Create a post</h1>
        <div className='inputGroup'>
          <label>Title: </label>
          <input/>
        </div>
        <div className='inputGroup'>
          <label>Content: </label>
          <textarea/>
        </div>
        <button>Submit post</button>
      </div> 
    </div>
    );
}

export default CreatePost;
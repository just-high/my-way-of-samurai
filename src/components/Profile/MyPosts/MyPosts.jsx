import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post massage={'Hello'} count_like={50} />
        <Post massage={'hello double'} count_like={1} />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )

}

export default MyPosts;
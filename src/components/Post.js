import React from 'react'

import Comment from './Comment'
import './Post.css'

function Post({ post, index }) {
  const { name, date, profile, message, comments } = post
  return (<div key={index} className="post">
    <div className="post__initial">
      <img src={profile} alt="" />
      <h2>{name}</h2>
      <span>{date}</span>
      <p>{message}</p>
    </div>
    <div className="post__comment">
      {comments.map((comment, index) => <Comment comment={comment} key={index} />)}
    </div>
  </div>)
}

export default Post
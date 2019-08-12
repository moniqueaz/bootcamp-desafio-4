import React from 'react'

function Comment({ comment, index }) {
  const { name, profile, message } = comment
  return (<div className="comment" key={index}>
    <img src={profile} alt="" />
    <p><span>{name}</span>{message}</p>
  </div>)
}

export default Comment
import React from 'react'

const Post = ({post , onDelete}) => {
  return (
    <> 
        <h4>{post.title}</h4>
        <p>{post.description}</p>
        <button onClick={() => onDelete(post.id)}>x</button>
         <hr/>             
    </>
  )
}

export default Post
import React from 'react'
import './Post.css'

function Post({data}) {
    const heart="./heart.png"
    const notlike="./notLike.png"
  return (
    <div className='Posts'>
        <img src={data.img} alt="" />
        <div className="postReact">
            <img className='icon' src={data.liked?heart:notlike} alt="" />
            <img className='icon'  src="./comment.png" alt="" />
            <img className='icon' src="./share.png" alt="" />
        </div>
    </div>
  )
}

export default Post
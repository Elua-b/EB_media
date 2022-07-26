import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'
function FollowersCard() {
  return (
    <div className='FollowersCard'>
      <h3>Who i following you</h3>
      {
        Followers.map((followers,id)=>{
          return(
            <div className="follower">
              <div>
              <img src={followers.img} alt="" className="followerImg" />
              <div className="name">
                <span>{followers.name}</span>
                <span>{followers.username}</span>
              </div>
              </div>
              <button>
                follow
              </button>
            </div>
           
          )
        })
      }
    </div>
  )
}

export default FollowersCard
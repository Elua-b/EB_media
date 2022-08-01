import React from 'react'
import PostSide from '../../components/postSide/PostSide'
import ProfileCard from '../../components/ProfileCard'
import ProfileLeft from '../../components/profileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'

function Profile() {
  return (
    <div className="Profile">
      <ProfileLeft/>
      <div className="Profile-center">
        <ProfileCard/>
        <PostSide/>
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile
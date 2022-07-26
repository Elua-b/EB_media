import React from 'react'
import FollowersCard from '../FollowCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard'
import './ProfileSide.css'
function ProfileSide( ) {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
    
  )
}

export default ProfileSide
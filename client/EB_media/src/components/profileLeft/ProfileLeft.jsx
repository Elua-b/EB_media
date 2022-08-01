import React from 'react'
import FollowersCard from '../FollowCard/FollowersCard'
import InfoCard from '../infoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import './ProfileLeft.css'
function ProfileLeft() {
  return (
    <div className="ProfileLeft">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
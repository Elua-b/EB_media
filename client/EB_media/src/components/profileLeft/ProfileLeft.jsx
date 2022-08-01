import React from 'react'
import FollowersCard from '../FollowCard/FollowersCard'
import InfoCard from '../infoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import '../profileSide/ProfileSide.css'
function ProfileLeft() {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
import React from 'react'
import './ProfileCard.css'
function ProfileCard() {
  return (
    <div className="ProfileCard">
        <div className="profileImages">
            <img src="./pic1.jpg" alt="" />
            <img src="./pic1.jpg" alt="" />
        </div>
        <div className="ProfileName">
            <span>BUGINGO</span>
            <span>Eloi</span>
        </div>
    </div>
    )
}

export default ProfileCard
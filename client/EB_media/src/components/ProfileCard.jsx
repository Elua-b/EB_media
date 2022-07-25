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
        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>3000</span>
                    <span>followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1</span>
                    <span>followers</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileCard
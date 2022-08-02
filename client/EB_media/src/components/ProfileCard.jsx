import React from "react";
import "./ProfileCard.css";
function ProfileCard() {
  const profilePage = true;
  return (
    <div className="ProfileCard">
      <div className="profileImages">
        <img src="./cvrphoto.jfif" className="photo" alt="" />
        <img src="./pic1.jpg" alt="" />
      </div>
      <div className="ProfileName">
        <span>BUGINGO</span>
        <span>Eloi</span>
        <h1 style={{color:"#f5c32c"}}>EB_media</h1>
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
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? "" : <span>My Profile</span>} 
    </div>
  );
}

export default ProfileCard;

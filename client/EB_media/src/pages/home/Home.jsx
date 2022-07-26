import React from "react";
import PostSide from "../../components/postSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import './Home.css'
function Home() {
  return <div className="Home">
    <ProfileSide/>
    {/* <div className="postSide">Posts</div> */}
    <PostSide/>
    <div className="RightSide">RightSide</div>
  </div>;
}

export default Home;

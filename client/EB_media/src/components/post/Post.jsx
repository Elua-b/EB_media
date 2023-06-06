import React, { useState } from "react";
// import {env } from 'process'
import "./Post.css";
import Comment from "../../../public/comment.png";
import Share from "../../../public/share.png";
import Heart from "../../../public/heart.png";
import NotLike from "../../../public/notlike.png";
// import Share from "./share.png";
// import Heart from "./like.png";
// import NotLike from "./notlike.png";
import { likePost } from "../../api/PostRequest";
import { useSelector } from "react-redux";

  export const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  
  const [liked, setLiked] = useState(data.likes.includes());
  const [likes, setLikes] = useState(data.likes.length)

  
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };
  return (
    <div className="Post">
      <img
      //  src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image: ""}
      src=""
        alt=""
        

      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
          className="icon"
        />
        <img src={Comment} className="icon" alt="" />
        <img src={Share} className="icon" alt="" />
        
        {/* <img src={Share} alt="" /> */}


      </div>


      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name} </b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};
// export default Post

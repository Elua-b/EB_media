import React from "react";
import "./PostShare.css";
import { useState, useRef } from "react";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc=useRef()
  const {user}=useSelector((state)=>state.authReducer.authData)
  console.log(user);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newPost={
    userId:user.id, 
    desc:desc.current.value  
    }
    if(image){
      const data=new FormData();
      const filename=Date.now() + image.name
      data.append("name",filename)
      data.append("file",image)
      newPost.image=filename;
      console.log(newPost);
    }
  }
  return (
    <div className="PostShare">
      <img src="./jackie.PNG" alt="" />
      <div>
        <input ref={desc}  required type="text" placeholder="what's happening" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            photo
          </div>
          <div className="option" style={{ color: "var(--video" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button" onClick={handleSubmit}>Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && [
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>,
        ]}
      </div>
    </div>
  );
}

export default PostShare;

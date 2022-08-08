import React, { useState } from "react";
import "./RightSide.css";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img className="icon2" src="./home.png" alt="" />
        <UilSetting />
        <img className="icon2" src="./not.png" alt="" />
        <img className="icon2" src="./mess.png" alt="" />
      </div>
      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
}

export default RightSide;

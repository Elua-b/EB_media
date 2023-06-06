import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../profileModal/ProfileModal";
function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <h1 style={{ color: "#f5c32c" }}>EB_media</h1>
      <div className="infoHead">
        <h4>Your info </h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal modalOpened={modalOpened}
          setModalOpened={setModalOpened} />
        </div>
      </div>
      <div className="info">
        <span>
          <b> Status</b>
        </span>
        <span>In Relationship</span>
      </div>
      <div className="info">
        <span>
          <b> Lives in </b>
        </span>
        <span>Kigali</span>
      </div>
      <div className="info">
        <span>
          <b>Works at</b>{" "}
        </span>
        <span>Govtalk Company</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
}

export default InfoCard;

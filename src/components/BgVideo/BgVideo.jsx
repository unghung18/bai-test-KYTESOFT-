import React from "react";
import "./BgVideo.scss";
import StandardForm from "../StandardForm/StandardForm";

const BgVideo = () => {
  return (
    <div className="bgContainer">
      <div className="overlay">
        <video preload="auto" playsInline autoPlay muted loop>
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>
        <div className="standard">
          <h2>Where do you want to go?</h2>
          <div>Trips, experiences, and places. All in one service.</div>
          <StandardForm />
        </div>
      </div>
    </div>
  );
};

export default BgVideo;

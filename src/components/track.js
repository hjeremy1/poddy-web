import React from "react";
import "bulma/css/bulma.css";
import "./track.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Track = ({title, url, onPlay, currentTrack}) => {
  return(
    <div className = "track">
      <h1>{title}</h1>
      <button className="button play is-fullwidth" onClick={onPlay}>
        <FontAwesomeIcon icon ={url === currentTrack ? "pause" : "play"}/>
      </button>
    </div>
  );
};
import React from "react";
import {useState} from "react";
import "bulma/css/bulma.css";
import "./podcast.scss";
import { Modal } from "./modal";
import { PodcastDetailModal } from "./podcastDetailModal";


export const Podcast = ({podcast:{feedUrl}, title, image, imageHD}) => {

  const activateModal = () => {
    setModalActive(true);
  };

  const deactivateModal = () => {
    setModalActive(false);
  };

  const getImage = () => {
    return imageHD ? imageHD : image;
  };

  const [modalActive, setModalActive] = useState(false);
  return(
    <>
      {modalActive &&
        <PodcastDetailModal
          onClose={deactivateModal}
          title={title}
          image = {getImage()}
          feedUrl = {feedUrl}
        />
      }
      <div onClick={activateModal} className="podcast column is-3">
        <h1>{title}</h1>
        <div className="image">
          <img src={image} alt={title}/>
        </div>
      </div>
    </>
  );
};
import React, {useState, useEffect} from "react";
import { ModalWrapper, ModalHeader, ModalBody, ModalFooter } from "./modal";
import {parseTrackLinks} from "../utils/podcastUtils";
import { Track } from "./track";
import "./podcastDetailModal.scss";
import { splitEvery, set, length } from "ramda";
import { Pagination } from "./pagination";

export const PodcastDetailModal = ({title, onClose, image, feedUrl}) => {

  const[tracks, setTracks] = useState([]);
  const[activeTracks, setActiveTracks] = useState([]);
  const[page, setPage] = useState(0);
  const[currentTrack, setCurrentTrack] = useState("");
  const[currentAudioTrack, setCurrentAudioTrack] = useState(null);

  const getTracks = async feedUrl => {
    setTracks(splitEvery(10, await parseTrackLinks(feedUrl)));
  };

  useEffect(() => {
    getTracks(feedUrl);
  }, []);

  useEffect(() => {
    setActiveTracks(tracks[page]);
  }, [page, tracks]);

  useEffect(() => {
    playAudio();
  }, [currentAudioTrack]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const selectAudio = track => {
    pauseAudio();
    if(track.url === currentTrack) {
      setCurrentTrack(null);
      pauseAudio();
    } else {
      setCurrentTrack(track.url);
      setCurrentAudioTrack(new Audio(track.url));
    }
  };

  const pauseAudio = () => {
    currentAudioTrack && currentAudioTrack.pause();
  };

  const playAudio = () => {
    currentAudioTrack && currentAudioTrack.play();
  };

  const closeModal = () => {
    pauseAudio();
    onClose();
  };
  
  return(
    <ModalWrapper>
      <ModalHeader
        title = {title}
        onCancel = {closeModal}
      />
      <ModalBody>
        <div className = "image">
          <img src = {image} alt = ""/>
        </div>
        {activeTracks && activeTracks.map(track => (
          <Track
            title={track.title}
            url={track.url}
            currentTrack ={currentTrack}
            onPlay={() => selectAudio(track)}
          />
        ))}
        <Pagination
          activePage = {page}
          pageNumbers = {length(tracks)}
          onNext = {nextPage}
          onPrevious = {previousPage}
        />
      </ModalBody>
      <ModalFooter
        onCancel = {closeModal}
      />
    </ModalWrapper>
  );    
};
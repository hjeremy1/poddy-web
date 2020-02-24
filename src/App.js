import React, {useEffect, useState} from 'react';
import './App.scss';
import { searchPodcast } from './API/fetchUtils';
import { Podcast } from './components/podcast';
import { Modal } from './components/modal';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { splitEvery, length } from 'ramda';
import { Pagination } from './components/pagination';
import classNames from "classnames";

library.add(fas);
const App = () => {

  const [podcasts, setPodcasts] = useState([]);
  const [pagePodcasts, setPagePodcasts] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('soccer');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPodcasts();
  }, [query]);

  useEffect(() => {
    activePodcasts();
  }, [page, podcasts]);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
  };

  const getPodcasts = async () => {
    //console.log("Getting podcasts");
    setLoading(true);
    searchPodcast(query)
      .then(response => {
        //console.log(response.data.results);
        setPodcasts(splitEvery(10, response.data.results));
        setLoading(false);
      });
  };

  const activePodcasts = () => {
    setPagePodcasts(podcasts[page]);
  };

  //Missing add index in map
  return(
    <div className = "App">
      <div className="header">
        <h1>Poddy Web</h1>
      </div>
      <form onSubmit = {getSearch} className = "search-form">
        <input placeholder="Enter keyword" type="text" className = "input search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className = {classNames(["button search-button", {"is-loading":  loading}])}>Search
        </button>
      </form>
      <Pagination
        activePage={page}
        onNext = {() => setPage(page + 1)}
        onPrevious = {() => setPage(page - 1)}
        pageNumbers = {length(podcasts)}
      />
      <div className="podcasts">
        {pagePodcasts && pagePodcasts.map(podcast => (
          <Podcast
            podcast = {podcast}
            title = {podcast.collectionName}
            image = {podcast.artworkUrl100}
            imageHD = {podcast.artworkUrl600}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

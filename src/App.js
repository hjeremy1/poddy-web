import React, {useEffect, useState} from 'react';
import './App.scss';
import { searchPodcast } from './API/fetchUtils';
import { Podcast } from './components/podcast';
import { Modal } from './components/modal';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { splitEvery, length } from 'ramda';
import { Pagination } from './components/pagination';

library.add(fas);
const App = () => {

  const APP_ID = "ac943431";
  const API_KEY = "dbce69a030523e371788b46e136a5d31";
  const baseUrl = "https://api.edamam.com/";
  const apiSearch = "search";

  const [recipes, setRecipes] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [pagePodcasts, setPagePodcasts] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('soccer');
  const [page, setPage] = useState(0);

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
    console.log("Getting podcasts");
    searchPodcast(query)
      .then(response => {
        console.log(response.data.results);
        setPodcasts(splitEvery(10, response.data.results));
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
        <input placeholder="Enter keyword" type="text" className = "search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className = "search-button">Search
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

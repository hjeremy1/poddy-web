import axios from "axios";

const baseUrl = "https://itunes.apple.com/search";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const getUrl = api => (
  `${CORS_PROXY}${baseUrl}/${api}`
);

export const searchPodcast = query => (
  axios.get(getUrl("search"), {
    params: {
      entity:"podcast",
      term: query
    },
    headers:{
      'access-control-allow-origin': '*'
    }
  })
);
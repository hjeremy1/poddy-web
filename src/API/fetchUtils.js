import axios from "axios";

const baseUrl = "https://itunes.apple.com/search";

const getUrl = api => (
  `${baseUrl}/${api}`
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
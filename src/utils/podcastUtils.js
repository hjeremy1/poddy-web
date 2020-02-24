import Parser from "rss-parser";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const getProxyURL = feedUrl => {
  return `${CORS_PROXY}${feedUrl}`;
};

const parser = new Parser({
  customFields:{
        
  }
});

export const parseTrackLinks = async feedUrl => {
  //console.log(feedUrl);
  const feed = await parser.parseURL(getProxyURL(feedUrl));
  const tracks = [];
  //console.log(feed.items);
  feed.items.map(item => {
    item.enclosure 
    && tracks.push({
      title: item.title,
      url: item.enclosure.url
    });
  });

  return tracks;
};
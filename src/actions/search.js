import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var requestVideo = (q) => {
  return {
    type: 'FETCH_VIDEOS',
    videos: q
  }
};

var handleVideoSearch = (q) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  //return an anonymous function 
  return function(dispatch) { 
    
    dispatch(requestVideo(q));
    
    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    }
    
    return searchYouTube(options, console.log) //might need to change this later.
  };
}

export default handleVideoSearch;

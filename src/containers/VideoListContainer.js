import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

import changeVideoList from '../actions/videoList.js';


var mapStateToProps = function (state) { //the most updated state is passed in
  console.log(state, 'state');
  return { 
    videos: state.videoList
  };
};


var mapDispatchToProps = function(dispatch, props) {
  return {
    handleVideoListEntryTitleClick: () => {
      dispatch(changeVideo());
    }
  };
};



var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;

import Redux from 'redux';
import changeVideoList from '../actions/videoList.js';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    var currentState = Object.assign({}, state);
    currentState = action.videos;
    return currentState;
  }
  
  return state;
};

export default videoListReducer;

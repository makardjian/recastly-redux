import Redux from 'redux';
import changeVideo from '../actions/currentVideo.js';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  
  if (action.type === 'CHANGE_VIDEO') {
    var currentState = Object.assign({}, state)
    currentState = action.video;
    return currentState
  }
  
  return null;
  
};

export default currentVideoReducer;

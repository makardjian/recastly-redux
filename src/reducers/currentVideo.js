import Redux from 'redux';
import changeVideo from '../actions/currentVideo.js';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  
  if (action.type === 'CHANGE_VIDEO') {
    var newState = Object.assign({}, action.video); 
    return newState;
  }
  
  return state;
};

export default currentVideoReducer;

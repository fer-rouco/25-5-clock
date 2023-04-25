import { combineReducers } from 'redux';
import { UPDATE_CONTROLS_ACCESSIBILITY, UPDATE_LENGTH, UPDATE_RESET, UPDATE_START, UPDATE_STOP, UPDATE_TIME_LEFT } from "./actions";
import { DEFAULT_SESSION_LENGTH, toSeconds } from '../App';

export const TIMER_STATUS = {
  RUNNING: 0,
  PAUSED: 1,
  RESET: 2
}

const timer = (state = { timerStatus: TIMER_STATUS.PAUSED }, action) => {
  switch (action.type) {  
    case UPDATE_START:
      return { timerStatus: TIMER_STATUS.RUNNING };
    case UPDATE_STOP:
      return { timerStatus: TIMER_STATUS.PAUSED };
    case UPDATE_RESET:
      return { timerStatus: TIMER_STATUS.RESET };
    default:  
      return state;
  }  
}

const timeLeft = (state = toSeconds(DEFAULT_SESSION_LENGTH), action) => {
  switch (action.type) {
    case UPDATE_TIME_LEFT:
      return action.value;
    default:  
      return state;
  }  
}

const controlAccessibility = (state = false, action) => {
  switch (action.type) {
    case UPDATE_CONTROLS_ACCESSIBILITY:
      return action.value;
    default:  
      return state;
  }  
}

export default combineReducers({
  timer,
  timeLeft,
  controlAccessibility
});
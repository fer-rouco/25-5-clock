export const UPDATE_START = 'UPDATE_START';
export const UPDATE_STOP = 'UPDATE_STOP';
export const UPDATE_RESET = 'UPDATE_RESET';
export const UPDATE_TIME_LEFT = 'UPDATE_TIME_LEFT';
export const UPDATE_CONTROLS_ACCESSIBILITY = 'UPDATE_CONTROLS_ACCESSIBILITY';

export const updateToStartStatus = () => {
  return {
    type: UPDATE_START
  }
}

export const updateToStopStatus = () => {
  return {
    type: UPDATE_STOP
  }
}

export const updateToResetStatus = () => {
  return {
    type: UPDATE_RESET
  }
}

export const updateTimeLeft = (value) => {
  return {
    type: UPDATE_TIME_LEFT,
    value
  }
}

export const updateControlsAccessibility = (value) => {
  return {
    type: UPDATE_CONTROLS_ACCESSIBILITY,
    value
  }
}
import { connect } from "react-redux";
import { updateTimeLeft, updateToStopStatus } from "../actions";
import { App } from "../../App";

const mapStateToProps = (state) => {
  return {
    timerStatus: state.timer.timerStatus,
    timeLeft: state.timeLeft,
    controlAccessibility: state.controlAccessibility
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTimeLeft: (value) => {
      dispatch(updateTimeLeft(value))
    },
    stop: () => {
      dispatch(updateToStopStatus())
    }
  }
};

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
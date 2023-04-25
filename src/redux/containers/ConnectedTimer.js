import { connect } from "react-redux";
import { Timer } from "../../components/Timer";
import { updateToResetStatus, updateTimeLeft, updateControlsAccessibility } from "../actions";

const mapStateToProps = (state) => {
  return {
    timeLeft: state.timeLeft,
    controlAccessibility: state.controlAccessibility
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTimeLeft: (value) => {
      dispatch(updateTimeLeft(value))
    },
    updateControlsAccessibility: (value) => {
      dispatch(updateControlsAccessibility(value))
    },
    reset: () => {
      dispatch(updateToResetStatus())
    }
  }
};


export const ConnectedTimer = connect(mapStateToProps, mapDispatchToProps)(Timer);
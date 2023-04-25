import './App.scss';
import { useState, useEffect } from "react";
import { LengthControl } from "./components/LengthControl";
import { ConnectedTimer } from './redux/containers/ConnectedTimer';
import { TIMER_STATUS } from "./redux/reducers";

export const toSeconds = (minutes) => {
  return minutes * 60;
}

export const DEFAULT_SESSION_LENGTH = 25;
export const DEFAULT_BREAK_LENGTH = 5;

export const App = ({timeLeft, timerStatus, stop, updateTimeLeft, controlAccessibility}) => {
  const [breakLabelFlag, setBreakLabelFlag] = useState(false);
  const [breakLength, setBreakLength] = useState(DEFAULT_BREAK_LENGTH);
  const [sessionLength, setSessionLength] = useState(DEFAULT_SESSION_LENGTH);

  useEffect(() => {
    if (timeLeft > 0) {
      return;
    }

    setBreakLabelFlag((breakLabelFlagState) => { return !breakLabelFlagState; });
  }, [timeLeft]);

  useEffect(() => {
    updateTimeLeft(toSeconds((breakLabelFlag) ? breakLength : sessionLength));
  }, [breakLength, sessionLength, breakLabelFlag]);

  useEffect(() => {
    if (isTimerStatusReset()) {
      setBreakLength(DEFAULT_BREAK_LENGTH);
      setSessionLength(DEFAULT_SESSION_LENGTH);
      setBreakLabelFlag(false);
      stop();
    }
  }, [timerStatus]);

  const isTimerStatusReset = () => {
    return timerStatus === TIMER_STATUS.RESET;
  }

  const updateLength = (currentValue, valueToApplyMathOperation) => {
    if ((currentValue > 1 && currentValue < 60) ||
      (currentValue === 1 && valueToApplyMathOperation > 0) ||
      (currentValue === 60 && valueToApplyMathOperation < 0))
    {
      return currentValue + valueToApplyMathOperation;
    }
    return currentValue;
  }

  const breakChangeHandler = (valueToApplyMathOperation) => {
    setBreakLength((currentValue) => updateLength(currentValue, valueToApplyMathOperation));
  };

  const sessionChangeHandler = (valueToApplyMathOperation) => {
    setSessionLength((currentValue) => updateLength(currentValue, valueToApplyMathOperation));
  };

  const breakLabel = () => {
    return "Break";
  };

  const sessionLabel = () => {
    return "Session";
  };

  const lengthLabel = (prefix) => {
    return `${prefix} Length`;
  }

  const timerLabel = () => {
    return breakLabelFlag ? breakLabel() : sessionLabel();
  };

  return (
    <div className="app" >
      <div className="main-title" >25 + 5 Clock</div>
      <>
        <LengthControl idPrefix="break" label={lengthLabel(breakLabel())} disabled={controlAccessibility} length={breakLength} onChange={breakChangeHandler} ></LengthControl>
        <LengthControl idPrefix="session" label={lengthLabel(sessionLabel())} disabled={controlAccessibility} length={sessionLength} onChange={sessionChangeHandler} ></LengthControl>
      </>
      <>
        <ConnectedTimer label={timerLabel()} ></ConnectedTimer>
      </>
    </div>
  );
}

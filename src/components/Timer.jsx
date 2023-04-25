import './Timer.scss';
import { createRef, useEffect } from 'react';
import { DEFAULT_SESSION_LENGTH, toSeconds } from '../App';
import { TimerControl } from './TimerControl';

const ONE_SECOND_IN_MILLISECONDS = 1000;

export const Timer = ({ timeLeft, controlAccessibility, updateTimeLeft, updateControlsAccessibility, reset, label }) => {
  const timeout = { reference: null };
  const beepRef = createRef();

  useEffect(() => {
    if (timeLeft > 0) {
      return;
    }

    playBeep();
    clearTimeout(timeout.reference);
  }, [timeout, timeLeft]);

  useEffect(() => {
    if (!controlAccessibility) {
      return;
    }

    timeout.reference = setTimeout(
      () => { updateTimeLeft(--timeLeft); },
      ONE_SECOND_IN_MILLISECONDS
    );

    return () => {
      clearTimeout(timeout.reference);
    };
  }, [timeout, controlAccessibility]);

  const playBeep = () => {
    beepRef.current.play().catch((error) => console.error(error));
  }

  const pauseBeep = () => {
    beepRef.current.pause();
    beepRef.current.currentTime = 0;
  }

  const startStopHandler = () => {
    clearTimeout(timeout.reference);
    updateControlsAccessibility(!controlAccessibility);
  };

  const updateStatesToDefaultValues = () => {
    reset();
    updateTimeLeft(toSeconds(DEFAULT_SESSION_LENGTH));
    updateControlsAccessibility(false);
  }
  
  const resetHandler = () => {
    pauseBeep();
    clearTimeout(timeout.reference);
    updateStatesToDefaultValues();
  };

  const getTime = () => {
    const minutesLocal = parseInt(timeLeft / 60);
    const secondsLocal = timeLeft % 60;
    return { minutes: minutesLocal, seconds: secondsLocal };
  }

  const formatTimeLeft = () => {
    const pad = (val) => {
      let valString = val + "";
      if (valString.length < 2) {
        return `0${valString}`;
      } else {
        return valString;
      }    
    };

    const {minutes, seconds} = getTime();
    
    return `${pad(minutes)}:${pad(seconds)}`;
  }

  const formattedTimeLeft = formatTimeLeft();

  return (
    <>
    <div className="timer" >
      <div className="timer-wrapper">
        <div id="timer-label">{label}</div>
        <div id="time-left">{formattedTimeLeft}</div>
      </div>
    </div>
    <TimerControl onReset={resetHandler} onStartStop={startStopHandler} ></TimerControl>
    <audio id="beep" ref={beepRef} src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
    </>
  );
};

import { Button } from './Button';

export const TimerControl = ({ onReset, onStartStop }) => {
  return (
    <>
      <Button type="button" id="start_stop" onClick={onStartStop}>
        <i className="fa fa-play fa-2x"></i>
        <i className="fa fa-pause fa-2x"></i>
      </Button>
      <Button type="button" id="reset" onClick={onReset}>
        <i className="fa fa-refresh fa-2x"></i>
      </Button>
    </>
  );
};
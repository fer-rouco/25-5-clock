import './LengthControl.scss';
import React from "react";
import { Button } from "./Button";

export const LengthControl = ({ idPrefix, label, length, onChange, disabled }) => {
  const buildIdWithPrefix = (sufix) => {
    return `${(idPrefix) ? idPrefix : "length-control" }-${sufix}`
  }

  return (
    <div className="length-control" >
      <div className="label" id={buildIdWithPrefix('label')} >{label}</div>
      <div className="buttons-container" >
        <Button id={buildIdWithPrefix('decrement')} value="-" disabled={disabled} onClick={() => { onChange(-1); }} ><i className="fa fa-arrow-down fa-2x"></i></Button>
        <div id={buildIdWithPrefix('length')} >{length}</div>
        <Button id={buildIdWithPrefix('increment')} value="+" disabled={disabled} onClick={() => { onChange(1); }} ><i className="fa fa-arrow-up fa-2x"></i></Button>
      </div>
    </div>
  );
}
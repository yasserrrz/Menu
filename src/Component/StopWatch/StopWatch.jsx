import React, { useState, useEffect } from "react";
import $ from 'jquery'

export default function StopWatch({active}) {
  const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setIsActive(active);
  }, [active]);


  useEffect(() => {
    let interval = null;
    console.log()
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  return (
   
    <div className={"stop-watch  m-md-3 my-3 counter-box text-center rounded-3 "}>
      <div className="timer">
        <span className="digits">
          { ("0" + Math.floor((time / 60000) % 60)).slice(-2) }:
        </span>
        <span className="digits">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        </span>
       
      </div>
      </div>
    
  );
}

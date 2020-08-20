import React, { useEffect, useState } from "react";
import "./styles.css";

export const Clock = (props) => {
  const [seconds, setSeconds] = useState(0);

  const handleDate = () => {
    const date = new Date();
    let seconds = (date.getSeconds()+props.pointer) % 60;
    setSeconds(seconds);
  };

  useEffect(() => {
    setInterval(handleDate, 1000);
  });

  const secondsStyle = {
    transform: `rotate(${seconds*6}deg)`
  };
  return (
    <div>
    {props.pointer +1}
    <div className="clock">
      <div className="pointer" style={secondsStyle}></div>
    </div>
  <div>{seconds}</div>
    </div>
  );
};

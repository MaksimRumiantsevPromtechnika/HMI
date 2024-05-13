import React, { useState, useEffect } from 'react';

const Clock = () => {

  ////////Clock
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Extract the hours, minutes, and seconds from the current time
  const hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();;
  const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();;
  const seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();;

  // Format the time as a string
  const timeString = `${hours}:${minutes}:${seconds}`;
  ////////


  return (
    <>
      <div className="clock-icon"></div>
      <div className="time">{timeString}</div>
    </>
  );
}

export default Clock;
import React, { useState, useEffect } from 'react';

const Clock = () => {

  //Часы
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();;
  const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();;
  const seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();;
  const timeString = `${hours}:${minutes}:${seconds}`;
  return (
    <>
      <div className="clock-icon"></div>
      <div className="time">{timeString}</div>
    </>
  );
}

export default Clock;
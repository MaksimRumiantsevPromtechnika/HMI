import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import moment from 'moment/moment';
const CowLock = () => {
  const timerRef = useRef();
  const cowLock = useSelector(state => state.cow.cowLock)
  const currentMode = useSelector(state => state.mode.main)
  const [seconds, setSeconds] = useState(0);
  const [lock, setLock] = useState(false);
  useEffect(() => {
    if (currentMode == 9 && lock === false) {
      setLock(true)
      setSeconds(cowLock); // сброс таймера
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000); // запуск нового таймера
      return () => {
        clearInterval(timerRef.current);
      };
    }
  }, [currentMode]);

  useEffect(() => {
    if (seconds < 0) {
      setSeconds(0);
      clearInterval(timerRef.current);
    }
  }, [seconds]);

  let time = moment.utc(seconds * 1000).format('m:ss');
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className='timer'>
          <div className='timer-icon'>
          </div>
          <p className='timer-count'>{time}</p>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "50px" }}>
        <div className="status-cow-in-cell-bar">
          <div className="status-cow-close-icon home-status-icon" />
          <div className="cow-in-cell-id">1234</div>
        </div>
        <div className="status-milk-transport-bar" style={{ display: "flex", flexDirection: "column", alignItems: "cen" }}>
          <button className="milking-touch status-cow-milking-icon sidetouch"></button>
          <div className="double-milking" style={{ fontSize: "38px", width: "60px", marginLeft: "45px" }}>2X</div>
        </div>
      </div>
    </>
  );
}

export default CowLock;

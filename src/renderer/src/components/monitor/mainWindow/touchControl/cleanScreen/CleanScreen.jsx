import moment from "moment";
import { useEffect, useState } from "react";

const CleanScreen = ({ isOpen, onClose }) => {

  const [secondsRemaining, setSecondsRemaining] = useState(30);

  useEffect(() => {
    setSecondsRemaining(30)
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && secondsRemaining > 0) {
      const timer = setInterval(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
        console.log(22);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isOpen, secondsRemaining]);

  useEffect(() => {
    if (secondsRemaining === 0) {
      onClose();
    }
  }, [secondsRemaining, onClose]);

  const progressBarWidth = `${(30 - secondsRemaining) / 30 * 100}%`;

  return (
    <>
      <div className="cleaning-popup-main" style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="cleaning-popup-container">
          <h1 className="clean-main-h">Экран заблокирован!</h1>
          <p className="cleaning-message">
            Можете протереть его при помощи влажной салфетки.
          </p>
          <h2 className="clean-second-h">
            {" "}
            Не используйте абразивные или агрессивные чистящие средства!
          </h2>
          <div className="antenna-progress">
            <div className="progress-cl-value">Окончание блокировки</div>
            <div className="progress-cl-timer">{moment.utc(secondsRemaining * 1000).format('m:ss')}</div>
            <div className="progress-inner" style={{
              width: progressBarWidth,
              height: '100%',
              background: '#25be2c',
            }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CleanScreen;
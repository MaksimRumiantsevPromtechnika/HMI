import { useState } from "react";
import CleanScreen from "./cleanScreen/CleanScreen";
const poweroff = require('node-poweroff');
const { exec } = require('child_process');
const TouchControl = () => {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };


  const powerOff = () => {
    exec('shutdown -r now');
    // poweroff.reboot();
  }
  return (
    <>
      <div className="touch-bar">
        <div className="touch-bar-icons">
          <div className="clean-touch-bar">
            <div className="clean-touch-text">Заблокировать экран</div>
            <button className="clean-touch sidetouch" onClick={openPopup}></button>
          </div>
          {/* <div className="cleaning-popup-main hide">
            <div className="cleaning-popup-container">
              <h1 className="clean-main-h">Экран заблокирован!</h1>
              <p className="cleaning-message">Можете протереть его при помощи влажной салфетки.</p>
              <h2 className="clean-second-h"> Не используйте абразивные или агрессивные чистящие средства!</h2>
              <div className="progress">
                <div className="progress-cl-value">Окончание блокировки</div>
                <div className="progress-cl-timer">30</div>
                <div className="progress-inner"></div>
              </div>
            </div>
          </div> */}
          <div className="off-system-bar">
            <div className="off-system-text">Перезагрузить панель</div>
            <button className="off-system sidetouch" onClick={powerOff}></button>
          </div>
        </div>
      </div>
      <CleanScreen
        isOpen={isPopupOpen} onClose={closePopup}
      ></CleanScreen>
    </>
  );
}

export default TouchControl;
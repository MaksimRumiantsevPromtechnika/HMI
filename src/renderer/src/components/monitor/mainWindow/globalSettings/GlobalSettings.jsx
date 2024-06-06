import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTcpConnection from "../../../../services/tcpService";
import { toggleSpeed, updateSettings } from "../../../../store/mainSettingsReduser";
import NumPad from "../numPad/NumPad";
import NumPadPopup from "../numPadPopup/NumPadPopup";

const GlobalSettings = () => {

  const TcpConnecion = useTcpConnection()
  const dispatch = useDispatch()
  const [openPopup, setOpenPopup] = useState(false)
  const handleClose = () => {
    setOpenPopup(false);
  };

  const [currentSett, setCurrentSett] = useState()

  const handleOpen = (value, e) => {
    setOpenPopup(value);
    setCurrentSett(e.target.id)
    console.log(currentSett);
  }



  const globalSettings = useSelector(state => state.globalSettings)
  useEffect(() => {
    const jsonString = JSON.stringify(globalSettings.udrGlobalSettings);
    TcpConnecion.sendTcpData(`set_globalsettings(${jsonString})`)
    setTimeout(TcpConnecion.sendTcpData(`get_globalsettings()`), 200)
  }, [globalSettings.udrGlobalSettings])

  useEffect(() => {

  }, [globalSettings.realSettings.configurateParams])

  const handleChange = (value, currentSett) => {
    const inputValue = {
      value: value,
      id: currentSett
    }
    dispatch(updateSettings(inputValue))
  }
  const [isMoved, setIsMoved] = useState(false)
  const startMove = (movedElement) => {
    setIsMoved(true)
    TcpConnecion.sendTcpData(`${movedElement}()`);
    console.log(`${movedElement}()`);
  }

  const stoptMove = (movedElement) => {
    setIsMoved(false)
    TcpConnecion.sendTcpData(`${movedElement}()`);
    console.log(`${movedElement}()`);
  }
  const TcpConnection = useTcpConnection()
  return (
    <>
      <div className="arm-setting">
        <div className="main-setting-bar">
          <div className="top-setting-bar">
            <div className="setting-bar center-setting-bar">
              <div className="description-setting center-description">Центр бокса</div>
              <button className="top-setting-button sidetouch center-setting-start" onClick={() => TcpConnection.sendTcpData("move_tostdpos(2)")}></button>
              <button className="top-setting-button sidetouch center-setting-save"></button>
              <button className="top-setting-button sidetouch center-setting-clear"></button>
            </div>
            <div className="setting-bar into-setting-bar">
              <div className="description-setting into-description">Промывка</div>
              <button className="top-setting-button sidetouch into-button into-setting-start" onClick={() => TcpConnection.sendTcpData("move_tostdpos(1)")}></button>
              <button className="top-setting-button sidetouch into-button into-setting-save"></button>
              <button className="top-setting-button sidetouch into-button into-setting-clear"></button>
            </div>
            <div className="setting-bar under-setting-bar">
              <div className="description-setting bottom-description">Ополаскивание</div>
              <button className="top-setting-button sidetouch under-setting-start" onClick={() => TcpConnection.sendTcpData("move_tostdpos(1)")}></button>
              <button className="top-setting-button sidetouch under-setting-save"></button>
              <button className="top-setting-button sidetouch under-setting-clear"></button>
            </div>
          </div>
          <div className="arm-setting-bar">
            <div className="side-setting-arm-bar">
              <button id="move_up" className="arm-setting-button side-setting-arm-button arm-setting-up"
                onTouchStart={(e) => startMove(e.target.id)}
                onTouchEnd={() => stoptMove('move_stopz')}
                onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopz') : ""}
                onMouseDown={(e) => startMove(e.target.id)}
                onMouseUp={() => stoptMove('move_stopz')}
                onMouseOut={() => (isMoved === true) ? stoptMove('move_stopz') : ""}></button>
              <button id="move_down" className="arm-setting-button side-setting-arm-button arm-setting-down"
                onMouseDown={(e) => startMove(e.target.id)}
                onMouseUp={() => stoptMove('move_stopz')}
                onMouseOut={() => (isMoved === true) ? stoptMove('move_stopz') : ""}
                onTouchStart={(e) => startMove(e.target.id)}
                onTouchEnd={() => stoptMove('move_stopz')}
                onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopz') : ""}></button>
              <div className="speed-setting">
                <button className={globalSettings.realSettings.armSlowSpeed ? "arm-setting-speed-active arm-button sidetouch side-arm-button arm-slow" : "arm-button sidetouch side-arm-button arm-fast arm-setting-speed-active"} onClick={() => { dispatch(toggleSpeed()) }}></button>
              </div>
            </div>
            <div className="cross-setting-arm-bar">
              <div className="top-setting-cross">
                <button
                  id="move_left" className="arm-setting-button sidetouch cross-setting-button top-setting-cross-button"
                  onMouseDown={(e) => startMove(e.target.id)}
                  onMouseUp={() => stoptMove('move_stopl')}
                  onMouseOut={() => (isMoved === true) ? stoptMove('move_stopl') : ""}
                  onTouchStart={(e) => startMove(e.target.id)}
                  onTouchEnd={() => stoptMove('move_stopl')}
                  onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopl') : ""}></button>
              </div>
              <div className="middle-setting-cross">
                <button
                  id="move_rotateright" className="arm-setting-button sidetouch cross-setting-button left-setting-cross-button"
                  onMouseDown={(e) => startMove(e.target.id)}
                  onMouseUp={() => stoptMove('move_stopq')}
                  onMouseOut={() => (isMoved === true) ? stoptMove('move_stopq') : ""}
                  onTouchStart={(e) => startMove(e.target.id)}
                  onTouchEnd={() => stoptMove('move_stopq')}
                  onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopq') : ""}></button>
                <div className="cross-setting-cow"></div>
                <button
                  id="move_rotateleft" className="arm-setting-button sidetouch cross-setting-button right-setting-cross-button"
                  onMouseDown={(e) => startMove(e.target.id)}
                  onMouseUp={() => stoptMove('move_stopq')}
                  onMouseOut={() => (isMoved === true) ? stoptMove('move_stopq') : ""}
                  onTouchStart={(e) => startMove(e.target.id)}
                  onTouchEnd={() => stoptMove('move_stopq')}
                  onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopq') : ""}></button>
              </div>
              <div className="bottom-setting-cross">
                <button
                  id="move_right" className="arm-setting-button sidetouch cross-setting-button bottom-setting-cross-button"
                  onMouseDown={(e) => startMove(e.target.id)}
                  onMouseUp={() => stoptMove('move_stopl')}
                  onMouseOut={() => (isMoved === true) ? stoptMove('move_stopl') : ""}
                  onTouchStart={(e) => startMove(e.target.id)}
                  onTouchEnd={() => stoptMove('move_stopl')}
                  onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopl') : ""}></button>
              </div>
            </div>
          </div>
        </div>
        <div className="setting-field">
          <div className="configuration-field">
            <div className="configuration-item">
              <div className="configuration-item-name">Задержка отсоединения, сек</div>
              <input id="secondSet" readOnly value={globalSettings.realSettings.detachmentDelay} className="configuration-item-button input-button" onClick={(e) => handleOpen(true, e)}></input>
            </div>
            <div className="configuration-item">
              <div className="configuration-item-name">Корректировка по горизонтали X, мм</div>
              <input id="seventhSet" readOnly value={globalSettings.realSettings.xOffset} className="configuration-item-button input-button" onClick={(e) => handleOpen(true, e)}></input>
            </div>
            <div className="configuration-item">
              <div className="configuration-item-name">Корректировка по горизонтали, мм</div>
              <input id="seventhSet" readOnly value={globalSettings.realSettings.yOffset} className="configuration-item-button input-button" onClick={(e) => handleOpen(true, e)}></input>
            </div>
            <div className="configuration-item">
              <div className="configuration-item-name">Корректировка по вертикали, мм</div>
              <input id="eigthSet" readOnly value={globalSettings.realSettings.zOffset} className="configuration-item-button input-button" onClick={(e) => handleOpen(true, e)}></input>
            </div>

          </div>
          <div className="configuration-buttons">
            <button className="configuration-button sidetouch configuration-done"></button>
            <button className="configuration-button sidetouch configuration-cancel"></button>
          </div>
        </div>
      </div>
      <NumPadPopup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        onClose={handleClose}
        currentSett={currentSett}
      >
        <NumPad
          handleChange={handleChange}
          currentSett={currentSett}
          handleClose={handleClose}
        ></NumPad>
      </NumPadPopup>
    </>
  );
}

export default GlobalSettings;

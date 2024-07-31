import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTcpConnection from "../../../../services/tcpService";
import { toggleSpeed, updateSettings } from "../../../../store/mainSettingsReduser";
import CrossBar from "../../../../utilites/crossBar";
import NumPad from "../numPad/NumPad";
import NumPadPopup from "../numPadPopup/NumPadPopup";

const GlobalSettings = () => {
  const configurator = useSelector(state => state.configurator)
  const TcpConnecion = useTcpConnection()
  const dispatch = useDispatch()
  const [openPopup, setOpenPopup] = useState(false)
  const handleClose = () => {
    setOpenPopup(false);
  };
  const toggleSpeed = (data) => {
    TcpConnecion.sendTcpData(`set_arm_speed(${data})`)
  }
  const [currentSett, setCurrentSett] = useState()

  const handleOpen = (value, e) => {
    setOpenPopup(value);
    setCurrentSett(e.target.id)
  }



  const globalSettings = useSelector(state => state.globalSettings)
  const mode = useSelector(state => state.mode)

  useEffect(() => {

  }, [globalSettings.realSettings.configurateParams])

  const handleChange = (value, currentSett) => {
    const inputValue = {
      value: value,
      id: currentSett
    }
    dispatch(updateSettings(inputValue))
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
          <CrossBar></CrossBar>
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

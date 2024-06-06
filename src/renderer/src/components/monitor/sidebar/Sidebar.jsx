import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { start } from 'xstate/lib/actions';
import useTcpConnection from '../../../services/tcpService';
import { changeModeAction } from '../../../store/hmiMode';
import CowLock from './CowLock/CowLock';
import HmiMode from './HmiMode/HmiMode';
import MilkMode from './MilkMode/MilkMode';


const Sidebar = ({ toggleTab, toggleTabInfo, setMode, handleModeChange, connection }) => {
  const cowInfo = useSelector(state => state.cow.cowInfo)
  const [modePopup, setModePopup] = useState(false)
  const modePopupClose = () => {
    setModePopup(false);
  };

  const [separateMode, setSeparateMode] = useState(0)
  const toggleSeparateStatus = () => {
    const newValue = separateMode === 0 ? 1 : 0;
    setSeparateMode(newValue);
    console.log(newValue);
    TcpConnection.sendTcpData(`separate_cow(${newValue.toString()})`)
  };

  const mode = useSelector(state => state.mode.mode)
  const dispatch = useDispatch()
  const changeMode = (value) => {
    TcpConnection.sendTcpData(`set_mode_${value.toString()}()`)
  }

  const modeList = {
    1: "play",
    2: "pause",
    3: "stop"
  }

  const changeDestination = (value) => {
    TcpConnection.sendTcpData(`set_milkdestination(${value})`)
    // setTimeout(TcpConnection.sendTcpData(`get_cowparameters()`, 250))
  }

  const lockCow = (value) => {
    TcpConnection.sendTcpData(`lock_cow(${value})`)
    // setTimeout(TcpConnection.sendTcpData(`get_cowparameters()`, 250))
  }

  // const sendMode = (value) => {
  //   if (connection) {
  //     connection.write(`set_mode_${value}()`);
  //     console.log(`set_mode_${value}()`);
  //     // connection.write("get_all_state()")
  //   }
  // }

  const TcpConnection = useTcpConnection()

  const handleModeOpen = (value) => {
    setModePopup(value);
  }

  const [modeMilkPopup, setModeMilkPopup] = useState(false)
  const modeMilkPopupClose = () => {
    setModeMilkPopup(false);
  };
  const handleModeMilkOpen = (value) => {
    setModeMilkPopup(value);
  }

  const [lockCowPopup, setLockCowPopup] = useState(false)
  const lockCowPopupClose = () => {
    setLockCowPopup(false);
  };
  const handleLockCow = (value) => {
    setLockCowPopup(value);
  }

  return (
    <>
      <div className="side-bar">
        <div className="mode-select">
          <button className={`side-bar-button sidetouch mode-select-button mode-${modeList[mode]} mode-active`} onClick={() => handleModeOpen(true)}></button>
        </div>
        <button className="side-bar-button sidetouch alarm-button medium" id="tab__content_info" value="info-page" onClick={() => { toggleTab(2); toggleTabInfo(3) }}></button>
        <button className="side-bar-button sidetouch button-close-cow-exit" onClick={() => handleLockCow(true)}></button>
        <button className="side-bar-button sidetouch button-feed"
          onTouchStart={(e) => TcpConnection.sendTcpData("set_on(0)")}
          onTouchEnd={() => TcpConnection.sendTcpData("set_off(0)")}>
        </button>
        <button className={separateMode === 0 ? "side-bar-button sidetouch button-separate" : "separeate side-bar-button sidetouch button-separate"} onClick={toggleSeparateStatus}></button>
        <button className="side-bar-button sidetouch button-milk-action-select" onClick={() => handleModeMilkOpen(true)}></button>
        <button className="side-bar-button sidetouch button-open-cell" onClick={() => TcpConnection.sendTcpData("get_bucket_info()")}></button>
      </div>
      <HmiMode
        changeMode={changeMode}
        // sendMode={sendMode}
        modePopup={modePopup}
        modePopupClose={modePopupClose}
      >
      </HmiMode>
      <MilkMode
        changeDestination={changeDestination}
        modeMilkPopup={modeMilkPopup}
        modeMilkPopupClose={modeMilkPopupClose}
      >
      </MilkMode>
      <CowLock
        lockCow={lockCow}
        lockCowPopup={lockCowPopup}
        lockCowPopupClose={lockCowPopupClose}
      >
      </CowLock>
    </>
  );
}

export default Sidebar;
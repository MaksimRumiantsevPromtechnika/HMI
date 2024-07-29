import MainWindow from "./mainWindow/MainWindow";
import Sidebar from "./sidebar/Sidebar";
import React, { useState } from 'react';


const Monitor = ({ connection, connectChange }) => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [toggleStateInfo, setToggleStateInfo] = useState(1)
  const toggleTabInfo = (index) => {
    setToggleStateInfo(index)
  }

  const [toggleStateControl, setToggleStateControl] = useState(1)
  const toggleTabControl = (index) => {
    setToggleStateControl(index)
  }

  const [toggleStateSetting, setToggleStateSetting] = useState(1)
  const toggleTabSetting = (index) => {
    setToggleStateSetting(index)
  }

  return (
    <div className="monitor">
      <MainWindow
        connectChange={connectChange}
        connection={connection}
        toggleState={toggleState} toggleTab={toggleTab}
        toggleStateInfo={toggleStateInfo} toggleTabInfo={toggleTabInfo}
        toggleStateControl={toggleStateControl} toggleTabControl={toggleTabControl}
        toggleStateSetting={toggleStateSetting} toggleTabSetting={toggleTabSetting}
      />
      <Sidebar toggleTab={toggleTab}
        connection={connection}
        toggleTabInfo={toggleTabInfo}
      />
    </div>
  );
}

export default Monitor;

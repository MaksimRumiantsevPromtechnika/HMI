import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AlarmInfo from './alarmInfo/AlarmInfo';
import Calibration from './calibration/calibration';
import CleanControl from './cleanControl/CleanControl';
import Clock from './clock/Clock';
import GlobalSettings from './globalSettings/GlobalSettings';
import MainRobotPages from './mainRobotPages/MainRobotPages';
import MilkControl from './milkControl/MilkControl';
import MilkInfo from './milkInfo/MilkInfo';
import MilkPathControl from './milkPathControl/MilkPathControl';
import SamplerControl from './samplerControl/SamplerControl';
import Sheme from './sheme/Sheme';
import TouchControl from './touchControl/TouchControl';
import WashInfo from './washInfo/WashInfo';
//Переключение между табулами
const MainWindow = ({ toggleState, toggleTab, toggleStateInfo, toggleTabInfo, toggleStateControl, toggleTabControl, toggleStateSetting, toggleTabSetting, mode, connection, connectChange }) => {
  const accessRights = useSelector(state => state.mode.accessRights)

  return (
    <div className="main">
      <div className="tabs" id="tabs1">
        <div className='tab_bar'>
          <div className="tab__navigation">
            <div className="home">
              <button className={toggleState === 1 ? "tab home-page tab_active" : "tab home-page"} id="home-page"
                onClick={() => toggleTab(1)}>
              </button>
            </div>
            <div className="info">
              <button className={toggleState === 2 ? "tab info-page tab_active" : "tab info-page"} id="info-page"
                onClick={() => toggleTab(2)}>
              </button>
            </div>
            <div className="control">
              <button className={toggleState === 3 ? "tab control-page tab_active" : "tab control-page"} id="control-page"
                onClick={() => toggleTab(3)}>
              </button>
            </div>
            <div className={accessRights === 0 ? "setting hide-settings" : "setting"}>
              <button className={toggleState === 4 ? "tab setting-page tab_active" : "tab setting-page"} id="setting-page"
                onClick={() => toggleTab(4)}>
              </button>
            </div>
          </div>
          <div className="clock-bar">
            <Clock></Clock>
          </div>
        </div>
        <div className={toggleState === 1 ? "tab__content tab-content-home tab__content_active" : "tab__content tab-content-home"}>
          <MainRobotPages></MainRobotPages>
        </div>
        <div className={toggleState === 2 ? "tab__content tab__content_active" : "tab__content"} id="tab-info">
          <div className="untabs" id="untabs2">
            <div className="untab__navigation">
              <div className="yield">
                <div className={toggleStateInfo === 1 ? "untab milk-yield-statistics untab_active" : "untab milk-yield-statistics"}
                  onClick={() => toggleTabInfo(1)}>
                </div>
              </div>
              <div className="clean-stat">
                <div className={toggleStateInfo === 2 ? "untab cleaning-statistics untab_active" : "untab cleaning-statistics"}
                  onClick={() => toggleTabInfo(2)}>
                </div>
              </div>
              <div className="alarm-stat">
                <div className={toggleStateInfo === 3 ? "untab alarm-statistics untab_active" : "untab alarm-statistics"}
                  onClick={() => toggleTabInfo(3)}>
                </div>
              </div>
            </div>
            <div className={toggleStateInfo === 1 ? "untab__content untab__content_active" : "untab__content"}>
              <MilkInfo />
            </div>
            <div className={toggleStateInfo === 2 ? "untab__content untab__content_active" : "untab__content"}>
              <WashInfo />
            </div>
            <div className={toggleStateInfo === 3 ? "untab__content untab__content_active alarm-statistics-content" : "untab__content alarm-statistics-content"}>
              <AlarmInfo></AlarmInfo>
            </div>
          </div>
        </div>
        <div className={toggleState === 3 ? "tab__content tab__content_active" : "tab__content"}>
          <div className="untabs" id="untabs2">
            <div className="untab__navigation">
              <div className="clean-contr-container">
                <div className={toggleStateControl === 1 ? "untab cleaning-control untab_active" : "untab cleaning-control"}
                  onClick={() => toggleTabControl(1)}></div>
              </div>
              <div className="sampler-container">
                <div className={toggleStateControl === 2 ? "untab sampler untab_active" : "untab sampler"}
                  onClick={() => toggleTabControl(2)}></div>
              </div>
              <div className="milking-setting-container">
                <div className={toggleStateControl === 3 ? "untab milking-setting untab_active" : "untab milking-setting"}
                  onClick={() => toggleTabControl(3)}></div>
              </div>
              <div className="milking-path-container">
                <div className={toggleStateControl === 4 ? "untab milking-path-setting untab_active" : "untab milking-path-setting"}
                  onClick={() => toggleTabControl(4)}></div>
              </div>
              <div className="touch-container">
                <div className={toggleStateControl === 5 ? "untab touchscreen-setting untab_active" : "untab touchscreen-setting"}
                  onClick={() => toggleTabControl(5)}></div>
              </div>
            </div>
            <div className={toggleStateControl === 1 ? "untab__content untab__content_active" : "untab__content"}>
              <CleanControl />
            </div>
            <div className={toggleStateControl === 2 ? "untab__content untab__content_active" : "untab__content"}>
              <SamplerControl />
            </div>
            <div className={toggleStateControl === 3 ? "untab__content untab__content_active" : "untab__content"}>
              <MilkControl />
            </div>
            <div className={toggleStateControl === 4 ? "untab__content untab__content_active" : "untab__content"}>
              <MilkPathControl />
            </div>
            <div className={toggleStateControl === 5 ? "untab__content untab__content_active" : "untab__content"}>
              <TouchControl />
            </div>
          </div>
        </div>
        <div className={toggleState === 4 ? "tab__content tab__content_active" : "tab__content"}>
          <div className="untabs" id="untabs3">
            <div className="untab__navigation">
              <div className="scheme-container">
                <div className={toggleStateSetting === 1 ? "untab scheme untab_active" : "untab scheme"}
                  onClick={() => toggleTabSetting(1)}><p>ТЕСТ</p></div>
              </div>
              <div className="global-containter">
                <div className={toggleStateSetting === 2 ? "untab global-setting untab_active" : "untab global-setting"}
                  onClick={() => toggleTabSetting(2)}></div>
              </div>
              <div className="version-container">
                <div className={toggleStateSetting === 3 ? "untab version untab_active" : "untab version"}
                  onClick={() => toggleTabSetting(3)}></div>
              </div>
              <div className="calibration-container">
                <div className={toggleStateSetting === 4 ? "untab calibration untab_active" : "untab calibration"}
                  onClick={() => toggleTabSetting(4)}></div>
              </div>
            </div>
            <div className={toggleStateSetting === 1 ? "untab__content untab__content_active" : "untab__content"}>
              <Sheme
                mode={mode}
                connectChange={connectChange}
                connection={connection}
              />
            </div>
            <div className={toggleStateSetting === 2 ? "untab__content untab__content_active" : "untab__content"}>
              <GlobalSettings />
            </div>
            <div className={toggleStateSetting === 3 ? "untab__content untab__content_active" : "untab__content"}>
              3 вкладка
            </div>
            <div className={toggleStateSetting === 4 ? "untab__content untab__content_active" : "untab__content"}>
              <Calibration></Calibration>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainWindow;
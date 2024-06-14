import { useDispatch, useSelector } from "react-redux";
import useTcpConnection from "../../../../../services/tcpService";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { PureComponent, useEffect, useState } from 'react';
import MilkCups from "./cupStatus/cupStatus";
import { toggleMilking } from "../../../../../store/hmiMode";
import { clearData } from "../../../../../store/milkingReducer";

const Milking = () => {
  const TcpConnection = useTcpConnection()
  const dispatch = useDispatch()
  const cowInfo = useSelector(state => state.cow.cowInfo)
  const main = useSelector(state => state.mode.main)
  const milkingInfo = useSelector(state => state.milking.milkingList)
  const milkVocaburary = useSelector(state => state.milking.cupsStatus)
  const [modeMilkPopup, setModeMilkPopup] = useState(false)
  const pastPath = useSelector(state => state.milking.pastPath)
  const milkLength = useSelector(state => state.milking.Milklength)
  const modeMilkPopupClose = () => {
    setModeMilkPopup(false);
  };
  const [currentCup, setCurrentCup] = useState()
  const handleModeMilkOpen = (value, e) => {
    setModeMilkPopup(value);
    setCurrentCup(e.target.id)
  }
  // useEffect(() => {
  //   dispatch(clearData())
  // }, [cowInfo.id])

  return (
    <>
      <div className="graphics-container">
        <div className="graphics-left-bar" style={{ width: "280px" }}>
          <div className="graphics-tanker-container" style={{ width: "280px" }}>
            <div className="graphics-icon graphics-tanker" style={{ display: (cowInfo.milkDestination === 0 && (milkingInfo.length - 1) >= 0 && (milkingInfo[milkingInfo.length - 1].milk).toFixed(1) > 0 ? "" : "none") }} />
            <div className="graphics-icon graphics-backet" style={{ backgroundPosition: "center", display: ((cowInfo.milkDestination === 1 || ((milkingInfo.length - 1) >= 0 && (milkingInfo[milkingInfo.length - 1].milk).toFixed(1) == 0) || (milkingInfo.length) == 0) ? "" : "none"), marginRight: "12px" }} />
            <div className="graphics-icon graphics-drain" style={{ backgroundPosition: "center", display: ((cowInfo.milkDestination === 2 && (milkingInfo.length - 1) >= 0 && (milkingInfo[milkingInfo.length - 1].milk).toFixed(1) > 0) ? "" : "none") }} />
            <div className="graphics-tanker-value">{milkingInfo.length == 0 ? "0,0" : (((milkingInfo[milkingInfo.length - 1].milk).toFixed(1) / 30).toFixed(1)).replace(".", ",")}</div>
          </div>
          <div className="graphics-cow-container">
            <div className="gaphics-cow-left-buttons" style={{ backgroundColor: "red", marginBottom: "120px" }}>
              <div>
                <div><p>0:00</p></div>
                <button id={4} className={`graphics-cup-button sidetouch graphics-cow-left-top-button ${milkingInfo.length == 0 ? "not_attached" : milkVocaburary[milkingInfo[milkingInfo.length - 1].stat4]}`} onClick={(e) => handleModeMilkOpen(true, e)} />
              </div>
              <div>
                <button id={2} className={`graphics-cup-button sidetouch graphics-cow-left-bottom-button ${milkingInfo.length == 0 ? "not_attached" : milkVocaburary[milkingInfo[milkingInfo.length - 1].stat2]}`} onClick={(e) => handleModeMilkOpen(true, e)} />
                <div><p>0:00</p></div>
              </div>
            </div>
            <div className="graphics-cow-icon" />
            <div className="graphics-cow-right-buttons">
              <button id={3} className={`graphics-cup-button sidetouch graphics-cow-right-top-button ${milkingInfo.length == 0 ? "not_attached" : milkVocaburary[milkingInfo[milkingInfo.length - 1].stat3]}`} onClick={(e) => handleModeMilkOpen(true, e)} />
              <button id={1} className={`graphics-cup-button sidetouch graphics-cow-right-bottom-button ${milkingInfo.length == 0 ? "not_attached" : milkVocaburary[milkingInfo[milkingInfo.length - 1].stat1]}`} onClick={(e) => handleModeMilkOpen(true, e)} />
            </div>
          </div>
          <div className="buttonsOfGr">
            <button className="demoGr">Demo Start</button>
            <button className="stopGr">Stop</button>
          </div>
        </div>
        <div className="gr-cup-milk-mode-div">
          <div className="gr-cup-milk-mode-content">
            <button className="milk-cup-mode-button sidetouch do-not-milk-mode" />
            <button className="milk-cup-mode-button sidetouch remove-cup-mode" />
            <button className="milk-cup-mode-button sidetouch milk-flow-mode" />
            <button className="milk-cup-mode-button sidetouch cancel-acr-mode" />
            <button className="milk-cup-mode-button sidetouch milk-cup-mode-close" />
          </div>
        </div>
        <div className="graph-container">
          <div className="three-graphs">
            <ResponsiveContainer width="100%" height={137}>
              <LineChart
                width={500}
                height={300}
                data={milkingInfo}
                isAnimationActive={false}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" interval={10} />
                <YAxis tick={props => <text {...props} visibility="hidden" domain={[0, "auto"]} />} />
                <Tooltip hide="true" />
                <Line dataKey="vak1" stroke="#ed1c24" isAnimationActive={false} dot={false} />
                <Line dataKey="vak2" stroke="#00a2e8" isAnimationActive={false} dot={false} jointType="stepAfter" />
                <Line dataKey="vak3" stroke="#ffc90e" isAnimationActive={false} dot={false} />
                <Line dataKey="vak4" stroke="#22b14c" isAnimationActive={false} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <ResponsiveContainer width="100%" height={381}>
            <LineChart
              width={500}
              height={300}
              data={milkingInfo}
              isAnimationActive={false}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" interval={4} />
              <YAxis tick={props => <text {...props} visibility="hidden" />} />
              <Tooltip hide="true" />
              <Line dataKey="flow1" stroke="#ed1c24" isAnimationActive={false} dot={false} />
              <Line dataKey="flow2" stroke="#00a2e8" isAnimationActive={false} dot={false} jointType="stepAfter" />
              <Line dataKey="flow3" stroke="#ffc90e" isAnimationActive={false} dot={false} />
              <Line dataKey="flow4" stroke="#22b14c" isAnimationActive={false} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <button className="button graph-swap sidetouch" onClick={() => dispatch(toggleMilking())} />
        </div>
      </div>
      <MilkCups
        modeMilkPopup={modeMilkPopup}
        modeMilkPopupClose={modeMilkPopupClose}
        currentCup={currentCup}
      >
      </MilkCups>
    </>
  );
}

export default Milking;
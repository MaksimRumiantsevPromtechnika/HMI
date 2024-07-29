import { useDispatch, useSelector } from "react-redux";
import useTcpConnection from "../../../../../services/tcpService";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { PureComponent, useEffect, useState } from 'react';
import { toggleMilking } from "../../../../../store/hmiMode";
import { clearData } from "../../../../../store/milkingReducer";

const MilkingReport = ({ reportStatusClose, reportStatus }) => {
  const reportData = useSelector(state => state.milkReport.reportInfo)
  const main = useSelector(state => state.mode.main)
  const milkVocaburary = useSelector(state => state.milking.cupsStatus)
  const modeMilkPopupClose = () => {
    setModeMilkPopup(false);
  };
  const [currentCup, setCurrentCup] = useState()
  const handleModeMilkOpen = (value, e) => {
    setModeMilkPopup(value);
    setCurrentCup(e.target.id)
  }

  // Получаем данные из состояния Redux
  const flow1 = useSelector(state => state.milkReport.reportInfo.flow1);
  const flow2 = useSelector(state => state.milkReport.reportInfo.flow2);
  const flow3 = useSelector(state => state.milkReport.reportInfo.flow3);
  const flow4 = useSelector(state => state.milkReport.reportInfo.flow4);

  const vak1 = useSelector(state => state.milkReport.reportInfo.vak1);
  const vak2 = useSelector(state => state.milkReport.reportInfo.vak2);
  const vak3 = useSelector(state => state.milkReport.reportInfo.vak3);
  const vak4 = useSelector(state => state.milkReport.reportInfo.vak4);

  const maxLength = Math.max(flow1.length, flow2.length, flow3.length, flow4.length);
  const flowData = Array.from({ length: maxLength }, (_, index) => ({
    index,
    flow1: flow1[index] !== undefined ? flow1[index] : null,
    flow2: flow2[index] !== undefined ? flow2[index] : null,
    flow3: flow3[index] !== undefined ? flow3[index] : null,
    flow4: flow4[index] !== undefined ? flow4[index] : null,
  }));

  const vakData = Array.from({ length: maxLength }, (_, index) => ({
    index,
    vak1: vak1[index] !== undefined ? vak1[index] : null,
    vak2: vak2[index] !== undefined ? vak2[index] : null,
    vak3: vak3[index] !== undefined ? vak3[index] : null,
    vak4: vak4[index] !== undefined ? vak4[index] : null,
  }));

  return (
    <>
      <div className="graphics-container" style={{ display: reportStatus ? "" : "none" }}>
        <div className="graphics-left-bar" style={{ width: "280px" }}>
          <div className="graphics-tanker-container" style={{ width: "280px" }}>
            <div className="graphics-icon graphics-tanker" style={{ display: (reportData.milkDestination === 0) ? "" : "none" }} />
            <div className="graphics-icon graphics-backet" style={{ backgroundPosition: "center", display: (reportData.milkDestination === 1) ? "" : "none" }} />
            <div className="graphics-icon graphics-drain" style={{ backgroundPosition: "center", display: (reportData.milkDestination === 2) ? "" : "none" }} />
            <div className="graphics-tanker-value">{!reportData.milk ? "0,0" : (((reportData.milk)).toFixed(1)).replace(".", ",")}</div>
          </div>
          <div className="graphics-cow-container">
            <div className="gaphics-cow-left-buttons">
              <button id={4} className={`graphics-cup-button sidetouch graphics-cow-left-top-button ${!reportData.stat4 ? "not_attached" : milkVocaburary[reportData.stat4]}`} onClick={(e) => handleModeMilkOpen(true, e)} />
              <button id={2} className={`graphics-cup-button sidetouch graphics-cow-left-bottom-button ${!reportData.stat2 ? "not_attached" : milkVocaburary[reportData.stat2]}`} onClick={(e) => handleModeMilkOpen(true, e)} />
            </div>
            <div className="graphics-cow-icon" />
            <div className="graphics-cow-right-buttons">
              <button id={3} className={`graphics-cup-button sidetouch graphics-cow-right-top-button ${!reportData.stat3 ? "not_attached" : milkVocaburary[reportData.stat3]}`} onClick={(e) => handleModeMilkOpen(true, e)} />
              <button id={1} className={`graphics-cup-button sidetouch graphics-cow-right-bottom-button ${!reportData.stat1 ? "not_attached" : milkVocaburary[reportData.stat1]}`} onClick={(e) => handleModeMilkOpen(true, e)} />
            </div>
          </div>
        </div>
        <div className="graph-container">
          <div className="three-graphs">
            <ResponsiveContainer width="100%" height={137}>
              <LineChart
                width={500}
                height={300}
                data={vakData}
                isAnimationActive={false}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="index" interval={19} />
                <YAxis tick={props => <text {...props} visibility="hidden" domain={[0, "auto"]} />} />
                <Tooltip hide="true" />
                <Line dataKey="vak1" stroke="#ed1c24" isAnimationActive={false} dot={false} />
                <Line dataKey="vak2" stroke="#00a2e8" isAnimationActive={false} dot={false} jointType="stepAfter" />
                <Line dataKey="vak3" stroke="#ffc90e" isAnimationActive={false} dot={false} />
                <Line dataKey="vak4" stroke="#22b14c" isAnimationActive={false} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <ResponsiveContainer width="100%" height={371}>
            <LineChart
              width={500}
              height={300}
              data={flowData}
              isAnimationActive={false}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="index" interval={19} />
              <YAxis type="number" tick={props => <text {...props} visibility="hidden" />} />
              <Tooltip hide="true" />
              <Line dataKey="flow1" stroke="#ed1c24" isAnimationActive={false} dot={false} />
              <Line dataKey="flow2" stroke="#00a2e8" isAnimationActive={false} dot={false} jointType="stepAfter" />
              <Line dataKey="flow3" stroke="#ffc90e" isAnimationActive={false} dot={false} />
              <Line dataKey="flow4" stroke="#22b14c" isAnimationActive={false} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <button className="button graph-swap sidetouch" style={{ bottom: "14px", right: "94px" }} onClick={() => reportStatusClose()} />
        </div>
      </div>
    </>
  );
}

export default MilkingReport;
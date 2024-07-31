import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WashReport = ({ reportStatusClose, reportStatus }) => {
  const [AcidWashTime, setAcidWashTime] = useState();
  const reportData = useSelector(state => state.washReport.reportInfo)
  const washTypeList = useSelector(state => state.washReport.washTypeList)
  const washType = reportData.washType
  const currentStage = reportData.lastStage
  const success = reportData.washResult
  const stageTimeLeft = reportData.stageTimeLeft
  const totalTimeLeft = reportData.totalTimeLeft
  const stageTime = reportData.stageTime
  const totalTime = reportData.totalTime
  // const currentWash = useSelector(state => state.washInfo.currentWash)
  const [AcidStageTime, setAcidStageTime] = useState();
  const send = () => {
  }
  const currentWash = washTypeList[washType]
  const stagesData = {
    acid: [
      "status-icon-clean-tanker",
      "status-icon-cups-shower",
      "status-icon-cold",
      "status-icon-normal",
      "status-icon-hot",
      "status-icon-drain",
      "status-icon-cold",
      "status-icon-drain",
      "status-icon-dry"
    ],
    "full-rising": [
      "status-icon-clean-tanker",
      "status-icon-cups-shower",
      "status-icon-cold",
      "status-icon-drain",
      "status-icon-dry"
    ],
    alkaline: [
      "status-icon-clean-tanker",
      "status-icon-cups-shower",
      "status-icon-cold",
      "status-icon-normal",
      "status-icon-hot",
      "status-icon-drain",
      "status-icon-cold",
      "status-icon-drain",
      "status-icon-dry"
    ],
    "half-rising": [
      "status-icon-cups-shower",
      "status-icon-cold",
      "status-icon-drain",
      "status-icon-dry"
    ]
  }
  const washTitle = {
    acid: "Кислотная промывка",
    "full-rising": "Промывка линий",
    alkaline: "Щелочная промывка",
    "half-rising": "Ополаскивание УДР"
  }

  const stageList = {
    acid: [
      "Блокировка линии доставки",
      "Промывка стаканов доильных",
      "Холодная промывка",
      "Теплая промывка",
      "Горячая промывка",
      "Первый слив",
      "Холодная промывка",
      "Первый слив",
      "Второй слив"
    ],
    alkaline: [
      "Блокировка линии доставки",
      "Промывка стаканов доильных",
      "Холодная промывка",
      "Теплая промывка",
      "Горячая промывка",
      "Первый слив",
      "Холодная промывка",
      "Первый слив",
      "Второй слив"
    ],
    "full-rising": [
      "Блокировка линии доставки",
      "Промывка стаканов доильных",
      "Холодная промывка",
      "Первый слив",
      "Второй слив"
    ],
    "half-rising": [
      "Промывка стаканов доильных",
      "Холодная промывка",
      "Первый слив",
      "Второй слив"
    ],
  }

  const statusIcons = [];
  stagesData[currentWash].map((stage, index) => {
    statusIcons.push(
      <div>
        <div key={index} className={`status-icon ${stage} ${currentStage === index ? 'current-state' : ''}`} style={{ backgroundColor: currentStage === index && !success ? "red" : "" }}>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }} ><p>{reportData.pastStages[index] ? moment.utc(reportData.pastStages[index] * 1000).format('m:ss') : ''}</p></div>
      </div >
    );
  });

  const stageProgressBarWidth = `${(stageTime - stageTimeLeft) / stageTime * 100}%`;

  const washProgressBarWidth = `${(totalTime - totalTimeLeft) / totalTime * 100}%`;
  return (

    <div className="clean-container" style={{ display: reportStatus ? "" : "none" }}>
      <div className="icon-and-progress-status">
        <div className={`status-${currentWash}-icon home-status-icon`} style={{ marginLeft: "30px" }} />
        <div className="status-cleaning-bar acid-bar">
          <div className="progress-bars acid-progress-bar">
            <div className="local-progress-title">Прогресс этапа</div>
            <div className="status-cleaning-progress-bar-local pump-local">
              <div className="acid-stage progress-child value-progress">
                {stageList[currentWash][currentStage]}
              </div>
              <div className="acid-stage progress-child local-stage-time">
                {stageTimeLeft ? moment.utc(stageTimeLeft * 1000).format('m:ss') : "0:00"}
              </div>
              <div className="progress-child acid-local-progress-inner"
                style={{
                  width: stageProgressBarWidth,
                  height: "100%",
                  background: '#25be2c',
                }}>
              </div>
            </div>
            <div className="global-progress-title">Общий прогресс</div>
            <div className="status-cleaning-progress-bar-global pump-global">
              <div className="progress-child value-progress">
                {washTitle[currentWash]}
              </div>
              <div className="acid-stage progress-child global-stage-time">
                {totalTimeLeft ? moment.utc(totalTimeLeft * 1000).format('m:ss') : "0:00"}
              </div>
              <div className="progress-child acid-global-progress-inner"
                style={{
                  width: washProgressBarWidth,
                  height: "100%",
                  background: '#25be2c',
                }}>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="status-cleaning-icons acid-icons" style={{ marginLeft: "30px" }}>

        {statusIcons}
      </div>
      <button className="button graph-swap sidetouch" style={{ bottom: "14px", right: "94px" }} onClick={() => reportStatusClose()} />
    </div>
  );
}

export default WashReport;
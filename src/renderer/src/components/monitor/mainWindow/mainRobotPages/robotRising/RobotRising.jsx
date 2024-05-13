
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const RobotRising = () => {

  const [robotRisingWashTime, setRobotRisingWashTime] = useState()
  const totalTime = useSelector(state => state.washInfo.washingRising)
  const currentStage = useSelector(state => state.washInfo.currentStage)
  const currentWash = useSelector(state => state.washInfo.currentWash)
  const stageList = useSelector(state => state.washInfo.washingRisingList)
  const [robotRisingStageWashTime, setRobotRisingStageWashTime] = useState()

  useEffect(() => {
    if (totalTime.length > 0) {
      setRobotRisingStageWashTime(totalTime[currentStage])
      setRobotRisingWashTime(totalTime.slice(currentStage).reduce((acc, curr) => acc + parseInt(curr, 10), 0))
    }
  }, [currentStage])

  useEffect(() => {
    if (robotRisingStageWashTime > 0) {
      const timer = setInterval(() => {
        setRobotRisingWashTime((prevSeconds) => prevSeconds - 1);
        setRobotRisingStageWashTime((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(timer)
      }
    }
  }, [robotRisingStageWashTime])

  const stageProgressBarWidth = `${(totalTime[currentStage] - robotRisingStageWashTime) / totalTime[currentStage] * 100}%`;
  const washProgressBarWidth = `${((totalTime.reduce((acc, curr) => acc + parseInt(curr, 10), 0)) - robotRisingWashTime) / (totalTime.reduce((acc, curr) => acc + parseInt(curr, 10), 0)) * 100}%`;
  return (
    <>
      <div className="clean-container">
        <div className="icon-and-progress-status">
          <div className="status-half-rising-icon home-status-icon" />
          <div className="status-cleaning-bar half-rising-bar">
            <div className="progress-bars half-rising-progress-bar">
              <div className="local-progress-title">Прогресс этапа</div>
              <div className="status-cleaning-progress-bar-local pump-local">
                <div className="alkaline-stage progress-child value-progress">
                  {stageList[currentStage]}
                </div>
                <div className="alkaline-stage progress-child local-stage-time">{`0:00`}</div>
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
                <div className="progress-child value-progress">Ополаскивание УДР</div>
                <div className="half-stage progress-child global-stage-time">
                  {`0:00`}
                </div>
                <div className="progress-child acid-global-progress-inner"
                  style={{
                    width: washProgressBarWidth,
                    height: "100%",
                    background: '#25be2c',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="status-cleaning-icons half-rising-icons">
          <div className="status-cleaning-icons-top">
            <div className={currentStage === 0 && currentWash === 3 ? "status-icon-cups-shower status-icon current-state" : "status-icon-cups-shower status-icon"} />
            <div className={currentStage === 1 && currentWash === 3 ? "current-state status-icon-cold status-icon" : "status-icon-cold status-icon"} />
            <div className={currentStage === 2 && currentWash === 3 ? "status-icon-drain status-icon current-state" : "status-icon-drain status-icon"} />
            <div className={currentStage === 3 && currentWash === 3 ? "status-icon-dry status-icon current-state" : "status-icon-dry status-icon"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RobotRising;
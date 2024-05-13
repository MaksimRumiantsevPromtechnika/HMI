import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const AlkalineClean = () => {
  const [alkalineWashTime, setAlkalineWashTime] = useState();
  const totalTime = useSelector(state => state.washInfo.washingAlkaline)
  const currentStage = useSelector(state => state.washInfo.currentStage)
  const currentWash = useSelector(state => state.washInfo.currentWash)
  const stageList = useSelector(state => state.washInfo.washingAlkalineStageList)
  const [alkalineStageTime, setAlkalineStageTime] = useState();

  useEffect(() => {
    if (totalTime.length > 0) {
      setAlkalineStageTime(totalTime[currentStage])
      setAlkalineWashTime(totalTime.slice(currentStage).reduce((acc, curr) => acc + parseInt(curr, 10), 0))
    }
  }, [currentStage]);
  useEffect(() => {
    // console.log(alkalineStageTime);
    if (alkalineStageTime > 0) {
      const timer = setInterval(() => {
        setAlkalineWashTime((prevSeconds) => prevSeconds - 1);
        setAlkalineStageTime((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [alkalineStageTime]);

  const stageProgressBarWidth = `${(totalTime[currentStage] - alkalineStageTime) / totalTime[currentStage] * 100}%`;

  const washProgressBarWidth = `${((totalTime.reduce((acc, curr) => acc + parseInt(curr, 10), 0)) - alkalineWashTime) / (totalTime.reduce((acc, curr) => acc + parseInt(curr, 10), 0)) * 100}%`;

  return (
    <div className="clean-container">
      <div className="icon-and-progress-status">
        <div className="status-alkaline-icon home-status-icon" />
        <div className="status-cleaning-bar alkaline-bar">
          <div className="progress-bars alkaline-progress-bar">
            <div className="local-progress-title">Прогресс этапа</div>
            <div className="status-cleaning-progress-bar-local pump-local">
              <div className="alkaline-stage progress-child value-progress">
                {stageList[currentStage]}
              </div>
              <div className="alkaline-stage progress-child local-stage-time">
                {moment.utc(alkalineStageTime * 1000).format('m:ss')}
              </div>
              <div className="progress-child acid-global-progress-inner"
                style={{
                  width: stageProgressBarWidth,
                  height: "100%",
                  background: '#25be2c',
                }}>

              </div>
            </div>
            <div className="global-progress-title">Общий прогресс</div>
            <div className="status-cleaning-progress-bar-global pump-global">
              <div className="progress-child value-progress">Промывка щелочная</div>
              <div className="alkaline-stage progress-child global-stage-time">
                {moment.utc(alkalineWashTime * 1000).format('m:ss')}
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
      <div className="status-cleaning-icons alkaline-icons">
        <div className={currentStage === 0 && currentWash === 1 ? "status-icon-clean-tanker status-icon current-state" : "status-icon-clean-tanker status-icon"}>
        </div>
        <div className={currentStage === 1 && currentWash === 1 ? "status-icon-cups-shower status-icon current-state" : "status-icon-cups-shower status-icon"}>
        </div>
        <div className={currentStage === 2 && currentWash === 1 ? "status-icon-cold status-icon current-state" : "status-icon-cold status-icon"}>
        </div>
        <div className={currentStage === 3 && currentWash === 1 ? "status-icon-normal status-icon current-state" : "status-icon-normal status-icon"}>
        </div>
        <div className={currentStage === 4 && currentWash === 1 ? "status-icon-hot status-icon current-state" : "status-icon-hot status-icon"}>
        </div>
        <div className={currentStage === 5 && currentWash === 1 ? "status-icon-drain status-icon current-state" : "status-icon-drain status-icon"}>
        </div>
        <div className={currentStage === 6 && currentWash === 1 ? "status-icon-cold status-icon current-state" : "status-icon-cold status-icon"}>
        </div>
        <div className={currentStage === 7 && currentWash === 1 ? "status-icon-drain status-icon current-state" : "status-icon-drain status-icon"}>
        </div>
        <div className={currentStage === 8 && currentWash === 1 ? "status-icon-dry status-icon current-state" : "status-icon-dry status-icon"}>
        </div>
      </div>
      {/* <button className="button graph-swap sidetouch" /> */}
    </div>
  );
}

export default AlkalineClean;
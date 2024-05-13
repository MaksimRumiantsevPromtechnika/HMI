import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LineRising = () => {

  const [lineRisingWashTime, setLineRisingWashTime] = useState()
  const totalTime = useSelector(state => state.washInfo.washingMilkline)
  const currentStage = useSelector(state => state.washInfo.currentStage)
  const currentWash = useSelector(state => state.washInfo.currentWash)
  const stageList = useSelector(state => state.washInfo.washingMilklineList)
  const [lineRisingStageWashTime, setLineRisingStageWashTime] = useState()

  useEffect(() => {
    if (totalTime.length > 0) {
      setLineRisingStageWashTime(totalTime[currentStage])
      setLineRisingWashTime(totalTime.slice(currentStage).reduce((acc, curr) => acc + parseInt(curr, 10), 0))
    }
  }, [currentStage]);

  useEffect(() => {
    //  
    if (lineRisingStageWashTime > 0) {
      const timer = setInterval(() => {
        setLineRisingWashTime((prevSeconds) => prevSeconds - 1);
        setLineRisingStageWashTime((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [lineRisingStageWashTime]);

  const stageProgressBarWidth = `${(totalTime[currentStage] - lineRisingStageWashTime) / totalTime[currentStage] * 100}%`;
  const washProgressBarWidth = `${((totalTime.reduce((acc, curr) => acc + parseInt(curr, 10), 0)) - lineRisingWashTime) / (totalTime.reduce((acc, curr) => acc + parseInt(curr, 10), 0)) * 100}%`;

  return (
    <>
      <div className="clean-container">
        <div className="icon-and-progress-status">
          <div className="status-full-rising-icon home-status-icon" />
          <div className="status-cleaning-bar acid-bar">
            <div className="progress-bars acid-progress-bar">
              <div className="local-progress-title">Прогресс этапа</div>
              <div className="status-cleaning-progress-bar-local pump-local">
                <div className="acid-stage progress-child value-progress">
                  {stageList[currentStage]}
                </div>
                <div className="acid-stage progress-child local-stage-time">{moment.utc(lineRisingStageWashTime * 1000).format('m:ss')}</div>
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
                <div className="progress-child value-progress">Промывка линии</div>
                <div className="acid-stage progress-child global-stage-time">
                  {moment.utc(lineRisingWashTime * 1000).format('m:ss')}
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
        <div className="status-cleaning-icons full-rising-icons">
          <div className="status-cleaning-icons-top">
            <div className={currentStage === 0 && currentWash === 2 ? "status-icon-clean-tanker status-icon current-state" : "status-icon-clean-tanker status-icon"} />
            <div className={currentStage === 1 && currentWash === 2 ? "status-icon-cups-shower status-icon current-state" : "status-icon-cups-shower status-icon"} />
            <div className={currentStage === 2 && currentWash === 2 ? "status-icon-cold status-icon current-state" : "status-icon-cold status-icon"} />
            <div className={currentStage === 3 && currentWash === 2 ? "status-icon-drain status-icon current-state" : "status-icon-drain status-icon"} />
            <div className={currentStage === 4 && currentWash === 2 ? "status-icon-dry status-icon current-state" : "status-icon-dry status-icon"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LineRising;
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AcidClean = () => {
  const [AcidWashTime, setAcidWashTime] = useState();
  const totalTime = useSelector(state => state.washInfo.washingAcid)
  const currentStage = useSelector(state => state.washInfo.currentStage)
  const currentWash = useSelector(state => state.washInfo.currentWash)
  const stageList = useSelector(state => state.washInfo.washingAcidStageList)
  const [AcidStageTime, setAcidStageTime] = useState();

  useEffect(() => {
    if (totalTime.length > 0) {
      setAcidStageTime(totalTime[currentStage])
      setAcidWashTime(totalTime.slice(currentStage).reduce((acc, curr) => acc + parseInt(curr, 10), 0))
    }
  }, [currentStage]);

  useEffect(() => {
    //  
    if (AcidStageTime > 0) {
      const timer = setInterval(() => {
        setAcidWashTime((prevSeconds) => prevSeconds - 1);
        setAcidStageTime((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [AcidStageTime]);

  const stageProgressBarWidth = `${(totalTime[currentStage] - AcidStageTime) / totalTime[currentStage] * 100}%`;

  const washProgressBarWidth = `${((totalTime.reduce((acc, curr) => acc + parseInt(curr, 10), 0)) - AcidWashTime) / (totalTime.reduce((acc, curr) => acc + parseInt(curr, 10), 0)) * 100}%`;
  return (

    <div className="clean-container">
      <div className="icon-and-progress-status">
        <div className="status-acid-icon home-status-icon" />
        <div className="status-cleaning-bar acid-bar">
          <div className="progress-bars acid-progress-bar">
            <div className="local-progress-title">Прогресс этапа</div>
            <div className="status-cleaning-progress-bar-local pump-local">
              <div className="acid-stage progress-child value-progress">
                {stageList[currentStage]}
              </div>
              <div className="acid-stage progress-child local-stage-time">
                {AcidStageTime ? moment.utc(AcidStageTime * 1000).format('m:ss') : "0:00"}
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
                Промывка кислотная
              </div>
              <div className="acid-stage progress-child global-stage-time">
                {AcidWashTime ? moment.utc(AcidWashTime * 1000).format('m:ss') : "0:00"}
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
      <div className="status-cleaning-icons acid-icons">
        <div className={currentStage === 0 && currentWash === 0 ? "status-icon-clean-tanker status-icon current-state" : "status-icon-clean-tanker status-icon"}>
          <div>0:00</div>
        </div>
        <div className={currentStage === 1 && currentWash === 0 ? "status-icon-cups-shower status-icon current-state" : "status-icon-cups-shower status-icon"}>
        </div>
        <div className={currentStage === 2 && currentWash === 0 ? "status-icon-cold status-icon current-state" : "status-icon-cold status-icon"}>
        </div>
        <div className={currentStage === 3 && currentWash === 0 ? "status-icon-normal status-icon current-state" : "status-icon-normal status-icon"}>
        </div>
        <div className={currentStage === 4 && currentWash === 0 ? "status-icon-hot status-icon current-state" : "status-icon-hot status-icon"}>
        </div>
        <div className={currentStage === 5 && currentWash === 0 ? "status-icon-drain status-icon current-state" : "status-icon-drain status-icon"}>
        </div>
        <div className={currentStage === 6 && currentWash === 0 ? "status-icon-cold status-icon current-state" : "status-icon-cold status-icon"}>
        </div>
        <div className={currentStage === 7 && currentWash === 0 ? "status-icon-drain status-icon current-state" : "status-icon-drain status-icon"}>
        </div>
        <div className={currentStage === 8 && currentWash === 0 ? "status-icon-dry status-icon current-state" : "status-icon-dry status-icon"}>
        </div>
      </div>
    </div>
  );
}

export default AcidClean;
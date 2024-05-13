const PumpAcid = () => {
  return (
    <>
      <div className="clean-container">
        <div className="icon-and-progress-status">
          <div className="status-pump-icon home-status-icon" />
          <div className="status-cleaning-bar pumps-bar">
            <div className="progress-bars pumps-progress-bar">
              <div className="local-progress-title">Прогресс этапа</div>
              <div className="status-cleaning-progress-bar-local pump-local">
                <div className="pump-stage progress-child value-progress">
                  Холоднаяпромывка
                </div>
                <div className="alkaline-stage progress-child local-stage-time">
                  0:00
                </div>
                <div className="progress-child alkaline-local-progress-inner" />
              </div>
              <div className="global-progress-title">Общий прогресс</div>
              <div className="status-cleaning-progress-bar-global pump-global">
                <div className="progress-child value-progress">Подача кислоты</div>
                <div className="alkaline-stage progress-child global-stage-time">
                  0:00
                </div>
                <div className="progress-child alkaline-global-progress-inner" />
              </div>
            </div>
          </div>
        </div>
        <div className="status-cleaning-icons pumps-icons">
          <div className="status-icon-cold status-icon current-state" />
        </div>
      </div>
    </>
  );
}

export default PumpAcid;
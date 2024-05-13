const SamplerControl = () => {
  return (
    <>
      <div className="sampler-tab"></div>
      <div className="sampler-status">
        <div className="sampler-status-text">
          <p>Статус отбора проб</p>
        </div>
        <div className="sampler-status-icons">
          <button className="sampler-status-icon sidetouch sampler-status-play"></button>
          <button className="sampler-status-icon sidetouch sampler-status-stop sampler-status-active"></button>
        </div>
      </div>
      {/* <div className="sampler-frame">
        <div className="sampler-frame-text">Штатив</div>
        <button id="sampler-frame" className="sampler-button input-button">22</button>
      </div>
      <div className="bottle-number">
        <div className="bottle-number-text">Первая пробирка</div>
        <button id="first-bottle" className="sampler-button input-button">0</button>
      </div>
      <div className="last-bottle-number">
        <div className="last-bottle-number-text">Последняя пробирка</div>
        <button id="last-bottle" className="sampler-button input-button">0</button>
      </div> */}
    </>
  );
}

export default SamplerControl;
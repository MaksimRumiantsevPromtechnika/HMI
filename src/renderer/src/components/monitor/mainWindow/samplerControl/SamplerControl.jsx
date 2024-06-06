import { useState } from "react";
import SamplerPopup from "./samplerPopup/SamplerPopup";

const SamplerControl = () => {
  const changeSamplerMode = (value) => {
    TcpConnection.sendTcpData(`set_sampler(${value})`)
  }
  const [samplerPopup, setSamplerPopup] = useState(false)
  const samplerPopupClose = () => {
    setSamplerPopup(false);
  };
  const handleSamplerPopupOpen = (value) => {
    setSamplerPopup(value);
  }
  return (
    <>
      <div className="sampler-tab"></div>
      <div className="sampler-status">
        <div className="sampler-status-text">
          <p>Статус отбора проб</p>
        </div>
        <div className="sampler-status-icons">
          <button className="sampler-status-icon sidetouch sampler-status-play sampler-status-active" onClick={() => handleSamplerPopupOpen(true)}></button>
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
      <SamplerPopup
        changeSamplerMode={changeSamplerMode}
        samplerPopup={samplerPopup}
        samplerPopupClose={samplerPopupClose}
      >
      </SamplerPopup>
    </>
  );
}

export default SamplerControl;
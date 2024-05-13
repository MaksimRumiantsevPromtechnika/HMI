import { useState } from "react";
import useTcpConnection from "../../../../../services/tcpService";

const InputID = () => {
  const TcpConnection = useTcpConnection()
  const [val, setVal] = useState("0")

  const handleClick = (e) => {
    val === "0"
      ? setVal(e.target.value)
      : setVal(val + e.target.value)
  }
  return (
    <>
      <div className="cow-id-bar">
        <div className="status-cow-id-enter-icon home-status-icon" />
      </div>
      <div className="status-cow-id-numpud">
        <div className="numpud-content">
          <input readOnly type="text" className="screen" id="numpud-screen" value={val} />
          {/* Цифровой блок "Домашней" вкладки */}
          <div className="numpud-number-div">
            <button className="num-button sidetouch" value="7" onClick={handleClick}>7</button>
            <button className="num-button sidetouch" value="8" onClick={handleClick}>8</button>
            <button className="num-button sidetouch" value="9" onClick={handleClick}>9</button>
            <button className="num-button sidetouch" value="4" onClick={handleClick}>4</button>
            <button className="num-button sidetouch" value="5" onClick={handleClick}>5</button>
            <button className="num-button sidetouch" value="6" onClick={handleClick}>6</button>
            <button className="num-button sidetouch" value="1" onClick={handleClick}>1</button>
            <button className="num-button sidetouch" value="2" onClick={handleClick}>2</button>
            <button className="num-button sidetouch" value="3" onClick={handleClick}>3</button>
            <button
              className="numpud-clear numpud-button sidetouch"
              id="numpud-clear" onClick={(e) => setVal("0")}
            >
              C
            </button>
            <button className="numpud-button sidetouch" value="0" onClick={handleClick}>0</button>
            <button className="numpud-button sidetouch numpud-enter" onClick={() => TcpConnection.sendTcpData(`set_cowid(${val})`)}>ОК</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputID;
import React, { useState } from "react";

const NumPad = ({ handleChange, currentSett, handleClose }) => {
  const [val, setVal] = useState("0")

  const changeSign = () => {
    setVal(val * (-1))
  }

  const handleClick = (e) => {
    val === "0"
      ? setVal(e.target.value)
      : setVal(val + e.target.value)
  }

  return (
    <div className="main-content" id="main-content">
      <input readOnly type="text" className="screen" id="screen" value={val} />

      <div className="number-div">
        <button className="num-button sidetouch" value="7" onClick={handleClick}>7</button>
        <button className="num-button sidetouch" value="8" onClick={handleClick}>8</button>
        <button className="num-button sidetouch" value="9" onClick={handleClick}>9</button>
        <button className="num-button sidetouch" value="4" onClick={handleClick}>4</button>
        <button className="num-button sidetouch" value="5" onClick={handleClick}>5</button>
        <button className="num-button sidetouch" value="6" onClick={handleClick}>6</button>
        <button className="num-button sidetouch" value="1" onClick={handleClick}>1</button>
        <button className="num-button sidetouch" value="2" onClick={handleClick}>2</button>
        <button className="num-button sidetouch" value="3" onClick={handleClick}>3</button>
        <button className="clear num-button sidetouch" id="clear" value="C" onClick={(e) => setVal("0")}>C</button>
        <button className="num-button sidetouch" value="0" onClick={handleClick}>0</button>
        <button className="num-button sidetouch" value="+/-" onClick={changeSign}>+/-</button>
        <button className="num-button enter sidetouch" onClick={() => { handleChange(val, currentSett); handleClose() }}>ОК</button>

      </div>
    </div>
  );
}

export default NumPad;
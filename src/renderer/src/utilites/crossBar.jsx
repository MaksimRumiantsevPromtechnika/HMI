import { useState } from "react";
import { useSelector } from "react-redux";
import useTcpConnection from "../services/tcpService";

const CrossBar = () => {
  const TcpConnecion = useTcpConnection()
  const [isMoved, setIsMoved] = useState(false)
  const configurator = useSelector(state => state.configurator)
  const startMove = (movedElement) => {
    setIsMoved(true)
    TcpConnecion.sendTcpData(`${movedElement}()`);
    console.log(`${movedElement}()`);
  }
  const stoptMove = (movedElement) => {
    setIsMoved(false)
    TcpConnecion.sendTcpData(`${movedElement}()`);
    console.log(`${movedElement}()`);
  }
  const toggleSpeed = (data) => {
    TcpConnecion.sendTcpData(`set_arm_speed(${data})`)
  }
  const mode = useSelector(state => state.mode)
  return (
    <>
      <div className="arm-bar">
        <div className="side-arm-bar">
          <button id="move_up" className="arm-button sidetouch side-arm-button arm-up"
            onTouchStart={(e) => startMove(e.target.id)}
            onTouchEnd={() => stoptMove('move_stopz')}
            onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopz') : ""}
            onMouseDown={(e) => startMove(e.target.id)}
            onMouseUp={() => stoptMove('move_stopz')}
            onMouseOut={() => (isMoved === true) ? stoptMove('move_stopz') : ""}></button>
          <button id="move_down" className="arm-button sidetouch side-arm-button arm-down"
            onMouseDown={(e) => startMove(e.target.id)}
            onMouseUp={() => stoptMove('move_stopz')}
            onMouseOut={() => (isMoved === true) ? stoptMove('move_stopz') : ""}
            onTouchStart={(e) => startMove(e.target.id)}
            onTouchEnd={() => stoptMove('move_stopz')}
            onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopz') : ""}
          ></button>
          <div className="speed">
            <button className={mode.armSlowSpeed ? "arm-setting-speed-active arm-button sidetouch side-arm-button arm-slow" : "arm-button sidetouch side-arm-button arm-fast arm-setting-speed-active"} onClick={() => toggleSpeed(!mode.armSlowSpeed)}></button>
          </div>
        </div>
        <div className="cross-arm-bar">
          <div className="top-cross">
            <button id="move_rotateleft" className="arm-button sidetouch cross-button top-cross-button"
              onMouseDown={(e) => startMove(e.target.id)}
              onMouseUp={() => stoptMove('move_stopq')}
              onMouseOut={() => (isMoved === true) ? stoptMove('move_stopq') : ""}
              onTouchStart={(e) => startMove(e.target.id)}
              onTouchEnd={() => stoptMove('move_stopq')}
              onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopq') : ""}
            ></button>
          </div>
          <div className="middle-cross">
            <button id="move_left" className="arm-button sidetouch cross-button left-cross-button"
              onMouseDown={(e) => startMove(e.target.id)}
              onMouseUp={() => stoptMove('move_stopl')}
              onMouseOut={() => (isMoved === true) ? stoptMove('move_stopl') : ""}
              onTouchStart={(e) => startMove(e.target.id)}
              onTouchEnd={() => stoptMove('move_stopl')}
              onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopl') : ""}></button>
            <div className={configurator.cowOrientation === 1 ? "cross-cow-left" : "cross-cow-right"}></div>
            <button id="move_right" className="arm-button sidetouch cross-button right-cross-button"
              onMouseDown={(e) => startMove(e.target.id)}
              onMouseUp={() => stoptMove('move_stopl')}
              onMouseOut={() => (isMoved === true) ? stoptMove('move_stopl') : ""}
              onTouchStart={(e) => startMove(e.target.id)}
              onTouchEnd={() => stoptMove('move_stopl')}
              onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopl') : ""}></button>
          </div>
          <div className="bottom-cross">
            <button id="move_rotateright" className="arm-button sidetouch cross-button bottom-cross-button"
              onMouseDown={(e) => startMove(e.target.id)}
              onMouseUp={() => stoptMove('move_stopq')}
              onMouseOut={() => (isMoved === true) ? stoptMove('move_stopq') : ""}
              onTouchStart={(e) => startMove(e.target.id)}
              onTouchEnd={() => stoptMove('move_stopq')}
              onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopq') : ""}></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrossBar;
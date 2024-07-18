import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTcpConnection from "../../../../services/tcpService";
import { toggleSpeed } from "../../../../store/mainSettingsReduser";
import ManualAttachmentPopup from "./manualAttachment/ManualAttachmentPopup";
import TeatStatus from "./teatStatus/TeatStatus";

const MilkControl = () => {
  const TcpConnecion = useTcpConnection()
  const [isMoved, setIsMoved] = useState(false)
  const [modeTeatPopup, setModeTeatPopup] = useState(false)
  const dispatch = useDispatch()
  const configurator = useSelector(state => state.configurator)
  const modeTeatPopupClose = () => {
    setModeTeatPopup(false);
  };
  const [currentTeat, setCurrentTeat] = useState()
  const handleModeTeatOpen = (value, e) => {
    setModeTeatPopup(value);
    setCurrentTeat(Number(e.target.id))
  }

  const [currentScanTeat, setCurrentScanTeat] = useState()


  const changeTeat = (value1, value2) => {
    const obj = {
      teatId: value1,
      status: value2
    };
    if (obj.status == 4) {
      setCurrentScanTeat(obj.teatId);
    }
    const JSONString = JSON.stringify(obj)
    TcpConnecion.sendTcpData(`teat_mode(${JSONString})`)
  }

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
  const [manualAttachmentPopup, setmManualAttachmentPopup] = useState(false);
  const manualAttachmentPopupClose = () => {
    setmManualAttachmentPopup(false)
  }

  const manualAttachmentPopupOpen = (value) => {
    setmManualAttachmentPopup(value)
  }

  const teatReducer = useSelector(state => state.teats.teatsInfo)
  const settings = useSelector(state => state.globalSettings)
  const cowInfo = useSelector(state => state.cow.cowInfo)
  // const jsonString = JSON.stringify(settings.udrGlobalSettings);
  // const globalSettings = useSelector(state => state.globalSettings.realSettings)
  const points = [  // точка отсчета
    { x: teatReducer.teat1.x, y: teatReducer.teat1.y * (-1), s: teatReducer.teat1.status },
    { x: teatReducer.teat2.x, y: teatReducer.teat2.y * (-1), s: teatReducer.teat2.status },
    { x: teatReducer.teat3.x, y: teatReducer.teat3.y * (-1), s: teatReducer.teat3.status },
    { x: teatReducer.teat4.x, y: teatReducer.teat4.y * (-1), s: teatReducer.teat4.status },
  ];
  console.log(teatReducer.teat1.x);
  const historyCowPoints = [  // точка отсчета
    { x: cowInfo.coords.x1, y: cowInfo.coords.y1 * -1 },
    { x: cowInfo.coords.x2, y: cowInfo.coords.y2 * -1 },
    { x: cowInfo.coords.x3, y: cowInfo.coords.y3 * -1 },
    { x: cowInfo.coords.x4, y: cowInfo.coords.y4 * -1 },
  ];

  const clearConfirm = () => {
    const obj = {
      teat1: teatReducer.teat1.status == 7 ? true : false,
      teat2: teatReducer.teat2.status == 7 ? true : false,
      teat3: teatReducer.teat3.status == 7 ? true : false,
      teat4: teatReducer.teat4.status == 7 ? true : false
    };
    const JSONString = JSON.stringify(obj)
    TcpConnecion.sendTcpData(`reset_teats(${JSONString})`)
    console.log(JSONString);
  }

  const indScanConfirm = () => {
    const obj = {
      teatId: currentScanTeat,
      status: 6
    };
    const JSONString = JSON.stringify(obj)
    TcpConnecion.sendTcpData(`teat_mode(${JSONString})`)
  }

  const allClear = () => {
    const obj = {
      teat1: true,
      teat2: true,
      teat3: true,
      teat4: true,
    }
    const JSONString = JSON.stringify(obj)
    TcpConnecion.sendTcpData(`reset_teats(${JSONString})`)
  }

  const probableCowPoints = teatReducer.teat0;

  // Приведение координат точек к относительной системе с началом в (0; 0)
  const convertToRelativeCoords = () => {
    return points.map((point) => ({
      x: point.x,
      y: point.y,
      s: point.s
    }));
  };

  const convertToHistoryCoords = () => {
    return historyCowPoints.map((point) => ({
      x: point.x,
      y: point.y,
    }));
  };

  const convertToProbablePoints = () => {
    return probableCowPoints.map((point) => ({
      x: point.x,
      y: point.y * (-1)
    }))
  }
  // Координаты точек в относительной системе с началом в (0; 0)
  const relativePoints = convertToRelativeCoords();
  const historyPoints = convertToHistoryCoords();
  const probablePoints = convertToProbablePoints()
  // Создание элементов <circle> для каждой точки
  const renderPoints = () => {
    return relativePoints.map((point, index) => {
      return <circle key={index} cx={point.x} cy={point.y} r={7} fill={point.s == null || point.s == 2 || point.s == 4 ? 'white' : 'red'} />;
    });
  };

  const renderHistoryPoints = () => {
    return historyPoints.map((point, index) => {
      return <rect key={index} x={point.x} y={point.y} width="13" height="13" fill="grey" />;
    });
  };
  const statuses = [teatReducer.teat1.status, teatReducer.teat2.status, teatReducer.teat3.status, teatReducer.teat4.status];
  const renderProbablePoints = () => {
    return probablePoints.map((point, index) => {
      const radius = 7;
      const points = [
        { x: point.x, y: point.y - radius }, // вершина треугольника
        { x: point.x - radius, y: point.y + radius },  // левая точка внизу
        { x: point.x + radius, y: point.y + radius }  // правая точка внизу
      ];
      const pointsAsTriangle = points.map(point => `${point.x},${point.y}`).join(' ');
      return <polygon points={pointsAsTriangle} style={{ fill: 'orange' }} />
    });
  };
  const classMap = {
    1: "cup-forbiden",
    2: 'cup-unknow',
    3: 'cup-done-auto',
    4: 'cup-unknow-ind',
    5: 'cup-done-ind',
    6: 'cup-done-auto-ind',
    7: 'cup-clear',
    // 2: 'cup-note',
  }

  return (
    <>
      <div className="arm-control">
        <div onMouseUp={() => console.log(22)} className="main-control-bar">
          <div className="cow-bar">
            <div className="left-cups" style={{ display: configurator.cowOrientation === 1 ? "flex" : "none", marginLeft: "75px" }}>
              <button id={3} className={`cup-button sidetouch ${classMap[teatReducer.teat3.status]} cup-active`} disabled={teatReducer.teat1.status == 4 || teatReducer.teat1.status == 5 || teatReducer.teat4.status == 4 || teatReducer.teat4.status == 5 || teatReducer.teat2.status == 4 || teatReducer.teat2.status == 5 || teatReducer.teat3.status == 1 ? true : false} onClick={(e) => handleModeTeatOpen(true, e)}></button>
              <button id={1} className={`cup-button sidetouch ${classMap[teatReducer.teat1.status]} cup-active`} disabled={teatReducer.teat2.status == 4 || teatReducer.teat2.status == 5 || teatReducer.teat4.status == 4 || teatReducer.teat4.status == 5 || teatReducer.teat3.status == 4 || teatReducer.teat3.status == 5 || teatReducer.teat1.status == 1 ? true : false} style={{ marginLeft: "20px" }} onClick={(e) => handleModeTeatOpen(true, e)}></button>
            </div>
            <div className="right-cups" style={{ display: configurator.cowOrientation === 0 ? "flex" : "none", marginLeft: "75px" }}>
              <button id={2} className={`cup-button sidetouch ${classMap[teatReducer.teat2.status]} cup-active`} disabled={teatReducer.teat1.status == 4 || teatReducer.teat1.status == 5 || teatReducer.teat4.status == 4 || teatReducer.teat4.status == 5 || teatReducer.teat3.status == 4 || teatReducer.teat3.status == 5 || teatReducer.teat2.status == 1 ? true : false} onClick={(e) => handleModeTeatOpen(true, e)}></button>
              <button id={4} className={`cup-button sidetouch ${classMap[teatReducer.teat4.status]} cup-active`} disabled={teatReducer.teat1.status == 4 || teatReducer.teat1.status == 5 || teatReducer.teat2.status == 4 || teatReducer.teat2.status == 5 || teatReducer.teat3.status == 4 || teatReducer.teat3.status == 5 || teatReducer.teat4.status == 1 ? true : false} style={{ marginLeft: "20px" }} onClick={(e) => handleModeTeatOpen(true, e)}></button>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "75px", height: "75px" }}>
                <button className={`cup-button cup-active configuration-done`} style={{ marginTop: "15px", display: statuses.includes(7) ? "" : "none" }} onClick={() => clearConfirm()}></button>
                <button className={`cup-button cup-active configuration-done`} style={{ marginTop: "15px", display: statuses.includes(5) ? "" : "none" }} onClick={() => indScanConfirm()}></button>
              </div>
              <div className={configurator.cowOrientation === 1 ? "cow-left" : "cow-right"}></div>
            </div>
            <div className="left-cups" style={{ display: configurator.cowOrientation === 0 ? "flex" : "none", marginLeft: "75px" }}>
              <button id={1} className={`cup-button sidetouch ${classMap[teatReducer.teat1.status]} cup-active`} disabled={teatReducer.teat2.status == 4 || teatReducer.teat2.status == 5 || teatReducer.teat4.status == 4 || teatReducer.teat4.status == 5 || teatReducer.teat3.status == 4 || teatReducer.teat3.status == 5 || teatReducer.teat1.status == 1 ? true : false} onClick={(e) => handleModeTeatOpen(true, e)}></button>
              <button id={3} className={`cup-button sidetouch ${classMap[teatReducer.teat3.status]} cup-active`} disabled={teatReducer.teat1.status == 4 || teatReducer.teat1.status == 5 || teatReducer.teat4.status == 4 || teatReducer.teat4.status == 5 || teatReducer.teat2.status == 4 || teatReducer.teat2.status == 5 || teatReducer.teat3.status == 1 ? true : false} style={{ marginLeft: "20px" }} onClick={(e) => handleModeTeatOpen(true, e)}></button>
            </div>
            <div className="right-cups" style={{ display: configurator.cowOrientation === 1 ? "flex" : "none", marginLeft: "75px" }}>
              <button id={4} className={`cup-button sidetouch ${classMap[teatReducer.teat4.status]} cup-active`} disabled={teatReducer.teat1.status == 4 || teatReducer.teat1.status == 5 || teatReducer.teat2.status == 4 || teatReducer.teat2.status == 5 || teatReducer.teat3.status == 4 || teatReducer.teat3.status == 5 || teatReducer.teat4.status == 1 ? true : false} onClick={(e) => handleModeTeatOpen(true, e)}></button>
              <button id={2} className={`cup-button sidetouch ${classMap[teatReducer.teat2.status]} cup-active`} disabled={teatReducer.teat1.status == 4 || teatReducer.teat1.status == 5 || teatReducer.teat4.status == 4 || teatReducer.teat4.status == 5 || teatReducer.teat3.status == 4 || teatReducer.teat3.status == 5 || teatReducer.teat2.status == 1 ? true : false} style={{ marginLeft: "20px" }} onClick={(e) => handleModeTeatOpen(true, e)}></button>
            </div>
          </div>
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
                  onMouseUp={() => stoptMove('move_stopl')}
                  onMouseOut={() => (isMoved === true) ? stoptMove('move_stopl') : ""}
                  onTouchStart={(e) => startMove(e.target.id)}
                  onTouchEnd={() => stoptMove('move_stopl')}
                  onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopl') : ""}
                ></button>
              </div>
              <div className="middle-cross">
                <button id="move_left" className="arm-button sidetouch cross-button left-cross-button"
                  onMouseDown={(e) => startMove(e.target.id)}
                  onMouseUp={() => stoptMove('move_stopq')}
                  onMouseOut={() => (isMoved === true) ? stoptMove('move_stopq') : ""}
                  onTouchStart={(e) => startMove(e.target.id)}
                  onTouchEnd={() => stoptMove('move_stopq')}
                  onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopq') : ""}></button>
                <div className={configurator.cowOrientation === 1 ? "cross-cow-left" : "cross-cow-right"}></div>
                <button id="move_right" className="arm-button sidetouch cross-button right-cross-button"
                  onMouseDown={(e) => startMove(e.target.id)}
                  onMouseUp={() => stoptMove('move_stopq')}
                  onMouseOut={() => (isMoved === true) ? stoptMove('move_stopq') : ""}
                  onTouchStart={(e) => startMove(e.target.id)}
                  onTouchEnd={() => stoptMove('move_stopq')}
                  onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopq') : ""}></button>
              </div>
              <div className="bottom-cross">
                <button id="move_rotateright" className="arm-button sidetouch cross-button bottom-cross-button"
                  onMouseDown={(e) => startMove(e.target.id)}
                  onMouseUp={() => stoptMove('move_stopl')}
                  onMouseOut={() => (isMoved === true) ? stoptMove('move_stopl') : ""}
                  onTouchStart={(e) => startMove(e.target.id)}
                  onTouchEnd={() => stoptMove('move_stopl')}
                  onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopl') : ""}></button>
              </div>
            </div>
          </div>
        </div>
        <div className="side-control-bar">
          {/* onClick={() => TcpConnecion.sendTcpData("set_manualattachment()")} */}
          <button className="arm-side-button sidetouch save-cups-info" onClick={() => TcpConnecion.sendTcpData("assist_scan()")}></button>
          <button className="arm-side-button sidetouch clear-cups-info" onClick={() => allClear()}></button>
          <button className="arm-side-button sidetouch manual-cups" onClick={() => manualAttachmentPopupOpen(true)}></button>
          <button className="arm-side-button sidetouch cups-servise" onClick={() => TcpConnecion.sendTcpData("move_tostdpos(10)")}></button>
        </div>
        <div className="control-field">
          <svg width="362px" height="551" viewBox="-300 -400 602 452">
            {renderPoints()}
            {renderHistoryPoints()}
            {renderProbablePoints()}
          </svg>
        </div>
      </div>
      <ManualAttachmentPopup
        manualAttachmentPopup={manualAttachmentPopup}
        manualAttachmentPopupClose={manualAttachmentPopupClose}
      >
      </ManualAttachmentPopup>
      <TeatStatus
        modeTeatPopup={modeTeatPopup}
        modeTeatPopupClose={modeTeatPopupClose}
        currentTeat={currentTeat}
        changeTeat={changeTeat}
        statuses={statuses}
      >
      </TeatStatus>
    </>
  );
}

export default MilkControl;
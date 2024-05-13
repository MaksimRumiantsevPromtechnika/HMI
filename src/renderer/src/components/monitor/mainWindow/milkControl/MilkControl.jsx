import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTcpConnection from "../../../../services/tcpService";
import { toggleSpeed } from "../../../../store/mainSettingsReduser";
import ManualAttachmentPopup from "./manualAttachment/ManualAttachmentPopup";

const MilkControl = () => {
  const TcpConnecion = useTcpConnection()
  const [isMoved, setIsMoved] = useState(false)
  const dispatch = useDispatch()
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

  const [manualAttachmentPopup, setmManualAttachmentPopup] = useState(false);
  const manualAttachmentPopupClose = () => {
    setmManualAttachmentPopup(false)
  }

  const manualAttachmentPopupOpen = (value) => {
    setmManualAttachmentPopup(value)
  }

  const teatReducer = useSelector(state => state.teats.teatsInfo)
  const settings = useSelector(state => state.globalSettings)
  const jsonString = JSON.stringify(settings.udrGlobalSettings);
  const globalSettings = useSelector(state => state.globalSettings.realSettings)
  const points = [  // точка отсчета
    { x: teatReducer.x1, y: teatReducer.y1 * (-1), s: teatReducer.s1 },
    { x: teatReducer.x2, y: teatReducer.y2 * (-1), s: teatReducer.s2 },
    { x: teatReducer.x3, y: teatReducer.y3 * (-1), s: teatReducer.s3 },
    { x: teatReducer.x4, y: teatReducer.y4 * (-1), s: teatReducer.s4 },
  ];

  const historyCowPoints = [  // точка отсчета
    { x: -56, y: -108 },
    { x: -48, y: -240 },
    { x: 47, y: -245 },
    { x: 88, y: -132 },
  ];

  const probableCowPoints = [  // точка отсчета
    { x: -66, y: -128 },
    { x: -48, y: -240 },
    { x: 55, y: -255 },
    { x: 88, y: -132 },
  ];

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
      y: point.y
    }))
  }
  // Координаты точек в относительной системе с началом в (0; 0)
  const relativePoints = convertToRelativeCoords();
  const historyPoints = convertToHistoryCoords();
  const probablePoints = convertToProbablePoints()
  // Создание элементов <circle> для каждой точки
  const renderPoints = () => {
    return relativePoints.map((point, index) => {
      return <circle key={index} cx={point.x} cy={point.y} r={5} fill={point.s == "1" ? 'red' : 'white'} />;
    });
  };

  const renderHistoryPoints = () => {
    return historyPoints.map((point, index) => {
      return <rect key={index} x={point.x} y={point.y} width="10" height="10" fill="grey" />;
    });
  };

  const renderProbablePoints = () => {
    return probablePoints.map((point, index) => {
      console.log(point.s);
      const radius = 5;
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
    0: 'cup-unknow',
    1: 'cup-done',
    2: 'cup-note',
  }

  return (
    <>
      <div className="arm-control">
        <div onMouseUp={() => console.log(22)} className="main-control-bar">
          <div className="cow-bar">
            <div className="left-cups">
              <button className={`cup-button sidetouch left-top-cup ${classMap[teatReducer.s1]} cup-active`}></button>
              <button className={`cup-button sidetouch left-bottom-cup ${classMap[teatReducer.s2]} cup-active`}></button>
            </div>
            <div className="middle-cow"></div>
            <div className="right-cups">
              <button className={`cup-button sidetouch right-top-cup ${classMap[teatReducer.s3]} cup-active`}></button>
              <button className={`cup-button sidetouch right-bottom-cup ${classMap[teatReducer.s4]} cup-active`}></button>
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
                <button className={globalSettings.armSlowSpeed ? "arm-setting-speed-active arm-button sidetouch side-arm-button arm-slow" : "arm-button sidetouch side-arm-button arm-fast arm-setting-speed-active"} onClick={() => { dispatch(toggleSpeed()) }}></button>
              </div>
            </div>
            <div className="cross-arm-bar">
              <div className="top-cross">
                <button id="move_left" className="arm-button sidetouch cross-button top-cross-button"
                  onMouseDown={(e) => startMove(e.target.id)}
                  onMouseUp={() => stoptMove('move_stopl')}
                  onMouseOut={() => (isMoved === true) ? stoptMove('move_stopl') : ""}
                  onTouchStart={(e) => startMove(e.target.id)}
                  onTouchEnd={() => stoptMove('move_stopl')}
                  onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopl') : ""}
                ></button>
              </div>
              <div className="middle-cross">
                <button id="move_rotateright" className="arm-button sidetouch cross-button left-cross-button"
                  onMouseDown={(e) => startMove(e.target.id)}
                  onMouseUp={() => stoptMove('move_stopq')}
                  onMouseOut={() => (isMoved === true) ? stoptMove('move_stopq') : ""}
                  onTouchStart={(e) => startMove(e.target.id)}
                  onTouchEnd={() => stoptMove('move_stopq')}
                  onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopq') : ""}></button>
                <div className="cross-cow"></div>
                <button id="move_rotateleft" className="arm-button sidetouch cross-button right-cross-button"
                  onMouseDown={(e) => startMove(e.target.id)}
                  onMouseUp={() => stoptMove('move_stopq')}
                  onMouseOut={() => (isMoved === true) ? stoptMove('move_stopq') : ""}
                  onTouchStart={(e) => startMove(e.target.id)}
                  onTouchEnd={() => stoptMove('move_stopq')}
                  onTouchCancel={() => (isMoved === true) ? stoptMove('move_stopq') : ""}></button>
              </div>
              <div className="bottom-cross">
                <button id="move_right" className="arm-button sidetouch cross-button bottom-cross-button"
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
          <button className="arm-side-button sidetouch save-cups-info" onClick={() => TcpConnecion.sendTcpData("test_scan()")}></button>
          <button className="arm-side-button sidetouch clear-cups-info" onClick={() => TcpConnecion.sendTcpData("reset_teatscoord()")}></button>
          <button className="arm-side-button sidetouch manual-cups" onClick={() => manualAttachmentPopupOpen(true)}></button>
          <button className="arm-side-button sidetouch cups-servise" onClick={() => TcpConnecion.sendTcpData("move_tostdpos(10)")}></button>
        </div>
        <div className="control-field">
          <svg width="362px" height="551" viewBox="-180 -400 362 551">
            {/* Оси координат */}
            {/* <line x1="-100" y1="0" x2="100" y2="0" stroke="black" strokeWidth="0.5" />
            <line x1="0" y1="-100" x2="0" y2="100" stroke="black" strokeWidth="0.5" /> */}

            {/* Точки */}
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
    </>
  );
}

export default MilkControl;
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import ClapanChange from "../clapanChange/ClapanChange";


const ArmSheme = ({ openArmSheme, onClose, setOn, valveOpen, valveClose, state, setOff, mode }) => {
  const [valvePopup, setValvePopup] = useState(false)
  const [currentValve, setCurrentValve] = useState()
  const [currentType, setCurrentType] = useState()
  const cupState = useSelector(state => state.cupStatus)
  const valvePopupOpen = (value, e) => {
    if (mode === "1") {
    } else {
      setValvePopup(value);
      setCurrentValve(e.target.id)
      setCurrentType(e.target.className.baseVal)
    }
  }

  const valvePopupClose = () => {
    setValvePopup(false)
  }

  const handleArmClose = () => {
    onClose()
  }

  return (
    <Dialog sx={{ padding: "0px", width: "100%" }} PaperProps={{
      style: {
        borderRadius: 10,
        boxShadow: 'none',
      },
    }}
      BackdropProps={{ style: { backgroundColor: "rgb(255, 255, 255, .66)", backdropFilter: "blur(2px)" } }}
      open={openArmSheme}>
      <DialogContent sx={{ padding: "0px" }} className="main-content-mnem">
        <button className="button arm-close sidetouch" onClick={handleArmClose}></button>
        <svg
          width={470}
          height={470}
          viewBox="0 0 124.35416 124.35417"
          version="1.1"
          id="svg1913"
          xmlSpace="preserve"
          inkscape:version="1.2.1 (9c6d41e410, 2022-07-14)"
          sodipodi:docname="Arm-3.svg"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg"
        >
          <g
            inkscape:label="Слой 1"
            shapeRendering="crispEdges"
            inkscape:groupmode="layer"
            id="layer1"
          >
            <path
              id="rect13443-91-9"
              style={{
                fill: "#2a569a",
                fillOpacity: cupState.i913 === 1 || cupState.i913 === 2 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529094",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="M 30.863232 19.474263 L 30.863232 26.882596 L 30.863232 50.695096 L 33.509065 50.695096 L 33.509065 26.882596 L 33.509065 19.474263 L 30.863232 19.474263 z "
            />
            <path
              id="rect13443-91-9-6"
              style={{
                fill: "#2a569a",
                fillOpacity: cupState.i912 === 1 || cupState.i912 === 2 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529094",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="M 18.692399 19.474263 L 18.692399 26.882596 L 18.692399 50.695096 L 21.338232 50.695096 L 21.338232 26.882596 L 21.338232 19.474263 L 18.692399 19.474263 z "
            />
            <path
              id="rect13443-5"
              style={{
                fill: "#2a569a",
                fillOpacity: cupState.i914 === 1 || cupState.i914 === 2 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529148",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="M 43.034065 27.411763 L 43.034065 34.820096 L 43.034065 50.695096 L 45.679898 50.695096 L 45.679898 34.820096 L 45.679898 27.411763 L 43.034065 27.411763 z "
            />
            <path
              id="rect13443-5-1"
              style={{
                fill: "#2a569a",
                fillOpacity: cupState.i911 === 1 || cupState.i911 === 2 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529148",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              d="M 6.6182006 27.411246 L 6.6182006 34.81958 L 6.6182006 50.694579 L 9.2640339 50.694579 L 9.2640339 34.81958 L 9.2640339 27.411246 L 6.6182006 27.411246 z "
            />
            <rect
              style={{
                fill: "#2a569a",
                fillOpacity: (cupState.i911 === 1 || cupState.i911 === 2) && state.i50 === 1 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529153",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect8265"
              width="2.6458476"
              height="13.22918"
              x="6.6145773"
              y="83.078964"
            />
            <rect
              style={{
                fill: "#2a569a",
                fillOpacity: (cupState.i912 === 1 || cupState.i912 === 2) && state.i48 === 1 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529153",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect8265-9"
              width="2.6458476"
              height="13.22918"
              x="18.688705"
              y="83.079636"
            />
            <rect
              style={{
                fill: "#2a569a",
                fillOpacity: (cupState.i914 === 1 || cupState.i914 === 2) && state.i51 === 1 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529153",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect8265-9-5"
              width="2.6458476"
              height="13.22918"
              x="43.030376"
              y="83.079422"
            />
            <rect
              style={{
                fill: "#2a569a",
                fillOpacity: (cupState.i913 === 1 || cupState.i913 === 2) && state.i49 === 1 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529153",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect8265-9-50"
              width="2.6458476"
              height="13.22918"
              x="30.859535"
              y="83.079643"
            />
            <rect
              style={{
                fill: "#2a569a",
                fillOpacity: cupState.i914 === 1 || cupState.i914 === 2 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529204",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect12967-4"
              width="2.6457965"
              height="11.906213"
              x="43.0322"
              y="60.934055"
            />
            <rect
              style={{
                fill: "#2a569a",
                fillOpacity: cupState.i913 === 1 || cupState.i913 === 2 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529204",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect12967-4-1"
              width="2.6457965"
              height="11.906213"
              x="30.861361"
              y="60.934277"
            />
            <rect
              style={{
                fill: "#2a569a",
                fillOpacity: cupState.i912 === 1 || cupState.i912 === 2 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529204",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect12967-4-2"
              width="2.6457965"
              height="11.906213"
              x="18.690531"
              y="60.934273"
            />
            <rect
              style={{
                fill: "#2a569a",
                fillOpacity: cupState.i911 === 1 || cupState.i911 === 2 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529204",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect12967-4-8"
              width="2.6457965"
              height="11.906213"
              x="6.6164021"
              y="60.933598"
            />
            <g
              id="g18633-5-5-2-0-42"
              inkscape:label="Клапан проточный"
              className="klapan-pr"
              transform="matrix(0,0.26458333,-0.26458333,0,123.57077,37.337365)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <g
                id="g87158-6-9-0-57"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#ffffff", fillOpacity: state.i23 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-3"
                  className="klapan-pr-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-33"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-75"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: state.i23 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-8"
                  className="klapan-pr-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-3"
                  inkscape:label="Основание"
                />
              </g>
            </g>
            <path
              style={{
                opacity: 1,
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99978",
                strokeLinecap: "round",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 76.460328,281.09987 0.04675,184.941"
              id="path37437"
              transform="matrix(0,0.26458333,-0.26458333,0,131.50956,35.584534)"
            />
            <path
              id="path29568"
              style={{
                fill: "#2a569a",
                fillOpacity: state.i35 === 1 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529185",
                strokeLinecap: "butt",
                strokeDasharray: "none"
              }}
              d="m 109.71619,88.165681 h -2.37608 -2.64583 V 82.87401 h -2.64583 v 0 5.291671 2.64583 h 5.29166 v 2.64584 h -5.29166 v 2.64531 h 5.29166 v 5.2e-4 h 2.37608"
            />
            <path
              id="path32458"
              style={{
                fill: "#2a569a",
                fillOpacity: state.i35 === 1 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529225",
                strokeLinecap: "butt",
                strokeDasharray: "none"
              }}
              d="m 107.60655,93.457591 v 0 l -5.5581,-2.5e-4 v 2.64532 h 5.56141 2.37609 v -2.64532 -2.64635 h 5.29166 v -2.64583 -5.29167 h -2.64583 v 0 5.29167 h -2.64583 -2.37609 -0.002"
              sodipodi:nodetypes="ccccccccccccccccc"
            />
            <g id="g23477" transform="translate(19.890159,3.3060348)">
              <path
                id="path7624-3"
                style={{
                  fill: "#2a569a",
                  fillOpacity: state.i10 === 1 || state.i13 === 1 ? 1 : 0,
                  stroke: "#000000",
                  strokeWidth: "0.529185",
                  strokeLinecap: "butt",
                  strokeDasharray: "none"
                }}
                d="m 87.992126,29.792792 2.37608,1e-6 h 2.645834 v -5.291667 h 2.645833 v 0 5.291667 2.645833 h -5.291667 v 5.291667 h -2.376082"
              />
              <path
                id="path7624"
                style={{
                  fill: "#2a569a",
                  fillOpacity: state.i10 === 1 || state.i13 === 1 ? 1 : 0,
                  stroke: "#000000",
                  strokeWidth: "0.529185",
                  strokeLinecap: "butt",
                  strokeDasharray: "none"
                }}
                d="m 90.104626,29.792793 -2.37608,1e-6 h -2.645834 v -5.291667 h -2.645833 v 0 5.291667 2.645833 h 5.291667 v 5.291667 h 2.376082"
              />
              <g
                id="g18633-5-5-2-0"
                inkscape:label="Клапан 126"
                className="klapan"
                transform="matrix(0,0.26458333,-0.26458333,0,173.55317,0.90404211)"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
              >
                <path
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="M 69.952335,299.65619 V 288.93126"
                  id="path18623-4-58-2-4"
                />
                <rect
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  id="rect18625-2-58-0-8"
                  width="9.7764111"
                  height="7.7764153"
                  x="65.064125"
                  y="282.08292"
                />
                <g
                  id="g87158-6-9-0"
                  transform="translate(-28.36668,-61.96896)"
                  style={{ fill: "#ffffff", fillOpacity: state.i13 === 0 ? 1 : 0, }}
                  inkscape:label="Левый"
                >
                  <path
                    style={{
                      stroke: "#000000",
                      strokeWidth: 2,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeDasharray: "none",
                      strokeOpacity: 1
                    }}
                    d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                    id="path87148-1-4-3"
                    className="klapan-tr klapan-black"
                    shapeRendering="geometricPrecision"
                    inkscape:label="Угол"
                  />
                  <path
                    style={{
                      opacity: 1,
                      fill: "#ffffff",
                      fillOpacity: 1,
                      stroke: "#000000",
                      strokeWidth: 2,
                      strokeLinecap: "square",
                      strokeLinejoin: "miter",
                      strokeDasharray: "none",
                      strokeOpacity: 1
                    }}
                    d="m 78.85187,351.46878 v 19.7824"
                    id="path87150-0-1-0"
                    inkscape:label="Основание"
                  />
                </g>
                <g
                  id="g87158-7-8-5-1"
                  transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                  style={{
                    fill: "#ffffff",
                    fillOpacity: state.i13 === 0 ? 1 : 0,
                    strokeWidth: 2,
                    strokeDasharray: "none"
                  }}
                  inkscape:label="Правый"
                >
                  <path
                    style={{
                      stroke: "#000000",
                      strokeWidth: 2,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeDasharray: "none",
                      strokeOpacity: 1
                    }}
                    d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                    id="path87148-6-84-1-9"
                    className="klapan-tr klapan-black"
                    shapeRendering="geometricPrecision"
                    inkscape:label="Угол"
                  />
                  <path
                    style={{
                      opacity: 1,
                      fill: "#ffffff",
                      fillOpacity: 1,
                      stroke: "#000000",
                      strokeWidth: 2,
                      strokeLinecap: "square",
                      strokeLinejoin: "miter",
                      strokeDasharray: "none",
                      strokeOpacity: 1
                    }}
                    d="m 78.85187,351.46878 v 19.7824"
                    id="path87150-4-68-6-2"
                    inkscape:label="Основание"
                  />
                </g><rect
                  style={{
                    opacity: "0",
                    fill: "#25be2c",
                    stroke: "#25be2c",
                    strokeWidth: 0,
                    strokeLinecap: "round"
                  }}
                  id="13"
                  className="Valve"
                  onClick={(e) => valvePopupOpen(true, e)}
                  width="7.11936"
                  height="9.9749613"
                  x="112.37252"
                  y="17.592012"
                  inkscape:label="Маска клапана 13"
                  transform="matrix(0,-3.7795276,3.7795276,0,-15.912102,731.1244)"
                />
              </g>
              <g
                id="g18633-5-5-2-0-5"
                inkscape:label="Клапан 125"
                className="klapan"
                transform="matrix(0,0.26458333,-0.26458333,0,162.97601,0.90404311)"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
              >
                <path
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="M 69.952335,299.65619 V 288.93126"
                  id="path18623-4-58-2-4-0"
                />
                <rect
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  id="rect18625-2-58-0-8-4"
                  width="9.7764111"
                  height="7.7764153"
                  x="65.064125"
                  y="282.08292"
                />
                <g
                  id="g87158-6-9-0-7"
                  transform="translate(-28.36668,-61.96896)"
                  style={{ fill: "#ffffff", fillOpacity: state.i10 === 0 ? 1 : 0, }}
                  inkscape:label="Левый"
                >
                  <path
                    style={{
                      stroke: "#000000",
                      strokeWidth: 2,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeDasharray: "none",
                      strokeOpacity: 1
                    }}
                    d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                    id="path87148-1-4-3-9"
                    className="klapan-tr klapan-black"
                    shapeRendering="geometricPrecision"
                    inkscape:label="Угол"
                  />
                  <path
                    style={{
                      opacity: 1,
                      fill: "#ffffff",
                      fillOpacity: 1,
                      stroke: "#000000",
                      strokeWidth: 2,
                      strokeLinecap: "square",
                      strokeLinejoin: "miter",
                      strokeDasharray: "none",
                      strokeOpacity: 1
                    }}
                    d="m 78.85187,351.46878 v 19.7824"
                    id="path87150-0-1-0-7"
                    inkscape:label="Основание"
                  />
                </g>
                <g
                  id="g87158-7-8-5-1-0"
                  transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                  style={{
                    fill: "#ffffff",
                    fillOpacity: state.i10 === 0 ? 1 : 0,
                    strokeWidth: 2,
                    strokeDasharray: "none"
                  }}
                  inkscape:label="Правый"
                >
                  <path
                    style={{
                      stroke: "#000000",
                      strokeWidth: 2,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeDasharray: "none",
                      strokeOpacity: 1
                    }}
                    d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                    id="path87148-6-84-1-9-5"
                    className="klapan-tr klapan-black"
                    shapeRendering="geometricPrecision"
                    inkscape:label="Угол"
                  />
                  <path
                    style={{
                      opacity: 1,
                      fill: "#ffffff",
                      fillOpacity: 1,
                      stroke: "#000000",
                      strokeWidth: 2,
                      strokeLinecap: "square",
                      strokeLinejoin: "miter",
                      strokeDasharray: "none",
                      strokeOpacity: 1
                    }}
                    d="m 78.85187,351.46878 v 19.7824"
                    id="path87150-4-68-6-2-1"
                    inkscape:label="Основание"
                  />
                </g><rect
                  style={{
                    opacity: "0",
                    fill: "#25be2c",
                    stroke: "#25be2c",
                    strokeWidth: 0,
                    strokeLinecap: "round"
                  }}
                  id="10"
                  className="Valve"
                  onClick={(e) => valvePopupOpen(true, e)}
                  width="7.4610658"
                  height="10.504127"
                  x="101.03525"
                  y="17.567619"
                  inkscape:label="Маска клапана 10"
                  transform="matrix(0,-3.7795276,3.7795276,0,-15.912106,691.14773)"
                />
              </g>
            </g>
            <g
              transform="matrix(0.01259921,0,0,-0.01259921,77.863193,29.012467)"
              fill="#000000"
              stroke="none"
              opacity={state.i46 === 0 ? 0 : 1}
              shapeRendering="geometricPrecision"
              className="pulsator pulsator-on"
              id="g3803"
            >
              <path
                d="M 0,920 C 0,893 3,890 30,890 H 60 V 465 C 60,53 61,39 80,20 95,5 113,0 150,0 c 37,0 55,5 70,20 19,19 20,33 20,445 v 425 h 30 30 V 773 656 l 30,29 c 29,28 30,31 30,127 0,120 -11,138 -90,138 -37,0 -55,-5 -70,-20 -19,-19 -20,-33 -20,-445 V 60 h -30 -30 v 425 c 0,412 -1,426 -20,445 C 87,943 67,950 40,950 2,950 0,948 0,920 Z"
                id="path3795"
              />
              <path
                d="M 501,749 C 371,725 279,611 279,475 279,223 575,104 758,283 c 49,48 82,126 82,192 0,169 -168,305 -339,274 z m 144,-84 c 67,-27 125,-115 125,-190 0,-22 -9,-58 -19,-80 -95,-208 -402,-147 -402,80 0,154 149,250 296,190 z"
                id="path3797"
              />
              <path
                d="m 480,475 c 0,-69 3,-125 6,-125 16,0 204,124 197,130 -16,14 -190,120 -197,120 -3,0 -6,-56 -6,-125 z"
                id="path3799"
              />
              <path
                d="M 300,177 V 60 h 30 30 v 88 c 0,85 -1,89 -30,117 l -30,29 z"
                id="path3801"
              />
            </g>
            <g
              transform="matrix(0.01261935,0,0,-0.01261935,77.862287,29.030392)"
              fill="#000000"
              stroke="none"
              opacity={state.i46 === 0 ? 1 : 0}
              shapeRendering="geometricPrecision"
              className="pulsator pulsator-off"
              id="402"
            >
              <path
                d="M 0,920 C 0,893 3,890 30,890 H 60 V 465 C 60,53 61,39 80,20 95,5 113,0 150,0 c 37,0 55,5 70,20 19,19 20,33 20,445 v 425 h 30 30 V 773 656 l 30,29 c 29,28 30,31 30,127 0,120 -11,138 -90,138 -37,0 -55,-5 -70,-20 -19,-19 -20,-33 -20,-445 V 60 h -30 -30 v 425 c 0,412 -1,426 -20,445 C 87,943 67,950 40,950 2,950 0,948 0,920 Z"
                id="path3832"
              />
              <path
                d="M 493,745 C 363,715 279,609 279,474 c 0,-135 82,-238 216,-269 96,-23 185,4 263,78 110,107 107,283 -6,389 -74,69 -165,95 -259,73 z m 143,-76 c 40,-12 92,-64 115,-114 35,-75 16,-166 -47,-229 -78,-77 -209,-78 -292,-2 -101,91 -78,270 43,334 58,30 107,33 181,11 z"
                id="path3834"
              />
              <path d="m 470,475 v -85 h 90 90 v 85 85 h -90 -90 z" id="path3836" />
              <path
                d="M 300,177 V 60 h 30 30 v 88 c 0,85 -1,89 -30,117 l -30,29 z"
                id="path3838"
              />
            </g>
            <g
              transform="matrix(0.00196031,0,0,-0.00196031,110.26071,12.683472)"
              fill="#000000"
              stroke="none"
              id="g49109"
              shapeRendering="geometricPrecision"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            >
              <path
                d="m 1608,4284 c -29,-9 -54,-24 -64,-39 l -16,-25 -427,-2 -426,-3 -25,-50 c -22,-43 -25,-63 -25,-150 0,-118 8,-164 36,-199 l 20,-26 h 425 424 v -60 -60 h 220 220 v 60 60 h 424 c 370,0 427,2 440,15 58,59 61,318 5,390 l -20,25 h -424 -423 l -16,25 c -23,35 -101,55 -210,54 -50,0 -112,-7 -138,-15 z"
                id="path49083"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="m 1338,3548 c -46,-12 -93,-63 -109,-118 l -12,-40 H 773 330 v -530 -530 h 1249 1250 l 28,-24 c 28,-24 28,-26 31,-155 l 4,-131 h 324 324 v 123 c 0,280 -54,482 -178,664 -100,147 -279,274 -462,329 -62,19 -69,23 -40,23 114,2 313,-52 429,-115 80,-44 99,-59 180,-137 184,-180 291,-459 291,-763 v -124 h 95 95 v 73 c 0,233 -35,445 -99,598 -122,293 -386,530 -711,638 -142,46 -200,53 -542,58 l -328,5 -11,41 c -14,52 -63,102 -114,116 -51,14 -754,13 -807,-1 z"
                id="path49085"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="M 30,3418 5,3404 2,2862 0,2319 35,2305 c 44,-19 106,-19 150,-1 l 35,15 v 539 c 0,486 -2,541 -16,553 -23,19 -142,23 -174,7 z"
                id="path49087"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="m 580,2163 c -1,-10 -7,-31 -14,-48 l -13,-30 -22,43 c -12,23 -26,42 -32,42 -5,0 -32,-11 -59,-25 l -50,-25 25,-50 25,-49 -45,14 c -25,7 -47,10 -49,7 -11,-19 -34,-112 -28,-116 4,-2 52,-18 107,-35 96,-29 101,-32 123,-72 12,-23 20,-44 18,-46 -2,-3 -47,9 -100,25 l -95,30 -20,-60 -20,-59 25,-9 c 13,-5 58,-20 99,-32 41,-13 75,-25 75,-29 0,-3 -20,-15 -45,-27 l -44,-21 -112,35 c -61,19 -112,34 -114,32 -9,-11 -35,-109 -31,-117 3,-4 27,-14 53,-21 l 48,-12 -48,-24 c -26,-13 -47,-29 -47,-35 0,-5 13,-32 28,-59 l 28,-49 40,24 c 21,13 42,25 46,25 4,0 1,-20 -6,-44 l -14,-45 60,-20 59,-20 9,24 c 5,12 21,62 35,109 25,81 29,87 67,107 22,11 42,18 45,15 3,-2 -9,-49 -26,-103 -16,-54 -27,-101 -23,-104 15,-13 106,-39 112,-32 4,5 20,52 36,105 16,54 31,98 35,98 3,0 15,-20 27,-45 l 21,-44 -35,-112 c -19,-61 -34,-112 -32,-114 8,-8 111,-34 118,-30 4,3 13,26 20,52 l 12,48 24,-47 c 13,-27 26,-48 29,-48 2,0 29,12 59,27 l 55,26 -25,50 -25,49 23,-8 c 56,-19 70,-12 89,43 21,63 28,57 -107,98 -89,27 -92,28 -113,71 -11,25 -21,46 -21,48 0,2 41,-9 91,-25 50,-17 96,-28 102,-26 10,3 37,79 37,104 0,7 -37,24 -82,38 -46,14 -90,28 -98,31 -9,3 0,13 29,31 l 43,25 107,-32 c 58,-18 111,-35 117,-37 10,-3 51,115 42,121 -2,1 -25,9 -53,17 l -50,16 48,23 c 26,13 47,28 47,33 0,5 -12,31 -27,57 l -27,48 -48,-24 c -26,-13 -48,-23 -48,-20 0,2 7,22 14,44 8,23 12,43 8,46 -11,6 -115,36 -117,33 -2,-1 -17,-50 -35,-108 -32,-105 -33,-106 -76,-128 -25,-11 -46,-21 -48,-21 -2,0 12,48 30,107 19,58 33,107 32,109 -11,9 -113,33 -119,27 -4,-5 -19,-48 -34,-98 -15,-49 -30,-94 -33,-99 -3,-5 -16,12 -29,38 l -24,46 32,103 c 18,56 34,107 36,114 3,6 -18,18 -50,27 -69,20 -77,20 -77,-1 z"
                id="path49089"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="m 2843,1895 c -35,-15 -63,-60 -63,-100 0,-36 28,-81 57,-94 16,-8 203,-11 586,-11 517,0 564,2 583,18 66,53 54,156 -21,188 -50,21 -1094,20 -1142,-1 z"
                id="path49091"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="m 3349,1518 c -138,-194 -241,-373 -279,-488 -28,-82 -24,-191 8,-263 31,-70 111,-149 185,-183 55,-26 73,-29 157,-29 83,1 102,4 152,29 70,33 140,101 176,170 24,46 27,61 27,156 v 105 l -62,127 c -52,106 -212,359 -280,446 l -18,22 z m 137,-311 c 62,-100 108,-194 118,-244 9,-42 -9,-105 -41,-143 -102,-122 -291,-77 -333,79 -18,67 13,145 133,333 27,43 53,76 58,73 4,-3 34,-47 65,-98 z"
                id="path49093"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="m 1142,1433 c -17,-26 -29,-50 -27,-53 2,-3 23,-20 48,-38 l 45,-32 36,44 c 20,25 36,48 36,53 0,11 -84,73 -98,73 -5,0 -23,-21 -40,-47 z"
                id="path49095"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="m 1340,1280 c -23,-28 -41,-52 -39,-53 3,-1 23,-20 47,-42 l 42,-39 40,39 c 22,21 40,44 40,50 0,6 -20,30 -44,54 l -43,42 z"
                id="path49097"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="M 600,1187 C 600,1184 543,978 474,728 335,224 336,234 393,140 c 99,-164 348,-152 437,20 40,78 40,77 -95,566 -112,407 -135,484 -135,461 z"
                id="path49099"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="m 2108,1126 c -121,-75 -166,-136 -188,-257 -13,-68 -9,-134 17,-287 8,-51 13,-96 9,-99 -10,-11 -64,117 -76,182 -7,36 -15,65 -19,65 -14,0 -110,-100 -126,-131 -38,-73 -57,-147 -62,-244 -7,-123 10,-191 62,-252 153,-179 514,-111 618,115 16,35 22,66 21,122 0,85 -23,142 -90,221 -98,116 -134,302 -103,524 6,42 9,78 7,80 -2,1 -33,-16 -70,-39 z m -5,-537 c 14,-30 45,-76 68,-104 72,-86 86,-152 49,-224 -42,-83 -134,-131 -249,-131 -79,0 -134,27 -165,79 -22,37 -27,129 -12,205 l 8,40 39,-46 c 61,-72 142,-87 196,-36 41,39 46,83 23,234 -24,164 -25,204 -1,108 10,-40 29,-96 44,-125 z"
                id="path49101"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="m 2116,457 c -8,-53 -41,-106 -76,-124 -31,-16 -109,-17 -147,-2 -15,5 -40,22 -55,36 l -26,25 -7,-22 c -10,-32 2,-101 25,-137 23,-38 78,-68 141,-76 35,-5 56,-1 95,17 104,49 135,123 99,242 -8,27 -21,58 -28,68 -13,18 -15,16 -21,-27 z"
                id="path49103"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="m 1511,1100 -43,-40 33,-45 c 19,-24 38,-45 42,-45 12,0 97,62 97,70 0,10 -72,100 -79,100 -3,-1 -26,-19 -50,-40 z"
                id="path49105"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
              <path
                d="m 1657,898 -47,-30 22,-36 c 46,-78 38,-74 97,-41 33,19 51,35 47,44 -10,26 -56,95 -64,94 -4,0 -28,-14 -55,-31 z"
                id="path49107"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
            </g>
            <g
              transform="matrix(0.00737513,0,0,-0.00737513,100.76106,11.760503)"
              fill="#000000"
              stroke="none"
              id="g60610"
              shapeRendering="geometricPrecision"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            >
              <path
                d="m 224,964 c -19,-19 -34,-39 -34,-44 0,-5 -37,-10 -82,-12 L 25,905 12,866 C 2,836 0,738 2,458 L 5,90 30,65 C 75,20 177,0 360,0 543,0 645,20 690,65 l 25,25 3,353 c 2,193 0,371 -3,395 -4,30 -18,55 -47,86 -63,70 -83,76 -258,76 H 257 Z m 358,-49 c 8,-19 8,-31 0,-50 -12,-25 -12,-25 -152,-25 -140,0 -140,0 -152,25 -8,19 -8,31 0,50 12,25 12,25 152,25 140,0 140,0 152,-25 z M 482,573 C 542,514 590,459 590,450 590,431 380,220 360,220 c -19,0 -230,210 -230,230 0,19 210,230 230,230 8,0 63,-48 122,-107 z"
                id="path60604"
                style={{ fill: "#ed1c24", fillOpacity: 1 }}
              />
              <path
                d="m 260,545 -95,-95 98,-98 97,-97 97,97 98,98 -95,95 c -52,52 -97,95 -100,95 -3,0 -48,-43 -100,-95 z m 120,-55 c 0,-83 -1,-90 -20,-90 -19,0 -20,7 -20,90 0,83 1,90 20,90 19,0 20,-7 20,-90 z m -3,-121 c 15,-15 5,-39 -17,-39 -22,0 -32,24 -17,39 6,6 14,11 17,11 3,0 11,-5 17,-11 z"
                id="path60606"
                style={{ fill: "#ed1c24", fillOpacity: 1 }}
              />
              <path
                d="m 44,975 c -13,-33 4,-45 59,-45 58,0 82,15 71,44 -9,22 -122,23 -130,1 z"
                id="path60608"
                style={{ fill: "#ed1c24", fillOpacity: 1 }}
              />
            </g>
            <g id="g29855" className="arm-cup" inkscape:label="Стакан" opacity={state.i5 === 1 ? 0 : 1}>
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529151",
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect14248-2"
                width="4.2333488"
                height="13.229183"
                x="42.240223"
                y="21.590702"
              />
              <rect
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.860913",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843-0"
                shapeRendering="geometricPrecision"
                width="5.8208332"
                height="5.0932345"
                x="41.446484"
                y="16.777946"
                ry="1.6333898"
              />
              <g
                id="g61894-1"
                inkscape:label="Обрамление стакана"
                transform="translate(12.170837,7.9464058)"
              >
                <rect
                  style={{ fill: "#cccccc", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-5-4"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.7323236"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-1-4"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#5f5f5f", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-4"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.302731"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#333333", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-88"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.2614908"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-01"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.167652" }}
                  id="rect55928-8-4"
                  width="0.26458332"
                  height="3.175"
                  x="34.831898"
                  y="9.790658"
                />
                <rect
                  style={{ fill: "#020202", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-9-6-9"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-8"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-1-89"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#3d3d3d", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-4-38"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="13.230242"
                />
              </g>
            </g>
            <g
              id="g35087"
              shapeRendering="geometricPrecision"
              transform="translate(13.307291,116.11954)"
            >
              <circle
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.61942",
                  strokeLinecap: "round",
                  strokeOpacity: 1
                }}
                id="path31141"
                cx="69.321396"
                cy="-21.143772"
                r="1.5875"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.49099",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 69.284596,-21.143772 h 5.431667"
                id="path31353"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 69.321396,-22.731272 v -3.429405"
                id="path32219"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 70.015364,-22.466689 1.720482,-2.979963"
                id="path32221"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="M 70.721555,-21.891911 73.57076,-23.5369"
                id="path32223"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 70.69288,-20.344277 2.785681,1.608315"
                id="path32225"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 70.177863,-19.807126 1.625444,2.815351"
                id="path32227"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 69.321396,-19.556272 v 3.185178"
                id="path32229"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 68.593228,-19.820856 -1.705086,2.953297"
                id="path32231"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 68.064062,-20.608861 -3.046802,1.759072"
                id="path32233"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="M 67.733896,-21.143772 H 64.392968"
                id="path32235"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="M 67.998479,-21.894271 65.006621,-23.62162"
                id="path32237"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="M 68.560155,-22.466689 66.85621,-25.41801"
                id="path32239"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 68.95703,-22.588802 -0.515302,-1.923131"
                id="path32241"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 69.701171,-22.539192 0.462883,-1.727504"
                id="path32243"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 70.379166,-22.17539 1.265039,-1.265039"
                id="path32245"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 70.726431,-21.497396 1.779032,-0.47669"
                id="path32247"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 70.742968,-20.720182 1.570191,0.420731"
                id="path32249"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 70.379166,-20.157942 1.223698,1.223697"
                id="path32251"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 69.767317,-19.694922 0.430919,1.608208"
                id="path32253"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 68.95703,-19.661849 -0.425378,1.587537"
                id="path32255"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 68.262499,-20.12487 -1.314648,1.314649"
                id="path32257"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 68.014452,-20.835937 -1.878764,0.503413"
                id="path32259"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 67.93177,-21.547005 -1.891977,-0.506954"
                id="path32261"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 68.262499,-22.225 -1.240234,-1.240234"
                id="path32263"
              />
            </g>
            <g
              id="g42324"
              shapeRendering="geometricPrecision"
              transform="translate(19.892173,-1.5875228)"
            >
              <path
                style={{
                  opacity: 1,
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.390704,92.33169 4.035319,4.035319 -4.701843,-1.259855"
                id="path42318"
              />
              <path
                style={{
                  opacity: 1,
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529167",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 77.855981,97.591548 4.570042,-1.224539 -3.910496,3.910501"
                id="path42320"
              />
            </g>
            <g
              id="g18633-5-5-2-0-7"
              inkscape:label="Клапан 128"
              className="klapan"
              transform="matrix(0,0.26458333,-0.26458333,0,193.43449,59.276405)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <path
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="M 69.952335,299.65619 V 288.93126"
                id="path18623-4-58-2-4-1"
              />
              <rect
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect18625-2-58-0-8-7"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              />
              <g
                id="g87158-6-9-0-2"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#ffffff", fillOpacity: state.i33 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-8"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-3"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-1"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: state.i33 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-2"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-5"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#25be2c",
                  stroke: "#25be2c",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="33"
                className="Valve"
                onClick={(e) => valvePopupOpen(true, e)}
                width="7.4610658"
                height="9.9749603"
                x="111.60357"
                y="72.633949"
                inkscape:label="Маска клапана 33"
                transform="matrix(0,-3.7795276,3.7795276,0,-224.03681,731.091)"
              />
            </g>
            <g
              id="g18633-5-5-2-0-1"
              inkscape:label="Клапан 127"
              className="klapan"
              transform="matrix(0,0.26458333,-0.26458333,0,182.85733,59.276406)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <path
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="M 69.952335,299.65619 V 288.93126"
                id="path18623-4-58-2-4-7"
              />
              <rect
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect18625-2-58-0-8-6"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              />
              <g
                id="g87158-6-9-0-8"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#ffffff", fillOpacity: state.i35 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-7"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-1"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-5"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: state.i35 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-3"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-7"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#25be2c",
                  stroke: "#25be2c",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="35"
                className="Valve"
                onClick={(e) => valvePopupOpen(true, e)}
                width="7.4610658"
                height="9.9754725"
                x="101.02641"
                y="72.633949"
                inkscape:label="Маска клапана 35"
                transform="matrix(0,-3.7795276,3.7795276,0,-224.03681,691.11433)"
              />
            </g>
            <g
              id="g18633-5-5-2-0-18"
              inkscape:label="Клапан 123"
              className="cup-klapan"
              transform="matrix(0,0.26458333,-0.26458333,0,123.56952,59.482338)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <path
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="M 69.952335,299.65619 V 288.93126"
                id="path18623-4-58-2-4-10"
              />
              <rect
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect18625-2-58-0-8-40"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              />
              <g
                id="g87158-6-9-0-1"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#000000", fillOpacity: state.i51 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-6"
                  className="klapan-tr"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-4"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-01"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#000000",
                  fillOpacity: state.i51 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-9"
                  className="klapan-tr"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-9"
                  inkscape:label="Основание"
                />
              </g><rect
                style={{
                  opacity: "0",
                  fill: "#25be2c",
                  stroke: "#25be2c",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="51"
                className="Valve"
                onClick={(e) => valvePopupOpen(true, e)}
                width="7.4077535"
                height="10.305434"
                x="41.738602"
                y="72.839874"
                inkscape:label="Маска клапана 51"
                transform="matrix(0,-3.7795276,3.7795276,0,-224.81514,467.03441)"
              />
            </g>
            <g
              id="g18633-5-5-2-0-18-3"
              inkscape:label="Клапан распылителя 124"
              className="klapan"
              transform="matrix(0,0.26458333,-0.26458333,0,105.31326,72.711731)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <g
                id="g87158-6-9-0-1-1"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#000000", fillOpacity: state.i32 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-6-3"
                  className="klapan-tr"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-4-2"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-01-5"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#000000",
                  fillOpacity: state.i32 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-9-4"
                  className="klapan-tr"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-9-2"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#25be2c",
                  stroke: "#25be2c",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="32"
                className="Valve"
                onClick={(e) => valvePopupOpen(true, e)}
                width="7.0677795"
                height="10.504134"
                x="22.499981"
                y="86.069267"
                inkscape:label="Маска клапана 32"
                transform="matrix(0,-3.7795276,3.7795276,0,-274.81597,394.32152)"
              />
            </g>
            <g
              id="g18633-5-5-2-0-3"
              inkscape:label="Клапан 122"
              className="cup-klapan"
              transform="matrix(0,0.26458333,-0.26458333,0,111.39868,59.482559)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <path
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="M 69.952335,299.65619 V 288.93126"
                id="path18623-4-58-2-4-3"
              />
              <rect
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect18625-2-58-0-8-3"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              />
              <g
                id="g87158-6-9-0-6"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#000000", fillOpacity: state.i49 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-1"
                  className="klapan-tr"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-6"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-3"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#000000",
                  fillOpacity: state.i49 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-6"
                  className="klapan-tr"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-2"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#25be2c",
                  stroke: "#25be2c",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="49"
                className="Valve"
                onClick={(e) => valvePopupOpen(true, e)}
                width="7.4610658"
                height="10.504128"
                x="29.56776"
                y="72.840103"
                inkscape:label="Маска клапана 49"
                transform="matrix(0,-3.7795276,3.7795276,0,-224.81597,421.03439)"
              />
            </g>
            <g
              id="g18633-5-5-2-0-8"
              inkscape:label="Клапан 121"
              className="cup-klapan"
              transform="matrix(0,0.26458333,-0.26458333,0,99.227847,59.482552)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <path
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="M 69.952335,299.65619 V 288.93126"
                id="path18623-4-58-2-4-4"
              />
              <rect
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect18625-2-58-0-8-31"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              />
              <g
                id="g87158-6-9-0-71"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#000000", fillOpacity: state.i48 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-77"
                  className="klapan-tr"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-61"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-2"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#000000",
                  fillOpacity: state.i48 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-36"
                  className="klapan-tr"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-99"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#25be2c",
                  stroke: "#25be2c",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="48"
                className="Valve"
                onClick={(e) => valvePopupOpen(true, e)}
                width="7.3416142"
                height="10.305221"
                x="17.396927"
                y="72.840096"
                inkscape:label="Маска клапана 48"
                transform="matrix(0,-3.7795276,3.7795276,0,-224.81595,375.03439)"
              />
            </g>
            <g
              id="g18633-5-5-2-0-71"
              inkscape:label="Клапан 120"
              className="cup-klapan"
              transform="matrix(0,0.26458333,-0.26458333,0,87.153719,59.48188)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <path
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="M 69.952335,299.65619 V 288.93126"
                id="path18623-4-58-2-4-08"
              />
              <rect
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect18625-2-58-0-8-0"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              />
              <g
                id="g87158-6-9-0-4"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#000000", fillOpacity: state.i50 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-0"
                  className="klapan-tr"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-9"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-8"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#000000",
                  fillOpacity: state.i50 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-31"
                  className="klapan-tr"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-75"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#25be2c",
                  stroke: "#25be2c",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="50"
                className="Valve"
                onClick={(e) => valvePopupOpen(true, e)}
                width="7.4610658"
                height="11.165787"
                x="5.3227992"
                y="72.839417"
                inkscape:label="Маска клапана 50"
                transform="matrix(0,-3.7795276,3.7795276,0,-224.81341,329.39989)"
              />
            </g>
            <g
              id="g18633-5-5-2-0-54"
              inkscape:label="Клапан 119"
              className="klapan-pr"
              transform="matrix(0,0.26458333,-0.26458333,0,136.41925,37.30644)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <path
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="M 69.952335,299.65619 V 288.93126"
                id="path18623-4-58-2-4-33"
              />
              <rect
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect18625-2-58-0-8-9"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              />
              <g
                id="g87158-6-9-0-29"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#ffffff", fillOpacity: state.i23 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-05"
                  className="klapan-pr-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-0"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-89"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: state.i23 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-94"
                  className="klapan-pr-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-51"
                  inkscape:label="Основание"
                />
              </g>
            </g>
            <g
              id="g18633-5-5-2-0-88"
              inkscape:label="Клапан проточный"
              className="klapan-pr"
              transform="matrix(0,0.26458333,-0.26458333,0,87.154972,37.336907)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <g
                id="g87158-6-9-0-0"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#ffffff", fillOpacity: state.i23 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-97"
                  className="klapan-pr-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-19"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-37"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: state.i23 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-56"
                  className="klapan-pr-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-6"
                  inkscape:label="Основание"
                />
              </g>
            </g>
            <g
              id="g18633-5-5-2-0-52"
              inkscape:label="Клапан проточный"
              className="klapan-pr"
              transform="matrix(0,0.26458333,-0.26458333,0,99.2291,37.337582)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <g
                id="g87158-6-9-0-65"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#ffffff", fillOpacity: state.i23 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-03"
                  className="klapan-pr-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-01"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-14"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: state.i23 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-7"
                  className="klapan-pr-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-73"
                  inkscape:label="Основание"
                />
              </g>
            </g>
            <g
              id="g18633-5-5-2-0-4"
              inkscape:label="Клапан проточный"
              className="klapan-pr"
              transform="matrix(0,0.26458333,-0.26458333,0,111.39993,37.337586)"
              style={{
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
            >
              <g
                id="g87158-6-9-0-5"
                transform="translate(-28.36668,-61.96896)"
                style={{ fill: "#ffffff", fillOpacity: state.i23 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-1-4-3-16"
                  className="klapan-pr-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-0-1-0-46"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-8-5-1-7"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: state.i23 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-84-1-9-98"
                  className="klapan-pr-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                />
                <path
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.85187,351.46878 v 19.7824"
                  id="path87150-4-68-6-2-92"
                  inkscape:label="Основание"
                />
              </g>
            </g>
            <g
              id="g29855-4"
              className="arm-cup"
              inkscape:label="Стакан"
              opacity={state.i3 === 1 ? 0 : 1}
              transform="translate(-12.170839,-7.9373322)"
            >
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529151",
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect14248-2-2"
                width="4.2333488"
                height="13.229183"
                x="42.240223"
                y="21.590702"
              />
              <rect
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.860913",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843-0-9"
                shapeRendering="geometricPrecision"
                width="5.8208332"
                height="5.0932345"
                x="41.446484"
                y="16.768873"
                ry="1.6333898"
              />
              <g
                id="g61894"
                inkscape:label="Обрамление стакана"
                transform="translate(12.170839,7.9373322)"
              >
                <rect
                  style={{ fill: "#cccccc", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-5"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.7323236"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-1"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#5f5f5f", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.302731"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#333333", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.2614908"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.167652" }}
                  id="rect55928-8"
                  width="0.26458332"
                  height="3.175"
                  x="34.831898"
                  y="9.790658"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-1"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#3d3d3d", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-4"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="13.230242"
                />
              </g>
            </g>
            <g
              id="g29855-3"
              className="arm-cup"
              inkscape:label="Стакан"
              opacity={state.i2 === 1 ? 0 : 1}
              transform="translate(-24.34167,-7.9373341)"
            >
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529151",
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect14248-2-6"
                width="4.2333488"
                height="13.229183"
                x="42.240223"
                y="21.590702"
              />
              <rect
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.860913",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843-0-4"
                shapeRendering="geometricPrecision"
                width="5.8208332"
                height="5.0932345"
                x="41.44648"
                y="16.777924"
                ry="1.6333898"
              />
              <g
                id="g61894-6"
                inkscape:label="Обрамление стакана"
                transform="translate(12.170831,7.946383)"
              >
                <rect
                  style={{ fill: "#cccccc", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-5-3"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.7323236"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-1-7"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#5f5f5f", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-8"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.302731"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#333333", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-8"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.2614908"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-9"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#020202", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-9-6"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.167652" }}
                  id="rect55928-8-2"
                  width="0.26458332"
                  height="3.175"
                  x="34.831898"
                  y="9.790658"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-5"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-1-8"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#3d3d3d", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-4-3"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="13.230242"
                />
              </g>
            </g>
            <g
              id="g29855-0"
              className="arm-cup"
              inkscape:label="Стакан"
              opacity={state.i4 === 1 ? 0 : 1}
              transform="translate(-36.415799,-4.5776367e-4)"
            >
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529151",
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect14248-2-1"
                width="4.2333488"
                height="13.229183"
                x="42.240223"
                y="21.590702"
              />
              <rect
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.860913",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843-0-5"
                shapeRendering="geometricPrecision"
                width="5.8208332"
                height="5.0932345"
                x="41.44648"
                y="16.778404"
                ry="1.6333898"
              />
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "1.26577",
                  strokeDasharray: "none"
                }}
                id="rect18456"
                width="4.3656249"
                height="5.8208332"
                x="49.154995"
                y="9.5693197"
                ry="1.0914052"
                inkscape:label="Маскировка"
              />
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "1.26577",
                  strokeDasharray: "none"
                }}
                id="rect18456-2"
                width="4.3656249"
                height="5.8208332"
                x="61.325817"
                y="9.7512236"
                ry="1.0914052"
                inkscape:label="Маскировка"
              />
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "1.26577",
                  strokeDasharray: "none"
                }}
                id="rect18456-8"
                width="4.3656249"
                height="5.8208332"
                x="73.496666"
                y="17.506653"
                ry="1.0914052"
                inkscape:label="Маскировка"
              />
            </g>
            <g id="g56331" inkscape:label="Зачернители руки">
              <rect
                style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                id="rect56565-8-5"
                width="0.26458332"
                height="0.26458332"
                x="34.567314"
                y="9.5260744"
              />
            </g>
            <g
              id="g29855-1"
              className="arm-cup-up"
              inkscape:label="Стакан-поднятый"
              opacity={state.i5 === 1 ? 1 : 0}
              transform="translate(0,-7.4083538)"
            >
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529151",
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect14248-2-4"
                width="4.2333488"
                height="13.229183"
                x="42.240223"
                y="21.590702"
              />
              <rect
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.860913",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843-0-43"
                shapeRendering="geometricPrecision"
                width="5.8208332"
                height="5.0932345"
                x="41.446484"
                y="16.777946"
                ry="1.6333898"
              />
              <g
                id="g61894-1-7"
                inkscape:label="Обрамление стакана"
                transform="translate(12.170837,7.9464058)"
              >
                <rect
                  style={{ fill: "#cccccc", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-5-4-7"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.7323236"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-1-4-2"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#5f5f5f", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-4-2"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.302731"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#333333", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-88-1"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.2614908"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-01-0"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.167652" }}
                  id="rect55928-8-4-4"
                  width="0.26458332"
                  height="3.175"
                  x="34.831898"
                  y="9.790658"
                />
                <rect
                  style={{ fill: "#020202", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-9-6-9-4"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-8-3"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-1-89-3"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#3d3d3d", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-4-38-4"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="13.230242"
                />
              </g>
            </g>
            <g
              id="g29855-1-4"
              className="arm-cup-up"
              opacity={state.i3 === 1 ? 1 : 0}
              inkscape:label="Стакан-поднятый"
              transform="translate(-12.170749,-15.345622)"
            >
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529151",
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect14248-2-4-0"
                width="4.2333488"
                height="13.229183"
                x="42.240223"
                y="21.590702"
              />
              <rect
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.860913",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843-0-43-2"
                shapeRendering="geometricPrecision"
                width="5.8208332"
                height="5.0932345"
                x="41.446484"
                y="16.777946"
                ry="1.6333898"
              />
              <g
                id="g61894-1-7-1"
                inkscape:label="Обрамление стакана"
                transform="translate(12.170837,7.9464058)"
              >
                <rect
                  style={{ fill: "#cccccc", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-5-4-7-7"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.7323236"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-1-4-2-6"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#5f5f5f", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-4-2-3"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.302731"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#333333", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-88-1-2"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.2614908"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-01-0-5"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.167652" }}
                  id="rect55928-8-4-4-4"
                  width="0.26458332"
                  height="3.175"
                  x="34.831898"
                  y="9.790658"
                />
                <rect
                  style={{ fill: "#020202", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-9-6-9-4-8"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-8-3-3"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-1-89-3-5"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#3d3d3d", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-4-38-4-5"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="13.230242"
                />
              </g>
            </g>
            <g
              id="g29855-1-1"
              className="arm-cup-up"
              opacity={state.i2 === 1 ? 1 : 0}
              inkscape:label="Стакан-поднятый"
              transform="translate(-24.341582,-15.345622)"
            >
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529151",
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect14248-2-4-4"
                width="4.2333488"
                height="13.229183"
                x="42.240223"
                y="21.590702"
              />
              <rect
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.860913",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843-0-43-9"
                shapeRendering="geometricPrecision"
                width="5.8208332"
                height="5.0932345"
                x="41.446484"
                y="16.777946"
                ry="1.6333898"
              />
              <g
                id="g61894-1-7-5"
                inkscape:label="Обрамление стакана"
                transform="translate(12.170837,7.9464058)"
              >
                <rect
                  style={{ fill: "#cccccc", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-5-4-7-2"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.7323236"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-1-4-2-7"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#5f5f5f", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-4-2-9"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.302731"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#333333", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-88-1-0"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.2614908"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-01-0-1"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.167652" }}
                  id="rect55928-8-4-4-40"
                  width="0.26458332"
                  height="3.175"
                  x="34.831898"
                  y="9.790658"
                />
                <rect
                  style={{ fill: "#020202", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-9-6-9-4-4"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-8-3-0"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-1-89-3-6"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#3d3d3d", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-4-38-4-7"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="13.230242"
                />
              </g>
            </g>
            <g
              id="g29855-1-6"
              className="arm-cup-up"
              opacity={state.i4 === 1 ? 1 : 0}
              inkscape:label="Стакан-поднятый"
              transform="translate(-36.41578,-7.4086393)"
            >
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.529151",
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect14248-2-4-09"
                width="4.2333488"
                height="13.229183"
                x="42.240223"
                y="21.590702"
              />
              <rect
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.860913",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843-0-43-4"
                shapeRendering="geometricPrecision"
                width="5.8208332"
                height="5.0932345"
                x="41.446484"
                y="16.777946"
                ry="1.6333898"
              />
              <g
                id="g61894-1-7-2"
                inkscape:label="Обрамление стакана"
                transform="translate(12.170837,7.9464058)"
              >
                <rect
                  style={{ fill: "#cccccc", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-5-4-7-26"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.7323236"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-1-4-2-76"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.038147"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#5f5f5f", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-7-4-2-0"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.302731"
                  y="8.9969072"
                />
                <rect
                  style={{ fill: "#333333", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-0-88-1-9"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.2614908"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-01-0-0"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.167652" }}
                  id="rect55928-8-4-4-45"
                  width="0.26458332"
                  height="3.175"
                  x="34.831898"
                  y="9.790658"
                />
                <rect
                  style={{ fill: "#020202", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-8-9-6-9-4-7"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="9.5260744"
                />
                <rect
                  style={{ fill: "#7a7a7a", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-8-3-5"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.831898"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-1-89-3-9"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="12.965658"
                />
                <rect
                  style={{ fill: "#3d3d3d", fillOpacity: 1, strokeWidth: "0.260544" }}
                  id="rect56565-89-4-38-4-52"
                  width="0.26458332"
                  height="0.26458332"
                  x="34.567314"
                  y="13.230242"
                />
              </g>
            </g>
            <g
              id="g45245"
              shapeRendering="geometricPrecision"
              className="brushes-clean brushes-clean-on"
              transform="matrix(0.89687834,0,0,0.89687834,40.662731,10.117997)"
              inkscape:label="Чистка"
              opacity={state.i11 === 0 ? 0 : 1}
            >
              <g
                id="g2975-4-1-9-1-2-6-8-2-9-4"
                transform="matrix(0.42831353,1.0294292,-1.0294292,0.42831353,113.7857,-59.960559)"
                style={{ strokeWidth: "0.529167", strokeDasharray: "none" }}
                inkscape:label="Щетка"
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-1-4-3-6"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-9-5-3"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-3-3-2"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-8-7-6"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-12-7-7"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-1-9-2-3"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-8-2-1-8"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-9-2-7-7"
                />
              </g>
              <g
                id="g2975-4-1-9-1-2-6-8-2-9-0"
                transform="matrix(0.42831355,1.0294292,-1.0294292,0.42831355,106.83892,-59.98649)"
                style={{ strokeWidth: "0.529167", strokeDasharray: "none" }}
                inkscape:label="Щетка"
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-1-4-3-0"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-9-5-8"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-3-3-5"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-8-7-9"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-12-7-0"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-1-9-2-7"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-8-2-1-7"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-9-2-7-0"
                />
                <g
                  transform="matrix(0.00127954,-0.0030753,-0.0030753,-0.00127954,72.46711,60.86547)"
                  fill="#000000"
                  stroke="none"
                  id="g47630"
                  style={{
                    stroke: "#ffffff",
                    strokeWidth: "149.851",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                >
                  <path
                    d="m -707.23693,-1602.3091 c -50.44545,-34.1477 -66.74316,-93.13 -40.35638,-145.9036 22.50644,-45.0128 51.99758,-58.9823 139.69495,-64.4149 253.00304,-17.0738 476.51485,-146.6796 615.4337367,-356.9981 57.4300593,-87.6975 106.3233733,-212.6467 117.1885133,-300.3441 l 2.3282,-19.4021 -117.1884156,-3.8804 c -100.8908074,-3.1043 -120.2929744,-6.2087 -133.4863144,-18.626 -20.95422,-18.626 -28.71509,-53.5498 -16.29781,-76.0561 13.9696,-27.1629 332.93964,-496.6931 350.01351,-516.0952 8.53684,-9.3129 24.05848,-18.626 34.92362,-21.7302 45.01279,-10.8652 56.65409,2.3283 242.91397,275.5094 195.57288,287.9268 200.22938,297.2397 159.09693,337.5961 -17.84984,18.6259 -21.73027,19.402 -138.91879,19.402 -65.96709,0 -121.84502,2.3282 -123.39715,6.2086 -6.20864,9.313 30.26721,142.7993 55.87792,203.3338 70.6235,165.3057 226.61617,323.6266 395.0262,401.2348 77.60829,35.6999 188.58804,63.6389 281.71804,69.8475 85.3692,5.4326 114.0842,17.0739 138.9189,58.2062 30.2672,49.6693 12.4173,117.1886 -38.8042,152.1123 -25.6107,17.8499 -31.8193,18.626 -112.532,14.7456 -144.35136,-6.9848 -266.19637,-38.8041 -395.02619,-103.219 -178.49911,-90.0256 -337.59604,-239.0336 -425.29341,-398.9066 -13.96942,-25.6108 -27.16285,-46.565 -29.49115,-46.565 -2.3282,0 -13.19344,18.626 -24.83464,41.1323 -34.14765,65.1911 -117.18852,169.1861 -184.707656,232.8249 -179.275264,168.41 -399.682704,263.0921 -640.268374,274.7334 -80.71266,3.8804 -86.9214,3.1043 -112.53201,-14.7456 z"
                    id="path47626"
                    style={{
                      fill: "#000000",
                      fillOpacity: 1,
                      stroke: "#ffffff",
                      strokeWidth: "317.735",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                      paintOrder: "stroke markers fill"
                    }}
                  />
                </g>
              </g>
              <path
                d="m 74.377196,42.957533 c 0.01553,2.828569 0.01553,2.854605 0.129223,3.058504 0.155063,0.286324 0.527196,0.603022 0.878661,0.750525 0.268766,0.112784 0.351465,0.125816 0.790795,0.125816 0.439329,0 0.522023,-0.01304 0.790788,-0.125816 0.351466,-0.147503 0.723604,-0.464201 0.878659,-0.750525 0.113694,-0.203899 0.113694,-0.229935 0.129197,-3.058504 l 0.01553,-2.850263 h -1.814167 -1.814175 z m 2.522266,0.342728 c 0,2.21687 -0.0047,2.290618 -0.103363,2.425108 -0.268763,0.368755 -0.971691,0.368755 -1.240456,0 -0.09822,-0.13449 -0.103363,-0.208238 -0.103363,-2.425108 v -2.281948 h 0.723601 0.723603 z"
                id="path48418-4-2"
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  strokeWidth: "0.00471684",
                  strokeDasharray: "none"
                }}
                sodipodi:nodetypes="ccsssccccccsccscccs"
              />
            </g>
            <g
              id="g45245-3"
              transform="matrix(0.89687834,0,0,0.89687834,14.587013,10.125603)"
              className="brushes brushes-open"
              shapeRendering="geometricPrecision"
              inkscape:label="Щетки выдвинуть"
              opacity={state.i12 === 0 ? 0 : 1}
            >
              <rect
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.590009",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                  paintOrder: "stroke markers fill"
                }}
                id="rect54982"
                width="15.413996"
                height="8.5551367"
                x="68.501274"
                y="46.664745"
              />
              <g
                id="g24917-9"
                inkscape:label="Стрелка влево"
                style={{ fill: "#25be2c", fillOpacity: 1 }}
                transform="matrix(-0.2950047,0,0,0.2950047,175.34575,-84.418847)"
              >
                <path
                  id="rect24718-3"
                  style={{
                    opacity: 1,
                    fill: "#25be2c",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: "2.00012",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 334.93085,430.80763 v -0.99998 0 h 14.61076 v 5.99988 h -14.61076 l -1e-5,-0.99999"
                  inkscape:label="rect24718-3"
                />
                <path
                  id="path24779-8"
                  style={{
                    opacity: 1,
                    fill: "#25be2c",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  inkscape:transform-center-x="1.8941244"
                  inkscape:transform-center-y="-1.9929559e-06"
                  d="m 350.2631,451.21145 2.28122,3.95119 h -13.12288 l 6.56144,-11.36475 v 0 l 2.28024,3.9495"
                  transform="rotate(30,373.20889,414.39864)"
                />
              </g>
              <g
                id="g2975-4-1-9-1-2-6-8-6"
                transform="matrix(0.42831355,1.0294292,-1.0294292,0.42831355,113.68854,-60.193078)"
                style={{ strokeWidth: "0.529167", strokeDasharray: "none" }}
                inkscape:label="Щетка"
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-1-2"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-0"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-0"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-80"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-0"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-1-7"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-8-6"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-9-5"
                />
              </g>
              <g
                id="g2975-4-1-9-1-2-6-8-6-7"
                transform="matrix(0.42831355,1.0294292,-1.0294292,0.42831355,106.93631,-60.193084)"
                style={{ strokeWidth: "0.529167", strokeDasharray: "none" }}
                inkscape:label="Щетка"
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-1-2-8"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-0-2"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-0-8"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-80-6"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-0-3"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-1-7-7"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-8-6-5"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-9-5-1"
                />
              </g>
            </g>
            <g
              id="g54972"
              inkscape:label="Забелители руки"
              style={{ fill: "#ffffff", fillOpacity: 1 }}
            >
              <rect
                style={{ fill: "#ffffff", fillOpacity: 1, strokeWidth: "0.316152" }}
                id="rect54642"
                width="3.8893812"
                height="7.4787521"
                x="47.267319"
                y="15.585188"
              />
              <rect
                style={{ fill: "#ffffff", fillOpacity: 1, strokeWidth: "0.428416" }}
                id="rect54642-7"
                width="3.9361534"
                height="13.569928"
                x="37.557102"
                y="8.8315411"
              />
              <rect
                style={{ fill: "#ffffff", fillOpacity: 1, strokeWidth: "0.434432" }}
                id="rect54642-1"
                width="3.9555295"
                height="13.885374"
                x="25.386253"
                y="0.70514393"
              />
              <rect
                style={{ fill: "#ffffff", fillOpacity: 1, strokeWidth: "0.430646" }}
                id="rect54642-18"
                width="3.9127672"
                height="13.793476"
                x="13.215428"
                y="1.3331075"
              />
              <rect
                style={{ fill: "#ffffff", fillOpacity: 1, strokeWidth: "0.316152" }}
                id="rect54642-98"
                width="3.8893812"
                height="7.4787521"
                x="10.851512"
                y="15.585188"
              />
              <rect
                style={{ fill: "#ffffff", fillOpacity: 1, strokeWidth: "0.316152" }}
                id="rect54642-2"
                width="3.8893812"
                height="7.4787521"
                x="1.1413035"
                y="15.585188"
              />
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  strokeWidth: "0.529167",
                  strokeDasharray: "none"
                }}
                id="rect41398"
                width="0.13229166"
                height="0.033072915"
                x="35.917187"
                y="12.038542"
              />
            </g>
            <g
              id="g45245-3-2"
              transform="matrix(0.89687834,0,0,0.89687834,14.587013,10.125603)"
              className="brushes brushes-close"
              shapeRendering="geometricPrecision"
              inkscape:label="Щетки задвинуть"
              opacity={state.i12 === 0 ? 1 : 0}
            >
              <rect
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "0.590009",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                  paintOrder: "stroke markers fill"
                }}
                id="rect54982-6"
                width="15.413996"
                height="8.5551367"
                x="68.501274"
                y="46.664745"
              />
              <g
                id="g24917-9-1"
                inkscape:label="Стрелка влево"
                style={{ fill: "#ed1c24", fillOpacity: 1 }}
                transform="matrix(0.2950047,0,0,0.2950047,-22.929201,-84.418847)"
              >
                <path
                  id="rect24718-3-3"
                  style={{
                    opacity: 1,
                    fill: "#ed1c24",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: "2.00012",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 334.93085,430.80763 v -0.99998 0 h 14.61076 v 5.99988 h -14.61076 l -1e-5,-0.99999"
                />
                <path
                  id="path24779-8-5"
                  style={{
                    opacity: 1,
                    fill: "#ed1c24",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  inkscape:transform-center-x="1.8941244"
                  inkscape:transform-center-y="-1.9929559e-06"
                  d="m 350.2631,451.21145 2.28122,3.95119 h -13.12288 l 6.56144,-11.36475 v 0 l 2.28024,3.9495"
                  transform="rotate(30,373.20889,414.39864)"
                />
              </g>
              <g
                id="g2975-4-1-9-1-2-6-8-2"
                transform="matrix(0.42831358,1.0294292,-1.0294292,0.42831358,106.93631,-60.193085)"
                style={{ strokeWidth: "0.529167", strokeDasharray: "none" }}
                inkscape:label="Щетка"
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-1-4"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-9"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-3"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-8"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-12"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-1-9"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-8-2"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-9-2"
                />
              </g>
              <g
                id="g2975-4-1-9-1-2-6-8"
                transform="matrix(0.42831358,1.0294292,-1.0294292,0.42831358,113.68854,-60.193082)"
                style={{ strokeWidth: "0.529167", strokeDasharray: "none" }}
                inkscape:label="Щетка"
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-1"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-1"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-8"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-9"
                />
              </g>
            </g>
            <g
              id="g45245-4"
              transform="matrix(0.89687834,0,0,0.89687834,40.662734,10.117986)"
              shapeRendering="geometricPrecision"
              className="brushes-clean brushes-clean-off"
              inkscape:label="Чистка выключено"
              opacity={state.i11 === 0 ? 1 : 0}
            >
              <path
                d="m 74.377193,42.957545 c 0.01553,2.828569 0.01553,2.854605 0.129223,3.058504 0.155063,0.286324 0.527196,0.603022 0.878661,0.750525 0.268766,0.112784 0.351465,0.125816 0.790795,0.125816 0.439329,0 0.522023,-0.01304 0.790788,-0.125816 0.351466,-0.147503 0.723604,-0.464201 0.878659,-0.750525 0.113694,-0.203899 0.113694,-0.229935 0.129197,-3.058504 l 0.01553,-2.850263 h -1.814167 -1.814175 z m 2.522266,0.342728 c 0,2.21687 -0.0047,2.290618 -0.103363,2.425108 -0.268763,0.368755 -0.971691,0.368755 -1.240456,0 -0.09822,-0.13449 -0.103363,-0.208238 -0.103363,-2.425108 v -2.281948 h 0.723601 0.723603 z"
                id="path48418-4"
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  strokeWidth: "0.00471684",
                  strokeDasharray: "none"
                }}
                sodipodi:nodetypes="ccsssccccccsccscccs"
              />
              <g
                id="g2975-4-1-9-1-2-6-8-2-7"
                transform="matrix(0.42831355,1.0294292,-1.0294292,0.42831355,113.78569,-59.960549)"
                style={{ strokeWidth: "0.529167", strokeDasharray: "none" }}
                inkscape:label="Щетка"
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-1-4-8"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-9-4"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-3-1"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-8-3"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-12-77"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-1-9-6"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-8-2-7"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-9-2-75"
                />
              </g>
              <g
                id="g2975-4-1-9-1-2-6-8-2-9"
                transform="matrix(0.42831355,1.0294292,-1.0294292,0.42831355,106.83891,-59.986479)"
                style={{ strokeWidth: "0.529167", strokeDasharray: "none" }}
                inkscape:label="Щетка"
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-1-4-3"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-9-5"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-3-3"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-5-3-5-1-07-8-8-7"
                  transform="rotate(-22.409318,80.27326,66.539506)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-12-7"
                  transform="rotate(-67.409318,80.273258,66.539507)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 80.273257,64.025959 V 69.05305"
                  id="path2424-2-7-5-19-6-1-9-2"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-8-0-8-7-9-8-2-1"
                  transform="rotate(-45,80.273258,66.539505)"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeWidth: "0.529167",
                    strokeLinecap: "round",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                    paintOrder: "stroke markers fill"
                  }}
                  d="M 82.786804,66.539503 H 77.759712"
                  id="path2426-7-2-3-1-9-0-9-2-7"
                />
              </g>
            </g>
            <rect
              style={{
                fill: "#25be2c",
                stroke: "#25be2c",
                strokeWidth: 0,
                strokeLinecap: "round",
                opacity: "0"
              }}
              id="5"
              className="Cups"
              onClick={(e) => valvePopupOpen(true, e)}
              width="6.396327"
              height="26.887209"
              x="41.493256"
              y="8.8315411"
              inkscape:label="Маска стакана переднего левого"
            />
            <rect
              style={{
                opacity: "0",
                fill: "#25be2c",
                stroke: "#25be2c",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="3"
              className="Cups"
              onClick={(e) => valvePopupOpen(true, e)}
              width="6.3107233"
              height="26.679653"
              x="29.275736"
              y="1.4323244"
              inkscape:label="Маска стакана заднего левого"
            />
            <rect
              style={{
                opacity: "0",
                fill: "#25be2c",
                stroke: "#25be2c",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="2"
              className="Cups"
              onClick={(e) => valvePopupOpen(true, e)}
              width="6.2212844"
              height="26.342712"
              x="17.128195"
              y="1.3331075"
              inkscape:label="Маска стакана заднего правого"
            />
            <rect
              style={{
                opacity: "0",
                fill: "#25be2c",
                stroke: "#25be2c",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="4"
              className="Cups"
              onClick={(e) => valvePopupOpen(true, e)}
              width="6.4786711"
              height="26.349443"
              x="5.0307035"
              y="9.3693075"
              inkscape:label="Маска стакана переднего правого"
            />
            <rect
              style={{
                opacity: "0",
                fill: "#25be2c",
                stroke: "#25be2c",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="23"
              className="Valve"
              onClick={(e) => valvePopupOpen(true, e)}
              width="58.411156"
              height="9.9444933"
              x="5.3240523"
              y="50.694447"
              inkscape:label="Маска устройства отведения первых струек"
            />
            <rect
              style={{
                opacity: "0",
                fill: "#25be2c",
                stroke: "#25be2c",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="11"
              className="Brushes"
              onClick={(e) => valvePopupOpen(true, e)}
              width="11.935724"
              height="13.361458"
              x="103.39838"
              y="45.971355"
              inkscape:label="Маска щеток"
            />
            <rect
              style={{
                opacity: "0",
                fill: "#25be2c",
                stroke: "#25be2c",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="12"
              className="Brushes-lever"
              onClick={(e) => valvePopupOpen(true, e)}
              width="16.734896"
              height="13.907426"
              x="74.612495"
              y="46.731514"
              inkscape:label="Маска выдвижения щеток"
            />
            <rect
              style={{
                opacity: "0",
                fill: "#25be2c",
                stroke: "#25be2c",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="46"
              className="Pulsator"
              onClick={(e) => valvePopupOpen(true, e)}
              width="12.727662"
              height="11.591273"
              x="77.863197"
              y="17.421192"
              inkscape:label="Маска пульсатора"
            />
            <rect
              style={{
                fill: "#2a569a",
                fillOpacity: state.i32 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "0.529238",
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect28570"
              width="1.8520116"
              height="73.532768"
              x="25.404303"
              y="12.533869"
              inkscape:label="Подача йода"
            ></rect>

            <g
              id="g57269"
              transform="translate(-0.06135207,0.10519239)"
              inkscape:label="Струя йода"
              style={{ display: state.i32 === 1 ? "" : "none" }}
            >
              <g id="g57308">
                <path
                  style={{
                    fill: "#1f96a6",
                    fillOpacity: 1,
                    stroke: "#2a569a",
                    strokeWidth: "0.529167",
                    strokeLinecap: "square",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="M 26.683257,12.052032 27.256979,3.7463778 Z"
                  id="path31753"
                  shapeRendering="geometricPrecision"
                ></path>
                <path
                  style={{
                    fill: "#1f96a6",
                    fillOpacity: 1,
                    stroke: "#2a569a",
                    strokeWidth: "0.529167",
                    strokeLinecap: "square",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="M 27.465378,11.854268 28.846886,3.4413938"
                  id="path31759"
                  shapeRendering="geometricPrecision"
                />
              </g>
              <g id="g57269-0" transform="matrix(-1,0,0,1,52.769622,0.01354963)">
                <path
                  style={{
                    fill: "#1f96a6",
                    fillOpacity: 1,
                    stroke: "#2a569a",
                    strokeWidth: "0.529167",
                    strokeLinecap: "square",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="M 26.683257,12.052032 27.256979,3.7463778 Z"
                  id="path31753-7"
                  shapeRendering="geometricPrecision"
                ></path>
                <path
                  style={{
                    fill: "#1f96a6",
                    fillOpacity: 1,
                    stroke: "#2a569a",
                    strokeWidth: "0.529167",
                    strokeLinecap: "square",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="M 27.465378,11.854268 28.846886,3.4413938"
                  id="path31759-7"
                  shapeRendering="geometricPrecision"
                />
              </g>
            </g>

            <g
              id="g18575"
              transform="matrix(0,0.26458333,-0.26458333,0,169.87115,-78.132457)"
              style={{ fill: "none", fillOpacity: 1 }}
              inkscape:label="Иконка воздуха сканера"
              shapeRendering="geometricPrecision"
            >
              <path
                d="m 556.85631,201.10233 c -0.42087,-1.462 -1.5949,-2.89075 -2.95719,-3.5996 -0.99682,-0.52055 -1.39556,-0.6313 -2.43666,-0.731 l -0.86391,-0.0775 -0.12183,-0.57593 c -0.43195,-1.92717 -2.01577,-3.6439 -3.97618,-4.3306 -0.94143,-0.33227 -2.5474,-0.39872 -3.44453,-0.14397 -2.18192,0.62023 -3.96509,2.41449 -4.43028,4.47457 l -0.12182,0.57593 -0.77531,0.0664 c -1.04112,0.0997 -1.62813,0.26582 -2.51418,0.731 -1.27371,0.67561 -2.4145,2.00471 -2.90184,3.41131 -0.25473,0.71992 -0.34334,2.44773 -0.16613,3.25626 0.45411,2.11546 2.14869,3.90972 4.24199,4.51887 1.63921,0.47626 2.51418,0.2769 2.51418,-0.56486 0,-0.54271 -0.31012,-0.76421 -1.22939,-0.85282 -1.57276,-0.1772 -2.91292,-1.11865 -3.57745,-2.53633 -0.32121,-0.66455 -0.34336,-0.80852 -0.34336,-1.88286 0,-1.07435 0.0221,-1.21834 0.34336,-1.88288 0.43195,-0.90821 1.21831,-1.6835 2.14868,-2.1376 0.6867,-0.34336 0.7753,-0.35444 2.07116,-0.35444 1.67243,0 1.70565,-0.0332 1.81641,-1.21831 0.19936,-2.11547 1.63921,-3.67714 3.72142,-4.06479 1.61706,-0.29904 3.40024,0.47625 4.36382,1.8718 0.43197,0.63131 0.76423,1.65028 0.76423,2.35912 0,0.35442 0.0665,0.60916 0.21044,0.78637 0.19936,0.25475 0.27689,0.26581 1.58383,0.26581 1.318,0 1.39552,0.0111 2.10437,0.3655 2.25944,1.10757 3.16765,3.65499 2.11547,5.9255 -0.65348,1.37339 -2.01579,2.33697 -3.57747,2.50311 -0.64237,0.0664 -0.85281,0.13291 -1.00787,0.33227 -0.28797,0.35442 -0.26582,0.83067 0.0443,1.12972 0.22152,0.21043 0.33227,0.22151 1.07435,0.1772 2.49203,-0.16613 4.71824,-2.03792 5.37171,-4.51887 0.22151,-0.8196 0.19936,-2.42559 -0.0444,-3.2784 z"
                id="path1401"
                style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.0110756" }}
              ></path>
              <path
                d="m 551.75042,202.3428 c -0.16613,-0.43194 -0.39871,-0.53162 -1.12971,-0.47625 -1.39555,0.0886 -2.68032,0.97466 -3.33379,2.29267 l -0.35441,0.731 -0.0331,10.15641 c -0.0221,10.05673 -0.0221,10.16748 0.19935,10.389 0.29905,0.29904 0.89713,0.28796 1.17402,-0.0111 0.19937,-0.22152 0.21044,-0.59809 0.26582,-10.27824 l 0.0554,-10.04565 0.31011,-0.46518 c 0.40981,-0.62024 1.01898,-1.00788 1.80534,-1.12973 0.48734,-0.0775 0.71992,-0.1772 0.90822,-0.38764 0.2658,-0.31012 0.27689,-0.42088 0.1329,-0.7753 z"
                id="path1405"
                style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.0110756" }}
              ></path>
              <path
                d="m 545.34867,202.43141 c -0.0775,-0.5427 -0.94142,-0.77529 -1.35124,-0.36549 -0.2215,0.22151 -0.2215,0.36549 -0.2215,13.39051 v 13.18006 l 0.28797,0.22152 c 0.37657,0.29905 0.63131,0.28798 0.98573,-0.0111 l 0.28797,-0.25473 0.0221,-12.95856 c 0.0111,-7.12167 0.0111,-13.06932 -0.0111,-13.20223 z"
                id="path1407"
                style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.0110756" }}
              ></path>
              <path
                d="m 541.94844,204.45827 c -0.64239,-1.57276 -2.10438,-2.61387 -3.67713,-2.61387 -0.65346,0 -0.9525,0.25475 -0.9525,0.78638 0,0.44302 0.3101,0.74207 0.86389,0.81961 0.74208,0.11075 1.16295,0.28796 1.56168,0.64238 0.8196,0.70885 0.75315,-0.0775 0.8196,10.7988 l 0.0554,9.7909 0.32119,0.27691 c 0.34335,0.29903 0.731,0.27687 1.0965,-0.0444 0.17721,-0.16614 0.18827,-0.78639 0.18827,-9.99027 v -9.81306 z"
                id="path1409"
                style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "0.0110756" }}
              />
            </g>

            <g
              transform="matrix(0.00196031,0,0,-0.00196031,99.674715,70.746277)"
              fill="#000000"
              stroke="none"
              id="g49109-8"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
              inkscape:label="Иконка воды сканера"
              shapeRendering="geometricPrecision"
            >
              <path
                d="m 1608,4284 c -29,-9 -54,-24 -64,-39 l -16,-25 -427,-2 -426,-3 -25,-50 c -22,-43 -25,-63 -25,-150 0,-118 8,-164 36,-199 l 20,-26 h 425 424 v -60 -60 h 220 220 v 60 60 h 424 c 370,0 427,2 440,15 58,59 61,318 5,390 l -20,25 h -424 -423 l -16,25 c -23,35 -101,55 -210,54 -50,0 -112,-7 -138,-15 z"
                id="path49083-4"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="m 1338,3548 c -46,-12 -93,-63 -109,-118 l -12,-40 H 773 330 v -530 -530 h 1249 1250 l 28,-24 c 28,-24 28,-26 31,-155 l 4,-131 h 324 324 v 123 c 0,280 -54,482 -178,664 -100,147 -279,274 -462,329 -62,19 -69,23 -40,23 114,2 313,-52 429,-115 80,-44 99,-59 180,-137 184,-180 291,-459 291,-763 v -124 h 95 95 v 73 c 0,233 -35,445 -99,598 -122,293 -386,530 -711,638 -142,46 -200,53 -542,58 l -328,5 -11,41 c -14,52 -63,102 -114,116 -51,14 -754,13 -807,-1 z"
                id="path49085-8"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="M 30,3418 5,3404 2,2862 0,2319 35,2305 c 44,-19 106,-19 150,-1 l 35,15 v 539 c 0,486 -2,541 -16,553 -23,19 -142,23 -174,7 z"
                id="path49087-9"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="m 580,2163 c -1,-10 -7,-31 -14,-48 l -13,-30 -22,43 c -12,23 -26,42 -32,42 -5,0 -32,-11 -59,-25 l -50,-25 25,-50 25,-49 -45,14 c -25,7 -47,10 -49,7 -11,-19 -34,-112 -28,-116 4,-2 52,-18 107,-35 96,-29 101,-32 123,-72 12,-23 20,-44 18,-46 -2,-3 -47,9 -100,25 l -95,30 -20,-60 -20,-59 25,-9 c 13,-5 58,-20 99,-32 41,-13 75,-25 75,-29 0,-3 -20,-15 -45,-27 l -44,-21 -112,35 c -61,19 -112,34 -114,32 -9,-11 -35,-109 -31,-117 3,-4 27,-14 53,-21 l 48,-12 -48,-24 c -26,-13 -47,-29 -47,-35 0,-5 13,-32 28,-59 l 28,-49 40,24 c 21,13 42,25 46,25 4,0 1,-20 -6,-44 l -14,-45 60,-20 59,-20 9,24 c 5,12 21,62 35,109 25,81 29,87 67,107 22,11 42,18 45,15 3,-2 -9,-49 -26,-103 -16,-54 -27,-101 -23,-104 15,-13 106,-39 112,-32 4,5 20,52 36,105 16,54 31,98 35,98 3,0 15,-20 27,-45 l 21,-44 -35,-112 c -19,-61 -34,-112 -32,-114 8,-8 111,-34 118,-30 4,3 13,26 20,52 l 12,48 24,-47 c 13,-27 26,-48 29,-48 2,0 29,12 59,27 l 55,26 -25,50 -25,49 23,-8 c 56,-19 70,-12 89,43 21,63 28,57 -107,98 -89,27 -92,28 -113,71 -11,25 -21,46 -21,48 0,2 41,-9 91,-25 50,-17 96,-28 102,-26 10,3 37,79 37,104 0,7 -37,24 -82,38 -46,14 -90,28 -98,31 -9,3 0,13 29,31 l 43,25 107,-32 c 58,-18 111,-35 117,-37 10,-3 51,115 42,121 -2,1 -25,9 -53,17 l -50,16 48,23 c 26,13 47,28 47,33 0,5 -12,31 -27,57 l -27,48 -48,-24 c -26,-13 -48,-23 -48,-20 0,2 7,22 14,44 8,23 12,43 8,46 -11,6 -115,36 -117,33 -2,-1 -17,-50 -35,-108 -32,-105 -33,-106 -76,-128 -25,-11 -46,-21 -48,-21 -2,0 12,48 30,107 19,58 33,107 32,109 -11,9 -113,33 -119,27 -4,-5 -19,-48 -34,-98 -15,-49 -30,-94 -33,-99 -3,-5 -16,12 -29,38 l -24,46 32,103 c 18,56 34,107 36,114 3,6 -18,18 -50,27 -69,20 -77,20 -77,-1 z"
                id="path49089-5"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="m 2843,1895 c -35,-15 -63,-60 -63,-100 0,-36 28,-81 57,-94 16,-8 203,-11 586,-11 517,0 564,2 583,18 66,53 54,156 -21,188 -50,21 -1094,20 -1142,-1 z"
                id="path49091-0"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="m 3349,1518 c -138,-194 -241,-373 -279,-488 -28,-82 -24,-191 8,-263 31,-70 111,-149 185,-183 55,-26 73,-29 157,-29 83,1 102,4 152,29 70,33 140,101 176,170 24,46 27,61 27,156 v 105 l -62,127 c -52,106 -212,359 -280,446 l -18,22 z m 137,-311 c 62,-100 108,-194 118,-244 9,-42 -9,-105 -41,-143 -102,-122 -291,-77 -333,79 -18,67 13,145 133,333 27,43 53,76 58,73 4,-3 34,-47 65,-98 z"
                id="path49093-7"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="m 1142,1433 c -17,-26 -29,-50 -27,-53 2,-3 23,-20 48,-38 l 45,-32 36,44 c 20,25 36,48 36,53 0,11 -84,73 -98,73 -5,0 -23,-21 -40,-47 z"
                id="path49095-5"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="m 1340,1280 c -23,-28 -41,-52 -39,-53 3,-1 23,-20 47,-42 l 42,-39 40,39 c 22,21 40,44 40,50 0,6 -20,30 -44,54 l -43,42 z"
                id="path49097-7"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="M 600,1187 C 600,1184 543,978 474,728 335,224 336,234 393,140 c 99,-164 348,-152 437,20 40,78 40,77 -95,566 -112,407 -135,484 -135,461 z"
                id="path49099-7"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="m 2108,1126 c -121,-75 -166,-136 -188,-257 -13,-68 -9,-134 17,-287 8,-51 13,-96 9,-99 -10,-11 -64,117 -76,182 -7,36 -15,65 -19,65 -14,0 -110,-100 -126,-131 -38,-73 -57,-147 -62,-244 -7,-123 10,-191 62,-252 153,-179 514,-111 618,115 16,35 22,66 21,122 0,85 -23,142 -90,221 -98,116 -134,302 -103,524 6,42 9,78 7,80 -2,1 -33,-16 -70,-39 z m -5,-537 c 14,-30 45,-76 68,-104 72,-86 86,-152 49,-224 -42,-83 -134,-131 -249,-131 -79,0 -134,27 -165,79 -22,37 -27,129 -12,205 l 8,40 39,-46 c 61,-72 142,-87 196,-36 41,39 46,83 23,234 -24,164 -25,204 -1,108 10,-40 29,-96 44,-125 z"
                id="path49101-6"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="m 2116,457 c -8,-53 -41,-106 -76,-124 -31,-16 -109,-17 -147,-2 -15,5 -40,22 -55,36 l -26,25 -7,-22 c -10,-32 2,-101 25,-137 23,-38 78,-68 141,-76 35,-5 56,-1 95,17 104,49 135,123 99,242 -8,27 -21,58 -28,68 -13,18 -15,16 -21,-27 z"
                id="path49103-9"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="m 1511,1100 -43,-40 33,-45 c 19,-24 38,-45 42,-45 12,0 97,62 97,70 0,10 -72,100 -79,100 -3,-1 -26,-19 -50,-40 z"
                id="path49105-8"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              ></path>
              <path
                d="m 1657,898 -47,-30 22,-36 c 46,-78 38,-74 97,-41 33,19 51,35 47,44 -10,26 -56,95 -64,94 -4,0 -28,-14 -55,-31 z"
                id="path49107-2"
                style={{ fill: "#2a569a", fillOpacity: 1 }}
              />
            </g>


          </g>
        </svg>
        <ClapanChange
          valvePopup={valvePopup}
          setValvePopup={setValvePopup}
          onClose={valvePopupClose}
          currentValve={currentValve}
          valveOpen={valveOpen}
          valveClose={valveClose}
          setOn={setOn}
          currentType={currentType}
          setOff={setOff}
        ></ClapanChange>
      </DialogContent>
    </Dialog>
  );
}

export default ArmSheme;

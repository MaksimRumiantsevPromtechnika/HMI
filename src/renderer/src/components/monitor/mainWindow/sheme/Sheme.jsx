
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeConnectionAction } from '../../../../store/connectionReducer';
import { updateShemeValueAction } from '../../../../store/schemeInfoReducer';
import ArmSheme from './armSheme/ArmSheme';
import ClapanChange from './clapanChange/ClapanChange';
const net = require('net');
import { createMachine, assign } from "xstate";
import { useMachine } from '@xstate/react';
import { after } from 'xstate/lib/actions';
import useTcpConnection from '../../../../services/tcpService';


export const CoolerMachine = createMachine(
  {
    id: "Cooler Machine",
    context: {
      value20: 0,
      value16: 0,
      value18: 0,
      value15: 0,
      value40: 0,
      value58: 0,
      value54: 0,
      value19: 0,
      value42: 0,
      value43: 0,
      value37: 0,
      value14: 0,
      value36: 0,
      value41: 0,
      value39: 0,
      fill609: 0,
      fill611: 0,
      fill625: 0,
      fill614: 0,
      fill618: 0,
      fill619: 0,
      fill620: 0,
      fill621: 0,
      fill627: 0,
      fill628: 0,
      fill629: 0,
      conf904: 0,
      conf905: 0,
      conf906: 0,
    },
    states: {
      "609": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill609: (ctx) => ctx.fill609 = 0 }),
            always: {
              target: "full",
              cond: "609-1",
            },
          },
          full: {
            entry: assign({ fill609: (ctx) => ctx.fill609 = 1 }),
            always:
              [
                {
                  target: "drain",
                  cond: "609-2",
                },
                {
                  target: "drain",
                  cond: "609-4",
                },
                {
                  target: "drain",
                  cond: "609-5",
                },
                {
                  target: "empty",
                  cond: "609-6",
                }
              ],
          },
          drain: {
            after: {
              "5000": [
                {
                  target: "empty",
                  actions: [],
                },
                {
                  internal: false,
                },
              ],
            },
            always: [
              {
                target: "full",
                cond: "609-3",
              },
              {
                target: "empty",
                cond: "609-6",
              }
            ],
          },
        },
      },
      "610": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill610: (ctx) => ctx.fill610 = 0 }),
            always: {
              target: "full",
              cond: "609-1",
            },
          },
          full: {
            entry: assign({ fill610: (ctx) => ctx.fill610 = 1 }),
            always:
              [
                {
                  target: "drain",
                  cond: "609-2",
                },
                {
                  target: "drain",
                  cond: "609-4",
                },
                {
                  target: "drain",
                  cond: "609-5",
                },
                {
                  target: "empty",
                  cond: "609-6",
                }
              ],
          },
          drain: {
            after: {
              "5000": [
                {
                  target: "empty",
                  actions: [],
                },
                {
                  internal: false,
                },
              ],
            },
            always: [
              {
                target: "full",
                cond: "609-3",
              },
              {
                target: "empty",
                cond: "609-6",
              }
            ],
          },
        },
      },
      "611": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill611: (ctx) => ctx.fill611 = 0 }),
            always: {
              target: "full",
              cond: "611-1",
            },
          },
          full: {
            entry: assign({ fill611: (ctx) => ctx.fill611 = 1 }),
            always: {
              target: "empty",
              cond: "611-2",
            },
          },
        },
      },
      "614": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill614: (ctx) => ctx.fill614 = 0 }),
            always: {
              target: "full",
              cond: "614-1",
            },
          },
          full: {
            entry: assign({ fill614: (ctx) => ctx.fill614 = 1 }),
            always: {
              target: "empty",
              cond: "614-2",
            },
          },
        },
      },
      "618": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill618: (ctx) => ctx.fill618 = 0 }),
            always: {
              target: "full",
              cond: "618-1",
            },
          },
          full: {
            entry: assign({ fill618: (ctx) => ctx.fill618 = 1 }),
            always: {
              target: "empty",
              cond: "618-2",
            },
          },
        },
      },
      "619": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill619: (ctx) => ctx.fill619 = 0 }),
            always: {
              target: "full",
              cond: "619-1",
            },
          },
          full: {
            entry: assign({ fill619: (ctx) => ctx.fill619 = 1 }),
            always: {
              target: "empty",
              cond: "619-2",
            },
          },
        },
      },
      "620": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill620: (ctx) => ctx.fill620 = 0 }),
            always: {
              target: "full",
              cond: "620-1",
            },
          },
          full: {
            entry: assign({ fill620: (ctx) => ctx.fill620 = 1 }),
            always: {
              target: "empty",
              cond: "620-2",
            },
          },
        },
      },
      "621": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill621: (ctx) => ctx.fill621 = 0 }),
            always: {
              target: "full",
              cond: "621-1",
            },
          },
          full: {
            entry: assign({ fill621: (ctx) => ctx.fill621 = 1 }),
            always: {
              target: "empty",
              cond: "621-2",
            },
          },
        },
      },
      "623": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill623: (ctx) => ctx.fill623 = 0 }),
            always: {
              target: "full",
              cond: "623-1",
            },
          },
          full: {
            entry: assign({ fill623: (ctx) => ctx.fill623 = 1 }),
            always: {
              target: "empty",
              cond: "623-2",
            },
          },
        },
      },
      "624": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill624: (ctx) => ctx.fill624 = 0 }),
            always: {
              target: "full",
              cond: "624-1",
            },
          },
          full: {
            entry: assign({ fill624: (ctx) => ctx.fill624 = 1 }),
            always: {
              target: "empty",
              cond: "624-2",
            },
          },
        },
      },
      "625": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill625: (ctx) => ctx.fill625 = 0 }),
            always: {
              target: "full",
              cond: "609-1",
            },
          },
          full: {
            entry: assign({ fill625: (ctx) => ctx.fill625 = 1 }),
            always:
              [
                {
                  target: "drain",
                  cond: "609-2",
                },
                {
                  target: "drain",
                  cond: "609-4",
                },
                {
                  target: "drain",
                  cond: "609-5",
                },
                {
                  target: "empty",
                  cond: "609-6",
                }
              ],
          },
          drain: {
            after: {
              "5000": [
                {
                  target: "empty",
                  actions: [],
                },
                {
                  internal: false,
                },
              ],
            },
            always: [
              {
                target: "full",
                cond: "609-3",
              },
              {
                target: "empty",
                cond: "609-6",
              }
            ],
          },
        },
      },
      "627": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill627: (ctx) => ctx.fill627 = 0 }),
            always: {
              target: "full",
              cond: "627-1",
            },
          },
          full: {
            entry: assign({ fill627: (ctx) => ctx.fill627 = 1 }),
            always: {
              target: "empty",
              cond: "627-2",
            },
          },
        },
      },
      "628": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill628: (ctx) => ctx.fill628 = 0 }),
            always: {
              target: "full",
              cond: "628-1",
            },
          },
          full: {
            entry: assign({ fill628: (ctx) => ctx.fill628 = 1 }),
            always: {
              target: "empty",
              cond: "628-2",
            },
          },
        },
      },
      "629": {
        initial: "empty",
        states: {
          empty: {
            entry: assign({ fill629: (ctx) => ctx.fill629 = 0 }),
            always: {
              target: "full",
              cond: "629-1",
            },
          },
          full: {
            entry: assign({ fill629: (ctx) => ctx.fill629 = 1 }),
            always: {
              target: "empty",
              cond: "629-2",
            },
          },
        },
      },
      "Cooler": {
        initial: "empty",
        states: {
          empty: {
            // entry: console.log(context.value211),
            on: {
              UPDATE_CONTEXT: {
                actions: ["updateContext"]
              }
            },
            always: {
              target: "full",
              cond: "FullCooler",
            },
          },
          full: {
            on: {
              UPDATE_CONTEXT: {
                actions: ["updateContext"]
              }
            },

            always: [
              {
                target: "drain",
                cond: "EmptyCooler",
              },
            ]
          },
          drain: {
            after: {
              "2000": [
                {
                  target: "empty",
                  actions: [],
                },
                {
                  internal: false,
                },
              ],
            },
          },
        },
      },
      "SanitaryTrap": {
        initial: "empty",
        states: {
          empty: {
            always: {
              target: "full",
              cond: "SanTrap",
            },
          },
          full: {
            always: [{
              target: "drain",
              cond: "SatTrap-2",
            },
            {
              target: "slowDrain",
              cond: "SlowSanTrap",
            },]
          },
          drain: {
            after: {
              "3000": [
                {
                  target: "empty",
                  actions: [],
                },
                {
                  internal: false,
                },
              ],
            },
          },
          slowDrain: {
            after: {
              "10000": [
                {
                  target: "empty",
                  actions: [],
                },
                {
                  internal: false,
                },
              ],
            },
            always: [{
              target: "drain",
              cond: "SatTrap-2",
            },]
          },
        },
      },
    },
    type: "parallel",
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: {
      "updateContext": assign({
        value58: (context, event) => event.allState.i58,
        value19: (context, event) => event.allState.i19,
        value16: (context, event) => event.allState.i16,
        value41: (context, event) => event.allState.i41,
        value39: (context, event) => event.allState.i39,
        value15: (context, event) => event.allState.i15,
        value20: (context, event) => event.allState.i20,
        value42: (context, event) => event.allState.i42,
        value43: (context, event) => event.allState.i43,
        value37: (context, event) => event.allState.i37,
        value14: (context, event) => event.allState.i14,
        value36: (context, event) => event.allState.i36,
        value54: (context, event) => event.allState.i54,
        value18: (context, event) => event.allState.i18,
        value40: (context, event) => event.allState.i40,
        conf904: (context, event) => event.configurator.i904,
        conf905: (context, event) => event.configurator.i905,
        conf906: (context, event) => event.configurator.i906,
      }),
    },
    services: {},
    guards: {
      "FullCooler": context => context.value58 === 1,

      "EmptyCooler": context => context.value19 === 1 && context.value58 === 0,


      "609-1": context => context.value39 === 1 && context.value16 === 1 && context.value40 === 0,

      "609-2": context => context.value16 === 0 && context.value41 === 1,

      "609-3": context => ((context.value41 === 0 && context.value18 === 0 && context.value40 === 0) && context.value16 === 0) || (context.value39 === 1 && context.value16 === 1),

      "609-4": context => context.value16 === 0 && context.value18 === 1,

      "609-5": context => (context.value16 === 1 && context.value39 === 0),

      "609-6": context => (context.value40 === 1),

      "610-1": context => context.value39 === 1 && context.value16 === 1,

      "610-2": context => context.value16 === 0 && context.value18 === 1,

      "610-3": context => context.value39 === 1 && context.value16 === 1,

      "610-4": context => context.value16 === 0 && context.value18 === 1,

      "611-1": context => context.fill609 === 1 && context.value41 === 1 && context.value15 === 1,

      "611-2": context => context.value41 === 0 || context.value15 === 0,

      "SanTrap": context => context.fill611 === 1,

      "SlowSanTrap": context => context.fill611 === 0,

      "SatTrap-2": context => context.fill611 === 0 && context.value20 === 1,

      "614-1": context => context.fill625 === 1 && context.value42 === 0 && context.conf904 === 0 && context.value41 === 1,

      "614-2": context => context.fill625 === 0 || context.value42 === 1 || context.conf904 === 1 || context.value41 === 0,

      "618-1": context => context.fill614 === 1 && context.value43 === 1,

      "618-2": context => context.fill614 === 0 || context.value43 === 0,

      "619-1": context => (context.fill618 === 1 || context.fill627 === 1) && context.value37 === 0 && context.conf906 === 1,

      "619-2": context => (context.fill618 === 0 && context.fill627 === 0) || context.value37 === 1 || context.conf906 === 0,

      "620-1": context => (context.fill618 === 1 || context.fill627 === 1) && context.value37 === 1 && context.conf906 === 1,

      "620-2": context => (context.fill618 === 0 && context.fill627 === 0) || context.value37 === 0 || context.conf906 === 0,

      "621-1": context => (context.fill619 === 1 || context.fill620 === 1 || context.fill628 === 1) && context.value14 === 0 && context.conf905 === 1,

      "621-2": context => (context.fill619 === 0 && context.fill620 === 0 && context.fill628 === 0) || context.value14 === 1 || context.conf905 === 0,

      "627-1": context => context.fill625 === 1 && context.value42 === 0 && context.conf904 === 1 && context.value41 === 1,

      "627-2": context => context.fill625 === 0 || context.value42 === 1 || context.conf904 === 0 || context.value41 === 0,

      "628-1": context => (context.fill618 === 1 || context.fill627 === 1) && context.conf906 === 0,

      "628-2": context => (context.fill618 === 0 && context.fill627 === 0) || context.conf906 === 1,

      "629-1": context => (context.fill619 === 1 || context.fill620 === 1 || context.fill628 === 1) && context.conf905 === 0,

      "629-2": context => (context.fill619 === 0 && context.fill628 === 0 && context.fill620 === 0) || context.conf905 === 1,

      "623-1": context => (context.fill621 === 1 || context.fill629 === 1) && context.value36 === 1,

      "623-2": context => (context.value54 === 1),

      "624-1": context => (context.fill619 === 1 || context.fill620 === 1 || context.fill628 === 1) && context.value14 === 1,

      "624-2": context => (context.value54 === 1),

    },
    delays: {},
  },
);

const Sheme = () => {
  const [state, send] = useMachine(CoolerMachine)
  const { fill } = state.context;
  const dispatch = useDispatch()
  const allState = useSelector(state => state.shemeValue.shemeValue)
  const cupState = useSelector(state => state.cupStatus)
  const mode = useSelector(state => state.mode.mode)
  const configurator = useSelector(state => state.configurator)
  const [openArmSheme, setOpenArmSheme] = useState(false)
  const fillCooler = state.matches("Cooler.empty")
  const fill609 = state.matches("609.empty")
  const fill610 = state.matches("610.empty")
  const fill611 = state.matches("611.full")
  const fillSanTrap = state.matches("SanitaryTrap.empty")
  const fill625 = state.matches("625.empty")
  const fill614 = state.matches("614.full")
  const fill618 = state.matches("618.full")
  const fill619 = state.matches("619.full")
  const fill620 = state.matches("620.full")
  const fill621 = state.matches("621.full")
  const fill627 = state.matches("627.full")
  const fill628 = state.matches("628.full")
  const fill629 = state.matches("629.full")
  const fill623 = state.matches("623.full")
  const fill624 = state.matches("624.full")
  const handleArmClose = () => {
    setOpenArmSheme(false);
  };

  useEffect(() => {
    send({
      type: "UPDATE_CONTEXT",
      allState,
      configurator
    })

  }, [allState, configurator])

  const handleArmOpen = (value) => {
    setOpenArmSheme(value)
  }
  //////////////////
  const [valvePopup, setValvePopup] = useState(false)
  const [currentValve, setCurrentValve] = useState()
  const [currentType, setCurrentType] = useState()

  const valvePopupOpen = (value, e) => {
    if (mode === "1") {
      console.log(mode)
    } else {
      setValvePopup(value);
      setCurrentValve(e.target.id)
      setCurrentType(e.target.className.baseVal)
      console.log(currentType);
      console.log(currentValve);
    }
  }

  const valvePopupClose = () => {
    setValvePopup(false)
  }

  const valveOpen = (value, currentValve) => {
    alert(`Открыть клапан ${currentValve} ---> ${value}`)
  }

  const valveClose = (value, currentValve) => {
    alert(`Закрыть клапан ${currentValve} ---> ${value}`)
  }
  /////////////////////////////
  const connection = useSelector(state => state.connection.connection)
  const TcpConnecion = useTcpConnection()

  const connectionStatus = useSelector(state => state.mode.connectionStatus)

  const setOn = (stringToSend) => {
    TcpConnecion.sendTcpData(`set_on(${stringToSend})`)
    console.log(`set_on(${stringToSend})`);
    console.log(connectionStatus);
  };

  const setOff = (stringToSend) => {
    TcpConnecion.sendTcpData(`set_off(${stringToSend})`)
    console.log(`set_off(${stringToSend})`);
  };

  // useEffect(() => {
  //   TcpConnecion.sendTcpData("auto_status_on()")
  // })
  return (
    <>
      <svg
        width={840}
        height={570}
        viewBox="10 -15 840.00002 570.00002"
        version="1.1"
        id="svg5"
        inkscape:version="1.2.1 (9c6d41e410, 2022-07-14)"
        sodipodi:docname="СВГ-15.svg"
        xmlSpace="preserve"
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
          transform="translate(11.313709,-5.2293489)"
          style={{ fill: "none", fillOpacity: 1 }}
        >
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: !fill625 && allState.i42 === 1 && allState.i41 === 1 ? 1 : 0,
              stroke: "none",
              strokeWidth: "1.92214",
              strokeLinecap: "square",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect48940"
            width={8}
            height="93.853188"
            x="300.444"
            y="422.16864"
            inkscape:label="Труба через станцию сортировки"
          ></rect>
          <path
            id="path84072"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00022",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            inkscape:label="Труба щелочь перед насосом"
            d="M 308.44606 515.00865 L 308.44606 515.00865 L 309.44606 515.00865 L 309.44606 503.00865 L 309.4441 503.00865 L 309.4441 422.78794 L 308.44605 422.78794 "
          />
          <g
            id="g114953"
            transform="translate(12.832639,-131.61723)"
            style={{ fill: "none", fillOpacity: 1 }}
            inkscape:label="Главный танкер"
          >
            <path
              id="rect33741-7"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.9998",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 789.63622,431.96723 v -46.2207 h -150 v 0 46.2207"
            />
            <path
              id="path2758"
              style={{
                fill: "#2a569a",
                fillOpacity: fill623 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: "1.9998",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 639.63622,431.96723 v 23.7793 h -49 v 10 h 49 10 v 11.64843 l 18.81641,-11.64843 h 92.36523 l 18.81836,11.64843 v -11.64843 h 10 v -33.7793"
            />
          </g>
          <path
            id="rect29999-6-7-2-6-1"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00022",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            inkscape:label="Труба щелочь перед насосом"
            d="M 300.44606 422.78794 L 299.44606 422.78794 L 299.44606 422.78794 L 299.44606 503.00865 L 299.44606 515.00865 L 300.44606 515.00865 "
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: (fill621 || fill629) && allState.i36 === 0 ? 1 : 0,
              opacity: 1,
              stroke: "none",
              strokeWidth: "2.0976",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect25491"
            width="10.0003"
            height="11.000145"
            x="579.23523"
            y="347.74442"
            inkscape:label="Отвод канализации перед танкером заливка"
          />
          <path
            id="rect13612"
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1,
              opacity: ((allState.i44 && configurator.i913) || allState.i1 || allState.i7 || allState.i56 || allState.i57 === 1) && allState.i45 === 0 ? 1 : 0,
            }}
            d="M 206.62379 20.416849 L 206.62379 20.432474 L 199.22731 20.432474 L 199.22731 110.60435 L 177.48317 110.60435 L 177.48317 103.51646 L 167.67262 103.51646 L 167.67262 110.60435 L 129.31129 110.60435 L 129.31129 103.25279 L 119.58863 103.25279 L 119.58863 110.58872 L 81.405041 110.58872 L 81.405041 103.51646 L 71.328869 103.51646 L 71.328869 110.58872 L 71.328869 119.95786 L 71.436291 119.95786 L 71.436291 154.35435 L 42.936291 154.35435 L 42.936291 160.35435 L 43.061291 160.35435 L 43.061291 163.97935 L 49.186291 163.97935 L 49.186291 160.35435 L 63.061291 160.35435 L 63.061291 163.60435 L 69.436291 163.60435 L 69.436291 160.35435 L 83.811291 160.35435 L 83.811291 163.47935 L 89.186291 163.47935 L 89.186291 160.35435 L 104.43629 160.35435 L 104.43629 163.35435 L 109.68629 163.35435 L 109.68629 160.35435 L 110.18629 160.35435 L 110.18629 154.35435 L 81.123791 154.35435 L 81.123791 119.95786 L 129.18629 119.95786 L 129.18629 119.97935 L 200.06129 119.97935 L 200.06129 119.95786 L 207.43629 119.95786 L 207.43629 119.97935 L 215.31129 119.97935 L 215.31129 110.85435 L 208.24293 110.85435 L 208.24293 72.354349 L 215.06129 72.354349 L 215.06129 62.729349 L 208.24293 62.729349 L 208.24293 29.291849 L 214.74879 29.291849 L 214.74879 20.416849 L 206.62379 20.416849 z "
            inkscape:label="Заполнитель трубы перед рукой"
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: "2.02284",
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect13589"
            width="9.9902487"
            height="8.6200275"
            x="255.13832"
            y="20.391697"
            inkscape:label="Отвод холодной воды"
          />
          <path
            id="rect24708"
            style={{
              opacity: fillSanTrap ? 0 : 1,
              fill: "#2a569a",
              fillOpacity: 1,
              strokeWidth: "2.31674",
              transition: 4,
            }}
            d="m 130.62894,201.96568 v 24 h -0.67702 v 7 h 10.19518 v -6.70313 h 24.5859 v -24.29687 z"
            inkscape:label="Ловушка санитарная заливка"
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect13673"
            width="9.1374159"
            height="9.3030272"
            x="168.29141"
            y="55.588455"
            inkscape:label="Отвод щелочи"
          />
          <path
            id="rect14533"
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: (fill614 && configurator.i904 === 0) || (fill627 && configurator.i904 === 1) ? 1 : 0,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 299.41285 250.43638 L 299.41285 250.44029 L 299.41285 260.49497 L 299.41285 276.75865 L 299.41285 280.64732 L 299.41285 364.36607 L 309.54957 364.36607 L 309.54957 280.64732 L 309.54957 276.75865 L 309.54957 260.49497 L 330.04176 260.49497 L 330.04176 250.44029 L 309.54957 250.44029 L 309.54957 250.43638 L 299.41285 250.43638 z "
            inkscape:label="Труба к предохладителю заливка"
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: fill614 && allState.i43 === 0 ? 1 : 0,
              opacity: 1,
              stroke: "none",
              strokeWidth: "2.01186",
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i904 === 0 ? "" : "none"
            }}
            id="rect14539"
            width="10.00088"
            height="85.413177"
            x="344.5097"
            y="274.07785"
            inkscape:label="Труба к канализации перед предохлад. заливка"
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: (fill618 && configurator.i904 === 0) || (fill627 && configurator.i904 === 1) ? 1 : 0,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect14541"
            width="78.208992"
            height="10.00586"
            x="368.74292"
            y="250.46178"
            inkscape:label="Труба через предохладитель заливка"
          />
          <path
            id="rect14543"
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: !fillCooler ? 1 : 0,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i903 === 1 ? "" : "none"
            }}
            d="M 402.87184 206.35826 L 402.87184 223.35826 L 387.58863 223.35826 L 387.58863 250.46177 L 428.14528 250.46177 L 428.14528 223.35826 L 412.87184 223.35826 L 412.87184 206.35826 L 402.87184 206.35826 z M 387.58863 260.46763 L 387.58863 287.57701 L 402.87184 287.57701 L 402.87184 309.78599 L 412.68629 309.78599 L 412.68629 287.57701 L 428.14528 287.57701 L 428.14528 260.46763 L 387.58863 260.46763 z "
            inkscape:label="Внутренняя часть предохладителя"
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: !fillCooler && allState.i19 === 1 ? 1 : 0,
              opacity: 1,
              stroke: "none",
              strokeWidth: "2.0976",
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i903 === 1 ? "" : "none"
            }}
            id="rect14551"
            width="9.5001898"
            height="11.000136"
            x="402.86282"
            y="348.48663"
            inkscape:label="Отвод в канализацию после предохладителя заливка"
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: 1,
              stroke: "none",
              strokeWidth: "2.09708",
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i903 === 1 ? "" : "none"
            }}
            id="rect15279"
            width="10.00031"
            height="10.994689"
            x="402.88043"
            y="156.6633"
            inkscape:label="Подвод холодной воды в предохладитель"
          />
          <path
            id="rect15281"
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: fill620 ? 1 : 0,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i906 === 1 ? "" : "none",
            }}
            d="M 485.65113 250.47544 L 485.65113 260.47544 L 506.29371 260.47544 L 506.29371 365.34849 L 516.27809 365.34849 L 516.27809 260.47544 L 516.27809 250.47544 L 506.29371 250.47544 L 485.65113 250.47544 z "
            inkscape:label="Труба ко второму фильтру заливка"
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: fill619 || fill628 ? 1 : 0,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect15285"
            width="10.00062"
            height="91.639374"
            x="461.32257"
            y="273.75241"
            inkscape:label="Труба к первому фильтру заливка"
          />
          <path
            id="rect15287"
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: fill619 || fill628 ? 1 : 0,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1

            }}
            d="M 461.32301 386.46958 L 461.32301 399.30943 L 461.32301 409.46958 L 483.32301 409.46958 L 483.32301 432.46958 L 493.43629 432.46958 L 493.43629 409.46958 L 493.43629 408.49693 L 493.43629 399.30943 L 471.32301 399.30943 L 471.32301 386.46958 L 461.32301 386.46958 z "
            inkscape:label="Труба от первого фильтра заливка"
          />
          <path
            id="rect15289"
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: fill620 ? 1 : 0,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              display: configurator.i906 === 1 ? "" : "none",
              strokeOpacity: 1
            }}
            inkscape:label="Труба от второго фильтра заливка"
            d="M 505.80153 386.46958 L 505.80153 399.46958 L 483.32301 399.46958 L 483.32301 409.46958 L 483.32301 432.46958 L 493.43629 432.46958 L 493.43629 409.46958 L 505.80153 409.46958 L 506.28004 409.46958 L 516.28004 409.46958 L 516.28004 386.46958 L 505.80153 386.46958 z "
          />
          <path
            id="rect15297"
            style={{
              fill: "#2a569a",
              fillOpacity: (fill619 || fill620 || fill628) && allState.i14 === 1 ? 1 : 0,
              opacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i905 === 1 ? "" : "none",
            }}
            d="M 483.31324 471.17076 L 483.31324 501.79576 L 493.43629 501.79576 L 592.37965 501.79576 L 669.80738 501.79576 L 696.2859 501.79576 L 696.2859 501.11802 L 696.2859 491.81333 L 696.2859 484.81529 L 686.28981 484.81529 L 686.28981 491.81333 L 669.80738 491.81333 L 592.37965 491.81333 L 493.43629 491.81333 L 493.43629 471.17076 L 483.31324 471.17076 z "
            inkscape:label="Труба к буферному танкеру заливка"
          />
          <path
            id="rect15307"
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: fill621 || fill629 ? 1 : 0,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 534.14332 324.12193 L 534.14332 351.71177 L 534.14332 446.88365 L 506.23903 446.88365 L 506.23903 456.88365 L 534.14332 456.88365 L 544.10426 456.88365 L 544.10426 446.88365 L 544.10426 341.52427 L 544.10426 334.20982 L 564.77028 334.20982 L 564.77028 324.12193 L 544.10426 324.12193 L 534.14332 324.12193 z "
            inkscape:label="Труба к главному танкеру заливка"
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: 1,
              stroke: "none",
              strokeWidth: "2.29337",
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect13675"
            width="8.1317282"
            height="9.7627029"
            x="120.36284"
            y="55.588455"
            inkscape:label="Отвод кислоты"
          />
          <rect
            style={{
              display: configurator.i913 === 0 ? "none" : "",
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect13677"
            width="8.3526993"
            height="9.762701"
            x="72.257477"
            y="55.588455"
            inkscape:label="Отвод подуксусной кислоты"
          />
          <path
            id="rect14484"
            style={{
              fill: "#2a569a",
              fillOpacity: allState.i39 === 1 || allState.i38 === 1 ? 1 : 0,
              opacity: 1,
              stroke: "none",
              strokeWidth: "2.08274",
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1,
              opacity: allState.i39 || allState.i38 === 1 ? 1 : 0,
            }}
            d="M 129.97926 354.23326 L 129.97926 372.8563 L 107.75856 372.8563 L 107.75856 378.85826 L 129.97926 378.85826 L 129.97926 388.85826 L 134.17262 388.85826 L 139.90699 388.85826 L 146.98121 388.85826 L 146.98121 378.85826 L 139.90699 378.85826 L 139.90699 354.23326 L 129.97926 354.23326 z "
            inkscape:label="Заливка трубы от молокосборника"
          />
          <path
            id="rect14490"
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: allState.i39 === 1 && allState.i47 === 1 ? 1 : 0,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 50.903088 372.77232 L 50.903088 378.92857 L 50.903088 390.92857 L 57.059338 390.92857 L 57.059338 378.92857 L 69.059338 378.92857 L 69.059338 372.77232 L 50.903088 372.77232 z "
            inkscape:label="Заливка трубы к колбочкам"
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: fill609 ? 0 : 1,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect14496"
            width="16.999619"
            height="9.9996033"
            x="185.6796"
            y="378.86441"
            inkscape:label="Промежуточная труба перед насосом под молокосборнико"
          />
          <path
            id="rect14498"
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: fill611 ? 1 : 0,
              stroke: "none",
              strokeWidth: "2.43495",
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 163.95192 200.96568 L 163.95192 210.9149 L 215.62379 210.9149 L 215.62379 279.1649 L 158.07887 279.1649 L 158.07887 288.6649 L 215.62379 288.6649 L 215.62379 309.78599 L 225.62379 309.78599 L 225.62379 210.9149 L 225.62379 207.78794 L 225.62379 200.96568 L 163.95192 200.96568 z "
            inkscape:label="Труба от ловушки санитарной"
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect13591"
            width="10.000139"
            height="8.4265032"
            x="255.13832"
            y="63.461292"
            inkscape:label="Подвод горячей воды заливка"
          />
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: 1,
              opacity: fill610 ? 0 : 1,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect14504"
            width="9.9998932"
            height="16.999878"
            x="215.61623"
            y="348.48581"
            inkscape:label="Труба от насоса после промежуточной"
          />

          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8-9"
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
            d="m 264.13861,71.677711 v 0.998282 h -10.00029 v -10.0003 h 10.00029 v 0 1.00021"
            inkscape:label="Подвод горячей воды"
          />
          <path
            id="rect14405"
            style={{
              fill: "#2a569a",
              fillOpacity: (cupState.i911 === 1 || cupState.i911 === 2) && allState.i50 === 1 ? 1 : 0,
              opacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 42.969494 205.38169 L 42.969494 251.20005 L 42.969494 251.6649 L 71.469494 251.6649 L 71.469494 278.6649 L 71.469494 288.6649 L 80.496838 288.6649 L 111.80738 288.6649 L 111.80738 278.6649 L 80.496838 278.6649 L 80.496838 251.6649 L 80.496838 245.6649 L 71.469494 245.6649 L 49.061291 245.6649 L 49.061291 205.38169 L 42.969494 205.38169 z "
            inkscape:label="заливка 1 стакана"
          />
          <path
            id="rect14407"
            style={{
              fill: "#2a569a",
              fillOpacity: (cupState.i912 === 1 || cupState.i912 === 2) && allState.i48 === 1 ? 1 : 0,
              opacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 63.469494 205.38169 L 63.469494 251.6649 L 69.186291 251.6649 L 71.469494 251.6649 L 71.469494 278.6649 L 71.469494 288.6649 L 80.496838 288.6649 L 111.80738 288.6649 L 111.80738 278.6649 L 80.496838 278.6649 L 80.496838 245.6649 L 74.903088 245.6649 L 71.469494 245.6649 L 69.186291 245.6649 L 69.186291 205.38169 L 63.469494 205.38169 z "
            inkscape:label="Заливка 2 стакан"
          />
          <path
            id="rect14411-3"
            style={{
              fill: "#2a569a",
              fillOpacity: (cupState.i914 === 1 || cupState.i914 === 2) && allState.i51 === 1 ? 1 : 0,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1,
              opacity: 1
            }}
            d="M 103.96949 205.38169 L 103.96949 245.6649 L 80.496838 245.6649 L 77.81715 245.6649 L 71.469494 245.6649 L 71.469494 278.6649 L 71.469494 288.6649 L 80.496838 288.6649 L 111.80738 288.6649 L 111.80738 278.6649 L 80.496838 278.6649 L 80.496838 251.6649 L 106.96949 251.6649 L 109.96949 251.6649 L 109.96949 205.38169 L 103.96949 205.38169 z "
            inkscape:label="Заливка 4 стакан"
          />
          <path
            id="rect14411-30"
            style={{
              fill: "#2a569a",
              fillOpacity: (cupState.i913 === 1 || cupState.i913 === 2) && allState.i49 === 1 ? 1 : 0,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1,
              opacity: 1
            }}
            d="M 83.469494 205.38169 L 83.469494 245.6649 L 80.496838 245.6649 L 78.047619 245.6649 L 71.469494 245.6649 L 71.469494 278.6649 L 71.469494 288.6649 L 80.496838 288.6649 L 111.80738 288.6649 L 111.80738 278.6649 L 80.496838 278.6649 L 80.496838 251.20005 L 86.518322 251.20005 L 89.56715 251.20005 L 89.56715 205.38169 L 83.469494 205.38169 z "
            inkscape:label="Заливка 3 стакан"
          />
          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8-90"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.9997",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i913 === 0 ? "none" : ""
            }}
            d="m 80.389106,56.588318 h 0.998282 v 10.00029 h -10.0003 v -10.00029 0 h 1.00021"
            inkscape:label="Подвод надуксусной кислоты"
          />
          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8-5"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.9997",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="m 128.42718,56.588307 h 0.99829 v 10.00029 h -10.00029 v -10.00029 0 h 1.0002"
            inkscape:label="Подвод кислоты"
          />
          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8-1"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.9997",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="m 176.43054,56.588304 h 0.99829 v 10.00029 h -10.00029 v -10.00029 0 h 1.0002"
            inkscape:label="Подвод щелочи"
          />
          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8-6"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.9997",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i903 === 1 ? "" : "none"
            }}
            d="m 411.88247,157.6577 h 0.99829 v 10.00029 h -10.00031 v -10.00029 0 h 1.00022"
            inkscape:label="Подвод холодной воды в предохладитель"
          />
          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8-65"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.9997",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="m 376.57957,119.20562 v 0.99828 h -10.00029 v -10.0003 h 10.00029 v 0 1.00021"
            inkscape:label="Подвод от насоса"
          />
          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8-18"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.9997",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="m 376.55039,178.0057 v 0.99829 H 366.5501 v -10.00031 h 10.00029 v 0 1.00022"
            inkscape:label="Отвод вакуума"
          />
          <path
            id="path2817-2"
            style={{
              fill: allState.i38 === 0 ? "none" : "#2a569a",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="m 159.0783,317.79283 v 39.13686 h -48.27176 v -39.13686"
            inkscape:label="1/2 молокоприемника"
          />
          <path
            id="path115149"
            style={{
              fill: allState.i39 === 0 ? "none" : "#2a569a",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 159.07803,337.36127 V 356.9297 H 126.2954 110.80627 v -19.56843"
            inkscape:label="1/4 молокоприемника"
            sodipodi:nodetypes="ccccc"
          />
          <path
            id="rect20866"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.99911",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            inkscape:label="Труба от клапана колбочек"
            d="M 130.94214 356.93051 L 129.98121 356.93052 L 129.98121 356.93052 L 129.98121 372.8563 L 107.75856 372.8563 L 107.75856 378.85826 L 129.98121 378.85826 L 129.98121 388.85826 L 139.90895 388.85826 L 146.98121 388.85826 L 146.98121 378.85826 L 139.90895 378.85826 L 139.90895 356.93052 L 138.96949 356.93052 L 138.94215 356.93052 "
          />
          <g
            id="g37447-0-4-3-4-6"
            inkscape:label="створка открытая"
            style={{ opacity: allState.i31 === 0 ? 0 : 1, }}
            transform="rotate(45,722.16526,361)"
          >
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect31786-5-1-8-6-6"
              width="9.9986343"
              height="110.32981"
              x="-498.5094"
              y="140.18881"
              transform="scale(-1,1)"
            >
            </rect>
            <ellipse
              shapeRendering="geometricPrecision"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path30280-1-8-6-3-3"
              cx="493.64389"
              cy="254.05275"
              rx="5.4999719"
              ry="5.4999733"
            />
          </g>
          <g
            id="g4647"
            style={{ fill: "none", fillOpacity: 1, display: configurator.i906 === 0 ? "" : "none", }}
            inkscape:label="Труба от фильтра"
          >
            <path
              id="rect43529-6-4-2"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99988",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              inkscape:label="Схождени труб от фильтров"
              d="M 494.31715 399.46958 L 471.32301 399.46958 L 471.32301 391.06919 L 471.32301 386.46958 L 461.32301 386.46958 L 461.32301 386.46958 L 461.32301 391.06919 L 461.32301 409.46958 L 471.32301 409.46958 L 483.32301 409.46958 L 483.32301 414.06919 L 483.32301 432.46958 L 493.32301 432.46958 L 493.32301 414.06919 L 493.32301 409.46958 L 494.31716 409.46959 "
            ></path>
            <path
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 493.31715,399.59226 v 10.20499"
              id="path25546"
            />
          </g>
          <g
            id="g37447-0-4-3-4-6-9"
            inkscape:label="створка открытая"
            style={{ opacity: allState.i29 === 0 ? 0 : 1, fill: "none", fillOpacity: 1 }}
            transform="rotate(-45,399.24348,36.557294)"
            shapeRendering="geometricPrecision"
          >
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect31786-5-1-8-6-6-6"
              width="9.9986343"
              height="110.32981"
              x="-498.5094"
              y="140.18881"
              transform="scale(-1,1)"
            >
            </rect>
            <ellipse
              shapeRendering="geometricPrecision"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path30280-1-8-6-3-3-1"
              cx="493.64389"
              cy="254.05275"
              rx="5.4999719"
              ry="5.4999733"
            />
          </g>
          <g
            inkscape:groupmode="layer"
            id="layer2"
            inkscape:label="колбочки"
            style={{ fill: "none", fillOpacity: 1 }}
            transform="translate(-3.5797281,-0.23501414)"
          >
            <rect
              style={{
                display: "inline",
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.04121",
                strokeDasharray: "none",
                strokeOpacity: 1,
                strokeWidth: 2,
              }}
              shapeRendering="geometricPrecision"
              id="rect111"
              width="14.723663"
              height="40.597355"
              x="50.451733"
              y="391.73938"
              inkscape:label="rect111"
            ></rect>
            <path
              id="rect947-6-2-1-2-3"
              style={{
                fill: "#2a569a",
                fillOpacity: allState.i39 === 1 && allState.i47 === 1 ? 1 : 0,
                stroke: "#000000",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 53.993591,396.20813 v 27.57171 a 3.8298827,2.0088205 0 0 0 -0.01,0.0795 3.8298827,2.0088205 0 0 0 3.82997,2.00871 3.8298827,2.0088205 0 0 0 3.82998,-2.00871 V 396.2081 Z"
            />
          </g>
          <path
            id="rect14838"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="m 50.903861,372.77206 v 6.15625 12 h 6.15625 v -12 h 12 v -6.15625 h -12 z"
            inkscape:label="Труба от колб"
          />
          <rect
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00038",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect25244"
            width="16.999617"
            height="9.9996138"
            x="185.6796"
            y="378.86441"
            inkscape:label="Труба - 6"
          />
          <path
            id="rect25244-7"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00038",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i903 === 1 ? "" : "none"
            }}
            inkscape:label="Труба - 6"
            d="M 223.35824 -403.8719 L 223.35824 -402.87194 L 206.35863 -402.87194 L 206.35863 -412.87155 L 206.35863 -412.87155 L 223.35824 -412.87155 L 223.35824 -411.87158 "
            transform="rotate(90)"
          />
          <path
            id="rect63096"
            style={{
              opacity: 1,
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 130.96871 356.92969 L 110.81055 356.9297 L 110.81055 287.66407 "
            inkscape:label="Корпус молокоотборника"
          />
          <path
            id="path79008"
            style={{
              opacity: 1,
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 159.07803 287.66405 L 159.07803 356.9297 L 138.9687 356.9297 "
            inkscape:label="Корпус молокоотборника"
          />
          <path
            id="path83894"
            style={{
              opacity: 1,
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 138.94331 278.66407 L 159.07803 278.66406 L 159.07803 279.66405 "
            inkscape:label="Корпус молокоотборника"
          />
          <path
            id="path78954"
            style={{
              opacity: 1,
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 138.94331 278.66407 L 138.94331 278.66407 "
            inkscape:label="Корпус молокоотборника"
          />
          <path
            id="path78946"
            style={{
              opacity: 1,
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 110.81055 279.66406 L 110.81055 278.66406 L 110.81055 278.66406 L 130.94332 278.66406 "
            inkscape:label="Корпус молокоотборника"
          />
          <path
            id="rect22884"
            style={{
              fill: "#2a569a",
              fillOpacity: fill625 ? 0 : 1,
              stroke: "#000000",
              strokeWidth: "2.00007",
              strokeLinecap: "square",
              strokeDasharray: "none"
            }}
            inkscape:label="Развилка после насоса"
            d="M 264.05543 348.90708 L 264.05543 378.86411 L 236.61598 378.86411 L 236.61598 388.86411 L 248.70192 388.86411 L 248.70192 390.24107 L 248.67457 390.24107 L 248.67457 408.48716 L 230.68824 408.48716 L 208.17067 408.48716 L 198.18629 408.48716 L 198.18629 418.48716 L 198.18629 459.39927 L 208.17067 459.39927 L 208.17067 418.48716 L 230.68824 418.48716 L 258.67457 418.48716 L 258.72535 418.48716 L 258.72535 388.86411 L 264.05543 388.86411 L 264.05543 388.91099 L 274.23903 388.91099 L 274.23903 388.86411 L 285.82887 388.86411 L 285.82887 378.86411 L 274.23903 378.86411 L 274.23903 348.90708 L 264.05543 348.90708 z "
          ></path>
          <rect
            style={{
              fill: "#FFFFFF",
              fillOpacity: 1,
              stroke: "#FFFFFF",
              strokeWidth: 0,
              strokeLinecap: "round",
              opacity: 0
            }}
            id="rect78126"
            width="80.78717"
            height="117.00832"
            x="35.021545"
            y="139.58862"
            className="scheme-arm"
            inkscape:label="Фон руки"
            onClick={() => handleArmOpen(true)}
          />
          <path
            id="rect63402-7-8-8-0-5-9-1-6"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00011",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M -215.43824 -111.4481 L -215.43824 -110.44419 L -208.56715 -110.44419 L -208.56715 -72.668802 L -215.43824 -72.668802 L -215.43824 -62.668802 L -208.56715 -62.668802 L -208.43824 -62.668802 L -208.43824 -29.94224 L -215.43824 -29.94224 L -215.43824 -19.713724 L -208.43824 -19.713724 L -198.43824 -19.713724 L -198.43824 -19.713724 L -198.43824 -61.387552 L -198.43824 -62.203958 L -198.43824 -63.645365 L -198.4402 -63.645365 L -198.4402 -72.668802 L -198.4402 -110.44419 L -177.44606 -110.44419 L -177.44606 -103.44419 L -167.44606 -103.44419 L -167.44606 -110.44419 L -129.44996 -110.44419 L -129.44996 -103.44419 L -119.44996 -103.44419 L -119.44996 -110.44419 L -81.4109 -110.44419 L -81.4109 -103.44419 L -71.412853 -103.44419 L -71.412853 -110.44419 L -71.412853 -110.94224 L -71.403088 -110.94224 L -71.403088 -154.40904 L -72.393321 -154.40904 "
            transform="scale(-1)"
            inkscape:label="Верхняя стенка трубы входящих жидкостей"
          />
          <path
            id="path85520"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00011",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M -80.393322 -154.40904 L -81.403088 -154.40904 L -81.403088 -120.44419 L -198.4402 -120.44419 L -208.56715 -120.44419 L -215.43824 -120.44419 L -215.43824 -119.4481 "
            transform="scale(-1)"
            inkscape:label="Нижняя стенка трубы входящих жидкостей"
          />
          <rect
            style={{
              fill: "#ffffff",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.0002",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect63402-7-8-8-0-5-9-28-9"
            width="9.9998016"
            height="131.2009"
            x="-274.16089"
            y="-310.17438"
            transform="scale(-1)"
            inkscape:label="Вертикальная труба после входного насоса"
          />
          <path
            id="rect32176-6"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.0024",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i906 === 1 ? "" : "none",
            }}
            d="m 516.27809,250.47467 v 10 104.87305 h -9.98437 V 260.47467 h -20.64258 v -10 h 20.64258 z"
            inkscape:label="Труба к фильтру - 2"
          />
          <g
            id="g112511"
            inkscape:label="Танкер"
            transform="translate(53.603549,-44.603592)"
          >
            <path
              id="rect33741"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.9998",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              inkscape:label="Дно"
              d="m 627.68173,378.73289 h 75.64511 16.06388 z"
              sodipodi:nodetypes="cccc"
            />
            <path
              id="path110745"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.9998",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 607.74032,378.73288 h 1.125 v 11.64844 l 18.8164,-11.64844 0.25584,-1e-5"
              shapeRendering="geometricPrecision"
              inkscape:label="Ножка"
            />
            <path
              id="path110743"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.9998",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 739.84187,378.73289 h 9.02344 V 344.9536 298.73289 h -150 v 0 46.22071 23.77929 h -49 v 10 h 49 8.875"
              inkscape:label="Емкость"
            />
            <path
              id="path110726"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.9998",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 719.64656,378.73288 h 0.4004 l 18.81835,11.64844 v -11.64844 h 0.97656"
              shapeRendering="geometricPrecision"
              inkscape:label="Ножка"
              sodipodi:nodetypes="ccccc"
            />
          </g>
          <rect
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00011",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect63402-7-8-8-0-5-9-6"
            width="9.9998894"
            height="16.999887"
            x="-225.61612"
            y="-365.48569"
            transform="scale(-1)"
            inkscape:label="Труба над насосом после перемычки"
          />

          <path
            id="rect43529-6-4"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.99937",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="m 461.32259,273.75242 v 18.32786 73.31151 h 10.00062 v -73.31151 -18.32786 z"
            inkscape:label="Труба к фильтру"
          />
          <rect
            style={{
              fill: "#ffffff",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00011",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect63402-7-8-8-0-5-9-5-2"
            width="9.9998894"
            height="16.999887"
            x="169.00389"
            y="-336.73251"
            transform="rotate(90)"
            inkscape:label="Труба перед насосом вакуума"
          />
          <path
            id="rect43529-6-4-6"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00764",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i904 === 0 ? "" : "none"
            }}
            inkscape:label="Труба к сливу перед охладителем"
            d="m 353.53976,358.4872 h 0.97083 v -67.52748 -16.88185 h -10.00088 v 0 16.88185 67.52748 l 0.98063,-10e-6"
          />
          <path
            id="rect63402-7-8-8-0-5-9-4-7"
            style={{
              fill: "#ffffff",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00011",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="m 513.18412,195.75219 v 10 h 17 17 17 17 17 17 17 17 17 17 16.99805 17 10.33203 6.66797 10.33203 v -10 h -10.33203 -6.66797 -10.33203 -17 -16.99805 -17 -17 -17 -17 -17 -17 -17 -17 -17 z"
            inkscape:label="Нижняя стенка клетки"
          />
          <path
            id="rect43529-6-4-2"
            style={{
              display: configurator.i906 === 1 ? "" : "none",
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.99988",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            d="M 461.32301 386.46958 L 461.32301 391.06919 L 461.32301 409.46958 L 471.32301 409.46958 L 483.32301 409.46958 L 483.32301 414.06919 L 483.32301 432.46958 L 493.32301 432.46958 L 493.32301 414.06919 L 493.32301 409.46958 L 505.32301 409.46958 L 506.28004 409.46958 L 516.28004 409.46958 L 516.32301 409.46958 L 516.32301 399.46958 L 516.28004 399.46958 L 516.28004 391.06919 L 516.28004 386.46958 L 506.28004 386.46958 L 506.28004 391.06919 L 506.28004 399.46958 L 505.32301 399.46958 L 471.32301 399.46958 L 471.32301 391.06919 L 471.32301 386.46958 L 461.32301 386.46958 z "
            inkscape:label="Схождени труб от фильтров"
          />
          <ellipse
            style={{
              fill: allState.i53 === 0 ? "#ffffff" : "#25be2c",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.99982",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="path45721"
            cx="304.44604"
            cy="456.60373"
            rx="3.0000889"
            ry="3.0000885"
            shapeRendering="geometricPrecision"
            inkscape:label="Индикатор канализации распределителя"
          />
          <path
            id="path125788"
            style={{
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00012",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 115.16797 278.66407 L 115.16797 278.66407 "
            inkscape:label="Заливка трубы от руки к молокоприемнику"
          />
          <g
            id="Клапан вакуумный отсечной"
            inkscape:label="Клапан"
            className="klapan"
            transform="translate(230.5468,-125.39605)"
            style={{
              display: configurator.i904 === 1 && configurator.i912 === 1 ? "none" : "",
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
              id="Клапан 104"
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
              id="TEST-KLAPAN"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g

              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i55 === 0 ? 1 : 0 }}
              inkscape:label="Левый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="TEST-KLAPAN"
                className={`klapan-tr klapan-black`}
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
                id="TEST-KLAPAN"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i55 === 0 ? 1 : 0,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="TEST-KLAPAN"
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
                id="path87150-4"
                inkscape:label="Основание"
              />
            </g >
            <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 0,
                opacity: 0,
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round",
                strokeDasharray: "none"
              }}
              id="55"
              className="Valve"
              width="45.904297"
              height="35.953293"
              x="277.43396"
              y="153.95732"
              inkscape:label="Маска клапана 55"
              onClick={(e) => valvePopupOpen(true, e)}
              transform="translate(-230.5468,125.39605)"
            ></rect>
          </g >
          <path
            id="rect2757"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeOpacity: 1
            }}
            d="M 164.95192 201.96568 L 164.95192 201.96568 L 164.95192 185.96568 L 164.95192 178.96568 L 261.14137 178.96568 L 261.14137 178.97349 L 274.1609 178.97349 L 274.1609 178.99497 L 281.03199 178.99497 L 281.03199 168.99497 L 278.14137 168.99497 L 278.14137 168.97349 L 271.14137 168.97349 L 271.14137 168.96568 L 164.95192 168.96568 L 154.95192 168.96568 L 154.95192 168.96568 L 154.95192 178.96568 L 154.95192 185.96568 L 129.95192 185.96568 L 129.95192 225.96568 L 129.95192 232.96568 L 139.95192 232.96568 L 139.95192 225.96568 L 164.95192 225.96568 L 164.95192 209.96568 "
            inkscape:label="Ловушка санитарная"
          />
          <g
            id="g9595"
            className="scheme-arm arm"
            inkscape:label="arm"
            transform="translate(-396.08588,105.9542)"
            style={{ fill: "none", fillOpacity: 1 }}
          >
            <path
              id="rect4347-5"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99988",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 467.48892,47.45093 v 1.00391 h -28.50016 v 5.999998 4.999998 h 6.00003 v -4.999998 h 14.50009 v 4.999998 h 6.00003 v -4.999998 h 14.00008 v 4.999998 h 6.00004 v -4.999998 h 14.50008 v 4.999998 h 6.00003 v 0 -4.999998 -5.999998 h -28.50017 v -1.00391"
            />
            <g
              id="g9356-2"
              inkscape:label="Стакан"
              className="cup scheme-arm"
              transform="translate(64.254567,42.643022)"
              style={{ fill: "none", fillOpacity: 1 }}
              onClick={() => handleArmOpen(true)}
            >
              <rect
                style={{
                  fill: allState.i5 === 0 ? "#000000" : "none",
                  stroke: "#000000",
                  strokeWidth: "2.00027",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                className="klapan-white cup-tr scheme-arm"
                id="rect6855-4"
                width="9.9997311"
                height="29.999735"
                x="433.72464"
                y="26.784683"
              />
              <rect
                shapeRendering="geometricPrecision"
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "2.36643",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843-5"
                width="15.999984"
                height={14}
                x="430.72452"
                y="13.928389"
                ry="4.4897714"
              />
            </g>
            <g
              id="g9356-5"
              inkscape:label="Стакан"
              className="cup"
              transform="translate(43.754567,42.643022)"
              style={{ fill: "#000000", fillOpacity: 1 }}
              onClick={() => handleArmOpen(true)}
            >
              <rect
                style={{
                  fill: allState.i3 === 0 ? "#000000" : "none",
                  stroke: "#000000",
                  strokeWidth: "2.00027",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                className="klapan-white cup-tr scheme-arm"
                id="rect6855-6"
                width="9.9997311"
                height="29.999735"
                x="433.72464"
                y="26.784683"
              />
              <rect
                shapeRendering="geometricPrecision"
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "2.36643",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843-0"
                width="15.999984"
                height={14}
                x="430.72452"
                y="13.928389"
                ry="4.4897714"
              />
            </g>
            <g
              id="g9356-6"
              inkscape:label="Стакан"
              className="cup"
              transform="translate(23.830871,42.643074)"
              style={{ fill: "#000000", fillOpacity: 1 }}
              onClick={() => handleArmOpen(true)}
            >
              <rect
                style={{
                  fill: allState.i2 === 0 ? "#000000" : "none",
                  stroke: "#000000",
                  strokeWidth: "2.00027",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                className="klapan-white cup-tr scheme-arm"
                id="rect6855-5"
                width="9.9997311"
                height="29.999735"
                x="433.72464"
                y="26.784683"
                transform="translate(0)"
              />
              <rect
                shapeRendering="geometricPrecision"
                style={{
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "2.36643",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843-48"
                width="15.999984"
                height={14}
                x="430.72452"
                y="13.928336"
                ry="4.4897714"
              />
            </g>
            <g
              id="g9356"
              inkscape:label="Стакан"
              className="cup"
              transform="translate(3.3308714,42.643074)"
              style={{ fill: "#000000", fillOpacity: 1 }}
              onClick={() => handleArmOpen(true)}
            >
              <rect
                style={{
                  fill: allState.i4 === 0 ? "#000000" : "none",
                  stroke: "#000000",
                  strokeWidth: "2.00027",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                className="klapan-white cup-tr scheme-arm"
                id="rect6855"
                width="9.9997311"
                height="29.999735"
                x="433.72464"
                y="26.784683"
              />
              <rect
                shapeRendering="geometricPrecision"
                style={{
                  opacity: 1,
                  fill: "#000000",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "2.36643",
                  strokeLinecap: "butt",
                  strokeOpacity: 1
                }}
                id="rect28843"
                width="15.999984"
                height={14}
                x="430.72452"
                y="13.928336"
                ry="4.4897714"
              />
            </g>
          </g>
          <path
            id="rect5912-3"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00018",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 80.469494 278.6649 L 81.469494 278.6649 L 81.469494 251.6649 L 109.96949 251.6649 L 109.96949 245.6649 L 109.96949 240.6649 L 109.96949 205.38169 L 103.96949 205.38169 L 103.96949 240.6649 L 103.96949 245.6649 L 89.469494 245.6649 L 89.469494 240.6649 L 89.469494 205.38169 L 83.469494 205.38169 L 83.469494 240.6649 L 83.469494 245.6649 L 69.469494 245.6649 L 69.469494 240.6649 L 69.469494 205.38169 L 63.469494 205.38169 L 63.469494 240.6649 L 63.469494 245.6649 L 48.969494 245.6649 L 48.969494 240.6649 L 48.969494 205.38169 L 42.969494 205.38169 L 42.969494 205.38169 L 42.969494 240.6649 L 42.969494 245.6649 L 42.969494 251.6649 L 71.469494 251.6649 L 71.469494 278.6649 L 72.469492 278.66489 "
            inkscape:label="Подстаканные трубы"
          />
          <g
            id="g29835-6"
            inkscape:label="Насос 202"
            shapeRendering="geometricPrecision"
            className="pump"
            transform="translate(138.65033,-209.49644)"
            style={{ fill: "#ffffff", fillOpacity: 1 }}
          >
            <circle
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path25976-9"
              cx="210.00743"
              cy="383.50027"
              r="19.046518"
              inkscape:label="path25976"
            />
            <path
              sodipodi:type="star"
              className="pump-tr pump-black"
              shapeRendering="geometricPrecision"
              style={{
                fill: "#25be2c",
                fillOpacity: allState.i54 === 0 ? 0 : 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path29841-7"
              inkscape:flatsided="true"
              sodipodi:sides={3}
              sodipodi:cx="210.00743"
              sodipodi:cy="383.50027"
              sodipodi:r1="16.367567"
              sodipodi:r2="8.1837845"
              sodipodi:arg1={0}
              sodipodi:arg2="1.0471976"
              inkscape:rounded={0}
              inkscape:randomized={0}
              d="M 226.375,383.50027 201.82365,397.675 v -28.34945 z"
              inkscape:transform-center-x="-4.0918922"
            /><rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="54"
              className='Pump'
              width="40.093037"
              height="40.093037"
              x="328.61124"
              y="153.95732"
              transform="translate(-138.65033,209.49644)"
              inkscape:label="Маска насоса 54"
              onClick={(e) => valvePopupOpen(true, e)}
            ></rect>
          </g>
          <path
            id="rect2594"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.99982",
              strokeLinecap: "round",
              strokeOpacity: 1
            }}
            d="M 254.12184 110.20396 L 254.12184 120.20396 L 264.11598 120.20396 L 264.11598 168.99497 L 274.1609 168.99497 L 274.1609 120.20396 L 331.48903 120.20396 L 331.48903 110.20396 L 254.12184 110.20396 z "
            inkscape:label="Труба под входом горячей воды"
          />
          <g
            id="g29835"
            inkscape:label="Насос 206"
            shapeRendering="geometricPrecision"
            className="pump"
            style={{ opacity: 1, fill: "#ffffff", fillOpacity: 1 }}
            transform="translate(10.608742,0.36393166)"
          >
            <circle
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path25976"
              cx="210.00743"
              cy="383.50027"
              r="19.046518"
              inkscape:label="path25976"
            />
            <path
              sodipodi:type="star"
              className="pump-tr pump-black"
              shapeRendering="geometricPrecision"
              style={{
                fill: "#25be2c",
                fillOpacity: allState.i41 === 0 ? 0 : 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path29841"
              inkscape:flatsided="true"
              sodipodi:sides={3}
              sodipodi:cx="210.00743"
              sodipodi:cy="383.50027"
              sodipodi:r1="16.367567"
              sodipodi:r2="8.1837845"
              sodipodi:arg1={0}
              sodipodi:arg2="1.0471976"
              inkscape:rounded={0}
              inkscape:randomized={0}
              d="M 226.375,383.50027 201.82365,397.675 v -28.34945 z"
              inkscape:transform-center-x="-4.0918922"
            /><rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="41"
              className='Pump'
              width="40.093037"
              height="40.093037"
              x="200.56966"
              y="363.81769"
              transform="translate(-10.608742,-0.36393166)"
              inkscape:label="Маска насоса 41"
              onClick={(e) => valvePopupOpen(true, e)}
            ></rect>

          </g>
          <g
            id="g29835-0"
            inkscape:label="Насос 203"
            shapeRendering="geometricPrecision"
            className="pump"
            style={{ fill: "#ffffff", fillOpacity: 1, display: configurator.i913 === 0 ? "none" : "" }}
            transform="rotate(89.962941,292.85155,167.10182)"
          >
            <circle
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path25976-93"
              cx="210.00743"
              cy="383.50027"
              r="19.046518"
              inkscape:label="path25976"
            />
            <path
              sodipodi:type="star"
              className="pump-tr pump-black"
              shapeRendering="geometricPrecision"
              style={{
                fill: "#25be2c",
                fillOpacity: allState.i44 === 0 ? 0 : 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path29841-6"
              inkscape:flatsided="true"
              sodipodi:sides={3}
              sodipodi:cx="210.00743"
              sodipodi:cy="383.50027"
              sodipodi:r1="16.367567"
              sodipodi:r2="8.1837845"
              sodipodi:arg1={0}
              sodipodi:arg2="1.0471976"
              inkscape:rounded={0}
              inkscape:randomized={0}
              d="M 226.375,383.50027 201.82365,397.675 v -28.34945 z"
              inkscape:transform-center-x="-4.0918922"
            /><rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="44"
              className='Pump'
              width="40.093037"
              height="40.093037"
              x="56.353039"
              y="64.351166"
              transform="rotate(-89.962941,292.85155,167.10182)"
              inkscape:label="Маска насоса 44"
              onClick={(e) => valvePopupOpen(true, e)}
            ></rect>
          </g>
          <g
            id="g29835-66"
            inkscape:label="Насос 204"
            shapeRendering="geometricPrecision"
            className="pump"
            style={{ fill: "#ffffff", fillOpacity: 1 }}
            transform="rotate(89.962941,316.8706,191.1364)"
          >
            <circle
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path25976-5"
              cx="210.00743"
              cy="383.50027"
              r="19.046518"
              inkscape:label="path25976"
            />
            <path
              sodipodi:type="star"
              className="pump-tr pump-black"
              shapeRendering="geometricPrecision"
              style={{
                fill: "#25be2c",
                fillOpacity: allState.i1 === 0 ? 0 : 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path29841-64"
              inkscape:flatsided="true"
              sodipodi:sides={3}
              sodipodi:cx="210.00743"
              sodipodi:cy="383.50027"
              sodipodi:r1="16.367567"
              sodipodi:r2="8.1837845"
              sodipodi:arg1={0}
              sodipodi:arg2="1.0471976"
              inkscape:rounded={0}
              inkscape:randomized={0}
              d="M 226.375,383.50027 201.82365,397.675 v -28.34945 z"
              inkscape:transform-center-x="-4.0918922"
            /><rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="1"
              className='Pump'
              width="40.093037"
              height="40.093037"
              x="104.39112"
              y="64.351158"
              onClick={(e) => valvePopupOpen(true, e)}
              transform="rotate(-89.962941,316.8706,191.1364)"
              inkscape:label="Маска насоса 1"
            ></rect>
          </g>
          <g
            id="g29835-7"
            inkscape:label="Насос 205"
            shapeRendering="geometricPrecision"
            className="pump"
            style={{ fill: "#ffffff", fillOpacity: 1 }}
            transform="rotate(89.973848,340.84198,215.15537)"
          >
            <circle
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path25976-2"
              cx="210.00743"
              cy="383.50027"
              r="19.046518"
              inkscape:label="path25976"
            />
            <path
              sodipodi:type="star"
              className="pump-tr pump-black"
              shapeRendering="geometricPrecision"
              style={{
                fill: "#25be2c",
                fillOpacity: allState.i7 === 0 ? 0 : 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path29841-8"
              inkscape:flatsided="true"
              sodipodi:sides={3}
              sodipodi:cx="210.00743"
              sodipodi:cy="383.50027"
              sodipodi:r1="16.367567"
              sodipodi:r2="8.1837845"
              sodipodi:arg1={0}
              sodipodi:arg2="1.0471976"
              inkscape:rounded={0}
              inkscape:randomized={0}
              d="M 226.375,383.50027 201.82365,397.675 v -28.34945 z"
              inkscape:transform-center-x="-4.0918922"
            /><rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="7"
              className='Pump'
              width="40.093037"
              height="40.093037"
              onClick={(e) => valvePopupOpen(true, e)}
              x="152.39085"
              y="64.351158"
              transform="rotate(-89.973848,340.84198,215.15537)"
              inkscape:label="Маска насоса 7"
            ></rect>
          </g>
          <g
            id="g29835-6-4"
            inkscape:label="Насос 201"
            shapeRendering="geometricPrecision"
            className="pump"
            transform="rotate(180,279.3326,249.35201)"
            style={{ fill: "none", fillOpacity: 1 }}
          >
            <circle
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path25976-9-4"
              cx="210.00743"
              cy="383.50027"
              r="19.046518"
              inkscape:label="path25976"
            />
            <path
              sodipodi:type="star"
              className="pump-tr"
              shapeRendering="geometricPrecision"
              style={{
                stroke: "#000000",
                fill: "#25be2c",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path29841-7-1"
              inkscape:flatsided="true"
              sodipodi:sides={3}
              sodipodi:cx="210.00743"
              sodipodi:cy="383.50027"
              sodipodi:r1="16.367567"
              sodipodi:r2="8.1837845"
              sodipodi:arg1={0}
              sodipodi:arg2="1.0471976"
              inkscape:rounded={0}
              inkscape:randomized={0}
              d="M 226.375,383.50027 201.82365,397.675 v -28.34945 z"
              inkscape:transform-center-x="-4.0918922"
            /><rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="201"
              className='Pump'
              width="40.093037"
              height="40.093037"
              x="328.61124"
              y="95.157227"
              transform="rotate(-180,279.3326,249.35201)"
              inkscape:label="Маска насоса 201"
            ></rect>
          </g>
          <g
            id="g38955"
            inkscape:label="Клетка"
            transform="translate(17.819639,-5.9577207)"
          >
            <g
              id="g37447"
              inkscape:label="створка"
              style={{ opacity: allState.i28 === 0 ? 1 : 0, strokeWidth: 2, strokeDasharray: "none" }}
            >
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect31786"
                width="9.8275423"
                height="64.827538"
                x="-499.43207"
                y="139.18718"
                transform="scale(-1,1)"
              />
              <ellipse
                shapeRendering="geometricPrecision"
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "2.3077",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="path30280"
                cx="494.51831"
                cy="206.20995"
                rx="6.346149"
                ry="6.3461485"
              />
            </g>
            <ellipse
              style={{
                fill: allState.i8 === 0 ? "#ffffff" : "#25be2c",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99982",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path45721-0"
              shapeRendering="geometricPrecision"
              cx="558.07684"
              cy="168.15306"
              rx="3.0000889"
              ry="3.0000885"
            />
            <ellipse
              style={{
                display: configurator.i907 === 1 && configurator.i908 === 1 ? "" : "none",
                fill: allState.i17 === 0 ? "#ffffff" : "#25be2c",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99982",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path45721-0-6"
              shapeRendering="geometricPrecision"
              cx="481.56851"
              cy="168.01985"
              rx="3.0000889"
              ry="3.0000885"
            />
            <ellipse
              style={{
                fill: allState.i9 === 0 ? "#ffffff" : "#25be2c",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99982",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path45721-0-0"
              shapeRendering="geometricPrecision"
              cx="692.7182"
              cy="168.01926"
              rx="3.0000889"
              ry="3.0000885"
            />
            <g
              id="g37447-0-4-3"
              inkscape:label="створка"
              style={{
                fill: "none",
                opacity: allState.i29 === 0 ? 1 : 0,
                fillOpacity: 1,
                stroke: "#000000",
                strokeOpacity: 1
              }}
              transform="rotate(-90,486.47235,137.1346)"
            >
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect31786-5-1-8"
                width="9.9986343"
                height="110.32981"
                x="-498.5094"
                y="140.18881"
                transform="scale(-1,1)"
              />
              <ellipse
                shapeRendering="geometricPrecision"
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "2.3077",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="path30280-1-8-6"
                cx="493.64389"
                cy="253.5712"
                rx="6.3461485"
                ry="6.346149"
              />
            </g >
            <g
              id="g37447-0-4-3-4"
              inkscape:label="створка"
              style={{ opacity: allState.i31 === 0 ? 1 : 0, fill: "none", fillOpacity: 1 }}
              transform="rotate(90,618.23413,254.5533)"
            >
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect31786-5-1-8-6"
                width="9.9986343"
                height="110.32981"
                x="-498.5094"
                y="140.18881"
                transform="scale(-1,1)"
              />
              <ellipse
                shapeRendering="geometricPrecision"
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "2.3077",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="path30280-1-8-6-3"
                cx="493.64389"
                cy="253.20657"
                rx="6.3461485"
                ry="6.346149"
              />
            </g >
            <g
              id="g37447-1-7-5"
              inkscape:label="створка"
              style={{
                opacity: allState.i30 === 0 ? 1 : 0,
                fill: "none",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              transform="matrix(-1,0,0,1,1222.2134,-5.8623474e-6)"
            >
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="rect31786-2-9-1"
                width="9.8275423"
                height="64.827538"
                x="-499.4321"
                y="139.0493"
                transform="scale(-1,1)"
              />
              <ellipse
                shapeRendering="geometricPrecision"
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "2.3077",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                id="path30280-3-5-1"
                cx="494.51831"
                cy="206.20995"
                rx="6.346149"
                ry="6.3461485"
              />
            </g >

            <g
              id="401"
              shapeRendering="geometricPrecision"
              transform="rotate(90,598.71649,222.31578)"
            >
              <path
                d="m 556.85631,201.10233 c -0.42087,-1.462 -1.5949,-2.89075 -2.95719,-3.5996 -0.99682,-0.52055 -1.39556,-0.6313 -2.43666,-0.731 l -0.86391,-0.0775 -0.12183,-0.57593 c -0.43195,-1.92717 -2.01577,-3.6439 -3.97618,-4.3306 -0.94143,-0.33227 -2.5474,-0.39872 -3.44453,-0.14397 -2.18192,0.62023 -3.96509,2.41449 -4.43028,4.47457 l -0.12182,0.57593 -0.77531,0.0664 c -1.04112,0.0997 -1.62813,0.26582 -2.51418,0.731 -1.27371,0.67561 -2.4145,2.00471 -2.90184,3.41131 -0.25473,0.71992 -0.34334,2.44773 -0.16613,3.25626 0.45411,2.11546 2.14869,3.90972 4.24199,4.51887 1.63921,0.47626 2.51418,0.2769 2.51418,-0.56486 0,-0.54271 -0.31012,-0.76421 -1.22939,-0.85282 -1.57276,-0.1772 -2.91292,-1.11865 -3.57745,-2.53633 -0.32121,-0.66455 -0.34336,-0.80852 -0.34336,-1.88286 0,-1.07435 0.0221,-1.21834 0.34336,-1.88288 0.43195,-0.90821 1.21831,-1.6835 2.14868,-2.1376 0.6867,-0.34336 0.7753,-0.35444 2.07116,-0.35444 1.67243,0 1.70565,-0.0332 1.81641,-1.21831 0.19936,-2.11547 1.63921,-3.67714 3.72142,-4.06479 1.61706,-0.29904 3.40024,0.47625 4.36382,1.8718 0.43197,0.63131 0.76423,1.65028 0.76423,2.35912 0,0.35442 0.0665,0.60916 0.21044,0.78637 0.19936,0.25475 0.27689,0.26581 1.58383,0.26581 1.318,0 1.39552,0.0111 2.10437,0.3655 2.25944,1.10757 3.16765,3.65499 2.11547,5.9255 -0.65348,1.37339 -2.01579,2.33697 -3.57747,2.50311 -0.64237,0.0664 -0.85281,0.13291 -1.00787,0.33227 -0.28797,0.35442 -0.26582,0.83067 0.0443,1.12972 0.22152,0.21043 0.33227,0.22151 1.07435,0.1772 2.49203,-0.16613 4.71824,-2.03792 5.37171,-4.51887 0.22151,-0.8196 0.19936,-2.42559 -0.0444,-3.2784 z"
                id="path1401"
                style={{ fill: allState.i21 === 0 ? "#000000" : "#25be2c", fillOpacity: 1, strokeWidth: "0.0110756" }}
              />
              <path
                d="m 551.75042,202.3428 c -0.16613,-0.43194 -0.39871,-0.53162 -1.12971,-0.47625 -1.39555,0.0886 -2.68032,0.97466 -3.33379,2.29267 l -0.35441,0.731 -0.0331,10.15641 c -0.0221,10.05673 -0.0221,10.16748 0.19935,10.389 0.29905,0.29904 0.89713,0.28796 1.17402,-0.0111 0.19937,-0.22152 0.21044,-0.59809 0.26582,-10.27824 l 0.0554,-10.04565 0.31011,-0.46518 c 0.40981,-0.62024 1.01898,-1.00788 1.80534,-1.12973 0.48734,-0.0775 0.71992,-0.1772 0.90822,-0.38764 0.2658,-0.31012 0.27689,-0.42088 0.1329,-0.7753 z"
                id="path1405"
                style={{ fill: allState.i21 === 0 ? "#000000" : "#25be2c", fillOpacity: 1, strokeWidth: "0.0110756" }}
              />
              <path
                d="m 545.34867,202.43141 c -0.0775,-0.5427 -0.94142,-0.77529 -1.35124,-0.36549 -0.2215,0.22151 -0.2215,0.36549 -0.2215,13.39051 v 13.18006 l 0.28797,0.22152 c 0.37657,0.29905 0.63131,0.28798 0.98573,-0.0111 l 0.28797,-0.25473 0.0221,-12.95856 c 0.0111,-7.12167 0.0111,-13.06932 -0.0111,-13.20223 z"
                id="path1407"
                style={{ fill: allState.i21 === 0 ? "#000000" : "#25be2c", fillOpacity: 1, strokeWidth: "0.0110756" }}
              />
              <path
                d="m 541.94844,204.45827 c -0.64239,-1.57276 -2.10438,-2.61387 -3.67713,-2.61387 -0.65346,0 -0.9525,0.25475 -0.9525,0.78638 0,0.44302 0.3101,0.74207 0.86389,0.81961 0.74208,0.11075 1.16295,0.28796 1.56168,0.64238 0.8196,0.70885 0.75315,-0.0775 0.8196,10.7988 l 0.0554,9.7909 0.32119,0.27691 c 0.34335,0.29903 0.731,0.27687 1.0965,-0.0444 0.17721,-0.16614 0.18827,-0.78639 0.18827,-9.99027 v -9.81306 z"
                id="path1409"
                style={{ fill: allState.i21 === 0 ? "#000000" : "#25be2c", fillOpacity: 1, strokeWidth: "0.0110756" }}
              />
            </g>
          </g >
          <g
            id="g38984"
            inkscape:label="Стрелка Входа прямо"
            transform="translate(42.276214,-81.848082)"
            style={{ strokeWidth: 2, strokeDasharray: "none", display: configurator.i907 === 1 ? "" : "none", }}
          >
            <path
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 415.18629,244.08579 h 30"
              id="path38976"
            />
            <path
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 434.56129,233.4608 10.625,10.62499 -10.97855,10.25"
              shapeRendering="geometricPrecision"
              id="path38980"
            />
          </g>
          <g
            id="g38984-5"
            inkscape:label="Стрелка выхода прямо"
            transform="translate(340.18702,-81.848089)"
            style={{
              display: configurator.i910 === 1 ? "" : "none",
              fill: "none",
              fillOpacity: 1,
              strokeWidth: 2,
              strokeDasharray: "none"
            }}
          >
            <path
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 415.18629,244.08579 h 30"
              id="path38976-4"
            />
            <path
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 434.56129,233.4608 10.625,10.62499 -10.97855,10.25"
              shapeRendering="geometricPrecision"
              id="path38980-1"
            />
          </g>
          <g
            id="g38984-57"
            inkscape:label="Стрелка выхода верх"
            transform="rotate(-45,413.6536,-197.41875)"
            style={{
              display: configurator.i909 === 1 ? "" : "none",
              fill: "none",
              fillOpacity: 1,
              strokeWidth: 2,
              strokeDasharray: "none"
            }}
          >
            <path
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 415.18629,244.08579 h 30"
              shapeRendering="geometricPrecision"
              id="path38976-2"
            />
            <path
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 434.56129,233.4608 10.625,10.62499 -10.97855,10.25"
              id="path38980-3"
            />
          </g>
          <g
            id="g38984-57-5"
            inkscape:label="Стрелка Входа верх"
            transform="rotate(43.99529,651.78952,274.0332)"
            style={{
              display: configurator.i908 === 1 ? "" : "none",
              fill: "none",
              fillOpacity: 1,
              strokeWidth: 2,
              strokeDasharray: "none"
            }}
          >
            <path
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 415.18629,244.08579 h 30"
              shapeRendering="geometricPrecision"
              id="path38976-2-5"
            />
            <path
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 434.56129,233.4608 10.625,10.62499 -10.97855,10.25"
              id="path38980-3-2"
            />
          </g>

          <g
            transform="matrix(0.01017441,0,0,-0.01017441,286.94607,548.95315)"
            fill="#000000"
            stroke="none"
            shapeRendering="geometricPrecision"
            id="g45824-3-5"
            inkscape:label="Канализация под распределителем"
            style={{ fill: "#000000", fillOpacity: 1 }}
          >
            <path
              d="m 480,2658 c -65,-44 -86,-120 -52,-188 29,-58 67,-76 180,-83 326,-22 614,-189 793,-460 74,-113 137,-274 151,-387 l 3,-25 -151,-5 c -130,-4 -155,-8 -172,-24 -27,-24 -37,-69 -21,-98 18,-35 429,-640 451,-665 11,-12 31,-24 45,-28 58,-14 73,3 313,355 252,371 258,383 205,435 -23,24 -28,25 -179,25 -85,0 -157,3 -159,8 -8,12 39,184 72,262 91,213 292,417 509,517 100,46 243,82 363,90 110,7 147,22 179,75 39,64 16,151 -50,196 -33,23 -41,24 -145,19 -186,-9 -343,-50 -509,-133 -230,-116 -435,-308 -548,-514 -18,-33 -35,-60 -38,-60 -3,0 -17,24 -32,53 -44,84 -151,218 -238,300 -231,217 -515,339 -825,354 -104,5 -112,4 -145,-19 z"
              id="path45820-7-3"
              style={{ fill: "#000000", fillOpacity: 1 }}
            ></path>
            <path
              d="M 1130,885 C 389,822 1,675 0,457 -1,213 461,60 1350,10 c 691,-39 1495,40 1830,180 174,72 260,161 260,267 -2,221 -392,366 -1148,428 -274,23 -240,32 -322,-87 -102,-150 -118,-168 -164,-189 -52,-23 -100,-24 -151,0 -49,22 -80,56 -169,189 l -70,102 -65,-1 c -36,-1 -136,-7 -221,-14 z m 316,-140 c 44,-18 40,-36 -12,-53 -43,-15 -150,-10 -185,8 -73,40 110,81 197,45 z m 723,2 c 71,-25 42,-54 -62,-63 -66,-6 -137,11 -145,34 -11,34 134,54 207,29 z M 1080,657 c 19,-7 35,-19 35,-27 0,-8 -16,-20 -35,-27 -72,-24 -205,-7 -205,27 0,20 58,39 120,39 28,0 66,-5 85,-12 z m 1470,0 c 19,-7 35,-19 35,-27 0,-8 -16,-20 -35,-27 -72,-24 -205,-7 -205,27 0,20 58,39 120,39 28,0 66,-5 85,-12 z M 1424,571 c 92,-22 65,-61 -46,-69 -79,-5 -154,16 -146,40 10,29 119,45 192,29 z m 740,-4 c 53,-16 56,-34 9,-53 -76,-32 -245,-2 -206,37 27,27 132,35 197,16 z M 414,496 c 138,-83 480,-135 1038,-156 186,-8 350,-8 535,0 560,21 901,73 1039,156 39,23 64,32 78,28 40,-12 116,-57 116,-69 0,-37 -224,-116 -453,-160 -329,-62 -555,-80 -1047,-80 -492,0 -718,18 -1047,80 -231,44 -453,123 -453,161 0,11 111,74 130,74 4,0 33,-15 64,-34 z m 1389,3 c 75,-21 18,-68 -83,-68 -97,0 -159,47 -88,68 45,13 125,13 171,0 z"
              id="path45822-5-4"
              style={{ fill: "#000000", fillOpacity: 1 }}
            />
          </g>
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: !fill625 && allState.i18 === 1 ? 1 : 0,
              stroke: "none",
              strokeWidth: "2.05929",
              strokeLinecap: "square",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect52841"
            width="9.9904804"
            height="17.619476"
            x="198.19209"
            y="498.09991"
            inkscape:label="Отвод к канализации - 1 заливка"
          ></rect >
          <rect
            style={{
              fill: "#2a569a",
              fillOpacity: !fill625 && allState.i42 === 1 && allState.i18 === 1 ? 1 : 0,
              stroke: "none",
              strokeWidth: "2.05929",
              strokeLinecap: "square",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect52841-6"
            width="9.9904804"
            height="17.619476"
            x="248.61203"
            y="498.17609"
            inkscape:label="Отвод к канализации - 2 заливка"
          ></rect >
          <g
            transform="matrix(0.01017441,0,0,-0.01017441,185.68737,548.85338)"
            fill="#000000"
            stroke="none"
            id="g45824"
            shapeRendering="geometricPrecision"
            inkscape:label="Канализация после насоса"
            style={{ fill: "#000000", fillOpacity: 1 }}
          >
            <path
              d="m 480,2658 c -65,-44 -86,-120 -52,-188 29,-58 67,-76 180,-83 326,-22 614,-189 793,-460 74,-113 137,-274 151,-387 l 3,-25 -151,-5 c -130,-4 -155,-8 -172,-24 -27,-24 -37,-69 -21,-98 18,-35 429,-640 451,-665 11,-12 31,-24 45,-28 58,-14 73,3 313,355 252,371 258,383 205,435 -23,24 -28,25 -179,25 -85,0 -157,3 -159,8 -8,12 39,184 72,262 91,213 292,417 509,517 100,46 243,82 363,90 110,7 147,22 179,75 39,64 16,151 -50,196 -33,23 -41,24 -145,19 -186,-9 -343,-50 -509,-133 -230,-116 -435,-308 -548,-514 -18,-33 -35,-60 -38,-60 -3,0 -17,24 -32,53 -44,84 -151,218 -238,300 -231,217 -515,339 -825,354 -104,5 -112,4 -145,-19 z"
              id="path45820"
              style={{ fill: "#000000", fillOpacity: 1 }}
            ></path>
            <path
              d="M 1130,885 C 389,822 1,675 0,457 -1,213 461,60 1350,10 c 691,-39 1495,40 1830,180 174,72 260,161 260,267 -2,221 -392,366 -1148,428 -274,23 -240,32 -322,-87 -102,-150 -118,-168 -164,-189 -52,-23 -100,-24 -151,0 -49,22 -80,56 -169,189 l -70,102 -65,-1 c -36,-1 -136,-7 -221,-14 z m 316,-140 c 44,-18 40,-36 -12,-53 -43,-15 -150,-10 -185,8 -73,40 110,81 197,45 z m 723,2 c 71,-25 42,-54 -62,-63 -66,-6 -137,11 -145,34 -11,34 134,54 207,29 z M 1080,657 c 19,-7 35,-19 35,-27 0,-8 -16,-20 -35,-27 -72,-24 -205,-7 -205,27 0,20 58,39 120,39 28,0 66,-5 85,-12 z m 1470,0 c 19,-7 35,-19 35,-27 0,-8 -16,-20 -35,-27 -72,-24 -205,-7 -205,27 0,20 58,39 120,39 28,0 66,-5 85,-12 z M 1424,571 c 92,-22 65,-61 -46,-69 -79,-5 -154,16 -146,40 10,29 119,45 192,29 z m 740,-4 c 53,-16 56,-34 9,-53 -76,-32 -245,-2 -206,37 27,27 132,35 197,16 z M 414,496 c 138,-83 480,-135 1038,-156 186,-8 350,-8 535,0 560,21 901,73 1039,156 39,23 64,32 78,28 40,-12 116,-57 116,-69 0,-37 -224,-116 -453,-160 -329,-62 -555,-80 -1047,-80 -492,0 -718,18 -1047,80 -231,44 -453,123 -453,161 0,11 111,74 130,74 4,0 33,-15 64,-34 z m 1389,3 c 75,-21 18,-68 -83,-68 -97,0 -159,47 -88,68 45,13 125,13 171,0 z"
              id="path45822"
              style={{ fill: "#000000", fillOpacity: 1 }}
            />
          </g>

          <g
            transform="matrix(0.01017441,0,0,-0.01017441,236.10728,548.85338)"
            fill="#000000"
            stroke="none"
            shapeRendering="geometricPrecision"
            id="g45824-3"
            inkscape:label="Канализация перед распределителем"
            style={{ fill: "#000000", fillOpacity: 1 }}
          >
            <path
              d="m 480,2658 c -65,-44 -86,-120 -52,-188 29,-58 67,-76 180,-83 326,-22 614,-189 793,-460 74,-113 137,-274 151,-387 l 3,-25 -151,-5 c -130,-4 -155,-8 -172,-24 -27,-24 -37,-69 -21,-98 18,-35 429,-640 451,-665 11,-12 31,-24 45,-28 58,-14 73,3 313,355 252,371 258,383 205,435 -23,24 -28,25 -179,25 -85,0 -157,3 -159,8 -8,12 39,184 72,262 91,213 292,417 509,517 100,46 243,82 363,90 110,7 147,22 179,75 39,64 16,151 -50,196 -33,23 -41,24 -145,19 -186,-9 -343,-50 -509,-133 -230,-116 -435,-308 -548,-514 -18,-33 -35,-60 -38,-60 -3,0 -17,24 -32,53 -44,84 -151,218 -238,300 -231,217 -515,339 -825,354 -104,5 -112,4 -145,-19 z"
              id="path45820-7"
              style={{ fill: "#000000", fillOpacity: 1 }}
            ></path>
            <path
              d="M 1130,885 C 389,822 1,675 0,457 -1,213 461,60 1350,10 c 691,-39 1495,40 1830,180 174,72 260,161 260,267 -2,221 -392,366 -1148,428 -274,23 -240,32 -322,-87 -102,-150 -118,-168 -164,-189 -52,-23 -100,-24 -151,0 -49,22 -80,56 -169,189 l -70,102 -65,-1 c -36,-1 -136,-7 -221,-14 z m 316,-140 c 44,-18 40,-36 -12,-53 -43,-15 -150,-10 -185,8 -73,40 110,81 197,45 z m 723,2 c 71,-25 42,-54 -62,-63 -66,-6 -137,11 -145,34 -11,34 134,54 207,29 z M 1080,657 c 19,-7 35,-19 35,-27 0,-8 -16,-20 -35,-27 -72,-24 -205,-7 -205,27 0,20 58,39 120,39 28,0 66,-5 85,-12 z m 1470,0 c 19,-7 35,-19 35,-27 0,-8 -16,-20 -35,-27 -72,-24 -205,-7 -205,27 0,20 58,39 120,39 28,0 66,-5 85,-12 z M 1424,571 c 92,-22 65,-61 -46,-69 -79,-5 -154,16 -146,40 10,29 119,45 192,29 z m 740,-4 c 53,-16 56,-34 9,-53 -76,-32 -245,-2 -206,37 27,27 132,35 197,16 z M 414,496 c 138,-83 480,-135 1038,-156 186,-8 350,-8 535,0 560,21 901,73 1039,156 39,23 64,32 78,28 40,-12 116,-57 116,-69 0,-37 -224,-116 -453,-160 -329,-62 -555,-80 -1047,-80 -492,0 -718,18 -1047,80 -231,44 -453,123 -453,161 0,11 111,74 130,74 4,0 33,-15 64,-34 z m 1389,3 c 75,-21 18,-68 -83,-68 -97,0 -159,47 -88,68 45,13 125,13 171,0 z"
              id="path45822-5"
              style={{ fill: "#000000", fillOpacity: 1 }}
            />
          </g>



          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8-0-8"
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
            d="m 199.1894,514.71939 h -0.9973 V 498.0999 h 9.99048 v 16.61949 0 h -0.99922"
            inkscape:label="Отвод к канализации - 1"
          ></path>

          <g
            transform="matrix(0.01017441,0,0,-0.01017441,332.01017,391.59491)"
            fill="#000000"
            stroke="none"
            id="g45824-6"
            shapeRendering="geometricPrecision"
            style={{
              display: configurator.i904 === 0 ? "" : "none",
              fill: "#000000",
              fillOpacity: 1,
              strokeWidth: "1.032",
              strokeDasharray: "none"
            }}
            inkscape:label="Канализация перед охладителем"
          >
            <path
              d="m 480,2658 c -65,-44 -86,-120 -52,-188 29,-58 67,-76 180,-83 326,-22 614,-189 793,-460 74,-113 137,-274 151,-387 l 3,-25 -151,-5 c -130,-4 -155,-8 -172,-24 -27,-24 -37,-69 -21,-98 18,-35 429,-640 451,-665 11,-12 31,-24 45,-28 58,-14 73,3 313,355 252,371 258,383 205,435 -23,24 -28,25 -179,25 -85,0 -157,3 -159,8 -8,12 39,184 72,262 91,213 292,417 509,517 100,46 243,82 363,90 110,7 147,22 179,75 39,64 16,151 -50,196 -33,23 -41,24 -145,19 -186,-9 -343,-50 -509,-133 -230,-116 -435,-308 -548,-514 -18,-33 -35,-60 -38,-60 -3,0 -17,24 -32,53 -44,84 -151,218 -238,300 -231,217 -515,339 -825,354 -104,5 -112,4 -145,-19 z"
              id="path45820-9"
              style={{
                fill: "#000000",
                fillOpacity: 1,
                strokeWidth: "1.032",
                strokeDasharray: "none"
              }}
            ></path>
            <path
              d="M 1130,885 C 389,822 1,675 0,457 -1,213 461,60 1350,10 c 691,-39 1495,40 1830,180 174,72 260,161 260,267 -2,221 -392,366 -1148,428 -274,23 -240,32 -322,-87 -102,-150 -118,-168 -164,-189 -52,-23 -100,-24 -151,0 -49,22 -80,56 -169,189 l -70,102 -65,-1 c -36,-1 -136,-7 -221,-14 z m 316,-140 c 44,-18 40,-36 -12,-53 -43,-15 -150,-10 -185,8 -73,40 110,81 197,45 z m 723,2 c 71,-25 42,-54 -62,-63 -66,-6 -137,11 -145,34 -11,34 134,54 207,29 z M 1080,657 c 19,-7 35,-19 35,-27 0,-8 -16,-20 -35,-27 -72,-24 -205,-7 -205,27 0,20 58,39 120,39 28,0 66,-5 85,-12 z m 1470,0 c 19,-7 35,-19 35,-27 0,-8 -16,-20 -35,-27 -72,-24 -205,-7 -205,27 0,20 58,39 120,39 28,0 66,-5 85,-12 z M 1424,571 c 92,-22 65,-61 -46,-69 -79,-5 -154,16 -146,40 10,29 119,45 192,29 z m 740,-4 c 53,-16 56,-34 9,-53 -76,-32 -245,-2 -206,37 27,27 132,35 197,16 z M 414,496 c 138,-83 480,-135 1038,-156 186,-8 350,-8 535,0 560,21 901,73 1039,156 39,23 64,32 78,28 40,-12 116,-57 116,-69 0,-37 -224,-116 -453,-160 -329,-62 -555,-80 -1047,-80 -492,0 -718,18 -1047,80 -231,44 -453,123 -453,161 0,11 111,74 130,74 4,0 33,-15 64,-34 z m 1389,3 c 75,-21 18,-68 -83,-68 -97,0 -159,47 -88,68 45,13 125,13 171,0 z"
              id="path45822-4"
              style={{
                fill: "#000000",
                fillOpacity: 1,
                strokeWidth: "1.032",
                strokeDasharray: "none"
              }}
            />
          </g>

          <g
            transform="matrix(0.01017441,0,0,-0.01017441,390.47195,392.02965)"
            fill="#000000"
            stroke="none"
            shapeRendering="geometricPrecision"
            id="g45824-6-4"
            style={{
              fill: "#000000",
              fillOpacity: 1,
              strokeWidth: "1.032",
              display: configurator.i903 === 1 ? "" : "none",
              strokeDasharray: "none"
            }}
            inkscape:label="Канализация под охладителем"
          >
            <path
              d="m 479.99996,2700.7291 c -65,-44 -86,-120 -52,-188 29,-58 67,-76 180,-83 326,-22 613.99994,-189 792.99994,-460 74,-113 137,-274 151,-387 l 3,-25 -151,-5 c -130,-4 -155,-8 -172,-24 -27,-24 -37,-69 -21,-98 18,-35 429,-639.99997 451,-664.99997 11,-12 31,-24 45,-28 58,-14 73,3 313,354.99997 252,371 258,383 205,435 -23,24 -28,25 -179,25 -85,0 -157,3 -159,8 -8,12 39,184 72,262 91,213 292,417 509,517 100,46 243,82 363,90 110,7 147,22 179,75 39,64 16,151 -50,196 -33,23 -41,24 -145,19 -186,-9 -343,-50 -509,-133 -230,-116 -435,-308 -548,-514 -18,-33 -35,-60 -38,-60 -3,0 -17,24 -32,53 -44,84 -151,218 -238,300 -231,217 -514.99994,339 -824.99994,354 -104,5 -112,4 -145,-19 z"
              id="path45820-9-95"
              style={{
                fill: "#000000",
                fillOpacity: 1,
                strokeWidth: "1.032",
                strokeDasharray: "none"
              }}
            ></path>
            <path
              d="m 1129.9999,927.72913 c -740.99994,-63 -1128.99994205,-210 -1129.9999420516,-428 C -1.0000421,255.72913 460.99996,102.72913 1349.9999,52.729124 c 691,-39 1495,40 1830,180.000006 174,72 260,161 260,267 -2,221 -392,366 -1148,428 -274,23 -240,32 -322,-87 -102,-150 -118,-168 -164,-189 -52,-23 -100,-24 -151,0 -49,22 -80,56 -169,189 l -70,102 -65,-1 c -36,-1 -136,-7 -221,-14 z m 316,-140 c 44,-18 40,-36 -12,-53 -43,-15 -150,-10 -185,8 -73,40 110,81 197,45 z m 723,2 c 71,-25 42,-54 -62,-63 -66,-6 -137,11 -145,34 -11,34 134,54 207,29 z m -1088.9999,-90 c 18.9999,-7 34.9999,-19 34.9999,-27 0,-8 -16,-20 -34.9999,-27 -72,-24 -205.00004,-7 -205.00004,27 0,20 58,39 120,39 28.00004,0 66.00004,-5 85.00004,-12 z m 1469.9999,0 c 19,-7 35,-19 35,-27 0,-8 -16,-20 -35,-27 -72,-24 -205,-7 -205,27 0,20 58,39 120,39 28,0 66,-5 85,-12 z m -1126,-86 c 92,-22 65,-61 -46,-69 -79,-5 -154,16 -146,40 10,29 119,45 192,29 z m 740,-4 c 53,-16 56,-34 9,-53 -76,-32 -245,-2 -206,37 27,27 132,35 197,16 z m -1749.99994,-71 c 138,-83 480,-135 1037.99994,-156 186,-8 350,-8 535,0 560,21 901,73 1039,156 39,23 64,32 78,28 40,-12 116,-57 116,-69 0,-37 -224,-116 -453,-160 -329,-62 -555,-80 -1047,-80 -492,0 -717.9999,18 -1046.99994,80 -231,44 -453,123 -453,161 0,11 111,74 130,74 4,0 33,-15 64,-34 z m 1388.99994,3 c 75,-21 18,-68 -83,-68 -97,0 -159,47 -88,68 45,13 125,13 171,0 z"
              id="path45822-4-90"
              style={{
                fill: "#000000",
                fillOpacity: 1,
                strokeWidth: "1.032",
                strokeDasharray: "none"
              }}
            />
          </g>
          <g
            transform="matrix(0.01017441,0,0,-0.01017441,566.73538,391.83015)"
            fill="#000000"
            stroke="none"
            shapeRendering="geometricPrecision"
            id="g45824-6-8"
            style={{
              fill: "#000000",
              fillOpacity: 1,
              strokeWidth: "1.032",
              strokeDasharray: "none"
            }}
            inkscape:label="Канализация у основного танкера"
          >
            <path
              d="m 480,2658 c -65,-44 -86,-120 -52,-188 29,-58 67,-76 180,-83 326,-22 614,-189 793,-460 74,-113 137,-274 151,-387 l 3,-25 -151,-5 c -130,-4 -155,-8 -172,-24 -27,-24 -37,-69 -21,-98 18,-35 429,-640 451,-665 11,-12 31,-24 45,-28 58,-14 73,3 313,355 252,371 258,383 205,435 -23,24 -28,25 -179,25 -85,0 -157,3 -159,8 -8,12 39,184 72,262 91,213 292,417 509,517 100,46 243,82 363,90 110,7 147,22 179,75 39,64 16,151 -50,196 -33,23 -41,24 -145,19 -186,-9 -343,-50 -509,-133 -230,-116 -435,-308 -548,-514 -18,-33 -35,-60 -38,-60 -3,0 -17,24 -32,53 -44,84 -151,218 -238,300 -231,217 -515,339 -825,354 -104,5 -112,4 -145,-19 z"
              id="path45820-9-9"
              style={{
                fill: "#000000",
                fillOpacity: 1,
                strokeWidth: "1.032",
                strokeDasharray: "none"
              }}
            ></path>
            <path
              d="M 1130,885 C 389,822 1,675 0,457 -1,213 461,60 1350,10 c 691,-39 1495,40 1830,180 174,72 260,161 260,267 -2,221 -392,366 -1148,428 -274,23 -240,32 -322,-87 -102,-150 -118,-168 -164,-189 -52,-23 -100,-24 -151,0 -49,22 -80,56 -169,189 l -70,102 -65,-1 c -36,-1 -136,-7 -221,-14 z m 316,-140 c 44,-18 40,-36 -12,-53 -43,-15 -150,-10 -185,8 -73,40 110,81 197,45 z m 723,2 c 71,-25 42,-54 -62,-63 -66,-6 -137,11 -145,34 -11,34 134,54 207,29 z M 1080,657 c 19,-7 35,-19 35,-27 0,-8 -16,-20 -35,-27 -72,-24 -205,-7 -205,27 0,20 58,39 120,39 28,0 66,-5 85,-12 z m 1470,0 c 19,-7 35,-19 35,-27 0,-8 -16,-20 -35,-27 -72,-24 -205,-7 -205,27 0,20 58,39 120,39 28,0 66,-5 85,-12 z M 1424,571 c 92,-22 65,-61 -46,-69 -79,-5 -154,16 -146,40 10,29 119,45 192,29 z m 740,-4 c 53,-16 56,-34 9,-53 -76,-32 -245,-2 -206,37 27,27 132,35 197,16 z M 414,496 c 138,-83 480,-135 1038,-156 186,-8 350,-8 535,0 560,21 901,73 1039,156 39,23 64,32 78,28 40,-12 116,-57 116,-69 0,-37 -224,-116 -453,-160 -329,-62 -555,-80 -1047,-80 -492,0 -718,18 -1047,80 -231,44 -453,123 -453,161 0,11 111,74 130,74 4,0 33,-15 64,-34 z m 1389,3 c 75,-21 18,-68 -83,-68 -97,0 -159,47 -88,68 45,13 125,13 171,0 z"
              id="path45822-4-9"
              style={{
                fill: "#000000",
                fillOpacity: 1,
                strokeWidth: "1.032",
                strokeDasharray: "none"
              }}
            />
          </g>
          <g
            transform="matrix(0.00740906,0,0,-0.00740906,267.48361,46.055186)"
            fill="#000000"
            stroke="none"
            id="g49109"
            style={{ fill: "#2a569a", fillOpacity: 1 }}
            shapeRendering="geometricPrecision"
            inkscape:label="Холодный кран верх"
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
            transform="matrix(0.00740906,0,0,-0.00740906,392.88061,155.52906)"
            fill="#000000"
            stroke="none"
            id="g49109-8"
            style={{ fill: "#2a569a", fillOpacity: 1, display: configurator.i903 === 1 ? "" : "none" }}
            shapeRendering="geometricPrecision"
            inkscape:label="Холодный кран низ"
          >
            <path
              d="m 1608,4284 c -29,-9 -54,-24 -64,-39 l -16,-25 -427,-2 -426,-3 -25,-50 c -22,-43 -25,-63 -25,-150 0,-118 8,-164 36,-199 l 20,-26 h 425 424 v -60 -60 h 220 220 v 60 60 h 424 c 370,0 427,2 440,15 58,59 61,318 5,390 l -20,25 h -424 -423 l -16,25 c -23,35 -101,55 -210,54 -50,0 -112,-7 -138,-15 z"
              id="path49083-4"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 1338,3548 c -46,-12 -93,-63 -109,-118 l -12,-40 H 773 330 v -530 -530 h 1249 1250 l 28,-24 c 28,-24 28,-26 31,-155 l 4,-131 h 324 324 v 123 c 0,280 -54,482 -178,664 -100,147 -279,274 -462,329 -62,19 -69,23 -40,23 114,2 313,-52 429,-115 80,-44 99,-59 180,-137 184,-180 291,-459 291,-763 v -124 h 95 95 v 73 c 0,233 -35,445 -99,598 -122,293 -386,530 -711,638 -142,46 -200,53 -542,58 l -328,5 -11,41 c -14,52 -63,102 -114,116 -51,14 -754,13 -807,-1 z"
              id="path49085-8"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="M 30,3418 5,3404 2,2862 0,2319 35,2305 c 44,-19 106,-19 150,-1 l 35,15 v 539 c 0,486 -2,541 -16,553 -23,19 -142,23 -174,7 z"
              id="path49087-4"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 580,2163 c -1,-10 -7,-31 -14,-48 l -13,-30 -22,43 c -12,23 -26,42 -32,42 -5,0 -32,-11 -59,-25 l -50,-25 25,-50 25,-49 -45,14 c -25,7 -47,10 -49,7 -11,-19 -34,-112 -28,-116 4,-2 52,-18 107,-35 96,-29 101,-32 123,-72 12,-23 20,-44 18,-46 -2,-3 -47,9 -100,25 l -95,30 -20,-60 -20,-59 25,-9 c 13,-5 58,-20 99,-32 41,-13 75,-25 75,-29 0,-3 -20,-15 -45,-27 l -44,-21 -112,35 c -61,19 -112,34 -114,32 -9,-11 -35,-109 -31,-117 3,-4 27,-14 53,-21 l 48,-12 -48,-24 c -26,-13 -47,-29 -47,-35 0,-5 13,-32 28,-59 l 28,-49 40,24 c 21,13 42,25 46,25 4,0 1,-20 -6,-44 l -14,-45 60,-20 59,-20 9,24 c 5,12 21,62 35,109 25,81 29,87 67,107 22,11 42,18 45,15 3,-2 -9,-49 -26,-103 -16,-54 -27,-101 -23,-104 15,-13 106,-39 112,-32 4,5 20,52 36,105 16,54 31,98 35,98 3,0 15,-20 27,-45 l 21,-44 -35,-112 c -19,-61 -34,-112 -32,-114 8,-8 111,-34 118,-30 4,3 13,26 20,52 l 12,48 24,-47 c 13,-27 26,-48 29,-48 2,0 29,12 59,27 l 55,26 -25,50 -25,49 23,-8 c 56,-19 70,-12 89,43 21,63 28,57 -107,98 -89,27 -92,28 -113,71 -11,25 -21,46 -21,48 0,2 41,-9 91,-25 50,-17 96,-28 102,-26 10,3 37,79 37,104 0,7 -37,24 -82,38 -46,14 -90,28 -98,31 -9,3 0,13 29,31 l 43,25 107,-32 c 58,-18 111,-35 117,-37 10,-3 51,115 42,121 -2,1 -25,9 -53,17 l -50,16 48,23 c 26,13 47,28 47,33 0,5 -12,31 -27,57 l -27,48 -48,-24 c -26,-13 -48,-23 -48,-20 0,2 7,22 14,44 8,23 12,43 8,46 -11,6 -115,36 -117,33 -2,-1 -17,-50 -35,-108 -32,-105 -33,-106 -76,-128 -25,-11 -46,-21 -48,-21 -2,0 12,48 30,107 19,58 33,107 32,109 -11,9 -113,33 -119,27 -4,-5 -19,-48 -34,-98 -15,-49 -30,-94 -33,-99 -3,-5 -16,12 -29,38 l -24,46 32,103 c 18,56 34,107 36,114 3,6 -18,18 -50,27 -69,20 -77,20 -77,-1 z"
              id="path49089-2"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 2843,1895 c -35,-15 -63,-60 -63,-100 0,-36 28,-81 57,-94 16,-8 203,-11 586,-11 517,0 564,2 583,18 66,53 54,156 -21,188 -50,21 -1094,20 -1142,-1 z"
              id="path49091-9"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 3349,1518 c -138,-194 -241,-373 -279,-488 -28,-82 -24,-191 8,-263 31,-70 111,-149 185,-183 55,-26 73,-29 157,-29 83,1 102,4 152,29 70,33 140,101 176,170 24,46 27,61 27,156 v 105 l -62,127 c -52,106 -212,359 -280,446 l -18,22 z m 137,-311 c 62,-100 108,-194 118,-244 9,-42 -9,-105 -41,-143 -102,-122 -291,-77 -333,79 -18,67 13,145 133,333 27,43 53,76 58,73 4,-3 34,-47 65,-98 z"
              id="path49093-3"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 1142,1433 c -17,-26 -29,-50 -27,-53 2,-3 23,-20 48,-38 l 45,-32 36,44 c 20,25 36,48 36,53 0,11 -84,73 -98,73 -5,0 -23,-21 -40,-47 z"
              id="path49095-4"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 1340,1280 c -23,-28 -41,-52 -39,-53 3,-1 23,-20 47,-42 l 42,-39 40,39 c 22,21 40,44 40,50 0,6 -20,30 -44,54 l -43,42 z"
              id="path49097-1"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="M 600,1187 C 600,1184 543,978 474,728 335,224 336,234 393,140 c 99,-164 348,-152 437,20 40,78 40,77 -95,566 -112,407 -135,484 -135,461 z"
              id="path49099-2"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 2108,1126 c -121,-75 -166,-136 -188,-257 -13,-68 -9,-134 17,-287 8,-51 13,-96 9,-99 -10,-11 -64,117 -76,182 -7,36 -15,65 -19,65 -14,0 -110,-100 -126,-131 -38,-73 -57,-147 -62,-244 -7,-123 10,-191 62,-252 153,-179 514,-111 618,115 16,35 22,66 21,122 0,85 -23,142 -90,221 -98,116 -134,302 -103,524 6,42 9,78 7,80 -2,1 -33,-16 -70,-39 z m -5,-537 c 14,-30 45,-76 68,-104 72,-86 86,-152 49,-224 -42,-83 -134,-131 -249,-131 -79,0 -134,27 -165,79 -22,37 -27,129 -12,205 l 8,40 39,-46 c 61,-72 142,-87 196,-36 41,39 46,83 23,234 -24,164 -25,204 -1,108 10,-40 29,-96 44,-125 z"
              id="path49101-4"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 2116,457 c -8,-53 -41,-106 -76,-124 -31,-16 -109,-17 -147,-2 -15,5 -40,22 -55,36 l -26,25 -7,-22 c -10,-32 2,-101 25,-137 23,-38 78,-68 141,-76 35,-5 56,-1 95,17 104,49 135,123 99,242 -8,27 -21,58 -28,68 -13,18 -15,16 -21,-27 z"
              id="path49103-5"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 1511,1100 -43,-40 33,-45 c 19,-24 38,-45 42,-45 12,0 97,62 97,70 0,10 -72,100 -79,100 -3,-1 -26,-19 -50,-40 z"
              id="path49105-5"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 1657,898 -47,-30 22,-36 c 46,-78 38,-74 97,-41 33,19 51,35 47,44 -10,26 -56,95 -64,94 -4,0 -28,-14 -55,-31 z"
              id="path49107-7"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
          </g>
          <g
            transform="matrix(0.00740906,0,0,-0.00740906,267.48361,88.859156)"
            fill="#000000"
            stroke="none"
            id="g56551"
            inkscape:transform-center-x="420.63884"
            inkscape:transform-center-y="-315.47913"
            style={{ fill: "#ed1c24", fillOpacity: 1 }}
            shapeRendering="geometricPrecision"
            inkscape:label="Горячий кран верх"
          >
            <path
              d="m 1608,4284 c -29,-9 -54,-24 -64,-39 l -16,-25 -427,-2 -426,-3 -25,-50 c -22,-43 -25,-63 -25,-150 0,-118 8,-164 36,-199 l 20,-26 h 425 424 v -60 -60 h 220 220 v 60 60 h 424 c 370,0 427,2 440,15 58,59 61,318 5,390 l -20,25 h -424 -423 l -16,25 c -23,35 -101,55 -210,54 -50,0 -112,-7 -138,-15 z"
              id="path56525"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="m 1338,3548 c -46,-12 -93,-63 -109,-118 l -12,-40 H 773 330 v -530 -530 h 1249 1250 l 28,-24 c 28,-24 28,-26 31,-155 l 4,-131 h 324 324 v 123 c 0,336 -80,571 -259,761 -100,105 -238,189 -381,232 -62,19 -69,23 -40,23 119,2 321,-54 444,-123 80,-45 212,-167 266,-246 124,-182 190,-408 190,-646 v -124 h 95 95 v 73 c 0,233 -35,445 -99,598 -122,293 -386,530 -711,638 -142,46 -200,53 -542,58 l -328,5 -11,41 c -14,52 -63,102 -114,116 -51,14 -754,13 -807,-1 z"
              id="path56527"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="M 30,3418 5,3404 2,2862 0,2319 35,2305 c 44,-19 106,-19 150,-1 l 35,15 v 539 c 0,486 -2,541 -16,553 -23,19 -142,23 -174,7 z"
              id="path56529"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="m 409,2149 -57,-31 24,-41 c 13,-23 24,-45 24,-49 0,-4 -19,-1 -41,7 -23,8 -43,15 -44,15 -7,0 -43,-120 -37,-124 4,-2 53,-18 109,-35 98,-30 104,-33 123,-71 31,-61 38,-60 -102,-16 l -77,24 -16,-53 c -8,-29 -15,-57 -15,-63 0,-5 43,-22 95,-38 52,-15 95,-31 95,-34 0,-3 -20,-16 -44,-27 l -44,-22 -109,34 c -59,19 -111,35 -114,35 -10,0 -39,-114 -31,-120 4,-4 27,-12 52,-19 l 45,-13 -48,-24 c -26,-14 -47,-26 -47,-29 0,-2 12,-29 27,-59 l 26,-55 50,26 c 44,22 49,23 43,6 -21,-54 -19,-72 10,-84 16,-6 43,-13 60,-16 l 32,-5 32,104 c 30,97 34,105 70,126 22,12 43,22 48,22 5,0 -5,-46 -23,-102 -18,-57 -30,-106 -26,-110 3,-3 30,-13 59,-22 l 53,-15 9,24 c 5,13 19,57 31,97 12,40 25,77 29,81 4,4 17,-12 30,-35 l 22,-43 -35,-112 c -19,-62 -31,-115 -26,-118 13,-9 111,-37 113,-33 1,2 9,26 17,53 l 15,50 23,-45 c 13,-25 25,-47 27,-49 2,-2 28,9 58,25 l 54,28 -25,50 c -18,36 -21,47 -10,43 9,-3 31,-9 50,-12 l 34,-7 16,58 c 9,32 16,59 14,60 -1,1 -49,17 -107,35 -99,32 -106,36 -127,74 -13,22 -23,43 -23,46 0,4 43,-7 96,-23 53,-17 99,-26 104,-22 8,10 42,106 37,109 -1,1 -40,14 -87,29 -47,15 -92,30 -100,33 -10,3 2,13 33,29 l 48,25 99,-31 c 55,-17 105,-33 113,-36 9,-3 19,12 30,49 9,30 17,58 17,64 0,6 -20,16 -45,22 -25,6 -45,13 -45,16 0,2 18,14 40,26 22,13 40,27 40,31 0,5 -11,31 -25,58 l -25,50 -50,-25 -49,-25 14,46 c 10,34 10,46 2,49 -76,28 -102,34 -108,28 -4,-5 -21,-53 -38,-108 -30,-100 -31,-101 -76,-123 -25,-12 -45,-19 -45,-15 0,3 14,51 31,105 17,55 29,101 27,103 -14,11 -111,35 -117,29 -4,-5 -21,-53 -37,-106 -16,-54 -31,-98 -35,-98 -3,0 -15,20 -27,45 l -21,44 34,108 c 19,59 35,111 35,115 0,11 -108,41 -119,33 -6,-3 -13,-21 -17,-40 -9,-51 -20,-51 -46,-1 l -23,45 z"
              id="path56531"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="m 2843,1895 c -35,-15 -63,-60 -63,-100 0,-36 28,-81 57,-94 16,-8 203,-11 586,-11 517,0 564,2 583,18 66,53 54,156 -21,188 -50,21 -1094,20 -1142,-1 z"
              id="path56533"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="m 3349,1518 c -138,-194 -241,-373 -279,-488 -28,-82 -24,-191 8,-263 31,-70 111,-149 185,-183 55,-26 73,-29 157,-29 83,1 102,4 152,29 70,33 140,101 176,170 24,46 27,61 27,156 v 105 l -62,127 c -52,106 -212,359 -280,446 l -18,22 z m 137,-311 c 62,-100 108,-194 118,-244 9,-42 -9,-105 -41,-143 -102,-122 -291,-77 -333,79 -18,67 13,145 133,333 27,43 53,76 58,73 4,-3 34,-47 65,-98 z"
              id="path56535"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="m 1103,1431 -32,-49 37,-28 c 20,-15 42,-31 48,-36 8,-6 26,9 53,41 l 41,49 -49,36 c -27,20 -53,36 -57,36 -5,0 -23,-22 -41,-49 z"
              id="path56537"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="m 1303,1281 -42,-48 45,-44 44,-43 45,45 45,45 -48,47 -47,47 z"
              id="path56539"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="m 2053,1114 c -135,-87 -173,-161 -173,-333 0,-53 7,-136 16,-185 8,-48 14,-96 12,-105 -6,-27 -56,85 -74,165 -9,41 -19,74 -23,74 -17,0 -112,-110 -134,-155 -40,-81 -51,-133 -51,-255 -1,-111 0,-117 30,-170 54,-96 152,-150 270,-150 264,0 453,205 390,423 -9,30 -32,75 -51,99 -93,115 -120,179 -138,320 -8,67 -8,115 2,204 7,64 11,117 9,119 -2,1 -40,-21 -85,-51 z m 17,-533 c 17,-34 46,-78 64,-99 46,-51 66,-94 66,-141 0,-55 -15,-90 -58,-134 -74,-76 -232,-103 -317,-52 -63,36 -78,76 -73,191 4,98 12,122 30,89 21,-38 79,-84 114,-91 77,-14 144,44 144,126 0,19 -9,89 -20,155 -25,147 -24,184 0,89 10,-40 33,-100 50,-133 z"
              id="path56541"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="m 2080,486 c 0,-53 -23,-107 -57,-136 -29,-26 -42,-30 -89,-30 -66,0 -113,18 -142,55 l -22,28 v -64 c 0,-110 44,-161 151,-178 81,-13 156,22 200,93 28,44 22,142 -14,211 -24,46 -26,48 -27,21 z"
              id="path56543"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="m 1478,1104 c -26,-22 -47,-41 -47,-44 -1,-3 16,-25 37,-49 l 39,-45 46,34 c 26,18 47,38 47,44 0,6 -18,31 -38,55 l -38,43 z"
              id="path56545"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="m 1619,897 -46,-32 32,-52 31,-51 56,30 56,30 -32,54 c -17,29 -35,53 -41,53 -5,0 -31,-14 -56,-32 z"
              id="path56547"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
            <path
              d="M 496,515 C 437,494 388,450 358,390 283,244 365,64 522,30 c 52,-11 60,-9 507,114 250,69 456,128 458,130 5,5 -5,8 -503,145 -221,61 -412,111 -425,111 -13,-1 -41,-7 -63,-15 z"
              id="path56549"
              style={{ fill: "#ed1c24", fillOpacity: 1 }}
            />
          </g>
          <g
            transform="matrix(0.02787449,0,0,-0.02787449,66.350915,52.790744)"
            fill="#000000"
            stroke="none"
            id="g59753"
            style={{ fill: "#25be2c", fillOpacity: 1, display: configurator.i913 === 0 ? "none" : "" }}
            shapeRendering="geometricPrecision"
            inkscape:label="Емкость надуксусной кислоты"
          >
            <path
              d="m 224,964 c -19,-19 -34,-39 -34,-44 0,-5 -37,-10 -82,-12 L 25,905 12,866 C 2,836 0,738 2,458 L 5,90 30,65 C 75,20 177,0 360,0 543,0 645,20 690,65 l 25,25 3,353 c 2,193 0,371 -3,395 -4,30 -18,55 -47,86 -63,70 -83,76 -258,76 H 257 Z m 358,-49 c 8,-19 8,-31 0,-50 -12,-25 -12,-25 -152,-25 -140,0 -140,0 -152,25 -8,19 -8,31 0,50 12,25 12,25 152,25 140,0 140,0 152,-25 z M 482,573 C 542,514 590,459 590,450 590,431 380,220 360,220 c -19,0 -230,210 -230,230 0,19 210,230 230,230 8,0 63,-48 122,-107 z"
              id="path59747"
              style={{ fill: "#25be2c", fillOpacity: 1 }}
            />
            <path
              d="m 260,545 -95,-95 98,-98 97,-97 97,97 98,98 -95,95 c -52,52 -97,95 -100,95 -3,0 -48,-43 -100,-95 z m 120,-55 c 0,-83 -1,-90 -20,-90 -19,0 -20,7 -20,90 0,83 1,90 20,90 19,0 20,-7 20,-90 z m -3,-121 c 15,-15 5,-39 -17,-39 -22,0 -32,24 -17,39 6,6 14,11 17,11 3,0 11,-5 17,-11 z"
              id="path59749"
              style={{ fill: "#25be2c", fillOpacity: 1 }}
            />
            <path
              d="m 44,975 c -13,-33 4,-45 59,-45 58,0 82,15 71,44 -9,22 -122,23 -130,1 z"
              id="path59751"
              style={{ fill: "#25be2c", fillOpacity: 1 }}
            />
          </g>
          <g
            transform="matrix(0.02787449,0,0,-0.02787449,114.389,52.790744)"
            fill="#000000"
            stroke="none"
            id="g60610"
            style={{ fill: "#ed1c24", fillOpacity: 1 }}
            shapeRendering="geometricPrecision"
            inkscape:label="Емкость кислоты"
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
          <g
            transform="matrix(0.02787449,0,0,-0.02787449,162.42709,52.790744)"
            fill="#000000"
            stroke="none"
            id="g61405"
            style={{ fill: "#2a569a", fillOpacity: 1 }}
            shapeRendering="geometricPrecision"
            inkscape:label="Емкость щелочи"
          >
            <path
              d="m 224,964 c -19,-19 -34,-39 -34,-44 0,-5 -37,-10 -82,-12 L 25,905 12,866 C 2,836 0,738 2,458 L 5,90 30,65 C 75,20 177,0 360,0 543,0 645,20 690,65 l 25,25 3,353 c 2,193 0,371 -3,395 -4,30 -18,55 -47,86 -63,70 -83,76 -258,76 H 257 Z m 358,-49 c 8,-19 8,-31 0,-50 -12,-25 -12,-25 -152,-25 -140,0 -140,0 -152,25 -8,19 -8,31 0,50 12,25 12,25 152,25 140,0 140,0 152,-25 z M 482,573 C 542,514 590,459 590,450 590,431 380,220 360,220 c -19,0 -230,210 -230,230 0,19 210,230 230,230 8,0 63,-48 122,-107 z"
              id="path61399"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 260,545 -95,-95 98,-98 97,-97 97,97 98,98 -95,95 c -52,52 -97,95 -100,95 -3,0 -48,-43 -100,-95 z m 120,-55 c 0,-83 -1,-90 -20,-90 -19,0 -20,7 -20,90 0,83 1,90 20,90 19,0 20,-7 20,-90 z m -3,-121 c 15,-15 5,-39 -17,-39 -22,0 -32,24 -17,39 6,6 14,11 17,11 3,0 11,-5 17,-11 z"
              id="path61401"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
            <path
              d="m 44,975 c -13,-33 4,-45 59,-45 58,0 82,15 71,44 -9,22 -122,23 -130,1 z"
              id="path61403"
              style={{ fill: "#2a569a", fillOpacity: 1 }}
            />
          </g>
          <path
            id="rect56164"
            style={{
              fill: "none",
              fillOpacity: 1,
              opacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i903 === 1 ? "" : "none"
            }}
            d="M 411.87171 223.35825 L 428.15479 223.35825 L 428.15479 251.46784 "
            inkscape:label="Контур предохладителя - 4"
          />
          <path
            id="path85619"
            style={{
              fill: "none",
              fillOpacity: 1,
              opacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i903 === 1 ? "" : "none"
            }}
            d="M 387.5887 251.46588 L 387.58871 223.35825 L 387.58871 223.35825 L 403.87177 223.35824 "
            inkscape:label="Контур предохладителя - 3"
          />
          <path
            id="path85042"
            style={{
              fill: "none",
              fillOpacity: 1,
              opacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i903 === 1 ? "" : "none"
            }}
            d="M 403.87177 287.57747 L 387.58871 287.57748 L 387.58871 259.46594 "
            inkscape:label="Контур предохладителя - 2"
          />
          <path
            id="path85582"
            style={{
              fill: "none",
              fillOpacity: 1,
              opacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i903 === 1 ? "" : "none"
            }}
            d="M 428.15479 259.46789 L 428.15479 287.57748 L 411.8717 287.57747 "
            inkscape:label="Контур предохладителя - 1"
          />
          <g style={{ display: configurator.i906 === 1 ? "" : "none", }} id="g3954" shapeRendering="geometricPrecision" inkscape:label="Фильтр-2">
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99988",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect141295-0"
              width="22.000118"
              height="22.000118"
              x="616.55304"
              y="-106.6491"
              transform="rotate(45)"
            />
            <path
              style={{
                opacity: 1,
                fill: "#b38d68",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 495.82471,376.11296 h 31.11286"
              id="path141341"
            />
          </g>
          <g id="g3950" shapeRendering="geometricPrecision" inkscape:label="Фильтр-1">
            <rect
              style={{
                opacity: 1,
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99988",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect141295"
              width="22.000118"
              height="22.000118"
              x="584.56274"
              y="-74.917442"
              transform="rotate(45)"
            />
            <path
              style={{
                opacity: 1,
                fill: "#b38d68",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 450.76648,375.93008 h 31.11286"
              id="path141343"
            />
          </g>
          <g
            id="g37447-1"
            inkscape:label="створка-вход-прямо-октрыто"
            style={{
              opacity: allState.i28 === 0 ? 0 : 1,
              fill: "none",
              fillOpacity: 1,
              strokeWidth: 2,
              strokeDasharray: "none"
            }}
            transform="rotate(-90,500.79154,193.81737)"
          >
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "2.00007",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect31786-2"
              width="9.9999342"
              height="53.999931"
              x="-499.51828"
              y="148.42613"
              transform="scale(-1,1)"
            />
            <ellipse
              shapeRendering="geometricPrecision"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path30280-3"
              cx="494.35669"
              cy="206.20995"
              rx="5.4999719"
              ry="5.4999733"
            />
          </g >
          <g
            id="g37447-1-7"
            inkscape:label="Створка-выход-прямо-открыто"
            style={{
              opacity: allState.i30 === 0 ? 0 : 1,
              fill: "none",
              fillOpacity: 1,
              strokeWidth: 2,
              strokeDasharray: "none"
            }}
            transform="matrix(0,-1,-1,0,952.57085,694.60891)"
          >
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "2.00007",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect31786-2-9"
              width="9.9999342"
              height="53.999931"
              x="-499.51828"
              y="148.42613"
              transform="scale(-1,1)"
            />
            <ellipse
              shapeRendering="geometricPrecision"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path30280-3-5"
              cx="494.35669"
              cy="206.20995"
              rx="5.4999719"
              ry="5.4999733"
            />
          </g >
          <g
            id="g148345"
            shapeRendering="geometricPrecision"
            inkscape:label="Лоток для корма"
            transform="translate(191.7031,3.133342)"
          >
            <path
              style={{
                opacity: allState.i22 === 0 ? 1 : 0,
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 467.60599,76.450066 -10.74219,15.03905 -39.45312,-0.1953 -9.96094,-14.64845 z"
              id="path40933"
            />
            <path
              style={{
                opacity: allState.i22 === 0 ? 1 : 0,
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "4.007",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 407.41845,76.547716 h 60.21882"
              id="path148050"
            />
          </g><g
            id="g148345-8"
            inkscape:label="Лоток для корма опрокинутый"
            shapeRendering="geometricPrecision"
            transform="translate(250.17359,16.519152)"
            style={{ fill: "none", fillOpacity: 1 }}
          >
            <path
              style={{
                opacity: allState.i22 === 0 ? 0 : 1,
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: 2,
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 374.8104,35.466328 15.03905,10.74219 -0.1953,39.453117 -14.64845,9.96094 z"
              id="path40933-9"
            >
            </path>
            <path
              style={{
                opacity: allState.i22 === 0 ? 0 : 1,
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "4.007",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="M 374.90805,35.43504 V 95.653862"
              id="path148050-5"
            />
          </g >
          <path
            id="rect63402-7-8-8-0-5-9-5"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00011",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 209.96568 -164.95192 L 210.96568 -164.95192 L 210.96568 -181.95192 L 210.96568 -198.95192 L 210.96568 -215.62379 L 224.78794 -215.62379 L 241.78794 -215.62379 L 258.78794 -215.62379 L 275.78599 -215.62379 L 278.65904 -215.62379 L 278.65904 -210.07301 L 278.6649 -210.07301 L 278.6649 -193.07692 L 278.6649 -176.07887 L 278.6649 -159.07887 L 279.66489 -159.07887 "
            transform="rotate(90)"
            inkscape:label="Стенка трубы от молокоотборника - 2"
          />
          <path
            id="path83933"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00011",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            inkscape:label="Стенка трубы от молокоотборника"
            d="M 201.96568 -164.95192 L 201.96568 -164.95192 "
            transform="rotate(90)"
          />
          <path
            id="path3555"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00011",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            inkscape:label="Стенка трубы от молокоотборника"
            d="M 287.6649 -159.07887 L 288.6649 -159.07887 L 288.6649 -176.07887 L 288.6649 -193.07692 L 288.6649 -210.07301 L 288.6688 -210.07301 L 288.6688 -215.62379 L 292.78599 -215.62379 L 309.78599 -215.62379 L 309.78599 -225.62379 L 292.78599 -225.62379 L 275.78599 -225.62379 L 258.78794 -225.62379 L 241.78794 -225.62379 L 224.78794 -225.62379 L 207.78794 -225.62379 L 200.96568 -225.62379 L 200.96568 -215.95192 L 200.96568 -198.95192 L 200.96568 -181.95192 L 200.96568 -164.95192 L 200.96568 -164.95192 L 201.96568 -164.95192 "
            transform="rotate(90)"
          />
          <path
            id="rect67498"
            style={{
              opacity: 1,
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00005",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 110.81055 287.66402 L 110.81055 288.66402 L 71.469497 288.66402 L 71.469497 278.66406 L 71.469497 278.66406 L 72.469476 278.66406 "
            inkscape:label="Стенка трубы от руки - 2"
          />
          <path
            id="path78915"
            style={{
              opacity: 1,
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00005",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 80.469327 278.66406 L 110.81055 278.66406 L 110.81055 279.66405 "
            inkscape:label="Стенка трубы от руки "
          />
          <path
            id="path95672"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00011",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              display: configurator.i905 === 1 ? "" : "none",
              strokeOpacity: 1
            }}
            d="m 686.28682,485.85578 -1e-5,5.95702 H 610.98212 493.31415 v -20.64258 h -10 v 30.62696 0.008 h 127.66797 v 0.002 h 75.30469 10 v -9.99414 -5.95703"
            inkscape:label="Труба к буферному танкеру"
          />
          <path
            id="rect71408-7"
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
            d="M 130.94429 278.66408 L 129.94429 278.66408 L 129.94429 271.66418 L 129.94429 271.66418 L 139.94429 271.66418 L 139.94429 278.66408 L 138.94429 278.66407 "
            inkscape:label="Труба от молокоотборника"
          />
          <rect
            style={{
              fill: "#14dbca",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: "1.68655",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect71459-2-4"
            width={8}
            height={8}
            x="-93.689453"
            y="223.96568"
          />
          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8"
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
            d="m 264.12857,28.921446 v 1.0195 h -9.98984 V 19.7281 h 9.98984 v 0 l 1,-0.0028"
            inkscape:label="Отвод горячей воды верхний"
            sodipodi:nodetypes="ccccccc"
          />
          <path
            id="rect32906"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.99955",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            inkscape:label="Труба через предохладитель"
            d="M 368.74293 250.46177 L 368.74293 260.46372 L 387.54957 260.46372 L 387.54957 260.46763 L 428.14528 260.46763 L 446.95192 260.46763 L 446.95192 250.46763 L 428.14528 250.46763 L 428.14528 250.46177 L 387.54957 250.46177 L 368.74293 250.46177 z "
          />
          <path
            id="rect25244-7-5"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "2.00038",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i903 === 1 ? "" : "none"
            }}
            inkscape:label="Труба от предохладителя"
            d="M 287.57701 -403.87184 L 287.57701 -402.87184 L 287.57701 -402.87184 L 292.78599 -402.87184 L 304.57701 -402.87184 L 309.78599 -402.87184 L 309.78599 -412.87184 L 304.57701 -412.87184 L 292.78599 -412.87184 L 287.57701 -412.87184 L 287.577 -411.87183 "
            transform="rotate(90)"
          />
          <path
            id="rect85125"
            style={{
              opacity: 1,
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 534.14332 324.12193 L 534.14332 334.12193 L 534.14332 446.88365 L 506.23903 446.88365 L 506.23903 456.88365 L 534.14332 456.88365 L 544.10426 456.88365 L 544.10426 446.88365 L 544.10426 334.12193 L 564.77028 334.12193 L 564.77028 324.12193 L 534.14332 324.12193 z "
            inkscape:label="Труба к гланому танкеру"
          />
          <g
            id="g18633-5-2"
            inkscape:label="Клапан 101"
            className="klapan"
            transform="translate(164.95249,-274.56536)"
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
              id="path18623-4-5"
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
              id="rect18625-2-5"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-9"
              transform="translate(-28.36668,-61.96896)"
              style={{ fillOpacity: allState.i56 === 0 ? 1 : 0 }}
              inkscape:label="Левый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-61"
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
                id="path87150-6"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-3"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i56 === 0 ? 1 : 0,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-9"
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
                id="path87150-4-0"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="56"
              className='Valve'
              width="44.418091"
              height="26.416264"
              x="212.93768"
              y="9.3094597"
              onClick={(e) => valvePopupOpen(true, e)}
              transform="translate(-164.95249,274.56536)"
              inkscape:label="Маска клапана 56"
            ></rect>
          </g >
          <g
            id="g18633-5-26"
            inkscape:label="Клапан 102"
            className="klapan"
            transform="translate(164.95249,-231.72404)"
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
              id="path18623-4-8"
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
              id="rect18625-2-7"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-4"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i57 === 0 ? 1 : 0 }}
              inkscape:label="Левый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-2"
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
                id="path87150-8"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-5"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i57 === 0 ? 1 : 0,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-1"
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
                id="path87150-4-9"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="57"
              className='Valve'
              width="40.700638"
              height="29.298517"
              x="214.43768"
              y="49.358875"
              onClick={(e) => valvePopupOpen(true, e)}
              transform="translate(-164.95249,231.72404)"
              inkscape:label="Маска клапана 57"
            ></rect>
          </g >
          <g
            id="g18633-5-21"
            inkscape:label="Клапан 103"
            className="klapan"
            transform="translate(164.9361,-184.19598)"
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
              id="path18623-4-89"
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
              id="rect18625-2-2"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-2"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i45 === 0 ? 1 : 0 }}
              inkscape:label="Левый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-4"
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
                id="path87150-7"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-0"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i45 === 0 ? 1 : 0,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-91"
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
                id="path87150-4-3"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="45"
              className='Valve'
              onClick={(e) => valvePopupOpen(true, e)}
              width="41.235229"
              height="27.332329"
              x="213.8867"
              y="99.678841"
              transform="translate(-164.9361,184.19598)"
              inkscape:label="Маска клапана 45"
            ></rect>
          </g >
          <g
            id="g18633-5-1"
            inkscape:label="Клапан 106"
            className="klapan"
            transform="translate(18.574921,76.459165)"
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
              id="path18623-4-4"
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
              id="rect18625-2-52"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-3"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i47 === 0 ? 1 : 0 }}
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
                id="path87148-25"
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
                id="path87150-5"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-08"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i47 === 0 ? 1 : 0,
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
                id="path87148-6-8"
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
                id="path87150-4-1"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                strokeWidth: 0,
                strokeDasharray: "none",
                opacity: "0",
                stroke: "#729fcf",
                strokeLinecap: "round"
              }}
              id="47"
              className='Valve'
              onClick={(e) => valvePopupOpen(true, e)}
              width="42.99926"
              height="24.625854"
              x="66.811295"
              y="363.53723"
              transform="translate(-18.574921,-76.459165)"
              inkscape:label="Маска клапана 47"
            ></rect>
          </g >
          <g
            id="g18633-5-8"
            inkscape:label="Клапан 107"
            className="klapan"
            transform="translate(96.49602,84.46724)"
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
              id="path18623-4-0"
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
              id="rect18625-2-74"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-0"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i16 === 0 ? 1 : 0 }}
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
                id="path87148-5"
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
                id="path87150-3"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-59"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i16 === 0 ? 1 : 0,
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
                id="path87148-6-10"
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
                id="path87150-4-2"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="16"
              className='Valve'
              width="42.5"
              onClick={(e) => valvePopupOpen(true, e)}
              height="27.478249"
              x="145.31129"
              y="370.12357"
              transform="translate(-96.49602,-84.46724)"
              inkscape:label="Маска клапана 16"
            ></rect>
          </g >
          <g
            id="g18633-5-7-0"
            inkscape:label="Клапан 108-1"
            className="klapan"
            transform="matrix(0,1,1,0,-96.212538,408.91407)"
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
              id="path18623-4-6-1"
            ></path>
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
              id="rect18625-2-4-3"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            ></rect>
            <g
              id="g87158-20-0"
              transform="translate(-28.36668,-61.96896)"
              style={{ fillOpacity: allState.i18 === 0 ? 1 : 0 }}
              inkscape:label="Левый"
            >
              <path
                style={{

                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-29-0"
                className="klapan-tr klapan-black"
                shapeRendering="geometricPrecision"
                inkscape:label="Угол"
              ></path>
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
                id="path87150-52-5"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-1-4"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fillOpacity: allState.i18 === 0 ? 1 : 0,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-3-7"
                inkscape:label="Угол"
                className="klapan-tr klapan-black"
                shapeRendering="geometricPrecision"
              ></path>
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
                id="path87150-4-6-8"
                inkscape:label="Основание"
              />
            </g >
            <rect
              style={{
                opacity: "0",
                fill: "#729fcf",
                fillOpacity: 1,
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="18"
              className='Valve'
              onClick={(e) => valvePopupOpen(true, e)}
              width="31.75"
              height="42.875"
              x="241.68629"
              y="431.10434"
              transform="rotate(-90,85.34389,467.74982)"
              inkscape:label="Маска клапана 18"
            />
          </g >



          <g
            id="g18633-5-7"
            inkscape:label="Клапан 108-2"
            transform="matrix(0,1,1,0,-45.79262,408.99025)"
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
              id="path18623-4-6"
            ></path>
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
              id="rect18625-2-4"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            ></rect>
            <g
              id="g87158-20"
              transform="translate(-28.36668,-61.96896)"
              style={{ fillOpacity: allState.i18 === 0 ? 1 : 0, }}
              inkscape:label="Левый"
            >
              <path
                style={{

                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-29"
                className="klapan-tr klapan-black"
                shapeRendering="geometricPrecision"
                inkscape:label="Угол"
              ></path>
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
                id="path87150-52"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-1"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none",
                fillOpacity: allState.i18 === 0 ? 1 : 0,
              }}
              inkscape:label="Правый"
            >
              <path
                style={{

                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-3"
                inkscape:label="Угол"
                className="klapan-tr klapan-black"
                shapeRendering="geometricPrecision"
              ></path>
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
                id="path87150-4-6"
                inkscape:label="Основание"
              />
            </g >
            <rect
              style={{
                opacity: "0",
                fill: "#729fcf",
                fillOpacity: 1,
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="18"
              className='Valve'
              onClick={(e) => valvePopupOpen(true, e)}
              width="31.75"
              height="42.875"
              x="241.68629"
              y="431.10434"
              transform="rotate(-90,85.34389,467.74982)"
              inkscape:label="Маска клапана 18"
            />
          </g >



          <g
            id="g18633-5-5"
            inkscape:label="Клапан 110"
            className="klapan"
            transform="rotate(90,154.41348,414.1344)"
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
              id="path18623-4-58"
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
              id="rect18625-2-58"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-6"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i40 === 0 ? 1 : 0 }}
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
                id="path87148-1"
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
                id="path87150-0"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-8"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i40 === 0 ? 1 : 0,
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
                id="path87148-6-84"
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
                id="path87150-4-68"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="40"
              className='Valve'
              onClick={(e) => valvePopupOpen(true, e)}
              width="24.375"
              height="40.700642"
              x="256.81128"
              y="309.20612"
              transform="rotate(-90,154.41348,414.1344)"
              inkscape:label="Маска клапана 40"
            ></rect>
          </g >
          <g
            id="g18633-5-56"
            inkscape:label="Клапан 109"
            className="klapan"
            transform="rotate(-90,160.09786,238.87396)"
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
              id="path18623-4-06"
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
              id="rect18625-2-29"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-30"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i15 === 0 ? 1 : 0 }}
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
                id="path87148-7"
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
                id="path87150-88"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-53"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i15 === 0 ? 1 : 0,
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
                id="path87148-6-33"
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
                id="path87150-4-05"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="15"
              className='Valve'
              onClick={(e) => valvePopupOpen(true, e)}
              width="28.199305"
              height="39.700642"
              x="202.30682"
              y="308.78598"
              transform="rotate(90,160.09786,238.87396)"
              inkscape:label="Маска клапана 15"
            ></rect>
          </g >
          <g
            id="g18633-5-84"
            inkscape:label="Клапан 111"
            className="klapan"
            transform="rotate(90,295.04941,412.22221)"
            style={{
              fill: "none",
              fillOpacity: 1,
              strokeWidth: 2,
              strokeDasharray: "none",
              display: configurator.i903 === 1 ? "" : "none"
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
              id="path18623-4-2"
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
              id="rect18625-2-42"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-64"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i58 === 0 ? 1 : 0 }}
              inkscape:label="Левый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-51"
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
                id="path87150-65"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-7"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i58 === 0 ? 1 : 0,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-338"
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
                id="path87150-4-18"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="58"
              className='Valve'
              onClick={(e) => valvePopupOpen(true, e)}
              width="28.199305"
              height="39.700638"
              x="397.98938"
              y="167.65799"
              transform="rotate(-90,295.04941,412.22221)"
              inkscape:label="Маска клапана 58"
            ></rect>
          </g >


          <g id="g31487" inkscape:label="Один корм"
            style={{ display: configurator.i902 === 1 ? "" : "none" }}
          >
            <path
              style={{
                opacity: 1,
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.66248",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 642.79217,50.826575 16.74825,22.649994"
              id="path148410"
              shapeRendering="geometricPrecision"
              inkscape:label="Ограничитель потока корма"
            ></path>
            <path
              style={{
                opacity: 1,
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.6581",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="M 615.69185,50.824383 598.98189,73.478761"
              id="path148412"
              shapeRendering="geometricPrecision"
              inkscape:label="Ограничитель потока корма"
            ></path>
            <g
              id="g18633-5-84-2"
              inkscape:label="Клапан подачи корма 113"
              className="klapan"
              transform="rotate(90,485.91361,442.75004)"
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
                id="path18623-4-2-5"
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
                id="rect18625-2-42-4"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              />
              <g
                id="g87158-64-4"
                transform="translate(-28.36668,-61.96896)"
                style={{ fillOpacity: allState.i24 === 0 ? 1 : 0 }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-51-2"
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
                  id="path87150-65-9"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-7-3"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: allState.i24 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-338-1"
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
                  id="path87150-4-18-4"
                  inkscape:label="Основание"
                />
              </g><rect
                style={{
                  fill: "#729fcf",
                  fillOpacity: 1,
                  opacity: "0",
                  stroke: "#729fcf",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="24"
                className='Valve'
                onClick={(e) => valvePopupOpen(true, e)}
                width="28.199305"
                height="39.700638"
                x="619.38141"
                y="7.32162"
                transform="rotate(-90,485.91361,442.75004)"
                inkscape:label="Маска клапана 24"
              ></rect>
            </g >

          </g >

          <g id="g31487" inkscape:label="Два корма"
            style={{ display: configurator.i902 === 2 ? "" : "none" }}
          >
            <path
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.66248",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 660.34576,48.066702 0.0798,28.169482"
              shapeRendering="geometricPrecision"
              id="path148410-8"
              inkscape:label="Ограничитель потока корма"
            ></path>
            <path
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.6581",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 597.97165,48.088042 -0.049,28.150332"
              shapeRendering="geometricPrecision"
              id="path148412-5"
              inkscape:label="Ограничитель потока корма"
            ></path>
            <g
              id="g18633-5-84-2-9"
              inkscape:label="Клапан подачи корма  5"
              transform="rotate(90,478.40426,432.84402)"
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
                id="path18623-4-2-5-0"
              ></path>
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
                id="rect18625-2-42-4-4"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              ></rect>
              <g
                id="g87158-64-4-7"
                transform="translate(-28.36668,-61.96896)"
                style={{ fillOpacity: allState.i24 === 0 ? 1 : 0 }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-51-2-9"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                ></path>
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
                  id="path87150-65-9-2"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-7-3-9"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: allState.i24 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-338-1-5"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                ></path>
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
                  id="path87150-4-18-4-03"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#729fcf",
                  fillOpacity: 1,
                  stroke: "#729fcf",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="24"
                className='Valve'
                onClick={(e) => valvePopupOpen(true, e)}
                width="28.199305"
                height="39.700638"
                x="619.38141"
                y="7.32162"
                transform="rotate(-90,485.91361,442.75004)"
                inkscape:label="Маска клапана 24"
              />
            </g>


            <g
              id="g18633-5-84-2-3"
              inkscape:label="Клапан подачи корма  171"
              transform="rotate(90,495.24685,449.68661)"
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
                id="path18623-4-2-5-7"
              ></path>
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
                id="rect18625-2-42-4-3"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              ></rect>
              <g
                id="g87158-64-4-8"
                transform="translate(-28.36668,-61.96896)"
                style={{ fillOpacity: allState.i25 === 0 ? 1 : 0, }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-51-2-5"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                ></path>
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
                  id="path87150-65-9-4"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-7-3-6"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{
                    fillOpacity: allState.i25 === 0 ? 1 : 0,
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-338-1-4"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                ></path>
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
                  id="path87150-4-18-4-0"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#729fcf",
                  fillOpacity: 1,
                  stroke: "#729fcf",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="25"
                className='Valve'
                onClick={(e) => valvePopupOpen(true, e)}
                width="28.199305"
                height="39.700638"
                x="619.38141"
                y="7.32162"
                transform="rotate(-90,485.91361,442.75004)"
                inkscape:label="Маска клапана 25"
              />
            </g>

          </g>

          <g id="g31487" inkscape:label="Три корма"
            style={{ display: configurator.i902 === 3 ? "" : "none" }}
          >
            <path
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.66248",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 670.37381,49.896243 -2.92421,9.64637 -5.24793,17.311784"
              id="path148410-8-7"
              inkscape:label="Ограничитель потока корма"
              sodipodi:nodetypes="ccc"
              shapeRendering="geometricPrecision"
            ></path>

            <path
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.6581",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 588.2996,49.855672 7.9894,26.992836"
              id="path148412-5-3"
              inkscape:label="Ограничитель потока корма"
              shapeRendering="geometricPrecision"
            />

            <g
              id="g18633-5-84-2-9-5"
              inkscape:label="Клапан подачи корма  171"
              transform="rotate(90,487.32284,441.57088)"
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
                id="path18623-4-2-5-0-7"
              ></path>
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
                id="rect18625-2-42-4-4-6"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              ></rect>
              <g
                id="g87158-64-4-7-2"
                transform="translate(-28.36668,-61.96896)"
                style={{ fillOpacity: allState.i25 === 0 ? 1 : 0 }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-51-2-9-8"
                  inkscape:label="Угол"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                ></path>
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
                  id="path87150-65-9-2-3"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-7-3-9-1"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: allState.i25 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-338-1-5-2"
                  inkscape:label="Угол"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                ></path>
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
                  id="path87150-4-18-4-03-7"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#729fcf",
                  fillOpacity: 1,
                  stroke: "#729fcf",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="25"
                className='Valve'
                onClick={(e) => valvePopupOpen(true, e)}
                width="28.199305"
                height="39.700638"
                x="619.38141"
                y="7.32162"
                transform="rotate(-90,485.91361,442.75004)"
                inkscape:label="Маска клапана 25"
              />
            </g>

            <g
              id="g18633-5-84-2-9-5-3"
              inkscape:label="Клапан подачи корма  175"
              transform="rotate(90,501.92691,456.17495)"
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
                id="path18623-4-2-5-0-7-7"
              ></path>
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
                id="rect18625-2-42-4-4-6-5"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              ></rect>
              <g
                id="g87158-64-4-7-2-5"
                transform="translate(-28.36668,-61.96896)"
                style={{ fillOpacity: allState.i27 === 0 ? 1 : 0 }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-51-2-9-8-2"
                  shapeRendering="geometricPrecision"
                  className="klapan-tr klapan-black"
                  inkscape:label="Угол"
                ></path>
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
                  id="path87150-65-9-2-3-8"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-7-3-9-1-3"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: allState.i27 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-338-1-5-2-9"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                  inkscape:label="Угол"
                ></path>
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
                  id="path87150-4-18-4-03-7-5"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#729fcf",
                  fillOpacity: 1,
                  stroke: "#729fcf",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="27"
                className='Valve'
                onClick={(e) => valvePopupOpen(true, e)}
                width="28.199305"
                height="39.700638"
                x="619.38141"
                y="7.32162"
                transform="rotate(-90,485.91361,442.75004)"
                inkscape:label="Маска клапана 27"
              />
            </g>

            <g
              id="g18633-5-84-2-9-5-30"
              inkscape:label="Клапан подачи корма 5"
              transform="rotate(90,472.71877,426.96681)"
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
                id="path18623-4-2-5-0-7-4"
              ></path>
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
                id="rect18625-2-42-4-4-6-9"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              ></rect>
              <g
                id="g87158-64-4-7-2-9"
                transform="translate(-28.36668,-61.96896)"
                style={{ fillOpacity: allState.i24 === 0 ? 1 : 0 }}
                inkscape:label="Левый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-51-2-9-8-7"
                  inkscape:label="Угол"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                ></path>
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
                  id="path87150-65-9-2-3-6"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-7-3-9-1-9"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: allState.i24 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-338-1-5-2-3"
                  inkscape:label="Угол"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                ></path>
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
                  id="path87150-4-18-4-03-7-6"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#729fcf",
                  fillOpacity: 1,
                  stroke: "#729fcf",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="24"
                className='Valve'
                onClick={(e) => valvePopupOpen(true, e)}
                width="28.199305"
                height="39.700638"
                x="619.38141"
                y="7.32162"
                transform="rotate(-90,485.91361,442.75004)"
                inkscape:label="Маска клапана 24"
              />
            </g>


          </g>


          <g id="g31487" inkscape:label="Четыре корма"
            style={{ display: configurator.i902 === 4 ? "" : "none" }}
          >
            <path
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.66248",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 678.64783,49.678062 -5.32123,8.560837 -9.54973,15.363635"
              id="path148410-8-7-4"
              inkscape:label="Ограничитель потока корма"
              shapeRendering="geometricPrecision"
              sodipodi:nodetypes="ccc"
            ></path>

            <path
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.6581",
                strokeLinecap: "round",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 579.44404,49.599456 14.70342,24.005268"
              id="path148412-5-3-0"
              inkscape:label="Ограничитель потока корма"
              shapeRendering="geometricPrecision"
            ></path>


            <g
              id="g18633-5-84-2-9-5-30-5"
              inkscape:label="Клапан подачи корма  113"
              transform="rotate(90,468.58324,423.52141)"
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
                id="path18623-4-2-5-0-7-4-8"
              ></path>
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
                id="rect18625-2-42-4-4-6-9-3"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              ></rect>
              <g
                id="g87158-64-4-7-2-9-3"
                transform="translate(-28.36668,-61.96896)"
                style={{ fillOpacity: allState.i24 === 0 ? 1 : 0 }}
                inkscape:label="Левый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-51-2-9-8-7-6"
                  inkscape:label="Угол"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                ></path>
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
                  id="path87150-65-9-2-3-6-3"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-7-3-9-1-9-9"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: allState.i24 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-338-1-5-2-3-0"
                  inkscape:label="Угол"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                ></path>
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
                  id="path87150-4-18-4-03-7-6-1"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#729fcf",
                  fillOpacity: 1,
                  stroke: "#729fcf",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="24"
                className='Valve'
                onClick={(e) => valvePopupOpen(true, e)}
                width="28.199305"
                height="39.700638"
                x="619.38141"
                y="7.32162"
                transform="rotate(-90,485.91361,442.75004)"
                inkscape:label="Маска клапана 24"
              />
            </g>

            <g
              id="g18633-5-84-2-9-5-30-5-4"
              inkscape:label="Клапан подачи корма  179"
              transform="rotate(90,505.06318,460.00135)"
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
                id="path18623-4-2-5-0-7-4-8-5"
              ></path>
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
                id="rect18625-2-42-4-4-6-9-3-3"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              ></rect>
              <g
                id="g87158-64-4-7-2-9-3-5"
                transform="translate(-28.36668,-61.96896)"
                style={{ fillOpacity: allState.i26 === 0 ? 1 : 0 }}
                inkscape:label="Левый"
              >
                <path
                  style={{
                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-51-2-9-8-7-6-3"
                  inkscape:label="Угол"
                  shapeRendering="geometricPrecision"
                  className="klapan-tr klapan-black"
                ></path>
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
                  id="path87150-65-9-2-3-6-3-1"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-7-3-9-1-9-9-1"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: allState.i26 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-338-1-5-2-3-0-6"
                  inkscape:label="Угол"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                ></path>
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
                  id="path87150-4-18-4-03-7-6-1-9"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#729fcf",
                  fillOpacity: 1,
                  stroke: "#729fcf",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="26"
                className='Valve'
                onClick={(e) => valvePopupOpen(true, e)}
                width="28.199305"
                height="39.700638"
                x="619.38141"
                y="7.32162"
                transform="rotate(-90,485.91361,442.75004)"
                inkscape:label="Маска клапана 26"
              />
            </g>

            <g
              id="g18633-5-84-2-9-5-30-5-6"
              inkscape:label="Клапан подачи корма  175"
              transform="rotate(90,492.9032,447.84137)"
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
                id="path18623-4-2-5-0-7-4-8-7"
              ></path>
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
                id="rect18625-2-42-4-4-6-9-3-1"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              ></rect>
              <g
                id="g87158-64-4-7-2-9-3-2"
                transform="translate(-28.36668,-61.96896)"
                style={{ fillOpacity: allState.i27 === 0 ? 1 : 0 }}
                inkscape:label="Левый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-51-2-9-8-7-6-6"
                  inkscape:label="Угол"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                ></path>
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
                  id="path87150-65-9-2-3-6-3-8"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-7-3-9-1-9-9-0"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: allState.i27 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-338-1-5-2-3-0-1"
                  inkscape:label="Угол"
                  shapeRendering="geometricPrecision"
                  className="klapan-tr klapan-black"
                ></path>
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
                  id="path87150-4-18-4-03-7-6-1-6"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#729fcf",
                  fillOpacity: 1,
                  stroke: "#729fcf",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="27"
                className='Valve'
                onClick={(e) => valvePopupOpen(true, e)}
                width="28.199305"
                height="39.700638"
                x="619.38141"
                y="7.32162"
                transform="rotate(-90,485.91361,442.75004)"
                inkscape:label="Маска клапана 27"
              />
            </g>


            <g
              id="g18633-5-84-2-9-5-30-5-0"
              inkscape:label="Клапан подачи корма  171"
              transform="rotate(90,480.74322,435.68139)"
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
                id="path18623-4-2-5-0-7-4-8-0"
              ></path>
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
                id="rect18625-2-42-4-4-6-9-3-2"
                width="9.7764111"
                height="7.7764153"
                x="65.064125"
                y="282.08292"
              ></rect>
              <g
                id="g87158-64-4-7-2-9-3-4"
                transform="translate(-28.36668,-61.96896)"
                style={{ fillOpacity: allState.i25 === 0 ? 1 : 0 }}
                inkscape:label="Левый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-51-2-9-8-7-6-7"
                  inkscape:label="Угол"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                ></path>
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
                  id="path87150-65-9-2-3-6-3-3"
                  inkscape:label="Основание"
                />
              </g>
              <g
                id="g87158-7-7-3-9-1-9-9-7"
                transform="matrix(-1,0,0,1,168.0377,-61.960097)"
                style={{
                  fill: "#ffffff",
                  fillOpacity: allState.i25 === 0 ? 1 : 0,
                  strokeWidth: 2,
                  strokeDasharray: "none"
                }}
                inkscape:label="Правый"
              >
                <path
                  style={{

                    stroke: "#000000",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "miter",
                    strokeDasharray: "none",
                    strokeOpacity: 1
                  }}
                  d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                  id="path87148-6-338-1-5-2-3-0-2"
                  inkscape:label="Угол"
                  className="klapan-tr klapan-black"
                  shapeRendering="geometricPrecision"
                ></path>
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
                  id="path87150-4-18-4-03-7-6-1-2"
                  inkscape:label="Основание"
                />
              </g>
              <rect
                style={{
                  opacity: "0",
                  fill: "#729fcf",
                  fillOpacity: 1,
                  stroke: "#729fcf",
                  strokeWidth: 0,
                  strokeLinecap: "round"
                }}
                id="25"
                className='Valve'
                onClick={(e) => valvePopupOpen(true, e)}
                width="28.199305"
                height="39.700638"
                x="619.38141"
                y="7.32162"
                transform="rotate(-90,485.91361,442.75004)"
                inkscape:label="Маска клапана 25"
              />

            </g>


          </g>

          <g
            id="g18633-5-9"
            inkscape:label="Клапан 105"
            className="klapan"
            transform="rotate(-90,78.851774,243.29974)"
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
              id="path18623-4-61"
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
              id="rect18625-2-8"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-5"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i20 === 0 ? 1 : 0 }}
              inkscape:label="Левый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-79"
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
                id="path87150-37"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-50"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i20 === 0 ? 1 : 0,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-17"
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
                id="path87150-4-7"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="20"
              className='Valve'
              onClick={(e) => valvePopupOpen(true, e)}
              width="24.788681"
              height="40.700638"
              x="122.55379"
              y="231.96568"
              transform="rotate(90,78.851774,243.29974)"
              inkscape:label="Маска клапана 20"
            ></rect>
          </g >
          <path
            id="rect37445"
            style={{
              fill: "#2a569a",
              fillOpacity: !fill625 && allState.i42 === 1 ? 1 : 0,
              stroke: "#000000",
              strokeWidth: "2.004",
              strokeLinecap: "square",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="m 309.4441,422.78794 h 0.002 v -5.42383 -9.85546 -5.42383 h -10 v 0 5.42383 h -19.86328 -9.91797 v 9.85546 11.16797 h -11.10743 -9.91796 v 9.91797 21.02539 h 9.91796 v -21.02539 h 21.0254 v -9.91797 -11.16797 h 19.86328 v 5.42383 0"
            sodipodi:nodetypes="cccccccccccccccccccccccc"
            inkscape:label="Развилка перед распределителем"
          ></path >
          <g
            id="g18633-5-79"
            inkscape:label="Клапан-3 118"
            transform="translate(514.28303,29.729415)"
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
              id="path18623-4-82"
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
              id="rect18625-2-54"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-42"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: 0 }}
              inkscape:label="Левый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-52"
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
                id="path87150-54"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-36"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i36 === 0 ? 1 : 0,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-39"
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
                id="path87150-4-76"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-36-3"
              transform="matrix(0,-1,-1,0,431.31232,396.86688)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i36 === 0 ? 0 : 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Низ"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-39-7"
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
                id="path87150-4-76-8"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="36"
              className='Valve-3'
              onClick={(e) => valvePopupOpen(true, e)}
              width="40.70063"
              height="37.932091"
              x="563.76819"
              y="310.81232"
              transform="translate(-514.28303,-29.729415)"
              inkscape:label="Маска клапана 36"
            ></rect>
          </g >
          <g
            id="g18633-5-79-7"
            inkscape:label="Клапан-3 116"
            transform="translate(396.46531,-43.925213)"
            style={{
              fill: "none",
              display: configurator.i906 === 1 ? "" : "none",
              fillOpacity: 1,
              strokeWidth: 2,
              strokeDasharray: "none",
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
              id="path18623-4-82-7"
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
              id="rect18625-2-54-6"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-42-0"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: 0 }}
              inkscape:label="Левый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-52-2"
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
                id="path87150-54-3"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-36-6"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i37 === 0 ? 1 : 0,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-39-8"
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
                id="path87150-4-76-9"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-36-3-5"
              transform="matrix(0,-1,-1,0,431.31232,396.86688)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i37 === 0 ? 0 : 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Низ"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-39-7-4"
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
                id="path87150-4-76-8-1"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="37"
              className='Valve-3'
              onClick={(e) => valvePopupOpen(true, e)}
              width="40.70063"
              height="37.932091"
              x="445.9505"
              y="237.15771"
              transform="translate(-396.46531,43.925213)"
              inkscape:label="Маска клапана 37"
            ></rect>
          </g >
          <g
            id="g18633-5-79-9"
            inkscape:label="Клапан-3 115"
            transform="translate(279.5571,-43.937138)"
            style={{
              fill: "none",
              fillOpacity: 1,
              strokeWidth: 2,
              strokeDasharray: "none",
              display: configurator.i904 === 0 ? "" : "none"
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
              id="path18623-4-82-74"
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
              id="rect18625-2-54-9"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-42-5"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: 0 }}
              inkscape:label="Левый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-52-9"
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
                id="path87150-54-33"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-36-4"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i43 === 0 ? 1 : 0,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-39-1"
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
                id="path87150-4-76-7"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-36-3-7"
              transform="matrix(0,-1,-1,0,431.31232,396.86688)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i43 === 0 ? 0 : 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Низ"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-39-7-5"
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
                id="path87150-4-76-8-8"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="43"
              className='Valve-3'
              onClick={(e) => valvePopupOpen(true, e)}
              width="40.70063"
              height="37.932091"
              x="329.0423"
              y="237.14578"
              transform="translate(-279.5571,43.937138)"
              inkscape:label="Маска клапана 43"
            ></rect>
          </g >

          <g
            id="g18633-5-79-90"
            inkscape:label="Клапан-3 114"
            transform="rotate(90,144.9721,458.87168)"
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
              id="path18623-4-82-4"
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
              id="rect18625-2-54-8"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-42-7"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i42 === 0 ? 0 : 1 }}
              inkscape:label="Левый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-52-23"
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
                id="path87150-54-9"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-36-8"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  fill: allState.i42 === 1 ? "#ffffff" : "#000000",
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-39-9"
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
                id="path87150-4-76-6"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-36-3-57"
              transform="matrix(0,-1,-1,0,431.31232,396.86688)"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Низ"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-39-7-3"
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
                id="path87150-4-76-8-82"
                inkscape:label="Основание"
              />
            </g><rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="42"
              className='Valve-3-Left'
              onClick={(e) => valvePopupOpen(true, e)}
              width="37.932091"
              height="40.70063"
              x="284.82877"
              y="363.38477"
              transform="rotate(-90,144.9721,458.87168)"
              inkscape:label="Маска клапана 42"
            ></rect>
          </g >
          <g
            id="g18633-5-79-900"
            inkscape:label="Клапан-3 117"
            transform="rotate(-90,355.37965,166.45652)"
            style={{
              fill: "none",
              fillOpacity: 1,
              strokeWidth: 2,
              display: configurator.i905 === 1 ? "" : "none",
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
              id="path18623-4-82-0"
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
              id="rect18625-2-54-85"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-42-3"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i14 === 0 ? 1 : 0 }}
              inkscape:label="Левый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-52-0"
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
                id="path87150-54-1"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-36-66"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: 0,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Правый"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.851874,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-39-2"
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
                id="path87150-4-76-0"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-36-3-9"
              transform="matrix(0,-1,-1,0,431.31232,396.86688)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i14 === 0 ? 0 : 1,
                strokeWidth: 2,
                strokeDasharray: "none"
              }}
              inkscape:label="Низ"
            >
              <path
                style={{
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "miter",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 78.85187,351.46878 18.35882,9.8912 -18.35882,9.8912"
                id="path87148-6-39-7-0"
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
                id="path87150-4-76-8-5"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="14"
              className='Valve-3-Right'
              onClick={(e) => valvePopupOpen(true, e)}
              width="37.932095"
              height="40.700642"
              x="470.00604"
              y="431.65033"
              transform="rotate(90,355.37965,166.45652)"
              inkscape:label="Маска клапана 14"
            ></rect>
          </g >
          <g
            id="g18633-5-6"
            inkscape:label="Клапан 112"
            className="klapan"
            transform="rotate(90,223.98103,483.28183)"
            style={{
              display: configurator.i903 === 1 ? "" : "none",
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
              id="path18623-4-1"
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
              id="rect18625-2-9"
              width="9.7764111"
              height="7.7764153"
              x="65.064125"
              y="282.08292"
            />
            <g
              id="g87158-73"
              transform="translate(-28.36668,-61.96896)"
              style={{ fill: "#ffffff", fillOpacity: allState.i19 === 0 ? 1 : 0 }}
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
                id="path87148-3"
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
                id="path87150-30"
                inkscape:label="Основание"
              />
            </g>
            <g
              id="g87158-7-6"
              transform="matrix(-1,0,0,1,168.0377,-61.960097)"
              style={{
                fill: "#ffffff",
                fillOpacity: allState.i19 === 0 ? 1 : 0,
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
                id="path87148-6-7"
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
                id="path87150-4-94"
                inkscape:label="Основание"
              />
            </g > <rect
              style={{
                fill: "#729fcf",
                fillOpacity: 1,
                opacity: "0",
                stroke: "#729fcf",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="19"
              className='Valve'
              onClick={(e) => valvePopupOpen(true, e)}
              width="28.199305"
              height="39.700642"
              x="397.98062"
              y="309.78598"
              transform="rotate(-90,223.98103,483.28183)"
              inkscape:label="Маска клапана 19"
            ></rect>
          </g >
          <path
            id="rect32056"
            style={{
              display: configurator.i905 === 1 ? "" : "none",
              opacity: 1,
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeOpacity: 1
            }}
            d="M 687.28529 485.81845 L 681.78528 485.81844 C 670.56679 485.81844 661.53528 476.78693 661.53528 465.56844 L 661.53528 405.53891 C 661.53528 394.32042 670.56679 385.28891 681.78528 385.28891 L 681.78528 385.28891 L 700.78528 385.28891 C 712.00377 385.28891 721.03528 394.32042 721.03528 405.53891 L 721.03528 465.56844 C 721.03528 476.78693 712.00377 485.81844 700.78528 485.81844 L 695.2853 485.81846 "
            shapeRendering="geometricPrecision"
            inkscape:label="Буферный танкер"
          />
          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8-93"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.9997",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="m 580.2335,357.74471 h -0.99828 v -10.00029 h 10.0003 v 10.00029 0 h -1.00021"
            inkscape:label="Отвод к канализации перед главным танкером"
          />
          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8-0"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: "1.9997",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              display: configurator.i903 === 1 ? "" : "none"
            }}
            d="m 403.86111,358.48692 h -0.99828 v -10.00029 h 10.00029 v 10.00029 0 h -1.0002"
            inkscape:label="Отвод к канализации от предохладителя "
          />
          <path
            id="rect45418"
            style={{
              opacity: 1,
              fill: "none",
              fillOpacity: 1,
              stroke: "#000000",
              strokeWidth: 2,
              strokeLinecap: "butt",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            d="M 299.41338,250.43631 V 364.366 h 9.98633 V 260.46756 h 20.64258 v -10.02735 h -20.64258 v -0.004 z"
            inkscape:label="Труба к предохладителю"
          />
          <g
            id="g48637"
            inkscape:label="Забелители"
            style={{ fill: "#ffffff", fillOpacity: 1 }}
          >
            <rect
              style={{
                opacity: 1,
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "4.53778",
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect46313"
              width="4.5000243"
              height="11.5625"
              x="94.393181"
              y="163.94748"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "4.53778",
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect46313-9"
              width="4.5000243"
              height="11.5625"
              x="33.469482"
              y="163.87694"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "4.23725",
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect46313-6"
              width="3.9237101"
              height="11.5625"
              x="74.46949"
              y="163.43185"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "4.53778",
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect46313-0"
              width="4.5000243"
              height="11.5625"
              x="114.89319"
              y="163.74435"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "4.53778",
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect46313-7"
              width="4.5000243"
              height="11.5625"
              x="53.969494"
              y="163.74435"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787"
              width="12.79634"
              height="2.8434825"
              x="116.14795"
              y="272.66632"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787-4"
              width="12.79634"
              height="2.8434825"
              x="140.94429"
              y="272.66632"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787-4-5"
              width="12.79634"
              height="2.8434825"
              x="140.94429"
              y="229.12221"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787-4-0"
              width="12.79634"
              height="2.8434825"
              x="116.15561"
              y="229.12221"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787-4-7"
              width="12.79634"
              height="2.8434825"
              x="62.661942"
              y="386.74136"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787-4-09"
              width="12.79634"
              height="2.8434825"
              x="62.927109"
              y="362.11551"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787-4-57"
              width="12.79634"
              height="2.8434825"
              x="102.36258"
              y="362.11551"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787-4-06"
              width="12.79634"
              height="2.8434825"
              x="101.36258"
              y="386.74136"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.66312"
              }}
              id="rect787-4-9"
              width={8}
              height={4}
              x="687.28528"
              y="483.50595"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787-4-52"
              width="12.79634"
              height="2.8434825"
              x="140.58304"
              y="394.74948"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787-4-8"
              width="12.79634"
              height="2.8434825"
              x="142.47356"
              y="370.12357"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787-4-1"
              width="12.79634"
              height="2.8434825"
              x="179.93932"
              y="370.13245"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067"
              width="6.125"
              height="4.625"
              x="212.93768"
              y="9.3094597"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-4"
              width="6.125"
              height="4.625"
              x="208.31268"
              y="12.64937"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-1"
              width="6.125"
              height="4.625"
              x="212.81129"
              y="35.716862"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.571429"
              }}
              id="rect12067-0"
              width={2}
              height="4.625"
              x="212.43768"
              y="32.385597"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.571429"
              }}
              id="rect12067-0-2"
              width={2}
              height="4.625"
              x="212.43768"
              y="75.085938"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.571429"
              }}
              id="rect12067-0-4"
              width={2}
              height="4.625"
              x="212.43768"
              y="54.95549"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-9"
              width="6.125"
              height="4.625"
              x="251.3102"
              y="9.3183231"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-2"
              width="6.125"
              height="4.625"
              x="255.13832"
              y="12.557474"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-99"
              width="6.125"
              height="4.625"
              x="255.13832"
              y="31.938545"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-11"
              width="6.125"
              height="4.625"
              x="251.23077"
              y="35.725723"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-8"
              width="6.125"
              height="4.625"
              x="212.96597"
              y="52.15078"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-5"
              width="6.125"
              height="4.625"
              x="250.58617"
              y="52.159641"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-97"
              width="6.125"
              height="4.625"
              x="255.13832"
              y="54.847141"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-02"
              width="6.125"
              height="4.625"
              x="251.38832"
              y="78.567039"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-18"
              width="6.125"
              height="4.625"
              x="255.13832"
              y="76.344894"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-53"
              width="6.125"
              height="4.625"
              x="212.93324"
              y="78.558182"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-53-2"
              width="6.125"
              height="4.625"
              x="213.8867"
              y="99.678841"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-53-4"
              width="6.125"
              height="4.625"
              x="250.61205"
              y="99.687706"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-53-0"
              width="6.125"
              height="4.625"
              x="255.12193"
              y="102.6189"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-53-6"
              width="6.125"
              height="4.625"
              x="250.24693"
              y="126.0951"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-53-9"
              width="6.125"
              height="4.625"
              x="212.62396"
              y="126.08624"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect12067-53-09"
              width="6.125"
              height="4.625"
              x="208.2963"
              y="122.85983"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.707107"
              }}
              id="rect787-4-4"
              width="12.79634"
              height="2.8434825"
              x="178.65109"
              y="394.75833"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.571429"
              }}
              id="rect12067-0-3"
              width={2}
              height="4.625"
              x="212.4213"
              y="102.97246"
            />
            <rect
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
              id="rect16600"
              width="8.5"
              height="12.406633"
              x="599.35077"
              y="379.92438"
              transform="translate(53.603549,-44.603592)"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.571429"
              }}
              id="rect12067-0-3-2"
              width={2}
              height="4.625"
              x="255.12193"
              y="122.38617"
            />
          </g>
          <g
            id="g51103"
            inkscape:label="Зачернители"
            transform="translate(-1.0000041,-0.49999363)"
          >
            <rect
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.835713",
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect50568-5"
              width={1}
              height={9}
              x="94.393196"
              y="165.72873"
            />
            <rect
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.543389",
                display: configurator.i905 === 1 ? "" : "none",
              }}
              id="rect4529"
              width={2}
              height={5}
              x="685.28528"
              y="484.81604"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "1.13173"
              }}
              id="rect16603-7"
              width={1}
              height={1}
              x="663.47388"
              y="347.07111"
            />
            <rect
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.835713",
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect50568-1"
              width={1}
              height={9}
              x="99.893211"
              y="165.72873"
            />
            <rect
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.835713",
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect50568"
              width={1}
              height={9}
              x="38.96954"
              y="165.65819"
            />
            <rect
              style={{ fill: "#a3a3a3", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602-3-2-3"
              width={1}
              height={1}
              x="99.893204"
              y="175.22873"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{ fill: "#a3a3a3", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602-3-2-38"
              width={1}
              height={1}
              x="98.893204"
              y="174.22873"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{ fill: "#030303", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602-3-2-6"
              width={1}
              height={1}
              x="99.893204"
              y="174.22873"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602-3-6"
              width={1}
              height={1}
              x="92.393188"
              y="174.22873"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{ fill: "#a3a3a3", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602-3-2"
              width={1}
              height={1}
              x="93.393188"
              y="174.22873"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{ fill: "#a3a3a3", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602-3-61"
              width={1}
              height={1}
              x="92.393188"
              y="175.22873"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{ fill: "#a3a3a3", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602-3-7"
              width={1}
              height={1}
              x="73.469475"
              y="174.0256"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{ fill: "#a3a3a3", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602-3-5"
              width={1}
              height={1}
              x="72.469475"
              y="175.0256"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602-3-49"
              width={1}
              height={1}
              x="72.469475"
              y="174.0256"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{ fill: "#000000", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602"
              width={1}
              height={1}
              x="38.969536"
              y="174.15819"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{ fill: "#a3a3a3", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602-3"
              width={1}
              height={1}
              x="37.969536"
              y="174.15819"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{ fill: "#a3a3a3", fillOpacity: 1, strokeWidth: "1.51755" }}
              id="rect63602-3-4"
              width={1}
              height={1}
              x="38.969536"
              y="175.15819"
              transform="translate(1.0000041,0.49999363)"
            />
            <rect
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "0.835713",
                strokeLinecap: "butt",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect50568-3"
              width={1}
              height={9}
              x="74.469482"
              y="165.5256"
            />
            <rect
              style={{ fill: "#3f3f3f", fillOpacity: 1, strokeWidth: "0.990007" }}
              id="rect24057"
              width={4}
              height={1}
              x="613.73749"
              y="158.86691"
              transform="translate(1.0000041,0.49999363)"
              inkscape:label="Воздух"
            />
          </g>

          <g style={{
            display: configurator.i901 === 3 ? "" : "none"
          }} id="g3454" inkscape:label="Распределитель 3 ведра">
            <rect
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "2.00028",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect42520-9-8"
              width="29.999725"
              height="54.999729"
              x="389.66931"
              y="442.76889"
              inkscape:label="Танкер молока - 3"
            />
            <rect
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "2.00028",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect42520-9-8-2"
              width="29.999725"
              height="54.999729"
              x="354.66931"
              y="442.76889"
              inkscape:label="Танкер молока - 2"
            />
            <rect
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "2.00028",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect42520-9-8-2-8"
              width="29.999725"
              height="54.999729"
              x="319.66931"
              y="442.76889"
              inkscape:label="Танкер молока - 1"
            />
            <ellipse
              style={{
                fill: allState.i52 === 0 ? "#ffffff" : "#25be2c",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99982",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path45721-6"
              cx="334.66916"
              cy="456.60373"
              rx="3.0000889"
              ry="3.0000885"
              shapeRendering="geometricPrecision"
              inkscape:label="Индикатор молока - 1"
            />
            <ellipse
              style={{
                fill: allState.i52 === 0 ? "#ffffff" : "#25be2c",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99982",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path45721-03"
              cx="369.66916"
              cy="456.60373"
              rx="3.0000889"
              ry="3.0000885"
              shapeRendering="geometricPrecision"
              inkscape:label="Индикатор молока - 2"
            />
            <ellipse
              style={{
                fill: allState.i52 === 0 ? "#ffffff" : "#25be2c",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99982",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path45721-1"
              cx="404.66916"
              cy="456.60373"
              rx="3.0000889"
              ry="3.0000885"
              shapeRendering="geometricPrecision"
              inkscape:label="Индикатор молока - 3"
            />
            <path
              id="rect44259-3"
              style={{
                fill: "none",
                fillOpacity: 0,
                stroke: "#000000",
                strokeWidth: "2.00008",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              inkscape:label="Корпус сортировки молока"
              shapeRendering="crispEdges"
              d="M 308.45223 503.00969 L 308.45223 503.00969 "
            />
            <path
              id="path58842"
              style={{
                fill: "none",
                fillOpacity: 0,
                stroke: "#000000",
                strokeWidth: "2.00008",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              inkscape:label="Корпус сортировки молока"
              d="M 308.44637 423.00977 L 429.66896 423.00977 L 429.66896 503.00969 L 308.45223 503.00969 "
            />
            <path
              id="path84038"
              style={{
                fill: "none",
                fillOpacity: 0,
                stroke: "#000000",
                strokeWidth: "2.00008",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              inkscape:label="Корпус сортировки молока"
              d="M 300.45224 503.0097 L 289.66904 503.00969 L 289.66904 423.00977 L 289.66904 423.00977 L 300.44638 423.00978 "
            />
            <path
              id="path58840"
              style={{
                fill: "none",
                fillOpacity: 0,
                stroke: "#000000",
                strokeWidth: "2.00008",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              inkscape:label="Корпус сортировки молока"
              d="M 300.45224 503.0097 L 300.45224 503.0097 "
            />
            <g
              id="g24917"
              inkscape:label="Стрелка влево"
              transform="translate(-1.3847261,0.08388716)"
            >
              <path
                id="rect24718"
                style={{
                  opacity: 1,
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "2.00012",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 334.93085,430.80763 v -0.99998 0 h 14.61076 v 5.99988 h -14.61076 l -1e-5,-0.99999"
              />
              <path
                shapeRendering="geometricPrecision"
                id="path24779"
                style={{
                  opacity: 1,
                  fill: "none",
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
              id="g24917-9"
              inkscape:label="Стрелка влево"
              style={{ fill: "none", fillOpacity: 1 }}
              transform="matrix(-1,0,0,1,740.67528,0.08390432)"
            >
              <path
                id="rect24718-3"
                style={{
                  opacity: 1,
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "2.00012",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 334.93085,430.80763 v -0.99998 0 h 14.61076 v 5.99988 h -14.61076 l -1e-5,-0.99999"
              />
              <path
                shapeRendering="geometricPrecision"
                id="path24779-8"
                style={{
                  opacity: 1,
                  fill: "none",
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
          </g>

          <g style={{
            display: configurator.i901 === 5 ? "" : "none"
          }} id="g34542" inkscape:label="Распределитель 5 ведер">

            <rect
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.65255",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect42520-9-8"
              width="20.347446"
              height="55.347454"
              shapeRendering="geometricPrecision"
              x="372.70322"
              y="442.59503"
              inkscape:label="Танкер молока - 3"
            ></rect>
            <rect
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.65255",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect42520-9-8-2"
              width="20.347446"
              height="55.347454"
              x="346.28015"
              y="442.59503"
              shapeRendering="geometricPrecision"
              inkscape:label="Танкер молока - 2"
            ></rect>
            <rect
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.65255",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect42520-9-8-2-8"
              width="20.347446"
              height="55.347454"
              x="319.49545"
              shapeRendering="geometricPrecision"
              y="442.59503"
              inkscape:label="Танкер молока - 1"
            ></rect>
            <rect
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.65255",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect42520-9-8-3"
              width="20.347446"
              height="55.347454"
              x="426.06088"
              shapeRendering="geometricPrecision"
              y="443.21021"
              inkscape:label="Танкер молока - 3"
            ></rect>
            <rect
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.65255",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect42520-9-8-6"
              width="20.347446"
              height="55.347454"
              x="399.83017"
              shapeRendering="geometricPrecision"
              y="442.59503"
              inkscape:label="Танкер молока - 3"
            ></rect>
            <ellipse
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99982",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path45721-6"
              cx="329.67886"
              cy="456.60373"
              rx="3.0000889"
              shapeRendering="geometricPrecision"
              ry="3.0000885"
              inkscape:label="Индикатор молока - 1"
            ></ellipse>
            <ellipse
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99982",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path45721-03"
              cx="356.23413"
              cy="456.60373"
              rx="3.0000889"
              ry="3.0000885"
              shapeRendering="geometricPrecision"
              inkscape:label="Индикатор молока - 2"
            ></ellipse>
            <ellipse
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99982",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path45721-1"
              cx="383.22888"
              cy="456.60373"
              rx="3.0000889"
              ry="3.0000885"
              shapeRendering="geometricPrecision"
              inkscape:label="Индикатор молока - 3"
            ></ellipse>
            <ellipse
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99982",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path45721-1-6"
              cx="435.81061"
              cy="456.60373"
              rx="3.0000889"
              ry="3.0000885"
              shapeRendering="geometricPrecision"
              inkscape:label="Индикатор молока - 3"
            ></ellipse>
            <ellipse
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.99982",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="path45721-1-7"
              cx="409.51974"
              cy="456.60373"
              rx="3.0000889"
              ry="3.0000885"
              shapeRendering="geometricPrecision"
              inkscape:label="Индикатор молока - 3"
            ></ellipse>
            <path
              id="path58842"
              style={{
                fill: "none",
                fillOpacity: 0,
                stroke: "#000000",
                strokeWidth: "2.2239",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              inkscape:label="Корпус сортировки молока2"
              shapeRendering="geometricPrecision"
              d="M 308.64629,422.78794 H 458.81318 V 502.6307 H 308.65355"
            ></path>
            <path
              id="path84038"
              style={{
                fill: "none",
                fillOpacity: 0,
                stroke: "#000000",
                strokeWidth: "2.00008",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              inkscape:label="Корпус сортировки молока"
              shapeRendering="geometricPrecision"
              d="M 300.45224 503.0097 L 289.66904 503.00969 L 289.66904 423.00977 L 289.66904 423.00977 L 300.44638 423.00978 "
            ></path>
            <g
              id="g24917"
              inkscape:label="Стрелка влево"
              transform="translate(-1.3847261,0.08388716)"
            >
              <path
                id="rect24718"
                style={{
                  opacity: 1,
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "2.00012",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}

                d="m 334.93085,430.80763 v -0.99998 0 h 14.61076 v 5.99988 h -14.61076 l -1e-5,-0.99999"
              ></path>
              <path
                id="path24779"
                style={{
                  opacity: 1,
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                inkscape:transform-center-x="1.8941244"
                inkscape:transform-center-y="-1.9929559e-06"
                shapeRendering="geometricPrecision"
                d="m 350.2631,451.21145 2.28122,3.95119 h -13.12288 l 6.56144,-11.36475 v 0 l 2.28024,3.9495"
                transform="rotate(30,373.20889,414.39864)"
              />
            </g>
            <g
              id="g24917-9"
              inkscape:label="Стрелка влево"
              style={{ fill: "none", fillOpacity: 1 }}
              transform="matrix(-1,0,0,1,767.65078,0.66194714)"
            >
              <path
                id="rect24718-3"
                style={{
                  opacity: 1,
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#000000",
                  strokeWidth: "2.00012",
                  strokeDasharray: "none",
                  strokeOpacity: 1
                }}
                d="m 334.93085,430.80763 v -0.99998 0 h 14.61076 v 5.99988 h -14.61076 l -1e-5,-0.99999"
              ></path>
              <path
                id="path24779-8"
                style={{
                  opacity: 1,
                  fill: "none",
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
                shapeRendering="geometricPrecision"
              />
            </g>

          </g>

          <g
            id="g6972"
            inkscape:label="Забелители-2"
            style={{ fill: "#ffffff", fillOpacity: 1 }}
          >
            <rect
              style={{
                fill: "#ffffff",
                strokeWidth: "0.0098179",
                strokeOpacity: "0.784722",
                paintOrder: "stroke markers fill",
                fillOpacity: 1
              }}
              id="rect6867"
              width="4.2426405"
              height="4.8913937"
              x="507.93814"
              y="457.88364"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                strokeWidth: "0.0098179",
                strokeOpacity: "0.784722",
                paintOrder: "stroke markers fill"
              }}
              id="rect6867-7"
              width="4.2426405"
              height="4.8913937"
              x="507.93814"
              y="440.99261"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                strokeWidth: "0.0118985",
                strokeOpacity: "0.784722",
                paintOrder: "stroke markers fill"
              }}
              id="rect6867-0"
              width="6.2313786"
              height="4.8913937"
              x="505.9494"
              y="436.10123"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                strokeWidth: "0.0098179",
                strokeOpacity: "0.784722",
                paintOrder: "stroke markers fill"
              }}
              id="rect6867-5"
              width="4.2426405"
              height="4.8913937"
              x="-476.59363"
              y="494.31396"
              transform="rotate(-90)"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                strokeWidth: "0.0098179",
                strokeOpacity: "0.784722",
                paintOrder: "stroke markers fill"
              }}
              id="rect6867-5-5"
              width="4.2426405"
              height="4.8913937"
              x="-476.59363"
              y="477.42294"
              transform="rotate(-90)"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                strokeWidth: "0.0098179",
                strokeOpacity: "0.784722",
                paintOrder: "stroke markers fill"
              }}
              id="rect6867-5-4"
              width="4.2426405"
              height="4.8913937"
              x="473.1803"
              y="470.35098"
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                strokeWidth: "0.00393308",
                strokeOpacity: "0.784722",
                paintOrder: "stroke markers fill"
              }}
              id="rect6867-5-54"
              width="1.9999791"
              height="1.6652189"
              x="-433.65033"
              y="475.76657"
              transform="rotate(-90)"
            />
          </g>
          <path
            sodipodi:type="star"
            style={{
              opacity: 0,
              fill: "#729fcf",
              stroke: "#729fcf",
              strokeWidth: 0,
              display: configurator.i908 === 1 ? "" : "none",
              strokeLinecap: "round"
            }}
            id="29"
            className='Gate'
            onClick={(e) => valvePopupOpen(true, e)}
            inkscape:flatsided="true"
            sodipodi:sides={3}
            sodipodi:cx={515}
            sodipodi:cy={40}
            sodipodi:r1="57.301937"
            sodipodi:r2="28.650969"
            sodipodi:arg1="0.41230547"
            sodipodi:arg2="1.459503"
            inkscape:rounded={0}
            inkscape:randomized={0}
            d="m 567.5,62.962185 -98.63584,11.023057 39.77167,-90.932669 z"
            transform="matrix(-0.48217094,0.87459991,-1.1117311,-0.61182118,850.08467,-327.73395)"
            inkscape:transform-center-x="-7.7685527"
            inkscape:transform-center-y="-14.637777"
            inkscape:label="Маска створки 29"
          ></path>
          <path
            sodipodi:type="star"
            style={{
              fill: "#729fcf",
              fillOpacity: 0,
              stroke: "#729fcf",
              strokeWidth: 0,
              display: configurator.i909 === 1 ? "" : "none",
              strokeLinecap: "round"
            }}
            id="31"
            className='Gate'
            onClick={(e) => valvePopupOpen(true, e)}
            inkscape:flatsided="true"
            sodipodi:sides={3}
            sodipodi:cx={515}
            sodipodi:cy={40}
            sodipodi:r1="57.301937"
            sodipodi:r2="28.650969"
            sodipodi:arg1="0.41230547"
            sodipodi:arg2="1.459503"
            inkscape:rounded={0}
            inkscape:randomized={0}
            d="m 567.5,62.962185 -98.63584,11.023057 39.77167,-90.932669 z"
            transform="matrix(0.48217094,0.87459991,1.1117311,-0.61182118,405.07883,-329.12157)"
            inkscape:transform-center-x="7.7685528"
            inkscape:transform-center-y="-14.637777"
            inkscape:label="Маска створки 31"
          ></path><rect
            style={{
              opacity: 0,
              fill: "#729fcf",
              stroke: "#729fcf",
              strokeWidth: 0,
              display: configurator.i907 === 1 ? "" : "none",
              strokeLinecap: "round"
            }}
            id="28"
            className='Gate'
            onClick={(e) => valvePopupOpen(true, e)}
            width="14.259958"
            height="72.522728"
            x="507.42413"
            y="133.22946"
            inkscape:label="Маска створки 28"
          ></rect>
          <rect
            style={{
              opacity: 0,
              fill: "#729fcf",
              stroke: "#729fcf",
              strokeWidth: 0,
              display: configurator.i910 === 1 ? "" : "none",
              strokeLinecap: "round"
            }}
            id="30"
            className='Gate'
            onClick={(e) => valvePopupOpen(true, e)}
            width="13.507251"
            height="71.998993"
            x="736.63757"
            y="133.09158"
            inkscape:label="Маска створки 30"
          ></rect>
          <rect
            style={{
              opacity: 0,
              fill: "#000000",
              fillOpacity: 1,
              stroke: "#25be2c",
              strokeWidth: 0,
              strokeLinecap: "round"
            }}
            id="21"
            className='Air'
            onClick={(e) => valvePopupOpen(true, e)}
            width="63.989098"
            height="39.868496"
            x="597.2677"
            y="141.36844"
            inkscape:label="Маска прогона животного"
          ></rect>
          <rect
            style={{
              opacity: 0,
              fill: "#000000",
              fillOpacity: 1,
              stroke: "#25be2c",
              strokeWidth: 0,
              strokeLinecap: "round"
            }}
            id="22"
            className='Food'
            onClick={(e) => valvePopupOpen(true, e)}
            width="46.859032"
            height="51.618793"
            x="604.65564"
            y="48.767681"
            inkscape:label="Маска кормушки"
          ></rect>
          <g style={{ display: configurator.i904 === 1 ? "" : "none" }} id="g5850" inkscape:label="Труба вместо слива">
            <rect
              style={{
                fill: "#000000",
                stroke: "#000000",
                strokeWidth: "2.012",
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1,
                fillOpacity: 1
              }}
              id="rect9406"
              width="38.70116"
              height="10.027361"
              x="330.04175"
              y="250.44029"
            ></rect>
            <rect
              style={{
                fill: fill627 ? "#2a569a" : "#ffffff",
                fillOpacity: 1,
                stroke: "#25be2c",
                strokeWidth: 0,
                strokeLinecap: "round"
              }}
              id="rect1609"
              width="43.03167"
              height="7.999999"
              x="327.30225"
              y="251.46588"
            />
          </g>
          <g id="g5254" inkscape:label="Труба к единственному баку">
            <path
              id="rect15277"
              style={{
                display: configurator.i905 === 0 ? "" : "none",
                fill: "#2a569a",
                fillOpacity: 1,
                stroke: "#000000",
                strokeWidth: "1.95433",
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="M 483.29957 432.44615 L 483.29957 456.90708 L 493.33473 456.90708 L 493.33473 456.90122 L 506.23903 456.90122 L 506.23903 446.88365 L 493.33473 446.88365 L 493.33473 432.44615 L 483.29957 432.44615 z "
            ></path>
            <path
              id="rect20040"
              style={{
                display: configurator.i905 === 0 ? "" : "none",
                fill: fill629 ? "#2a569a" : "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "1.94541",
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              d="m 484.32229,428.38435 v 19.5 8 h 8 19.5 v -8 h -19.5 v -19.5 z"
            />
          </g>
          <g style={{ display: configurator.i906 === 0 ? "" : "none", }} id="g7141" inkscape:label="Угол после предохладителя">
            <path
              id="rect7055"
              style={{
                fill: "#2a569a",
                stroke: "#000000",
                strokeWidth: "2.09474",
                strokeLinecap: "square",
                strokeOpacity: 1,
                fillOpacity: 1
              }}
              d="M 461.32301 250.46177 L 461.32301 250.50865 L 446.99879 250.50865 L 446.99879 260.42076 L 461.32301 260.42076 L 461.32301 273.75279 L 471.32301 273.75279 L 471.32301 250.46177 L 461.32301 250.46177 z "
            ></path>
            <path
              id="rect7112"
              style={{
                fill: fill627 || fill618 ? "#2a569a" : "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "1.86623",
                strokeLinecap: "square",
                strokeOpacity: 1
              }}
              d="m 433.14723,251.46784 v 8 h 29.17578 v 29.24804 h 8 v -37.12304 h -0.0527 v -0.125 z"
            />
          </g>
          <g
            style={{
              display: configurator.i904 === 1 && configurator.i912 === 1 ? "" : "none"
            }}
            id="g2272" inkscape:label="Клапан вакуума отсутствует">
            <rect
              style={{
                fill: "#000000",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "1.14933"
              }}
              id="rect2265"
              width="42.639557"
              height={12}
              x="278.09308"
              y="167.96568"
            ></rect>
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: "1.35791"
              }}
              id="rect2267"
              width="51.160828"
              height={8}
              x="272.43515"
              y="169.79099"
            />
          </g>
          <path
            id="rect32056-0"
            style={{
              display: configurator.i905 === 1 ? "" : "none",
              fill: "#2a569a",
              fillOpacity: fill624 ? 1 : 0,
              stroke: "none",
              strokeWidth: "1.95581",
              strokeLinecap: "butt",
              strokeOpacity: 1
            }}
            inkscape:label="Буферный танкер заливка"
            d="m 662.43469,435.54035 v 29.59571 c 0,11.06231 8.75774,19.96875 19.63672,19.96875 h 5.24609 v 9.90625 h 8 v -9.90625 h 5.18164 c 10.87898,0 19.63672,-8.90644 19.63672,-19.96875 v -29.59571 h -28.84961 z"
          ></path>
          <path
            id="rect63402-7-8-8-0-5-9-4-1-4-8-0-8-1"
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
            d="m 249.60932,514.79557 h -0.9973 v -16.61949 h 9.99048 v 16.61949 0 h -0.99922"
            inkscape:label="Отвод к канализации - 2"
          ></path>
          <rect
            style={{
              fill: "#2a569a",
              display: configurator.i905 === 1 ? "" : "none",
              fillOpacity: fill624 ? 1 : 0,
              stroke: "none",
              strokeWidth: "2.52943",
              strokeLinecap: "square",
              strokeDasharray: "none"
            }}
            id="rect56564"
            width={8}
            height="17.663765"
            x="687.28528"
            y="483.14505"
            inkscape:label="Часть трубы буферного танкера"
          ></rect>
          <g
            style={{
              display: configurator.i913 === 1 ? "none" : ""
            }}
            id="g59055" inkscape:label="Заглушка надуксусной кислоты">
            <rect
              style={{
                fill: "#ffffff",
                stroke: "#000000",
                strokeWidth: 2,
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect58319"
              width="9.9921885"
              height="7.1445298"
              x="71.412849"
              y="103.29966"
            ></rect>
            <rect
              style={{
                fill: "#ffffff",
                stroke: "none",
                strokeWidth: "2.19541",
                strokeLinecap: "square",
                strokeDasharray: "none",
                strokeOpacity: 1
              }}
              id="rect58323"
              width="13.285348"
              height="9.7470064"
              x="70.412849"
              y="99.705452"
            />
          </g>
          <rect
            style={{
              fill: fill611 ? "#2a569a" : "#ffffff",
              stroke: "none",
              strokeWidth: "1.9898",
              strokeLinecap: "square",
              strokeDasharray: "none",
              strokeOpacity: 1
            }}
            id="rect59668"
            width="33.973919"
            height={8}
            x="130.95706"
            y="201.96568"
            inkscape:label="Верхняя часть заливки санитарной ловушки"
          ></rect>

        </g >
      </svg >
      <ArmSheme
        openArmSheme={openArmSheme}
        setOpenArmSheme={setOpenArmSheme}
        onClose={handleArmClose}
        setOn={setOn}
        setOff={setOff}
        valveOpen={valveOpen}
        valveClose={valveClose}
        state={allState}
        mode={mode}
      >
      </ArmSheme>
      <ClapanChange
        valvePopup={valvePopup}
        setValvePopup={setValvePopup}
        onClose={valvePopupClose}
        currentValve={currentValve}
        valveOpen={valveOpen}
        valveClose={valveClose}
        setOn={setOn}
        setOff={setOff}
        currentType={currentType}
      ></ClapanChange>
    </>
  );
}

export default Sheme;

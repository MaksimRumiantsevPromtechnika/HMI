const defaultState = {
  mode: "2",//Статус Стоп/пауза/Плей
  main: "1",//Режимы работы робота Ожидане/Доение/Выгон животного...
  milking: false,//Идет ли процесс доения
  accessRights: 0,//Доступ к 4 вкладке
  connectionStatus: false,
  armSlowSpeed: false,//Скорость движения манипулятора
  cowSeparate: false,//Активация отделения животного
  teatCalibration: false,//Калибровка сосков активна/не активна
}

const CHANGE_MODE = "CHANGE_MODE"
const CHANGE_MAIN = "CHANGE_MAIN"
const CHANGE_CONNECTION_STATUS = "CHANGE_CONNECTION_STATUS"
const CHANGE_ACCESS_RIGHTS = "CHANGE_ACCESS_RIGHTS"
const TOGGLE_MILKING = "TOGGLE_MILKING"
const TOGGLE_SPEED = "TOGGLE_SPEED"
const TOGGLE_SEPARATE = "TOGGLE_SEPARATE"
const TOGGLE_TEAT_CALIBRATION = "TOGGLE_TEAT_CALIBRATION"

export const hmiModeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return { ...state, mode: action.payload }
    case CHANGE_MAIN:
      return { ...state, main: action.payload }
    case CHANGE_CONNECTION_STATUS: {
      return { ...state, connectionStatus: action.payload }
    }
    case CHANGE_ACCESS_RIGHTS :
      return {...state, accessRights: action.payload}
    case TOGGLE_MILKING : 
      return {...state, milking: !state.milking}
    case TOGGLE_SPEED :
      return {...state, armSlowSpeed: action.payload}
    case TOGGLE_SEPARATE :
      return {...state, cowSeparate: action.payload}
    case TOGGLE_TEAT_CALIBRATION :
      return {...state, teatCalibration: action.payload}
    default:
      return state
  }
}

export const changeModeAction = (payload) => ({ type: CHANGE_MODE, payload })
export const changeMainAction = (payload) => ({ type: CHANGE_MAIN, payload })
export const changeConnectionStatusAction = (payload) => ({ type: CHANGE_CONNECTION_STATUS, payload })
export const changeAccessRights = (payload) => ({ type: CHANGE_ACCESS_RIGHTS, payload })
export const toggleMilking = () => ({type: TOGGLE_MILKING})
export const toggleSpeed = (payload) => ({type: TOGGLE_SPEED, payload})
export const toggleSeparate = (payload) => ({type: TOGGLE_SEPARATE, payload})
export const toggleTeatCalibration = (payload) => ({type: TOGGLE_TEAT_CALIBRATION, payload})
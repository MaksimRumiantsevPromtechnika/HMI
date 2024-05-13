const defaultState = {
  mode: "2",
  main: "1",
  milking: false,
  accessRights: 0, 
  connectionStatus: false,
}

const CHANGE_MODE = "CHANGE_MODE"
const CHANGE_MAIN = "CHANGE_MAIN"
const CHANGE_CONNECTION_STATUS = "CHANGE_CONNECTION_STATUS"
const CHANGE_ACCESS_RIGHTS = "CHANGE_ACCESS_RIGHTS"
const TOGGLE_MILKING = "TOGGLE_MILKING"

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
    default:
      return state
  }
}

export const changeModeAction = (payload) => ({ type: CHANGE_MODE, payload })
export const changeMainAction = (payload) => ({ type: CHANGE_MAIN, payload })
export const changeConnectionStatusAction = (payload) => ({ type: CHANGE_CONNECTION_STATUS, payload })
export const changeAccessRights = (payload) => ({ type: CHANGE_ACCESS_RIGHTS, payload })
export const toggleMilking = () => ({type: TOGGLE_MILKING})
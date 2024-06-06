const defaultState = {
  udrGlobalSettings: {
    configurateParams: {
      detachmentDelay: "3",
    xOffset: "8",
    zOffset: "9",
    yOffset: "2",
    },
    armSlowSpeed: true,
    cowSeparate: false
  }
  ,

  realSettings: {
    configurateParams: {
      detachmentDelay: "3",
      xOffset: "8",
      zOffset: "9",
      yOffset: "2",
    },
    armSlowSpeed: true
  }
}

const CHANGE_VALUE = "CHANGE_VALUE"
const UPDATE_VALUE = "UPDATE_VALUE"
const TOGGLE_SPEED = "TOGGLE_SPEED"

export const mainSettingsReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { ...state, udrGlobalSettings: action.payload }
    case TOGGLE_SPEED: 
      return {...state, udrGlobalSettings: {...state.realSettings,
        armSlowSpeed: !state.realSettings.armSlowSpeed}}
    case UPDATE_VALUE: 
      return { ...state, realSettings: action.payload } 
    default:
      return state
  }
}

export const changeSettings = (payload) => ({ type: CHANGE_VALUE, payload })
export const updateSettings = (payload) => ({ type: UPDATE_VALUE, payload })
export const toggleSpeed = () => ({type: TOGGLE_SPEED})

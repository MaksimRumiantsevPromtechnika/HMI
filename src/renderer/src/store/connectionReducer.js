const defaultState = {
  connection: "",
  cameraConnection: ""
}

const CHANGE_CONNECTION = "CHANGE_CONNECTION"
const CHANGE_CAMERA_CONNECTION = "CHANGE_CAMERA_CONNECTION"

export const connectionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CONNECTION:
      return { ...state, connection: action.payload }
    case CHANGE_CAMERA_CONNECTION:
      return { ...state, cameraConnection: action.payload }
    default:
      return state
  }
}

export const changeConnectionAction = (payload) => ({ type: CHANGE_CONNECTION, payload })
export const changeCameraConnectionAction = (payload) => ({ type: CHANGE_CAMERA_CONNECTION, payload })

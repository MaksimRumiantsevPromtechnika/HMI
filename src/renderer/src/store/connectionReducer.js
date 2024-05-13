const defaultState = {
  connection: ""
}

const CHANGE_CONNECTION = "CHANGE_CONNECTION"

export const connectionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CONNECTION:
      return { ...state, connection: action.payload }
    default:
      return state
  }
}

export const changeConnectionAction = (payload) => ({ type: CHANGE_CONNECTION, payload })

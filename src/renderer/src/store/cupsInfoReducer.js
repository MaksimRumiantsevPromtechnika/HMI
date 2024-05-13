const defaultState = {
  teatsInfo: {
    s1: "1",
    x1: "-44",
    y1: "108",
    s2: "2",
    x2: "-59",
    y2: "115",
    s3: "0",
    x3: "57",
    y3: "232",
    s4: "0",
    x4: "92",
    y4: "136",
  }
}
const UPDATE_TEAT_INFO = "UPDATE_TEAT_INFO"

export const teatInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_TEAT_INFO:
      return { ...state,teatsInfo: action.payload }
    default:
      return state
  }
}



export const updateTeatValueAction = (payload) => ({ type: UPDATE_TEAT_INFO, payload })

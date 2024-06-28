const defaultState = {
  teatsInfo: {
    teat1:  {x: -44, y: 108, status: 2},
    teat2:  {x: "-59", y: "115", status: 2},
    teat3:  {x: "57", y: "232", status: 7},
    teat4:  {x: "92", y: "136", status: 2},
    teat0: [
      {x: -66, y: 128, status: 0},
      {x: -48, y: 240, status: 0},
      {x: 55, y: 255, status: 0},
      // { x: -66, y: -128 },
      // { x: -48, y: -240 },
      // { x: 55, y: -255 },
      // { x: 88, y: -132 },
    ]
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

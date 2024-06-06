const defaultState = {
  stageTimeList: {
    0: "1",
    1: "44",
    2: "108",
    3: "2",
  },
  success: false,
  lastStage: 4,
  washType: 3,
  stageTimeLeft: 20,
  totalTimeLeft: 100,
  stageTime: 40,
  totalTime: 600,
  currentWash: "full-rising"
}
const UPDATE_TEAT_INFO = "UPDATE_TEAT_INFO"

export const washReportReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_TEAT_INFO:
      return { ...state,teatsInfo: action.payload }
    default:
      return state
  }
}



export const updateTeatValueAction = (payload) => ({ type: UPDATE_TEAT_INFO, payload })

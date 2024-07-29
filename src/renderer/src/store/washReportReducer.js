const defaultState = {
  reportInfo: {
    pastStages: {
      0: "1",
      1: "44",
      2: "108",
      3: "2",
    },
    washResult: false,
    lastStage: 4,
    washType: 1,
    stageTimeLeft: 20,
    totalTimeLeft: 100,
    stageTime: 40,
    totalTime: 600,
  },

  washTypeList: {
    0: "acid",
    1: "alkaline",
    2: "full-rising",
    3: "half-rising"
  }
}
const UPDATE_WASH_REPORT_INFO = "UPDATE_WASH_REPORT_INFO"

export const washReportReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_WASH_REPORT_INFO:
      return { ...state, reportInfo: action.payload }
    default:
      return state
  }
}



export const updateWashReportInfo = (payload) => ({ type: UPDATE_WASH_REPORT_INFO, payload })

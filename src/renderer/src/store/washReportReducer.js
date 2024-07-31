const defaultState = {//Информация для отчета по промывкам
  reportInfo: {
    pastStages: {//Время прошедших этапов для отображения снизу
      0: "1",
      1: "44",
      2: "108",
      3: "2",
    },
    washResult: false,//Результат промывки
    lastStage: 4,//Стадия на которой отсановилась промывка
    washType: 1,//Тип промывки
    stageTimeLeft: 20,//Время оставшееся до конца последнего этапа
    totalTimeLeft: 100,//Время оставшееся до конца промывки
    stageTime: 40,//Длительность последнего этапа теоритическая
    totalTime: 600,//Общая длительность промывки теоритическая
  },

  washTypeList: {
    //Тип провыки по коду
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

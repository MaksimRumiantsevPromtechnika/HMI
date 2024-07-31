const defaultState = {
  reportInfo: {//Данные для состоавления отчетов по промывкам 
    flow1: [44,44,22,22,44,44,22,22,44,44,22,22],//Поток молока
    flow2: [33,44,22,22,44,44,22,22,44,44,22,22],
    flow3: [55,44,22,22,44,44,22,22,44,44,22,22],
    flow4: [66,44,22,22,44,44,22,22,44,44,22,22],
    milk: 223,//Количество полученного молока
    stat1: 2,//Сотояние стаканов на момент окончания доения
    stat2: 3,
    stat3: 1,
    stat4: 4,
    time: 0,
    vak1: [0,1,1,1,1,0],//Наличие вакуума
    vak2: [2,3,3,3,3,2],
    vak3: [3,4,4,4,4,3],
    vak4: [5,6,6,5,6,5],
    milkDestination: 1//Направление молока
  },

}
const UPDATE_MILK_REPORT_INFO = "UPDATE_MILK_REPORT_INFO"

export const milkReportReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_MILK_REPORT_INFO:
      return { ...state, reportInfo: action.payload }
    default:
      return state
  }
}



export const updateMilkReportInfo = (payload) => ({ type: UPDATE_MILK_REPORT_INFO, payload })

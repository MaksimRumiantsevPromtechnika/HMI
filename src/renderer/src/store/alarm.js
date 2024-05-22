const defaultState = {
  alarmVocabulary: {

    alarmDescription: {
      1000: "АВАРИЯ",
      1001: "АВАРИЯ",
      2000: "Не перекачивается молоко",
      2001: "Нет вакуума",
      2002: "Нет воды",
      2003: "Нет давления сжатого воздуха",
      2004: "Животное в боксе",
      2005: "Соски не найдены",
      2006: "Станция сортировки молока не работает",
      2007: "Ошибка манипулятора",
      2008: "Ошибка манипулятора",
      2009: "Ошибка манипулятора",
      2010: "Ошибка манипулятора",
      2011: "Ошибка манипулятора",
      2012: "Ошибка манипулятора",
      2013: "Ошибка манипулятора",
      2014: "Ошибка манипулятора",
      2015: "Ошибка манипулятора",
      2016: "Ошибка манипулятора",
      2017: "Ошибка манипулятора",
      2018: "Ошибка манипулятора",
      2019: "Ошибка манипулятора",
      2020: "Ошибка манипулятора",
      2021: "Ошибка манипулятора",

      3000: "Превышено временя ожидания молочной магистрали",
      3001: "Некорректная работа фотодатчика присутствия животного заднего",
      3002: "Некорректная работа фотодатчика присутствия животного переднего",
      3003: "Некорректная работа камеры слежения за перемещением животного в боксе",
      3004: "Ведра заполнены",
      3005: "Отклонения в параметрах молока",
      3006: "Ведра заполнены (мастит)",
      3007: "Ведра заполнены (антибиотик)",
      3008: "Ведра заполнены (молозиво)",
      3009: "Нет связи с манипулятором",
      3010: "Нет вакуума в ЗП стакане",
      3011: "Нет вакуума в ЗЛ стакане",
      3012: "Нет вакуума в ПП стакане",
      3013: "Нет вакуума в ПЛ стакане",
      3014: "Нет потока в ЗП четверти",
      3015: "Нет потока в ЗЛ четверти",
      3016: "Нет потока в ПП четверти",
      3017: "Нет потока в ПЛ четверти",
      3018: "ЗП сосок не найден",
      3019: "ЗЛ сосок не найден",
      3020: "ПП сосок не найден",
      3021: "ПЛ сосок не найден",
      3022: "Нет животных",
      3023: "Нет связи с камерой слежения за перемещением животного в боксе",
      3024: "Ошибка камеры слежения за перемещением животного в боксе",

      4000: "Ожидание оператора",
      4001: "Животное не определено",
      4002: "Проблемы со входом в бокс",
      4003: "Доение остановлено",
      4004: "Аварийная остановка",
      4005: "Ополаскивание",
      4006: "Ополаскивание",
      4007: "Низкая температура",
      4008: "Промывка линии",
      4009: "Промывка линии",
      4010: "Кислотная промывка",
      4011: "Щелочная промывка",
      4012: "Кислотная промывка",
      4013: "Щелочная промывка",
      4014: "Успешное доение",
      4015: "Перенос надоя",
      4016: "Неуспешное доение",
    },

    alarmType: {
      1: "Авария",
      2: "Ошибка",
      3: "Предупреждение",
      4: "Информация"
    }
    
  },

  newAlarmList: [
    
  ],

  alarmHistory: [
    
  ]
}

const ADD_ALARM = "ADD_ALARM"
const DELETE_ALARM = "DELETE_ALARM"
const ADD_ALARM_HISTORY = "ADD_ALARM_HISTORY"
const ADD_NEW_HISTORY = "ADD_NEW_HISTORY"
const ADD_DISCONNECT_ALARM = "ADD_DISCONNECT_ALARM"

export const alarmReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALARM:
      return { ...state, newAlarmList: [action.payload, ...state.newAlarmList] }
    case ADD_DISCONNECT_ALARM:
      if (!state.newAlarmList.some(obj => obj.nameID === 666)) {
        return { ...state, newAlarmList: [action.payload, ...state.newAlarmList] }
      }
    case DELETE_ALARM:
      return {...state, newAlarmList: state.newAlarmList.filter((_, i) => i !== action.payload)}  
    case ADD_ALARM_HISTORY:
      return { ...state, alarmHistory: action.payload }
      case ADD_NEW_HISTORY:
      return { ...state, alarmHistory: [action.payload, ...state.alarmHistory] }
    default:
      return state
  }
}

export const addNewAlarm = (payload) => ({ type: ADD_ALARM, payload })
export const deletaAlarm = (payload) => ({ type: DELETE_ALARM, payload })
export const addHistoryAlarm = (payload) => ({ type: ADD_ALARM_HISTORY, payload })
export const addNewHistory = (payload) => ({type: ADD_NEW_HISTORY, payload})
export const addDisconnectAlarm = (payload) => ({type: ADD_DISCONNECT_ALARM, payload})
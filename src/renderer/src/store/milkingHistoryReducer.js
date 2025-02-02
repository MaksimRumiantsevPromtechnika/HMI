const defaultState = {
  milkingVocabulary: {

    result: {
      //Результат доения по коду
      0: "Неопределенное",
      1: "Не доилось",
      2: "Успешно отдоено",
      3: "Ошибка доения"
    },

    destination: {
      //Направление молока по коду
      0: "Танкер",
      1: "Ведро",
      2: "Канализация",
    }
    
  },

  milkingHistory: [//Исторический список доения
    
  ]
}

const ADD_MILKING = "ADD_MILKING"
const ADD_MILKING_HISTORY = "ADD_MILKING_HISTORY"

export const milkingHistory = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MILKING:
      return { ...state, milkingHistory: [action.payload, ...state.milkingHistory] }
    case ADD_MILKING_HISTORY:
      return { ...state, milkingHistory: action.payload }
    default:
      return state
  }
}

export const addNewMilking = (payload) => ({ type: ADD_MILKING, payload })
export const addMilkingHistory = (payload) => ({ type: ADD_MILKING_HISTORY, payload })
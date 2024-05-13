const defaultState = {
  washVocabulary: {

    washType: {
      0: "Кислотная промывка",
      1: "Щелочная промывка",
      2: "Промывка линий",
      3: "Ополаскивание УДР"
    }
    
  },

  washHistory: [
    
  ]
}

const ADD_WASH = "ADD_WASH"
const ADD_WASH_HISTORY = "ADD_WASH_HISTORY"


export const clean = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_WASH:
      return { ...state, washHistory: [action.payload, ...state.washHistory] }
    case ADD_WASH_HISTORY:
      return { ...state, washHistory: action.payload }
    default:
      return state
  }
}

export const addNewWash = (payload) => ({ type: ADD_WASH, payload })
export const addHistoryWash = (payload) => ({ type: ADD_WASH_HISTORY, payload })

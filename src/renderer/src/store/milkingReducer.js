const defaultState = {

  milkingList: [
    
  ],

  pastPath: 0,

  lastSuccessMilking: {
    cowId: "",
    milkAmount: 0,
    expMilk: ""
  },

  cupsStatus: {
    0: "not_attached",
    1: "attach_forbiden",
    2: "noflow",
    3: "flowok",
    4: "flowmax",
    5: "milk75",
    6: "milked",
    7: "milkingfailed"
  }
  // alarmHistory: [
    
  // ]
}

const ADD_DOT = "ADD_DOT"
const CLEAR_DATA = "CLEAR_DATA"
const SUCCESS_MILKING = "SUCCESS_MILKING"

export const milkingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DOT:
      return { ...state, milkingList: [...state.milkingList, action.payload] }
    case CLEAR_DATA:
      return { ...state, milkingList: []}
    case SUCCESS_MILKING:
      return { ...state, lastSuccessMilking: action.payload }
    default:
      return state
  }
}

export const addNewDot = (payload) => ({ type: ADD_DOT, payload })
export const clearData = () => ({type: CLEAR_DATA})
export const addSuccessMilking = (payload) => ({type: SUCCESS_MILKING, payload})

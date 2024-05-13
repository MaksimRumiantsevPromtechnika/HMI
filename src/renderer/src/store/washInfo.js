const defaultState = {
  washingAcid: [

  ],
  washingAlkaline: [

  ], 
  washingMilkline: [
    
  ],
  washingRising: [

  ],

  washingAcidStageList: [
    "Блокировка линии доставки",
    "Промывка стаканов доильных",
    "Холодная промывка",
    "Теплая промывка",
    "Горячая промывка",
    "Первый слив",
    "Холодная промывка",
    "Первый слив",
    "Второй слив"
  ],

  washingAlkalineStageList: [
    "Блокировка линии доставки",
    "Промывка стаканов доильных",
    "Холодная промывка",
    "Теплая промывка",
    "Горячая промывка",
    "Первый слив",
    "Холодная промывка",
    "Первый слив",
    "Второй слив"
  ],

  washingMilklineList: [
    "Блокировка линии доставки",
    "Промывка стаканов доильных",
    "Холодная промывка",
    "Первый слив",
    "Второй слив"
  ],

  washingRisingList: [
    "Промывка стаканов доильных",
    "Холодная промывка",
    "Первый слив",
    "Второй слив"
  ],


  washingHistory: {i0: '01.01.0001 00:00:00', i1: '01.01.0001 00:00:00', i2: '01.01.0001 00:00:00', i3: '01.01.0001 00:00:00'},

  currentWash: 2,

  currentStage: 0,
}

const CHANGE_ACID_WASH = "CHANGE_ACID_WASH"
const CHANGE_WASH_HISTORY = "CHANGE_WASH_HISTORY"
const CHANGE_WASH_STAGE = "CHANGE_WASH_STAGE"

export const washReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ACID_WASH: 
    if (action.payload[0] === "0") {
  
      action.payload.shift()
      console.log(action.payload);
      return  {...state, washingAcid: action.payload, currentWash: 0, currentStage: 0}
    } else if ((action.payload[0] === "1")) {
      action.payload.shift()
      console.log(action.payload);
      return  {...state, washingAlkaline: action.payload, currentWash: 1, currentStage: 0}
    } else if ((action.payload[0] === "2")) {
      action.payload.shift()
      console.log(action.payload);
      return  {...state, washingMilkline: action.payload, currentWash: 2, currentStage: 0}
    } else if ((action.payload[0] === "3")) {
      action.payload.shift()
      console.log(action.payload);
      return  {...state, washingRising: action.payload, currentWash: 3, currentStage: 0}
    }
    case CHANGE_WASH_STAGE: 
      return {...state, currentStage: action.payload}
    case CHANGE_WASH_HISTORY: 
      return {...state, washingHistory: action.payload}
    default:
      return state
  }
}

export const changeWashInfo = (payload) => ({type: CHANGE_ACID_WASH, payload})
export const changeWashHistory = (payload) => ({type: CHANGE_WASH_HISTORY, payload})
export const changeWashStage = (payload) => ({type: CHANGE_WASH_STAGE, payload})
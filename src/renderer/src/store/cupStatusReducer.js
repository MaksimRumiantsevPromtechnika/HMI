const defaultState = { //Сотояние стаканов isMilked/isCleaned
  i911: 1,
  i912: 1,
  i913: 1,
  i914: 1,
}

const CHANGE_CUP_STATUS = "CHANGE_CUP_STATUS"

export const cupStatusReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CUP_STATUS:
      return { ...state, [action.payload.id]: action.payload.value }
    default:
      return state
  }
}

export const changeCupStatusAction = (payload) => ({ type: CHANGE_VALUE, payload })

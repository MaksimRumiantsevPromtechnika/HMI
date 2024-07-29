const defaultState = {
  i901: 5,
  i902: 1,
  i903: 1,
  i904: 0,
  i905: 1,
  i906: 1,
  i907: 1,
  i908: 1,
  i909: 1,
  i910: 1,
  i911: 1,
  i912: 5,
  i913: 1,
  cowOrientation: 1,
}

const CHANGE_VALUE = "CHANGE_VALUE"

export const configuratorReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { ...state, [action.payload.id]: action.payload.value }
    default:
      return state
  }
}

export const changeConfiguratorAction = (payload) => ({ type: CHANGE_VALUE, payload })

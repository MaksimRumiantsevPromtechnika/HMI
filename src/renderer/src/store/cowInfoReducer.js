const defaultState = {
  cowInfo: {
    coords: {
      z1: "",
      x1: "",
      y1: "",
      z2: "",
      x2: "",
      y2: "",
      z3: "",
      x3: "",
      y3: "",
      z4: "",
      x4: "",
      y4: "",
    },
    id: 1234,
    expmilk: 12.2,
    status: "",
    milkDestination: 1,
    milkAvail: 105,
  }
}

const UPDATE_COW_INFO = "UPDATE_COW_INFO"

export const cowInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_COW_INFO:
      return { ...state,cowInfo: action.payload }
    default:
      return state
  }
}



export const updateCowValueAction = (payload) => ({ type: UPDATE_COW_INFO, payload })

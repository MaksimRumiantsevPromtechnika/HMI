const defaultState = {
  //Информация по животному
  cowInfo: {
    coords: {//Координаты сосков исторические/стандартные
      z1: "",
      x1: null,
      y1: null,
      z2: "",
      x2: "",
      y2: 50,
      z3: "",
      x3: "",
      y3: 75,
      z4: "",
      x4: "",
      y4: 25,
    },
    id: 1234,//ID Животного
    expmilk: 12.2,//Ожидаемый надой
    milkDestination: 1,//Направление молока
    milkAvail: 105,//Готовность к доению
  },
  cowLock: 20,//Время удержания животного
}

const UPDATE_COW_INFO = "UPDATE_COW_INFO"
const CHANGE_COW_LOCK = "CHANGE_COW_LOCK"

export const cowInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_COW_INFO:
      return { ...state,cowInfo: action.payload }
    case CHANGE_COW_LOCK :
      return { ...state,cowLock: action.payload }
    default:
      return state
  }
}



export const updateCowValueAction = (payload) => ({ type: UPDATE_COW_INFO, payload })
export const changeCowLock = (payload) => ({ type: CHANGE_COW_LOCK, payload })

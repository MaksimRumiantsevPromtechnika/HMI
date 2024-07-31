const defaultState = {
  //Информация по калибровке/тесту вакуума c - калибровка t - вакуум
  vacStatus: {
    "c3": "0",
    "c4": "0",
    "c1": "1",
    "c2": "2",
    "t3": "1",
    "t4": "2",
    "t1": "0",
    "t2": "0",
  }
}

const UPDATE_VAC_INFO = "UPDATE_VAC_INFO"

export const vacCalibrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_VAC_INFO:
      return { ...state, vacStatus: action.payload }
    default:
      return state
  }
}



export const updateVacValueAction = (payload) => ({ type: UPDATE_VAC_INFO, payload })

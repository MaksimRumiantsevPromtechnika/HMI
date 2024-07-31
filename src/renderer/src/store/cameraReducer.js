const defaultState = {
  //Точки изображения от камеры слежения
  cameraMap: {

  },
}

const CHANGE_MAP = "CHANGE_MAP"

export const cameraMap = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_MAP:
      return { ...state, cameraMap: action.payload }
    default:
      return state
  }
}

export const changeCameraMap = (payload) => ({ type: CHANGE_MAP, payload })

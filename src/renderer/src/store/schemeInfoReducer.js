import { createMachine, assign } from "xstate";
const defaultState = {
  shemeValue: {
    i81: 0,
    i85: 0,
    i153: 0,
    i29: 0,
    i93: 0,
    i101: 1,
    i61: 0,
    i97: 0,
    i89: 0,
    i69: 0,
    i211: 0,
    i215: 0,
    i5: 0,
    i65: 0,
    i157: 0,
    i187: 0,
    i191: 0,
    i203: 0,
    i145: 0,
    i109: 0,
    i117: 0,
    i113: 0,
    i105: 0,
    i137: 0,
    i21: 0,
    i77: 0,
    i73: 0,
    i149: 0,
    i201: 0,
    i33: 0,
    i9: 0,
    i13: 0,
    i17: 0,
    i161: 0,
    i167: 0,
    i302: 0,
    i303: 0,
    i304: 0,
    i305: 0,
    i306: 0,
    i307: 0,
    i598: 1,
    i599: 1,
    i1: 0,
    i37: 0,
    i141: 0,
    i25: 0,
    i41: 0,
    i45: 0,
    i53: 0,
    i49: 0,
    i57: 0,
    i125: 0,
    i133: 0,
    i129: 0,
    i121: 0,
    i171: 0,
    i175: 0,
    i179: 0,
  }
}

const UPDATE_SHEME_VALUE = "UPDATE_SHEME_VALUE"

export const shemeInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SHEME_VALUE:
      return { ...state, shemeValue: action.payload }
    default:
      return state
  }
}



export const updateShemeValueAction = (payload) => ({ type: UPDATE_SHEME_VALUE, payload })

import { createMachine, assign } from "xstate";
const defaultState = {
  //Данные по механизмам мнемосхемы
  shemeValue: {
    i56: 0,
    i57: 0,
    i45: 0,
    i55: 0,
    i20: 0,
    i47: 0,
    i16: 0,
    i18: 0,
    i15: 1,
    i40: 0,
    i58: 0,
    i19: 0,
    i24: 0,
    i42: 0,
    i43: 0,
    i37: 0,
    i14: 0,
    i36: 0,
    i23: 0,
    i50: 0,
    i48: 0,
    i49: 0,
    i51: 0,
    i32: 0,
    i10: 1,
    i13: 1,
    i35: 0,
    i33: 0,

    i201: 1, //Не конфигурируется вручную 6??

    i54: 0,
    i1: 1,
    i7: 1,
    i44: 0,
    i41: 0,
    i53: 0,
    // i302: 0,
    // i303: 0,
    // i304: 0,
    // i305: 0,
    // i306: 0,
    // i307: 0,
    i39: 1,
    i38: 0,
    i21: 1,
    i46: 0,
    i12: 0,
    i11: 1,

    i28: 0,
    i29: 0,
    i31: 0,
    i30: 1,
    i22: 0,
    i4: 0,
    i2: 1,
    i3: 0,
    i5: 0,
    i25: 0,
    i27: 0,
    i26: 0,
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

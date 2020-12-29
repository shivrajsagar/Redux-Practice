/* eslint-disable import/no-anonymous-default-export */
import { FETCH_WEATHER } from "../action/types";

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

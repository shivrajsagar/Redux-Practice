/* eslint-disable no-undef */
import { INCREMENT, DECREMENT } from "../action/types";

const INITIAL_STATE = {
  count: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

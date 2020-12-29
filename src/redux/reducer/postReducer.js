/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_POST,
  LOADING,
  FETCH_USERS,
  POST_VALUE,
  CREATED_POST,
} from "../action/types";

const INITIAL_STATE = {
  loading: false,

  //create post
  title: "",
  body: "",
  postdata: null,
  data: [],
  users: [],
  status: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case FETCH_POST:
      return { ...state, data: action.payload, loading: false };
    case LOADING:
      return { ...state, loading: true };
    case POST_VALUE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CREATED_POST:
      return { ...state, postdata: action.payload };
    default:
      return state;
  }
};

import { jsonPlaceholder } from "../../api";
import {
  LOADING,
  FETCH_USERS,
  FETCH_POST,
  SET_MODAL,
  POST_VALUE,
  CREATED_POST,
} from "../action/types";

const postValue = ({ prop, value }) => {
  return {
    type: POST_VALUE,
    payload: { prop, value },
  };
};

const fetchUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await jsonPlaceholder.get("/users");
    const data = await response.data;
    dispatch({
      type: FETCH_USERS,
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};

const fetchPost = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await jsonPlaceholder.get("/posts?_limit=10");
    const data = await response.data;
    dispatch({
      type: FETCH_POST,
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};

const setModal = () => (dispatch) => {
  dispatch({
    type: SET_MODAL,
  });
};

const createPost = ({ title, body }) => (dispatch) => {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => [
        console.log(data),
        dispatch({
          type: CREATED_POST,
          payload: data,
        }),
      ]);
  } catch (e) {
    console.log(e);
  }
};

const updatePost = ({ id, title, body }) => (dispatch) => {
  try {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ id, title, body }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  } catch (e) {
    console.log(e);
  }
};
const DeletePost = ({ id }) => async () => {
  await jsonPlaceholder.delete(`/posts/${id}`);
};

export {
  fetchUser,
  fetchPost,
  createPost,
  updatePost,
  DeletePost,
  setModal,
  postValue,
};

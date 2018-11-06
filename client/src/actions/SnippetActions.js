import {
  GET_SNIPPETS,
  ADD_SNIPPET,
  DELETE_SNIPPET,
  SNIPPETS_LOADING
} from "./types";
import axios from "axios";

export const getSnippets = () => dispatch => {
  dispatch(setSnippetsLoading());
  axios.get("/api/snippets").then(res =>
    dispatch({
      type: GET_SNIPPETS,
      payload: res.data
    })
  );
};

export const deleteSnippet = id => {
  return {
    type: DELETE_SNIPPET,
    payload: id
  };
};

export const addSnippet = snippet => {
  return {
    type: ADD_SNIPPET,
    payload: snippet
  };
};

export const setSnippetsLoading = () => {
  return {
    type: SNIPPETS_LOADING
  };
};

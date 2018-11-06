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

export const addSnippet = snippet => dispatch => {
  axios.post("/api/snippets", snippet).then(res =>
    dispatch({
      type: ADD_SNIPPET,
      payload: res.data
    })
  );
};

export const deleteSnippet = _id => dispatch => {
  axios.delete(`/api/snippets/${_id}`).then(res =>
    dispatch({
      type: DELETE_SNIPPET,
      payload: _id
    })
  );
};

export const setSnippetsLoading = () => {
  return {
    type: SNIPPETS_LOADING
  };
};

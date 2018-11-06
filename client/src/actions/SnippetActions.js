import { GET_SNIPPETS, ADD_SNIPPET, DELETE_SNIPPET } from "./types";

export const getSnippets = () => {
  return {
    type: GET_SNIPPETS
  };
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

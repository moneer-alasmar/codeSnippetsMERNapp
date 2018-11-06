import { GET_SNIPPETS, ADD_SNIPPET, DELETE_SNIPPET } from './types';

export const getSnippets = () => {
  return {
    type: GET_SNIPPETS
  };
};
import uuid from "uuid";
import {
  GET_SNIPPETS,
  ADD_SNIPPET,
  DELETE_SNIPPET,
  SNIPPETS_LOADING
} from "../actions/types";

const initialState = {
  snippets: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SNIPPETS:
      return {
        ...state,
        snippets: action.payload,
        loading: false
      };
    case DELETE_SNIPPET:
      return {
        ...state,
        snippets: state.snippets.filter(
          snippet => snippet._id !== action.payload
        )
      };
    case ADD_SNIPPET:
      return {
        ...state,
        snippets: [action.payload, ...state.snippets]
      };
    case SNIPPETS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

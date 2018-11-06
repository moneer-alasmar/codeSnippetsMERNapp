import uuid from "uuid";
import { GET_SNIPPETS, ADD_SNIPPET, DELETE_SNIPPET } from "../actions/types";

const initialState = {
  snippets: [
    { id: uuid(), title: "JavaScript", snippet: "console.log(123)" },
    { id: uuid(), title: "JavaScript ES6", snippet: "console.log(456)" },
    { id: uuid(), title: "JavaScript React", snippet: "console.log(789)" },
    { id: uuid(), title: "JavaScript Angular", snippet: "console.log(111)" },
    { id: uuid(), title: "JavaScript Vue", snippet: "console.log(222)" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SNIPPETS:
      return {
        ...state
      };
    case DELETE_SNIPPET:
      return {
        ...state,
        snippets: state.snippets.filter(
          snippet => snippet.id !== action.payload
        )
      };
    case ADD_SNIPPET:
      return {
        ...state,
        snippets: [action.payload, ...state.snippets]
      };
    default:
      return state;
  }
}

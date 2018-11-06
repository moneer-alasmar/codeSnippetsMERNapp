import { combineReducers } from 'redux';
import snippetReducer from './snippetReducer';

export default combineReducers({
  snippet: snippetReducer
});
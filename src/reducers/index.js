import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import authentication from './authentication';
import questions from './questions';
import users from './users';


export default combineReducers({
  loadingBar: loadingBarReducer,
  authentication,
  questions,
  users,
});

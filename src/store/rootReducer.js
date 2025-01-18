import { combineReducers } from 'redux';
import userReducer from '../store/user/userReducer';
import questionReducer from './question/questionReducer';

export default combineReducers({
  users: userReducer,
  questions : questionReducer,
});
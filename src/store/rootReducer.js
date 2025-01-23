import { combineReducers } from 'redux';
import userReducer from '../store/user/userReducer';
import questionReducer from './question/questionReducer';
import userTestReducer from './userTest/userTestReducer';

export default combineReducers({
  users: userReducer,
  questions : questionReducer,
  userTest : userTestReducer
});
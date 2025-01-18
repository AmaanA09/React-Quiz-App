import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/users';

function* fetchUsers() {
    try {
      const response = yield call(axios.get, apiUrl);
      yield put({ type: "FETCH_USERS_SUCCESS", payload: response.data });
    } catch (error) {
      yield put({ type: "FETCH_USERS_FAILURE", payload: error.message });
    }
  }

  function* addUser(action) {
    try {
      const response = yield call(axios.post, apiUrl, action.payload);
      yield put({ type: "ADD_USER_SUCCESS", payload: response.data });
    } catch (error) {
      yield put({ type: "ADD_USER_FAILURE", payload: error.message });
    }
  }

  function* watchFetchUsers() {
    yield takeLatest("FETCH_USER_REQUEST", fetchUsers);
  }
  
  function* watchAddUser() {
    yield takeLatest("ADD_USER_REQUEST", addUser);
  }


  export default function* userSaga() {
    yield all([
      fork(watchFetchUsers),
      fork(watchAddUser),
    ]);
  }
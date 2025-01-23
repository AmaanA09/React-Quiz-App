import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/userTest';

function* fetchUserTest() {
    try {
      const response = yield call(axios.get, apiUrl);
      yield put({ type: "FETCH_USERTEST_SUCCESS", payload: response.data });
    } catch (error) {
      yield put({ type: "FETCH_USERTEST_FAILURE", payload: error.message });
    }
  }

  function* addUserTest(action) {
    try {
      const response = yield call(axios.post, apiUrl, action.payload);
      yield put({ type: "ADD_USERTEST_SUCCESS", payload: response.data });
    } catch (error) {
      yield put({ type: "ADD_USERTEST_FAILURE", payload: error.message });
    }
  }
  function* updateUserTest(action) {
    try {
      const response = yield call(axios.post, apiUrl, action.payload);
      yield put({ type: "UPDATE_USERTEST_SUCCESS", payload: response.data });
    } catch (error) {
      yield put({ type: "UPDATE_USERTEST_FAILURE", payload: error.message });
    }
  }

  function* watchFetchUserTest() {
    yield takeLatest("FETCH_USERTEST_REQUEST", fetchUserTest);
  }

  function* watchUpdateUserTest() {
    yield takeLatest("UPDATE_USERTEST_REQUEST", updateUserTest);
  }
  
  function* watchAddUserTest() {
    yield takeLatest("ADD_USERTEST_REQUEST", addUserTest);
  }


  export default function* userTestSaga() {
    yield all([
      fork(watchFetchUserTest),
      fork(watchAddUserTest),
      fork(watchUpdateUserTest),
    ]);
  }
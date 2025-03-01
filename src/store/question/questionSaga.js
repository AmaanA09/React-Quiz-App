import { takeLatest, call, put, all, fork } from 'redux-saga/effects';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/questions';

function* fetchQuestions() {
    try {
      const response = yield call(axios.get, apiUrl);
      yield put({ type: "FETCH_QUESTIONS_SUCCESS", payload: response.data });
    } catch (error) {
      yield put({ type: "FETCH_QUESTIONS_FAILURE", payload: error.message });
    }
  }

  function* addQuestions(action) {
    console.log(action)
    try {
      const response = yield call(axios.post, apiUrl, action.payload);
      yield put({ type: "ADD_QUESTIONS_SUCCESS", payload: response.data });
    } catch (error) {
      console.log("error=>",error)
      yield put({ type: "ADD_QUESTIONS_FAILURE", payload: error.message });
    }
  }

  function* updateQuestions(action) {
    console.log(action)
    try {
      const response = yield call(axios.put, `${apiUrl}/${action.payload.id}`, action.payload);
      yield put({ type: "UPDATE_QUESTIONS_SUCCESS", payload: response.data });
    } catch (error) {
      console.log("error=>",error)
      yield put({ type: "UPDATE_QUESTIONS_FAILURE", payload: error.message });
    }
  }

  function* deleteQuestions(action) {
    console.log(action)
    try {
      yield call(axios.delete, `${apiUrl}/${action.payload}`, action.payload);
      yield put({ type: "DELETE_QUESTIONS_SUCCESS", payload: action.payload });
    } catch (error) {
      console.log("error=>",error)
      yield put({ type: "DELETE_QUESTIONS_FAILURE", payload: error.message });
    }
  }

  function* watchFetchQuestions() {
    yield takeLatest("FETCH_QUESTIONS_REQUEST", fetchQuestions);
  }
  
  function* watchAddQuestions() {
    yield takeLatest("ADD_QUESTIONS_REQUEST", addQuestions);
  }
  function* watchUpdateQuestions() {
    yield takeLatest("UPDATE_QUESTIONS_REQUEST", updateQuestions);
  }
  function* watchDeleteQuestions() {
    yield takeLatest("DELETE_QUESTIONS_REQUEST", deleteQuestions);
  }


  export default function* questionsSaga() {
    yield all([
      fork(watchFetchQuestions),
      fork(watchAddQuestions),
      fork(watchUpdateQuestions),
      fork(watchDeleteQuestions),
    ]);
  }
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

  function* watchFetchQuestions() {
    yield takeLatest("FETCH_QUESTIONS_REQUEST", fetchQuestions);
  }
  
  function* watchAddQuestions() {
    yield takeLatest("ADD_QUESTIONS_REQUEST", addQuestions);
  }


  export default function* questionsSaga() {
    yield all([
      fork(watchFetchQuestions),
      fork(watchAddQuestions),
    ]);
  }
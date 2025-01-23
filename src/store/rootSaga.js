import { all } from "redux-saga/effects";
import userSaga from "../store/user/userSaga";
import questionsSaga from "./question/questionSaga";
import userTestSaga from "./userTest/userTestSaga";
// import questionSaga from "../store/user/";


export default function* rootSaga() {
  yield all([userSaga(), questionsSaga(),userTestSaga()]);
}
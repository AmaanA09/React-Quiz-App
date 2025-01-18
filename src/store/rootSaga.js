import { all } from "redux-saga/effects";
import userSaga from "../store/user/userSaga";
import questionsSaga from "./question/questionSaga";
// import questionSaga from "../store/user/";


export default function* rootSaga() {
  yield all([userSaga(), questionsSaga()]);
}
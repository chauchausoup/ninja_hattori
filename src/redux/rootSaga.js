import { all} from "redux-saga/effects";
import {personSaga} from './persons/persons.saga'

export default function* rootSaga() {
  yield all([
    personSaga(),
  ]);
}

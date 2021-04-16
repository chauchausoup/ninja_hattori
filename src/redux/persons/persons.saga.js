import axios from "axios";
import { put, all, takeLatest, takeEvery } from "redux-saga/effects";
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  randomizePersons,
  randomizeImagesAppend,
  voteUserState,
} from "./persons.actions";

import * as personTypes from "./persons.types";

export function* fetchUsersSaga() {
  try {
    let response = yield axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const persons = normalizeResponse(response.data);
    yield put(fetchUsersSuccess(persons));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

//update user state after randomizing

export function* randomizeUsersSaga(action) {
  try {
    yield put(randomizePersons(action.payload));
  } catch (error) {
    console.log("there was an error in user randomization");
  }
}

export function* randomizeImagesSaga(action) {
  try {
    console.log(action.payload);

    const cardStatesRandomized = action.payload.map((item, index) => {
      item.image = item.image + index;
      return item;
    });

    yield put(randomizeImagesAppend(cardStatesRandomized));
  } catch (error) {
    console.log("image randomization error");
  }
}

export function* voteStateSaga(action) {
  try {
    const { userData, username } = action.payload;

    const somePayload = userData.map((item, index) => {
      if (item.username === username) {
        item.vote++;
      }
      return item;
    });

    yield put(voteUserState(somePayload));
  } catch (error) {
    console.log(error.message);
  }
}

//WATCHERS
export function* watchFetchUser() {
  yield takeEvery(personTypes.FETCH_USER_START, fetchUsersSaga);
}

export function* watchRandomizeUserSaga() {
  yield takeEvery(personTypes.RANDOMIZE_PERSONS_SAGA, randomizeUsersSaga);
}

export function* watchRandomizeImagesSaga() {
  yield takeEvery(personTypes.RANDOMIZE_IMAGES_SAGA, randomizeImagesSaga);
}

export function* watchVoteStateSaga() {
  yield takeEvery(personTypes.VOTE_STATE_SAGA, voteStateSaga);
}

export function* personSaga() {
  yield all([
    watchFetchUser(),
    watchRandomizeUserSaga(),
    watchRandomizeUserSaga(),
    watchVoteStateSaga()
  ]);
}

//HELPERS

//normalization

const normalizeResponse = (response) => {
  const norm = response.map((item, index) => {
    return {
      id: item.id,
      name: item.name,
      username: item.username,
      vote: 0,
      image: `https://robohash.org/${item.id}`,
    };
  });
  return norm;
};

//handlers

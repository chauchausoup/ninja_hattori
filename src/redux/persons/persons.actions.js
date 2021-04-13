import axios from "axios";
import store from "../store/store";

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  RANDOMIZE_PERSONS,
  VOTE_STATE,
} from "./persons.types";

// export var initialVoteState = [];

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const persons = response.data.map((item, index) => {
          return {
            id: item.id,
            name: item.name,
            username: item.username,
            vote: 0,
          };
        });
        //lets make here some JSON to store initial username and vote cout of each users
        dispatch(fetchUsersSuccess(persons));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const randomizeUsers = () => {
  return (dispatch) => {
    // console.log("present state", store.getState());
    dispatch(randomizePersons(store.getState().persons.users));
  };
};

export const voteState = (username) => {
  console.log(username + " from actions");
  const priorUsers = store.getState().persons.users;

  // var somePayload = [];

  var somePayload = priorUsers.map((item, index) =>
    item.username === username
      ? {
          id: item.id,
          name: item.name,
          username: item.username,
          vote: item.vote++,
        }
      : item
  );

  console.log(somePayload);

  return (dispatch) => {
    dispatch(voteUserState(somePayload));
  };
};

export const randomizePersons = (persons) => {
  //source : https://javascript.info/task/shuffle

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return {
    type: RANDOMIZE_PERSONS,
    payload: shuffle(persons),
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUsersSuccess = (persons) => {
  // console.log(JSON.stringify(persons) +  "  from success")
  return {
    type: FETCH_USER_SUCCESS,
    payload: persons,
  };
};

export const fetchUsersFailure = (err_message) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: err_message,
  };
};

export const voteUserState = (somePayload) => {
  console.log(JSON.stringify(somePayload) + " some payload from payload");

  return {
    type: VOTE_STATE,
    payload: somePayload,
  };
};

import axios from "axios";
import store from "../store/store";

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  RANDOMIZE_PERSONS,
} from "./persons.types";

export var initialVoteState = [];

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const persons = response.data;
        //lets make here some JSON to store initial username and vote cout of each users

        persons.map((item, index) => {
          initialVoteState.push({
            username: item.username,
            vote: 1,
          });
        });

        dispatch(fetchUsersSuccess(persons));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const randomizeUsers = () => {
  return (dispatch) => {
    console.log("present state", store.getState());
    dispatch(randomizePersons(store.getState().persons.users));
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

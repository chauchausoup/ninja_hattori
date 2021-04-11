import axios from "axios";
import store from '../store/store'




import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  RANDOMIZE_PERSONS,
} from "./persons.types";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const persons = response.data;
        dispatch(fetchUsersSuccess(persons));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const randomizeUsers = () => {
  return (dispatch) => {
   
      console.log("present state", store.getState())
      dispatch(randomizePersons(store.getState().persons.users));
    
  };
};

export const randomizePersons = (persons) => {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
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

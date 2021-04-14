import axios from "axios";
import store from "../store/store";
import { personsReducer } from "./persons.reducer";

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  RANDOMIZE_PERSONS,
  VOTE_STATE,
  EDITING_USERNAME,
  DELETING_USERNAME,
} from "./persons.types";

//normalization
const normalizeResponse = (response) => {
  const norm = response.map((item, index) => {
    return {
      id: item.id,
      name: item.name,
      username: item.username,
      vote: 0,
    };
  });
  return norm;
};

//first initial fetching of the user state
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest(true));
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const persons = normalizeResponse(response.data);
        console.log(persons + " pers");
        dispatch(fetchUsersSuccess(persons));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

//deleting the state of the user if someone deleted the user from the main state
export const deletingUsername = (username) => {
  return (dispatch) => {
    const deletedUser = { ...username };
    dispatch(deletingUsernameCaller(deletedUser));
  };
};

//editing the state of the users if some one updates / edits the username
export const editingUsername = (username) => {
  return (dispatch) => {
    const editedUser = { ...username };
    dispatch(editingUsernameCaller(editedUser));
  };
};

//update user state after randomizing
export const randomizeUsers = () => {
  return (dispatch) => {
    console.log("present state", store.getState());
    dispatch(randomizePersons(store.getState().persons.users));
  };
};

//updating users state after voting
export const voteState = (userData,username) => {
  
  const somePayload=userData.map((item,index)=>{
    if(item.username === username){
      item.vote++
    }
    return item;

  })

 
  
 

  return (dispatch) => {
    dispatch(voteUserState(somePayload));
  };
};

export const randomizePersons = (persons) => {
  //source : https://javascript.info/task/shuffle

  return {
    type: RANDOMIZE_PERSONS,
    payload: persons,
  };
};

export const fetchUsersRequest = (data) => {
  return {
    type: FETCH_USER_REQUEST,
    payload: data,
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

export const editingUsernameCaller = (editedUsers) => {
  return {
    type: EDITING_USERNAME,
    payload: editedUsers,
  };
};

export const deletingUsernameCaller = (deletedUsers) => {
  return {
    type: DELETING_USERNAME,
    payload: deletedUsers,
  };
};

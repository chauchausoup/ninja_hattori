// import axios from "axios";
import store from "../store/store";

import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  RANDOMIZE_PERSONS,
  VOTE_STATE,
  EDITING_USERNAME,
  DELETING_USERNAME,
  RANDOMIZE_IMAGES,
  FETCH_USER_START,
  RANDOMIZE_PERSONS_SAGA,
  RANDOMIZE_IMAGES_SAGA,
  VOTE_STATE_SAGA,
  DELETING_USERNAME_SAGA,
  EDITING_USERNAME_SAGA,
} from "./persons.types";

export const fetchUsers = () => {
  return {
    type: FETCH_USER_START,
  };
};

//update user state after randomizing
export const randomizeUsers = () => {
  return {
    type: RANDOMIZE_PERSONS_SAGA,
    payload: store.getState().persons.users,
  };
};

export const randomizePersons = (persons) => {
  //source : https://javascript.info/task/shuffle

  return {
    type: RANDOMIZE_PERSONS,
    payload: persons,
  };
};

//randomize images

export const randomizeImages = (cardStates) => {
  return {
    type: RANDOMIZE_IMAGES_SAGA,
    payload: cardStates,
  };
};

export const randomizeImagesAppend = (userState) => {
  return {
    type: RANDOMIZE_IMAGES,
    payload: userState,
  };
};

//updating users state after voting

export const voteState = (userData, username) => {
  return {
    type: VOTE_STATE_SAGA,
    payload: { userData, username },
  };
};

export const voteUserState = (somePayload) => {
  return {
    type: VOTE_STATE,
    payload: somePayload,
  };
};

//deleting the state of the user if someone deleted the user from the main state
export const deletingUsername = (userData, username) => {
  return {
    type: DELETING_USERNAME_SAGA,
    payload: { userData, username },
  };
};

export const deletingUsernameCaller = (deletedUsers) => {
  return {
    type: DELETING_USERNAME,
    payload: deletedUsers,
  };
};

//editing the state of the users if some one updates / edits the username
export const editingUsername = (userData, parentUser, editedUsername) => {
  return {
    type: EDITING_USERNAME_SAGA,
    payload: { userData, parentUser, editedUsername },
  };
};

export const editingUsernameCaller = (editedUsers) => {
  return {
    type: EDITING_USERNAME,
    payload: editedUsers,
  };
};

//user fetchers

export const fetchUsersStart = () => {
  return {
    type: FETCH_USER_START,
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

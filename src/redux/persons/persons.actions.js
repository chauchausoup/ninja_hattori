import axios from "axios";
import store from "../store/store";

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  RANDOMIZE_PERSONS,
  VOTE_STATE,
  EDITING_USERNAME,
  DELETING_USERNAME,
  RANDOMIZE_IMAGES,
} from "./persons.types";

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

// const roboHashURL = "https://robohash.org/";
//first initial fetching of the user state
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest(true));
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const persons = normalizeResponse(response.data);
      dispatch(fetchUsersSuccess(persons));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

//randomize images

export const randomizeImages = (cardStates) => {
  console.log(cardStates, "card states");
  const cardStatesRandomized = cardStates.map((item, index) => {
    console.log(item.image, "item image");
    item.image = item.image + index;
    return item;
  });
  return (dispatch) => {
    dispatch(randomizeImagesAppend(cardStatesRandomized));
  };
};

//update user state after randomizing
export const randomizeUsers = () => {
  return (dispatch) => {
    dispatch(randomizePersons(store.getState().persons.users));
  };
};

//updating users state after voting
export const voteState = (userData, username) => {
  const somePayload = userData.map((item, index) => {
    if (item.username === username) {
      item.vote++;
    }
    return item;
  });

  return (dispatch) => {
    dispatch(voteUserState(somePayload));
  };
};

//deleting the state of the user if someone deleted the user from the main state
export const deletingUsername = (userData, username) => {
  const deletedUser = userData.users.filter(
    (item) => item.username !== username
  );

  return (dispatch) => {
    dispatch(deletingUsernameCaller(deletedUser));
  };
};

//editing the state of the users if some one updates / edits the username
export const editingUsername = (userData, parentUser, editedUsername) => {
  let editedUser = userData.users.map((item, index) => {
    if (item.username === parentUser) {
      item["username"] = editedUsername;
    }
    return item;
  });

  return (dispatch) => {
    dispatch(editingUsernameCaller(editedUser));
  };
};

export const fetchUsersRequest = (data) => {
  return {
    type: FETCH_USER_REQUEST,
    payload: data,
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

export const randomizePersons = (persons) => {
  //source : https://javascript.info/task/shuffle

  return {
    type: RANDOMIZE_PERSONS,
    payload: persons,
  };
};

export const randomizeImagesAppend = (userState) => {
  return {
    type: RANDOMIZE_IMAGES,
    payload: userState,
  };
};

export const voteUserState = (somePayload) => {
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

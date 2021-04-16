// import axios from "axios";
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
  FETCH_USER_SAGA,
  FETCH_USER_START,
  RANDOMIZE_PERSONS_SAGA,
  RANDOMIZE_IMAGES_SAGA,
  VOTE_STATE_SAGA
} from "./persons.types";

//normalization : HELPER FUNCTION
// const normalizeResponse = (response) => {
//   const norm = response.map((item, index) => {
//     return {
//       id: item.id,
//       name: item.name,
//       username: item.username,
//       vote: 0,
//       image: `https://robohash.org/${item.id}`,
//     };
//   });
//   return norm;
// };

// const roboHashURL = "https://robohash.org/ ";
//first initial fetching of the user state
// export const fetchUsers = () => {
//   return async (dispatch) => {
//     dispatch(fetchUsersRequest(true));
//     try {
//       let response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const persons = normalizeResponse(response.data);
//       dispatch(fetchUsersSuccess(persons));
//     } catch (error) {
//       dispatch(fetchUsersFailure(error.message));
//     }
//   };
// };

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

//updating users state after voting
export const voteState = (userData, username) => {
  return {
    type: VOTE_STATE_SAGA,
    payload: {userData,username}
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

// export const fetchUsersRequest = (data) => {
//   return {
//     type: FETCH_USER_REQUEST,
//     payload: data,
//   };
// };

// export const fetchUsersSuccess = (persons) => {
//   return {
//     type: FETCH_USER_SUCCESS,
//     payload: persons,
//   };
// };

// export const fetchUsersFailure = (err_message) => {
//   return {
//     type: FETCH_USER_FAILURE,
//     payload: err_message,
//   };
// };

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

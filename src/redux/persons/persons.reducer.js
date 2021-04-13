//lets import action type
import {
  RANDOMIZE_PERSONS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  VOTE_STATE,
} from "./persons.types";

const initialPersonState = {
  loading: false,
  users: [],
  error: "",
};

export const personsReducer = (state = initialPersonState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_REQUEST:
      return {
        loading: true,
        users: [],
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    case RANDOMIZE_PERSONS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case VOTE_STATE:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    default:
      return state;
  }
};

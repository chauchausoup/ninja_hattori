//lets import action type
import {
  RANDOMIZE_PERSONS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  VOTE_STATE,
} from "./persons.types";

//initial state for our vote reducer
const initialVoteState = [{ "": 1 }];

const personsVoteReducer = (state = initialVoteState, action) => {
  switch (action.type) {
    case VOTE_STATE:
      return {
      
        
      };
    default:
      return state;
  }
};

//initial state for our person reducer
const initialPersonState = {
  loading: false,
  users: [],
  error: "",
};

const personsReducer = (state = initialPersonState, action) => {
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
      // console.log(state);
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    default:
      return state;
  }
};

export default personsReducer;

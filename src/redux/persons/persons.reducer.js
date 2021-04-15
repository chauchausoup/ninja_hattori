//lets import action type
import {
  RANDOMIZE_PERSONS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  VOTE_STATE,
  EDITING_USERNAME,
  DELETING_USERNAME,
  RANDOMIZE_IMAGES

} from "./persons.types";

//combine reducer from redux

const initialPersonState = {
  loading: false,
  users: [],
  error: "",
};

export const personsReducer = (state = initialPersonState, action) => {
  //shuffling function for randomizing the user array

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  switch (action.type) {
    case FETCH_USER_SUCCESS:
      // console.log(action.payload,"action payload")
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case RANDOMIZE_PERSONS:
      return {
        loading: false,
        users: shuffle(action.payload),
        error: "",
      };

    case RANDOMIZE_IMAGES:
        return{
          loading:false,
          users:action.payload,
          error:""

        }
    case VOTE_STATE:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case EDITING_USERNAME:
      return {
        loading: true,
        users: action.payload,
        error: "",
      };

    case DELETING_USERNAME:
      return {
        loading: true,
        users: action.payload,
        error: "",
      };

    default:
      return state;
  }
};

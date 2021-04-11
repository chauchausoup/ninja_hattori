//lets import action type
import {
  RANDOMIZE_PERSONS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
} from "./persons.types";

//initial state for our reducer
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// id: "1",
// firstName: "Anish",
// username: "ans",
// email: "abc@email.com",
// address: {
//     street: "Kulas Light",
//   suite: "123 suite",
//   city: "Pokhara",
//   zipcode: "44567",
//   geo: {
//     lat: "123123",
//     lng: "123123",
//   },
// }

const personsReducer = (state = initialState, action) => {
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

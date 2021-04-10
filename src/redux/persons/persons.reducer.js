//lets import action type
import { UPDATE_PERSONS } from "./persons.types";

//initial state for our reducer
const initialState = [
  {
    id: "1",
    firstName: "Anish",
    username: "ans",
    email: "abc@email.com",
    address: {
      street: "Kulas Light",
      suite: "123 suite",
      city: "Pokhara",
      zipcode: "44567",
      geo: {
        lat: "123123",
        lng: "123123",
      },
    },
  },
];

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
    case UPDATE_PERSONS:
      console.log(state)
      return {
        ...state
      };
    default:
      return state;
  }
};


export default personsReducer;

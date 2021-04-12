//lets import action type
import {
    VOTE_STATE
  } from "./votes.types";
  
  //initial state for our reducer
  const initialState = [{
      username:"",
      vote:1
  }];
  
  const votesReducer = (state = initialState, action) => {
    switch (action.type) {
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
  
  export default personsReducer;
  
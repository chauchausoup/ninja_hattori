import { combineReducers } from 'redux'

import {personsReducer} from './persons/persons.reducer'

const rootReducer = combineReducers({
  persons: personsReducer,
  // votes:personsVoteReducer
})

export default rootReducer



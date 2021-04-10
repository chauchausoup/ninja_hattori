import { combineReducers } from 'redux'

import personsReducer from './persons/persons.reducer'

const rootReducer = combineReducers({
  persons: personsReducer
})

export default rootReducer
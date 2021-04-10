import {createStore} from "redux"
import personsReducer from '../persons/persons.reducer'


const store = createStore(personsReducer)

export default store
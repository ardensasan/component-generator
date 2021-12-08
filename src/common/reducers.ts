import { combineReducers } from 'redux'
import users from "../components/Users/reducers"
//REDUCER IMPORTS
const allReducer = combineReducers({
users : users, 
//REDUCERS
})
export default allReducer
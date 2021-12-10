import { combineReducers } from 'redux'
import user from "../components/User/reducer"
//REDUCER IMPORTS

const allReducer = combineReducers({
user : user, 
//REDUCERS
})
export default allReducer
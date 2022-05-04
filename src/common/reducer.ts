import { combineReducers } from 'redux'
import user from "../components/User/reducer"
import customer from "../components/Customer/reducer"
//REDUCER IMPORTS
const allReducer = combineReducers({ 
user : user, 
customer : customer, 
//REDUCERS
})
export default allReducer
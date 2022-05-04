import { spawn } from '@redux-saga/core/effects'
import userRootSaga from '../components/User/saga'
import customerRootSaga from '../components/Customer/saga'
//SAGA IMPORTS
export default function* rootSaga(){
    yield spawn(()=>{})
yield spawn(userRootSaga)
yield spawn(customerRootSaga)
//SPAWN SAGAS
}
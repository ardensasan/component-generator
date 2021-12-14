import { spawn } from '@redux-saga/core/effects'
import userRootSaga from '../components/User/saga'
//SAGA IMPORTS
export default function* rootSaga(){
    yield spawn(()=>{})
yield spawn(userRootSaga)
//SPAWN SAGAS
}
import { spawn } from '@redux-saga/core/effects'
import usersRootSaga from '../components/Users/sagas'
//SAGA IMPORTS
export default function* rootSaga(){
    yield spawn(()=>{})
    yield spawn(usersRootSaga)
//SPAWN SAGAS
}
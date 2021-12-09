import * as types from "./actionTypes";

import {
    take,
    takeEvery,
    takeLatest,
    put,
    all,
    delay,
    fork,
    call,
} from "redux-saga/effects";

import { loadUsersSuccess,loadUsersError,createUserSuccess,createUserError,deleteUserSuccess,deleteUserError, updateUserSuccess, updateUserError } from "./actions";
import { loadUsersApi,createUserApi,deleteUserApi, updateUserApi } from "./api";

///////////////////////START Async/////////////////////

 function* onLoadUsersStartAsync () {
    try {
        const response = yield call(loadUsersApi);
        if(response.status === 200){
            yield delay(500);
            yield put(loadUsersSuccess(response.data))
        }
    }catch(error) {
            yield put(loadUsersError(error.response.data));
        }

}

 function* onCreateUserStartAsync ({payload}) {
    try {
        const response = yield call(createUserApi,payload);
        if(response.status === 200){
          
            yield put(createUserSuccess(response.data))
        }
    }catch(error) {
            yield put(createUserError(error.response.data));
        }

}
 function* onDeleteUserStartAsync (id){
    try {
        const response = yield call(deleteUserApi,id);
        if(response.status === 200){
            yield delay(500);
            yield put(deleteUserSuccess(id))
        }
    }catch(error) {
            yield put(deleteUserError(error.response.data));
        }
 }

 function* onUpdateUserStartAsync({payload: {id, info}}) {
    try {
        const response = yield call(updateUserApi,id, info);
        if(response.status === 200){
          
            yield put(updateUserSuccess())
        }
    }catch(error) {
            yield put(updateUserError(error.response.data));
        }

}



////////////////////ON////////////////////

 function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}

function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync)
}

function* onDeleteUser() {
  while (true) {
      const {payload : id} = yield take(types.DELETE_USER_START);
      yield call(onDeleteUserStartAsync, id)
  }
}
function* onUpdateUser() {
    yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync)
}


///////////////////////SAGAS////////////////////////

const userSagas = [
    fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser), fork(onUpdateUser)
]
export default function* rootSaga() {
    yield all([...userSagas]);
}
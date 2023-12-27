import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';
import axios from 'axios';

function loginAPI(data){
    return axios.post('/api/login', data);
}

function* login(action) {
    try {
        console.log('saga logIn');
        // const result = yield call(loginAPI, action.data);
        yield delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            // data: result.data
        });
    } catch(err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        });
    }
}

function logoutAPI(){
    return axios.post('/api/logout');
}

function* logout() {
    try{
        // const result = yield call(logoutAPI);
        yield delay(1000);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        });
    } catch(err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data
        });
    }
}

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', login);
 }
 
 function*  watchLogOut(){
     yield takeLatest('LOG_OUT_REQUEST', logout);
 }

export default function* userSaga() {
    yield all ([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}
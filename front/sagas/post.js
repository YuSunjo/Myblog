import { all, fork, takeLatest, delay, put } from "redux-saga/effects";
import axios from 'axios';

function addPostAPI(data) {
    return axios.post('/api/addPost', data);
}
function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: 'ADD_POST_SUCCESS',
            // data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: 'ADD_POST_FAILURE',
            error: error.response.data,
        });
    }
}

function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ]);
}
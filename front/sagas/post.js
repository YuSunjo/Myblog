import { all, fork, takeLatest, delay, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,

} from '../reducers/post';

function addPostAPI(data) {
    return axios.post('/post', data);
}
function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: ADD_POST_FAILURE,
            error: error.response.data,
        });
    }
}

function loadPostsAPI(data) {
    return axios.post('/api/loadPosts', data);
}
function* loadPosts(action) {
    try {
        // const result = yield call(loadPostsAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOAD_POSTS_SUCCESS,
            // data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchLoadPosts() {
    yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadPosts),
        fork(watchAddPost),
    ]);
}
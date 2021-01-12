export const initialState = {
    mainPosts: [{
        id: 1,
        title: 'title입니다.',
        content: 'tnswh',
        Images: [{
            src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2207573D58CFDE2704&imgrefurl=https%3A%2F%2Fjungjeok.tistory.com%2F137&tbnid=_nfOHvvh-YIzCM&vet=12ahUKEwjZ2OvoltztAhWMAJQKHW_PAkwQMygCegUIARDeAQ..i&docid=7AcBUaEcAJRN3M&w=800&h=400&q=%EB%9D%BC%EC%9D%B4%EC%96%B8&ved=2ahUKEwjZ2OvoltztAhWMAJQKHW_PAkwQMygCegUIARDeAQ',
        }, {
            src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2207573D58CFDE2704&imgrefurl=https%3A%2F%2Fjungjeok.tistory.com%2F137&tbnid=_nfOHvvh-YIzCM&vet=12ahUKEwjZ2OvoltztAhWMAJQKHW_PAkwQMygCegUIARDeAQ..i&docid=7AcBUaEcAJRN3M&w=800&h=400&q=%EB%9D%BC%EC%9D%B4%EC%96%B8&ved=2ahUKEwjZ2OvoltztAhWMAJQKHW_PAkwQMygCegUIARDeAQ',
        }, {
            src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2207573D58CFDE2704&imgrefurl=https%3A%2F%2Fjungjeok.tistory.com%2F137&tbnid=_nfOHvvh-YIzCM&vet=12ahUKEwjZ2OvoltztAhWMAJQKHW_PAkwQMygCegUIARDeAQ..i&docid=7AcBUaEcAJRN3M&w=800&h=400&q=%EB%9D%BC%EC%9D%B4%EC%96%B8&ved=2ahUKEwjZ2OvoltztAhWMAJQKHW_PAkwQMygCegUIARDeAQ',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와!!!',
        }, {
            User: {
                nickname: 'hero',
            },
            constent: '오오오오',
        }],
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => {
    return {
        type: ADD_POST_REQUEST,
        data,
    };
};

const dummyPost = {
    id: 2,
    title: 'title입니다.',
    content: 'dummy data',
    User: {
        id: 1,
        nickname: 'tnswh',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST_REQUEST:
        return {
            ...state,
            addPostLoading: true,
            addPostDone: false,
            addPostError: null,
        };
    case ADD_POST_SUCCESS:
        return {
            ...state,
            mainPosts: [dummyPost, ...state.mainPosts],
            addPostLoading: false,
            addPostDone: true,
        };
    case ADD_POST_FAILURE:
        return {
            ...state,
            addPostLoading: false,
            addPostError: action.error,
        };
    default:
        return state;
    }
};

export default reducer;
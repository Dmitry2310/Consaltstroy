import { START_LOADING, END_LOADING, FETCH_ALL } from "./../Constants/actionTypes";

const initialState = {
    isLoading: true,
    news: [],
    currentPage: 0,
    numberOfPages: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return { ...state, news: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages };
        /* case IS_FETCHING:
            return { ...state, isFetching: action.payload }
        case CLEAR_POST:
            return { ...state, post: action.payload };
        
        case FETCH_USERS_POSTS:
            return { ...state, usersPosts: action.payload }
        case FETCH_POST:
            return { ...state, post: action.payload };
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
        case COMMENT:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post._id == +action.payload._id) {
                        return action.payload;
                    }
                    return post;
                }),
            };
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] };
        case UPDATE:
            return {
                ...state, post: action.payload,
                posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
                usersPosts: state.usersPosts.map((post) => (post._id === action.payload._id ? action.payload : post))
            };
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) }; */
        default:
            return state;
    }
};
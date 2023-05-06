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
        default:
            return state;
    }
};
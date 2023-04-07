import { AUTH, SET_USER, CLEAR_USER } from "./../Constants/actionTypes";

const initialState = {
    profile: null,
    message: ' '
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, profile: action?.data }
        case SET_USER:
            return { ...state, profile: action.payload }
        case CLEAR_USER:
            return { ...state, profile: null };
        default:
            return state;
    }
};

export default authReducer;
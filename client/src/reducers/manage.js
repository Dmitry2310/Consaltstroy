
const initialState = {
    ref: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SCROLL_TO":
            return { ...state, ref: action.payload }
        case "CLEAR_SCROLL":
            return { ...state, ref: '' }
        default:
            return state;
    }
};
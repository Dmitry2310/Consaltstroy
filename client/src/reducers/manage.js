
const initialState = {
    ref: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GO_TO":
            return { ...state, ref: action.payload }
        default:
            return state;
    }
};
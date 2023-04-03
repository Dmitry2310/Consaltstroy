
const initialState = {
    ref: '',
    page: '',
    paragraf: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SCROLL_TO":
            return { ...state, ref: action.payload }
        case "CLEAR_SCROLL":
            return { ...state, ref: '' }
        case "GO_TO_PAGE":
            return { ...state, page: action.payload }
        case "GO_TO_PARGRAF":
            return { ...state, paragraf: action.payload }
        case "CLEAR_PAGE":
            return { ...state, page: '' }
        default:
            return state;
    }
};
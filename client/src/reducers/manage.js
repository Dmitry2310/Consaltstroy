

const initialState = {
    ref: '',
    page: 'panel1',
    paragraf: 'paragraf1.0',
    notification: ''
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
        case "NOTIFICATION":
            return { ...state, notification: action.payload }
        default:
            return state;
    }
};
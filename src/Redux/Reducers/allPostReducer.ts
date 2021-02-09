const initialState = {
};
export const allPostReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'getPosts':
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}
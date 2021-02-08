const initialState = {
}

export const singleUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'existSingleUser':
            return {
                ...state, user: action.payload
            }
        default:
            return state

    }
}
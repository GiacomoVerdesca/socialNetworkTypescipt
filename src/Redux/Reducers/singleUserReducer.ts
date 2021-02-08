const initialState = {
}

export const singleUserReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'existSingleUser':
            return {
                ...state, user: action.payload
            }
        default:
            return state

    }
}
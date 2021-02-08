const initialState = {
    users: []
};
export const allUsersReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'exist':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}
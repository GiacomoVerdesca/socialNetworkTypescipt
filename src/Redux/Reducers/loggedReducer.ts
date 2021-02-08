export const loggedReducer = (state = false, action:any)=>{
    switch(action.type){
        case 'login':
            return true
            case 'logout':
                return false
                default:
                    return state
    }
}
import { User } from "../../interface/interface";

export const getSingleUser = (allUsers:any, email:String) => {
    let Users = allUsers['users'].map((item :User)=> { return item });
    function searchSingleUser(user:User) {
        return user.email === email;
    }
    return (dispatch:Function) => {
        dispatch(getSingleUserSuccessed(Users.find(searchSingleUser)))
    }
}

export const getSingleUserSuccessed = (data:User) => {
    return {
        type: 'existSingleUser',
        payload: data
    }
}

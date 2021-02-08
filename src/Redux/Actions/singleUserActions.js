export const getSingleUser = (allUsers, email) => {
    let Users = allUsers['users'].map(item => { return item });
    function searchSingleUser(user) {
        return user.email === email;
    }
    return (dispatch) => {
        dispatch(getSingleUserSuccessed(Users.find(searchSingleUser)))
    }
}

export const getSingleUserSuccessed = (data) => {
    return {
        type: 'existSingleUser',
        payload: data
    }
}

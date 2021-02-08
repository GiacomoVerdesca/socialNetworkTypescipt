import { CallApi } from '../../service/callApi';
let service =  CallApi.getInstance();

export const getAllUsers = () => {
    return (dispatch) => {
        service.getAllUsers().then(response => response.json()).then(data => dispatch(getAllUsersSuccessed(data)))
    }
}

export const getAllUsersSuccessed = (data) => {
    return {
        type: 'exist',
        payload:  data 
    }
}
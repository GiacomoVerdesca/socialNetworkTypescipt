import { User } from '../../interface/interface';
import { CallApi } from '../../service/callApi';
let service =  CallApi.getInstance();

export const getAllUsers = () => {
    return (dispatch:Function) => {
        service.getAllUsers().then((response:any) => response.json()).then((data:[User]) => dispatch(getAllUsersSuccessed(data)))
    }
}

export const getAllUsersSuccessed = (data:[User]) => {
    return {
        type: 'exist',
        payload:  data 
    }
}
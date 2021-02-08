import { User } from "../interface/interface";
import { myFetchGet, myFetchPost, myFetchPut } from './myFetch';



var instance:any = null;
export class CallApi {
  static getInstance() {
    if (instance === null) {
      instance =  new CallApi();
    }
    return instance;
  }

  static setInstance(_instance:any) {
    instance = _instance;
  }


  //Get User Api
  getUser = (email:String) => {
    return myFetchGet('https://60181603971d850017a3f861.mockapi.io/users/?email=' + email)
  }

  getAllUsers = ()=>{
    return myFetchGet('https://60181603971d850017a3f861.mockapi.io/users/')
  }
  // getUser = async (email) => {
  //   return await fetch('https://60181603971d850017a3f861.mockapi.io/users/?email=' + email)
  // }


  //put user login
  // putUserLogin = (id, token)=>{
  //   return myFetchPut('https://60181603971d850017a3f861.mockapi.io/users/' + id,token)
  // }

  putUserLogin = async (id:String, token:String) => {
    return await fetch('https://60181603971d850017a3f861.mockapi.io/users/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token })
    })
  }


  //post User

  // postUser = (datavalue) => {
  //  let data= {
  //     name: datavalue.name,
  //     surname: datavalue.surname,
  //     avatar: datavalue.data,
  //     username: datavalue.username,
  //     email: datavalue.email,
  //     password: datavalue.password,
  //   }
  // return myFetchPost('https://60181603971d850017a3f861.mockapi.io/users/', data)
  // }


  postUser = async (datavalue:User) => {
    return await fetch('https://60181603971d850017a3f861.mockapi.io/users/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: datavalue.name,
        surname: datavalue.surname,
        avatar: datavalue.avatar,
        username: datavalue.username,
        email: datavalue.email,
        password: datavalue.password,
      }),
    });
  }

  //GetPost
  getPostsSingleUser = (iduser:Number) => {
    return myFetchGet("https://60181603971d850017a3f861.mockapi.io/users/" + iduser + "/posts")
  };
}

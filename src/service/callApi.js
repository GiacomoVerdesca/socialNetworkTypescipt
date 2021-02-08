import axios from "axios";
import "regenerator-runtime/runtime";
import { myFetchGet, myFetchPost, myFetchPut } from './myFetch';



var instance = null;
export class CallApi {
  static getInstance() {
    if (instance === null) {
      instance =  new CallApi();
    }
    return instance;
  }

  static setInstance(_instance) {
    instance = _instance;
  }


  //Get User Api
  getUser = (email) => {
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

  putUserLogin = async (id, token) => {
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


  postUser = async (datavalue) => {
    return await fetch('https://60181603971d850017a3f861.mockapi.io/users/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: datavalue.name,
        surname: datavalue.surname,
        avatar: datavalue.data,
        username: datavalue.username,
        email: datavalue.email,
        password: datavalue.password,
      }),
    });
  }

  //GetPost
  getPostsSingleUser = (iduser) => {
    return myFetchGet("https://60181603971d850017a3f861.mockapi.io/users/" + iduser + "/posts")
  };
}

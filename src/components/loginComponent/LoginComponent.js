import React, { useEffect, useState } from "react";
import { login, logout } from "../../Redux/Actions/loggedActions";
import { getAllUsers } from "../../Redux/Actions/allUsersActions";
import { getSingleUser } from "../../Redux/Actions/singleUserActions";
import { useSelector, useDispatch } from "react-redux";
import "./LoginComponent.css";
import { CallApi } from "../../service/callApi";
import { RegisterComponent } from "../registerComponent/RegisterComponent";
import "regenerator-runtime/runtime";

export const LoginComponent = () => {
  //dispatch per le azioni degli stati globali
  const dispatch = useDispatch();
  //stato globale di essere connesso
  const logged = useSelector((state) => state.loggedReducer);
  //stato globale di tutti gli user
  const allUsers = useSelector((state) => state.allUsersReducer);
  //stato globale dell' user cercato da allUsers
  const singleUser = useSelector((state) => state.singleUserReducer);

  //stato locale dati che inserisco dal form
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  //stato locale token
  const [Token, setToken] = useState("");

  const [error, setError] = useState("");

  //istanza del servizio delle chiamate api
  let service =  CallApi.getInstance();

  console.log("login: ", userLogin);
  console.log("single user stato globale: ", singleUser["user"]);

  //GIUSTO QUI HO POPOLATO LO STATO GLOBALE CON TUTTI GLI USER
  useEffect(() => {
    
    dispatch(getAllUsers());
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      singleUser["user"].email === userLogin.email &&
      singleUser["user"].password === userLogin.password
    ) {
      await service.putUserLogin(singleUser["user"].id, Token);
    } else {
      console.log("Errore email e password sbagliati");
      setError("Email o password errati. Inseriscili correttamente.");
    }
    await service
      .getUser(userLogin.email)
      .then((response) => response.json())
      .then((data) => {
        let tokenApi = data[0].token;
        if (tokenApi === Token) {
          dispatch(login());
          sessionStorage.setItem(
            "userEmail",
            JSON.stringify(singleUser["user"].email)
          );
        } else {
          console.log("Errore token api e token stato locale non sono uguali");
        }
      });
  };

  const handleChange = (event) => {
    setUserLogin((preUserLogin) => ({
      ...preUserLogin,
      [event.target.name]: event.target.value,
    }));
    generateToken();
    dispatch(getSingleUser(allUsers, userLogin.email));
  };

  const generateToken = () => {
    let rand = Math.random().toString(36).substr(2);
    let token = () => {
      let random = rand;
      for (let i = 0; i < 101; i++) {
        random = random + Math.random().toString(36).substr(2);
      }
      return random;
    };
    let tokenn = token();
    setToken(tokenn);
  };

  const refreshToken = () => {
    let rand = Math.random().toString(36).substr(2);
    let token = () => {
      let random = rand;
      for (let i = 0; i < 101; i++) {
        random = random + Math.random().toString(36).substr(2);
      }
      return random;
    };
    let tokenn = token();
    service.putUserLogin(singleUser["user"].id, tokenn);
    setTimeout(() => {
      service
        .getUser(singleUser["user"].email)
        .then((response) => response.json())
        .then((data) => {
          let refreshtokenapi = data[0].token;
          if (refreshtokenapi !== Token) {
            dispatch(logout());
            sessionStorage.removeItem("userEmail");
          }
        });
    }, 1000);
  };

  //aumentare timeout per il refresh token
 
    
  if (logged) {
    setInterval(() => {
      refreshToken();
    }, 3000);
  } else {
    console.log("non va");
  
  }
  return (
    <div>
      <div className="container">
        {error !== "" && (
          <div className="alert alert-danger">
            <strong>Attenzione!</strong> {error}
          </div>
        )}
        <div className="row">
          <div className="col-md-7">
            <div className="title">
              <i className="fa fa-foursquare"></i>
              aceGram
            </div>
            <div className="lowTitle">Solo parti originali</div>
          </div>
          <div className="col-md-5 ">
            <div className="body">
              <div className="l-form">
                <div className="form">
                  <form onSubmit={handleSubmit}>
                    <h1 className="form__title">Login</h1>

                    <div className="form__div">
                      <input
                        type="text"
                        name="email"
                        placeholder=" "
                        value={userLogin.email}
                        onChange={handleChange}
                        className="form__input"
                      ></input>
                      <label className="form__label">Email</label>
                    </div>

                    <div className="form__div">
                      <input
                        type="password"
                        name="password"
                        placeholder=" "
                        value={userLogin.password}
                        onChange={handleChange}
                        className="form__input"
                      ></input>
                      <label className="form__label">Password</label>
                    </div>

                    <button
                      type="submit"
                      className="form__button offset-md-3 col-md-6 offset-md-3"
                      disabled={!userLogin.email || !userLogin.password}
                    >
                      login
                    </button>
                  </form>
                  <hr></hr>
                  <RegisterComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <div className="col-5">
    //     <h2>Login</h2>
    //     <form onSubmit={handleSubmit} className="form-group">
    //       <label>Email</label>
    //       <input
    //         type="text"
    //         name="email"
    //         placeholder="Email"
    //         value={userLogin.email}
    //         onChange={handleChange}
    //         className="form-control"
    //       ></input>
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //         value={userLogin.password}
    //         onChange={handleChange}
    //         className="form-control"
    //       ></input>
    //       <button type='submit' className="btn btn-primary" disabled={!userLogin.email || !userLogin.password}>login</button>
    //     </form>
    //     <RegisterComponent />
    //   </div>
    // </div>
  );
};

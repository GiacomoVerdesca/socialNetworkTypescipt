import React, { useState } from "react";
import { CallApi } from "../../service/callApi";
import "./RegisterComponent.css";
export const RegisterComponent = () => {
  let service =  CallApi.getInstance();
  const [viewModal, setViewModal] = useState(false);
  const [register, setRegister] = useState({
    name: "",
    surname: "",
    avatar: "",
    username: "",
    email: "",
    password: "",
  });

  const showModal = (event) => {
    event.preventDefault();
    viewModal ? setViewModal(false) : setViewModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    service.postUser(register) ;
    setViewModal(false);
    //modificare con async ecc.
    setTimeout(()=>{window.document.location.href=window.document.location.href},500)
    
  };

  const handleChange = (event) => {
    event.preventDefault();
    setRegister((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (


    <div >
      <div>
        <form onSubmit={showModal}>
          <button type="submit" className="form__button__register offset-md-3 col-md-6 offset-md-3">Registrati</button>
        </form>
      </div>

      {viewModal && (
        <div className="container modale" >
          <div className='l-form__register'>


            {register && (

              <form onSubmit={handleSubmit} className="form__register">
                <i className="fa fa-2x fa-times float-right mb-3" onClick={showModal}></i>
                <h1 className='form__title__register'>Register</h1>

                <div className='form__div__register'>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=' '
                    className="form__input__register"
                    value={register.name}
                    onChange={handleChange}
                  ></input>
                  <label htmlFor="name" className='form__label__register'>Nome </label>
                </div>

                <div className='form__div__register'>
                  <input
                    type="text"
                    name="surname"
                    id="cognome"
                    placeholder=' '
                    className="form__input__register"
                    value={register.surname}
                    onChange={handleChange}
                  ></input>
                  <label htmlFor="surname" className='form__label__register'>Cognome </label>
                </div>


                <div className='form__div__register'>

                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder=' '
                    className="form__input__register"
                    value={register.username}
                    onChange={handleChange}
                  ></input>
                  <label htmlFor="username" className='form__label__register'>Username</label>
                </div>

                <div className='form__div__register'>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=' '
                    className="form__input__register"
                    value={register.email}
                    onChange={handleChange}
                  ></input>
                  <label htmlFor="email" className='form__label__register'>E-mail</label>
                </div>

                <div className='form__div__register'>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=' '
                    className="form__input__register"
                    value={register.password}
                    onChange={handleChange}
                  ></input>
                  <label htmlFor="password" className='form__label__register'>Password</label>
                </div>

                <button disabled={!register.name || !register.surname || !register.email || !register.username || !register.password} className="form__button__register offset-md-3 col-md-6 offset-md-3">
                  Registrati
            </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

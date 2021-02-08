import React from "react";
import { LoginComponent } from "../loginComponent/LoginComponent";
import { useSelector } from "react-redux";
import { PostComponent } from "../postComponent/PostComponent";
import { NavbarComponent } from "../../core/navBar/NavbarComponent";

export const HomeComponent = () => {
  
  const loggedSelector  = (state: any) => state.loggedReducer;
  const logged: Boolean= useSelector(loggedSelector);
  
  return (
    <div>
      {!logged ? (
        <LoginComponent />
      ) : (
          <div>
            <NavbarComponent />
            <PostComponent />
          </div>
        )}
    </div>
  );
};

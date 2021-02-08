import React from "react";
import { LoginComponent } from "../loginComponent/LoginComponent";
import { useSelector } from "react-redux";
import { PostComponent } from "../postComponent/PostComponent";
import { NavbarComponent } from "../../core/navBar/NavbarComponent";

export const HomeComponent = () => {
  const logged = useSelector((state) => state.loggedReducer);
  
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

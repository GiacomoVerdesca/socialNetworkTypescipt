import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route} from "react-router-dom";
import { HomeComponent } from "./components/homeComponent/HomeComponent";
import { UserComponent } from './components/User/userComponent/UserComponent';
import { NavbarComponent } from './core/navBar/NavbarComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact>
          <HomeComponent />
        </Route>
        <Route path="/profile" exact>
          <NavbarComponent/>
          <UserComponent />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

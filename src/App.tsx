import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route } from "react-router";
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from './Redux/Store/store';
import { HomeComponent } from "./components/homeComponent/HomeComponent";
import { UserComponent } from './components/User/userComponent/UserComponent';
import { NavbarComponent } from './core/navBar/NavbarComponent';


const store = configureStore();

function App() {
  return (
    <div>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route path="/" exact>
            <HomeComponent />
          </Route>
          <Route path="/profile" exact>
            <NavbarComponent />
            <UserComponent />
          </Route>
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;

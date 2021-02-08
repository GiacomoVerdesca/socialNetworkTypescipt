import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "../Reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

export const configureStore = () => {
  const store = createStore(
    rootReducers(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );

  return store;
};

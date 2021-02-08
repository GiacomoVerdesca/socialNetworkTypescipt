import { counterReducer } from "./counterReducer";
import { loggedReducer } from "./loggedReducer";
import { allUsersReducer } from "./allUsersReducer";
import { singleUserReducer } from "./singleUserReducer";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

export const rootReducers = (history:any) =>
  combineReducers({
    router: connectRouter(history),
    counterReducer,
    loggedReducer,
    allUsersReducer,
    singleUserReducer,
  });

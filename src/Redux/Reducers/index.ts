import { counterReducer } from './counterReducer';
import { loggedReducer } from './loggedReducer';
import { allUsersReducer } from './allUsersReducer';
import { singleUserReducer } from './singleUserReducer';
import { combineReducers } from 'redux';

export const rootReducers = combineReducers({
    counterReducer,
    loggedReducer,
    allUsersReducer,
    singleUserReducer
});





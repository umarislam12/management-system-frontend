import { combineReducers }  from 'redux';
import * as loginReducer from '../reducers/loginReducer';
import * as signupReducer from '../reducers/signupReducer';

export const rootReducer = combineReducers(Object.assign(
    loginReducer,
    signupReducer
))
import { loginRequest } from './login';
import { signupRequest } from './signup';
import { fork } from 'redux-saga/effects';

export function* rootSaga() {
    yield fork(loginRequest);
    yield fork(signupRequest);
  }

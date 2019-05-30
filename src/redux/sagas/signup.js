import { takeLatest, put } from "redux-saga/effects";
import * as types from '../types/types';
import Api from '../../lib/api';

export function* signupRequest(){
    yield takeLatest(types.SIGNUP_API, doApiCall)
}
function* doApiCall(params){    
    try {
        const response = yield Api.post('auth/signup', params.params);
        console.log('reponse is', response);
        yield put({ type: types.SIGNUP_API_SUCCESS, payload: response });
      } catch (error) {    
        console.log('error is', error);

        yield put({ type: types.SIGNUP_API_FAILURE, status: error.status });
      }
}
import * as types from '../types/types';
let initialState = {
    status: null,
    error: null,
    data: null,
    loading: null
}
export const signupReducer = (state = initialState, action) => {    
    switch (action.type) {
        case types.SIGNUP_API:
        return {
            ...state, 
            loading: true,
            status: null,
        }
        case types.SIGNUP_API_SUCCESS:
            return {
                ...state,
                status: action.payload.status,
                data: action.payload,
                loading: false,
                error: false
            }
        case types.SIGNUP_API_FAILURE:
            return {
                ...state,
                status: action.status,
                data: null,
                loading: false,
                error: true
            }
        default:
            return { ...state }
    }
}

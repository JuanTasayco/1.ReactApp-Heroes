import { typesReducerAuth } from './../types/types';

export const AuthReducer = (state = {}, action: any) => {
    switch (action.type) {
        case typesReducerAuth.login: {
            return {
                logged: true,
                ...state,
            }
        }
        case typesReducerAuth.logout: {
            return {
                logged: false,
                ...state
            }
        }
        default: {
            return state;
        }
    }
}
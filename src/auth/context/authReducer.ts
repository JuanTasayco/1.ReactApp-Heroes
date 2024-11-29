import { typesReducerAuth } from './../types/types';

export const AuthReducer = (state = {}, action: any) => {
    switch (action.type) {
        case typesReducerAuth.login: {

            return {
                ...state,

            }
        }
        case typesReducerAuth.logout: {
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
}
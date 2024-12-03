/* eslint-disable @typescript-eslint/no-explicit-any */
import { typesReducerAuth } from './../types/types';

export const AuthReducer = (state = {}, action: any) => {
    switch (action.type) {
        case typesReducerAuth.login: {
            return {
                ...state,
                logged: true,
                ...action.payload,

            }
        }
        case typesReducerAuth.logout: {
            console.log('ejecutando logout');
            return {
                username: "",
                logged: false,
            }
        }

        default: {
            return state;
        }
    }
}
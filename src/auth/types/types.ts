

export const typesReducerAuth = {
    login: '[Auth] login',
    logout: '[Auth] logout'
}

export interface IUserAuth {
    date: Date,
    logged: boolean,
    password: string,
    role: string,
    username: string,
}

export type UserAuthLocalStorage = Omit<IUserAuth, 'logged'>;

export interface IAuthContext {
    logUser: () => void,
    logOut: () => void,
    state: IUserAuth,
}

export interface ILoquito {
    name: string | number;
}

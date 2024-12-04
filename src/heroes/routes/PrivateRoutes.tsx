/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext"
import { Navigate } from "react-router";


export const PrivateRoutes = ({ children }: { children: any }) => {

    const { state } = useContext(AuthContext);
    console.log(state)
    return (state.logged) ? children : <Navigate to="/auth/logout" />

}
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const useFormAuth = (initialState: any) => {
    const [authForm, setAuthForm] = useState(initialState);

    /* recibo la referencia mediante onChanges del input*/
    const setValueToForm = ({ target }: { target: HTMLInputElement }) => {
        const { value, name } = target;
        setAuthForm((form: any) => {
            return ({
                ...form,
                [name]: value
            })
        })
    }

    const clearAuthForm = () => {
        setAuthForm(() => initialState);
    }

    return ({
        authForm,
        setValueToForm,
        clearAuthForm,
        ...authForm,
    })
}
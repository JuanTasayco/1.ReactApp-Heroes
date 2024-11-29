import { useState } from "react"
import { useHero } from "./useHero";
import { getHeroByName } from "../helpers/getHeroByName";

export interface IResponsesHero {
    status: 'initial' | 'success' | 'error';
    heroes: any[];
}

export const useForm = (initialState: any) => {

    const [form, setForm] = useState(initialState);
    const { respHeroe } = useHero();
    const { heroes } = respHeroe;

    const [respHero, setRespHero] = useState<IResponsesHero>({
        status: 'initial',
        heroes: []
    });


    const handleInputChange = ({ target }: any) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const sendForm = (eventForm: any) => {
        eventForm.preventDefault();
        const value = form.textInput.trim().toLowerCase();
        const response = getHeroByName(value, heroes);
        setRespHero(response.length > 0 ? { status: 'success', heroes: response } : { status: 'error', heroes: [] });

    }

    const clearForm = () => {
        setForm(initialState);
    }

    return {
        form,
        handleInputChange,
        sendForm,
        clearForm,
        ...form,
        respHero
    }
}
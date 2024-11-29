import { useState } from "react"
import { useHero } from "./useHero";
import { getHeroByName } from "../helpers/getHeroByName";

export const useForm = (initialState: any) => {

    const [form, setForm] = useState(initialState);
    const { respHeroe } = useHero();
    const { heroes } = respHeroe;

    const [respHero, setRespHero] = useState<any[]>([]);


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
        console.log('buscando heroe')
        setRespHero(response);
        clearForm();
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
import { useState } from "react"



export const useForm = (initialState: any) => {

    const [form, setForm] = useState(initialState);

    const handleInputChange = ({ target }: any) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const sendForm = (eventForm: any) => {
        eventForm.preventDefault();
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
    }
}
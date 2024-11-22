import { useEffect, useState } from "react"
import axios from 'axios';

export const useHero = () => {
    const [respHeroe, setRespHeroe] = useState({});
    useEffect(() => {
        const fetchHeroe = async () => {
            try {
                const response = await axios.get('/data/heroes.json');
                setRespHeroe(response.data);
            } catch (error) {
                console.error('Error fetching hero:', error);
            }
        };

        fetchHeroe();
    }, []);


    return {
        respHeroe,
        setRespHeroe
    }
}
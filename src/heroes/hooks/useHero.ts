import { useEffect, useState } from "react"
import axios from 'axios';

interface IHeroe {
    heroes: Heroe[];
}

export interface Heroe {
    id: string;
    superhero: string;
    publisher: string;
    alter_ego: string;
    first_appearance: string;
    characters: string;
}

export const useHero = () => {
    const [respHeroe, setRespHeroe] = useState<IHeroe>({ heroes: [] });
    useEffect(() => {
        const fetchHeroe = async () => {
            try {
                const { data }: { data: IHeroe } = await axios.get('/data/heroes.json');
                setRespHeroe(data);
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
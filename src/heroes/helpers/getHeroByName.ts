import { useHero } from "../hooks/useHero";


export const getHeroByName = (nameSuperHero: string, array: any[]) => {
    return array.filter((heroe) => heroe.superhero.toLowerCase().includes(nameSuperHero));
}
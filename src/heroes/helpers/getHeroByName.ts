import { useHero } from "../hooks/useHero";


export const getHeroByName = (nameSuperHero: string) => {
    const { respHeroe } = useHero();
    const { heroes } = respHeroe;
    return heroes.filter((heroe) => heroe.superhero === nameSuperHero);
}
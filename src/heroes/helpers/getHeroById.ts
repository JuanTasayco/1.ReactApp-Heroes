import { useHero } from "../hooks/useHero"

export const getHeroById = (id: string) => {
    const { respHeroe } = useHero();
    const { heroes } = respHeroe;
    return heroes.find(hero => hero.id === id);

}
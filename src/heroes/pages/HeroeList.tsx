import { useHero } from "../hooks/useHero";

export const HeroeList = () => {
  const { respHeroe } = useHero();
  console.log(respHeroe?.heroes);
  if (respHeroe.heroes) {
    console.log("existe");
  }
  return (
    <>
      <h1>ListHeroes</h1>
    </>
  );
};

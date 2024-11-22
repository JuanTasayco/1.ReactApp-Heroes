import { CardHero } from "../components/CardHero";
import { useHero } from "../hooks/useHero";

export const HeroeList = () => {
  const { respHeroe } = useHero();
  const { heroes } = respHeroe;
  if (heroes.length > 0) {
    console.log(heroes);
  }
  return (
    <>
      <div className="container">
        <div className="row gy-2">
          {heroes.map((heroe, index) => {
            return (
              <div key={index} className="col-md-6">
                <CardHero hero={heroe} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

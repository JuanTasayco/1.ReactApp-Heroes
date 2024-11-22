import { Heroe } from "../hooks/useHero";
import "./styles/CardHero.style.css";

export const CardHero = ({ hero }: { hero: Heroe }) => {
  console.log(hero);
  return (
    <>
      <div className="card shadow-lg rounded">
        <div className="card__images">
          <img
            className="card__image rounded"
            src={`src/assets/heroesImg/${hero.id}.jpg`}
            alt=""
          />
        </div>
        <div className="card__titles mt-2">
          <h2 className="card-h2 text-center">{hero.superhero}</h2>
          <h5 className="card-h5 text-center">{hero.alter_ego}</h5>
        </div>
        <div className="card__buttons ">
          <button className="btn btn-sm btn-primary">Show Hero</button>
        </div>
      </div>
    </>
  );
};

import { useNavigate, useParams } from "react-router";
import { getHeroById } from "../helpers/getHeroById";

export const Heroe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  if (!id) {
    navigate("/");
  }

  const hero = id ? getHeroById(id) : null;
  console.log(hero);
  return (
    <>
      {hero && (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                style={{ objectFit: "contain" }}
                src={`src/assets/heroesImg/${hero.id}.jpg`}
                alt={hero.superhero}
                className=""
              />
            </div>
            <div className="col-md-6">
              <h4>SuperHero</h4>
              <p>{hero.superhero}</p>
              <h4>Characters</h4>
              <p>{hero.characters}</p>
              <h4>Publisher</h4>
              <p>{hero.publisher}</p>
              <h4>First Appearance</h4>
              <p>{hero.first_appearance}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

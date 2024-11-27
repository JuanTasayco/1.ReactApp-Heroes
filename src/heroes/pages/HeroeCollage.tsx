import { useNavigate } from "react-router";
import { useHero } from "../hooks/useHero";

export const HeroeCollage = () => {
  const { respHeroe } = useHero();
  const { heroes } = respHeroe;

  const navigation = useNavigate();

  const groupedHeroes = [];
  for (let i = 0; i < heroes.length; i += 2) {
    groupedHeroes.push(heroes.slice(i, i + 2));
  }

  const redirectHero = (id: string) => {
    navigation(`/heroe/${id}`);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {groupedHeroes.map((group, groupIndex) => (
            <div key={groupIndex} className="col-md-4 m-auto text-center">
              {group.map((heroe, index) => {
                // Patrón de tamaños basado en groupIndex e index
                let maxWidth = "570px";
                if (
                  (groupIndex % 2 === 0 && index === 0) || // groupIndex par, posición 0
                  (groupIndex % 2 === 1 && index === 1) // groupIndex impar, posición 1
                ) {
                  maxWidth = "350px";
                }

                return (
                  <img
                    onClick={() => redirectHero(heroe.id)}
                    key={heroe.id}
                    src={`src/assets/heroesImg/${heroe.id}.jpg`}
                    style={{ maxWidth }}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt={`Hero ${heroe.id}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

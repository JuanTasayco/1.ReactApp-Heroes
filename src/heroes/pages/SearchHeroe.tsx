import { useForm } from "../hooks/useForm";

export const SearchHeroe = () => {
  const InitialState: any = {
    textInput: "",
  };

  const { handleInputChange, respHero, sendForm, textInput, form, clearForm } =
    useForm(InitialState);

  return (
    <>
      <div className="container">
        <h1 className="mb-4">Search Component React</h1>
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <form onSubmit={sendForm}>
              <input
                placeholder="Search a Hero.."
                className="form-control"
                type="text"
                name="textInput"
                value={textInput}
                onChange={(event) => handleInputChange(event)}
              />

              <button className="btn btn-primary mt-3" type="submit">
                Buscar Heroe
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <div className="resp__heroes">
              {respHero.heroes.map((r: any, index: number) => {
                return (
                  <div key={index} className="alert alert-light" role="alert">
                    {r.superhero}
                  </div>
                );
              })}
            </div>

            {respHero.status === "initial" && (
              <div className="alert alert-primary" role="alert">
                Buscar un Heroe
              </div>
            )}

            {respHero.status === "error" && (
              <div className="alert alert-danger" role="alert">
                Heroe no encontrado
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

import { useForm } from "../hooks/useForm";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchHeroe = () => {
  const InitialState: any = {
    textInput: "",
  };

  const { handleInputChange, form, sendForm, textInput } =
    useForm(InitialState);

  console.log("renderizando componente SearchHeroe");
  const getDataHeroe = () => {
    const value = form.textInput.trim();
    if (value.length === 0) return;
    const response = getHeroByName(form.textInput.trim());
  };

  return (
    <>
      <div className="container">
        <h1 className="mb-4">Search Component React</h1>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={sendForm}>
              <input
                placeholder="Search a Hero.."
                className="form-control"
                type="text"
                name="textInput"
                value={textInput}
                onChange={(event) => handleInputChange(event)}
              />

              <button
                className="btn btn-primary mt-3"
                type="submit"
                onClick={getDataHeroe}
              >
                Buscar Heroe
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="alert alert-light" role="alert">
              Response Hero
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

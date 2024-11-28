import { useForm } from "../hooks/useForm";

export const SearchHeroe = () => {
  const InitialState: any = {
    textInput: "",
  };

  const { handleInputChange, sendForm, textInput } = useForm(InitialState);

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

              <button className="btn btn-primary mt-3" type="submit">
                Buscar Heroe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

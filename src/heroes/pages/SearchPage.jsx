import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroeByName } from "../../helpers/getHeroeByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroesName = getHeroeByName(q);

  const { searchText, onInputChange, onResetForm } = useForm({
    // le asignamos la query para cuando se recarge la página siga mostrarndo el query/nombre introducido en el input de busqueda
    searchText: q,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Navego en la misma página para leer la query
    navigate(`?q=${searchText}`);
  };
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroesName.length === 0;
  return (
    <>
      <div className="row mt-1">
        <div className="col-5">
          <h4>Search a Hero</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search you fav hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* Opción 1 */}

          {/* {q === "" ? (
            <div className="alert alert-primary">Waiting to search..</div>
          ) : (
            heroesName.length === 0 && (
              <div className="alert alert-danger">
                No Hero <b>{`${q}`}</b>
              </div>
            )
          )} */}

          {/* Opción 2 */}

          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Waiting to search..
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            No Hero <b>{`${q}`}</b>
          </div>

          {heroesName.map((hero) => {
            return <HeroCard key={hero.id} hero={hero} />;
          })}
        </div>
      </div>
    </>
  );
};

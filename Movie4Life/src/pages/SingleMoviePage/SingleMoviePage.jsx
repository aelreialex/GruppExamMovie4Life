import { useParams } from "react-router-dom";
import { useFetchSingleMovie } from "../../hooks/useFetchMovies";
import { useEffect, useState } from "react";
import { useWatchlist } from "../../hooks/useWatchlist";
import "./singleMoviePage.css";

const SingleMoviePage = () => {
  const url = useParams();
  console.log(url);
  const { movie, isLoading, isError } = useFetchSingleMovie(url);
  const [test, setTest] = useState([]);

  useEffect(() => {
    setTest(movie);
  }, [movie]);

  console.log(test);

  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  const isOnWatchlist = (id) => {
    if (watchlist.some((movie) => movie.imdbID === id)) return true;
    else return false;
  };

  if (isLoading) return <div>Laddar filmer...</div>;
  if (isError) return <div>Något gick fel.</div>;

  return (
    <section className="singleMovie">
      <div className="singleMovie__img-box">
        <img
          className="singleMovie__img"
          alt="test.Title"
          src={test.Poster}
        ></img>
      </div>
      <article className="singleMovie__information">
        <h1 className="singleMovie__title">{test.Title}</h1>
        <p className="singleMovie__releaseDate">
          {" "}
          Year: {test.Year}, Long: {test.Runtime}, Imdbrating: {test.imdbRating}
        </p>
        <p className="singleMovie__genre">{test.Genre}</p>
        <h2 className="singleMovie__plotHeading">Plot</h2>
        <p className="singleMovie__plot">{test.Plot}</p>
        {isOnWatchlist(movie.imdbID) ? (
          <button
            onClick={() => removeFromWatchlist(movie.imdbID)}
            className="button button-single"
          >
            Remove from Watchlist
          </button>
        ) : (
          <button
            onClick={() => addToWatchlist(movie)}
            className="button button-single"
          >
            Add to Watchlist
          </button>
        )}
        <h3 className="singleMovie__actors">
          Actors <br></br>{" "}
          <span className="singleMovie__actors-text">{test.Actors}</span>
        </h3>
        <p className="singleMovie__director">Movie director: {test.Director}</p>
        <p className="singleMovie__languages">Languages: {test.Language}</p>
      </article>
    </section>
  );
};

export default SingleMoviePage;

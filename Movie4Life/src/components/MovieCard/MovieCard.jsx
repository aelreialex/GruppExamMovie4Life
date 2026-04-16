import Icon from "../Icon/Icon";
import "./movieCard.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
  movie,
  watchlist,
  addToWatchlist,
  removeFromWatchlist,
  isOnWatchlist,
}) => {
  const navigate = useNavigate();

  function handleSinglePage() {
    navigate(`/movie/${movie.imdbID}`, { replace: true });
  }

  return (
    <article className="movieCard" id={movie.imdbID}>
      <Icon
        path={null}
        onClick={() =>
          isOnWatchlist(movie.imdbID)
            ? removeFromWatchlist(movie.imdbID)
            : addToWatchlist(movie)
        }
        type="Watchlist"
      />
      <img
        onClick={handleSinglePage}
        className="movieCard__poster"
        src={movie.Poster}
      ></img>
      <h3 className="movieCard__title">{movie.Title}</h3>
    </article>
  );
};

export default MovieCard;

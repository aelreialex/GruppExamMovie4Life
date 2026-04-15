import "./movieCard.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  console.log(movie.imdbID);

  function handleSinglePage() {
    navigate(`movie/${movie.imdbID}`, { replace: true });
  }

  return (
    <article className="movieCard" id={movie.imdbID}>
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

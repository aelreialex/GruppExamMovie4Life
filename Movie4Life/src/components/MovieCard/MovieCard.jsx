import Icon from "../Icon/Icon";
import "./movieCard.css"
import { useNavigate } from "react-router-dom"

const MovieCard = ({movie, addToWatchlist, removeFromWatchlist, isOnWatchlist}) => {
  const navigate = useNavigate();

  function handleSinglePage(){
    navigate(`/movie/${movie.imdbID}`, {replace: true})
  }

  return (
    <article className="movieCard" id={movie.imdbID}>
      {
        isOnWatchlist(movie.imdbID)
        ? <Icon path={null} onClick={ () => removeFromWatchlist(movie.imdbID)} type='Watchlist' faved='icon--faved' />
        : <Icon path={null} onClick={ () => addToWatchlist(movie)} type='Watchlist' />
      }
      <img onClick={handleSinglePage} className="movieCard__poster" src={movie.Poster}></img>
      <h3 className="movieCard__title">{movie.Title}</h3>
    </article>
  )
}

export default MovieCard
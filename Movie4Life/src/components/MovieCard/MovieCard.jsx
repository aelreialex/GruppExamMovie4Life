import "./movieCard.css"

const MovieCard = ({movie}) => {
  return (
    <article className="movieCard" id={movie.imdbID}>
      <img className="movieCard__poster" src={movie.Poster}></img>
      <h3 className="movieCard__title">{movie.Title}</h3>
    </article>

  )
}

export default MovieCard
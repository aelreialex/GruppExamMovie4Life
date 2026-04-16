import { useEffect, useState } from "react";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { shuffleArray } from "../../utils/shuffleArray";
import { useWatchlist } from "../../hooks/useWatchlist";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./landingPage.css"


const LandingPage = () => {
  const [movieList, setMovieList] = useState([]);
  const { movies, isLoading, isError } = useFetchMovies();
  
  useEffect(() => {
    if (movies && movies.length > 0) {
      const shuffled = shuffleArray(movies).slice(0, 20);
      setMovieList(shuffled);
    }
  }, [movies]); 

  console.log(movieList)

  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  const isOnWatchlist = (id) => {
      if(watchlist.some(movie => movie.imdbID === id)) return true;
      else return false;
  }

  if (isLoading) return <div>Laddar filmer...</div>
  if (isError) return <div>Något gick fel.</div>;

  return (
    <div className="wrapper">
      <section className="landingPage__movieList">
        <h2 className="landingPage__recommended">Recommended Movies</h2>
        <div className="landingPage__movies">
          {movieList.map((movie, index) => (
            <MovieCard key={index} movie={movie} addToWatchlist={addToWatchlist} removeFromWatchlist={removeFromWatchlist} isOnWatchlist={isOnWatchlist}/> 
          ))}
        </div>
      </section>
    </div>
  )
}

export default LandingPage
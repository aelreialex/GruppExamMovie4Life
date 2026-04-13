import { useEffect, useState } from "react";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { shuffleArray } from "../../hooks/shuffleArray";
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

  if (isLoading) return <div>Laddar filmer...</div>
  if (isError) return <div>Något gick fel.</div>;

  console.log(movieList)


  return (
    <div className="wrapper">
      <section className="landingPage__movieList">
        <h2 className="landingPage__recommended">Recommended Movies</h2>
        <div className="landingPage__movies">
          {movieList.map((movie, index) => (
            <MovieCard key={index} movie={movie}/> 
          ))}
        </div>
        
      </section>
    </div>
  )
}

export default LandingPage
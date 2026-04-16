import { useEffect, useState } from "react";
import { useFetchSearch } from "../../hooks/useFetchMovies"
import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import './searchPage.css';

const SearchPage = () => {
  const urlString = useParams();
  const [string, setString] = useState(urlString);
  const [movieList, setList] = useState([]);
  const { movies, isLoading, isError } = useFetchSearch(string);

  useEffect(() => {
    setString(urlString);
  }, [urlString]);

  useEffect(() => {
    setList(movies);
    console.log('In setList Effect');
  }, [movies]);

  if (isLoading) return <div>Laddar filmer...</div>;
  if (isError) return <div>Något gick fel.</div>;

  console.log(string);
  console.log(movies);
  console.log(movieList);

  return (
    <div className="wrapper">
      <section className="searchPage__movieList">
        <h2 className="searchPage__result">Result</h2>
        <div className="searchPage__movies">
          {
          movieList != null ?
            movieList.map((movie, index) => (
            <MovieCard key={index} movie={movie}/> 
            )) : <h2 className="noResult">No result.</h2>
          }
        </div>
      </section>
    </div>
  )
}

export default SearchPage
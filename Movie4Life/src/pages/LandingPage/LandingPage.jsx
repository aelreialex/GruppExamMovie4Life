// Hämta bilduppvisaren (carousellen) som vi skapade
import CustomCarousel from "../../components/Carousel/MantineCarousel";
import { useEffect, useState } from "react";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { shuffleArray } from "../../hooks/shuffleArray";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./landingPage.css";

const LandingPage = () => {
  const [movieList, setMovieList] = useState([]);
  const { movies, isLoading, isError } = useFetchMovies();

  // MANTINE: Skapa en lista med BARA bild-addresser från filmerna
  // movies?.map = om movies finns, gå igenom varje film
  // movie.Poster = hämta bara "Poster"-värdet (det är bild-addressen)
  // || [] = om movies är tomt/null, använd en tom lista (så appen inte kraschar)
  // OBS nu visas alla filmer i trailern. Koipera rad 9 - 30 om vi ska ha carousel för sig själv (få allt att funka först)
  const movieImages = movies?.map((movie) => movie.Poster) || [];

  useEffect(() => {
    if (movies && movies.length > 0) {
      const shuffled = shuffleArray(movies).slice(0, 20);
      setMovieList(shuffled);
    }
  }, [movies]);

  if (isLoading) return <div>Laddar filmer...</div>;
  if (isError) return <div>Något gick fel.</div>;

  console.log(movieList);

  return (
    <div className="wrapper">
      <section className="landingPage__movieList">
        {/* MANTINE: Visa bilduppvisaren med alla film-bilder */}
        {/* images={movieImages} = skicka in listan med bild-addresser */}
        <CustomCarousel images={movieImages} />

        <h2 className="landingPage__recommended">Recommended Movies</h2>
        <div className="landingPage__movies">
          {movieList.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

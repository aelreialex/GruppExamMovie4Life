import { useEffect, useState } from "react";
import { useFetchSearch } from "../../hooks/useFetchMovies"
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const Test = useParams();
  const [search, setSearch] = useState('');
  const { movies, isLoading, isError } = useFetchSearch(search);

  useEffect(() => {
      if (Test) {
        setSearch(Test);
        
      }
  }, [Test]);

  console.log(search);
  console.log(movies);

  if (isLoading) return <div>Laddar filmer...</div>
  if (isError) return <div>Något gick fel.</div>;

  return (
    <div>SearchPage</div>
  )
}

export default SearchPage
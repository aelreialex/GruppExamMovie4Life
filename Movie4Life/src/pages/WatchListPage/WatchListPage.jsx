import MovieCard from "../../components/MovieCard/MovieCard";
import { useWatchlist } from "../../hooks/useWatchlist";
import './watchListPage.css'

const WatchListPage = () => {
  
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  const isOnWatchlist = (id) => {
      if(watchlist.some(movie => movie.imdbID === id)) return true;
      else return false;
  }

  return (
    <div className="wrapper">
      {
      watchlist.length < 1
      ? <section className="watchPage__movieList">
          <h2 className="watchPage__yourList watchPage__yourList--empty">Your Watchlist is empty</h2>
        </section>
      : <section className="watchPage__movieList">
          <h2 className="watchPage__yourList">Your Watchlist</h2>
        <div className="watchPage__movies">
          {watchlist.map((movie, index) => (
            <MovieCard key={index} movie={movie} removeFromWatchlist={removeFromWatchlist} isOnWatchlist={isOnWatchlist}/>
          ))}
        </div>
      </section>
      }
    </div>
  )
}

export default WatchListPage
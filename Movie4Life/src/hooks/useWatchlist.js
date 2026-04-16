import { useEffect, useState } from 'react';

export const useWatchlist = () => {
    const [watchlist, setWatchlist] = useState(() => {
        const stored = localStorage.getItem('Watchlist');
        return JSON.parse(stored) || [];
    });

    useEffect(() => {
        localStorage.setItem('Watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (movie) => {
        setWatchlist(prev => [...prev, movie]);
    }

    const removeFromWatchlist = (id) => {
        const filtered = watchlist.filter(movie => movie.imdbID !== id);
        setWatchlist(filtered);
    }

    return { watchlist, addToWatchlist, removeFromWatchlist };
}
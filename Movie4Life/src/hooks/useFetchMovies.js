import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://santosnr6.github.io/Data/favoritemovies.json')
            .then(response => setMovies(response.data))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, []);

    return { movies, isLoading, isError };
}
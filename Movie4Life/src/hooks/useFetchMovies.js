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

export const useFetchSearch = ({string}) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://www.omdbapi.com/?apikey=bb97d4a3&s=${string}`)
            .then(response => setMovies(response.data.Search))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [string]);

    return { movies, isLoading, isError };
}

export const useFetchSingleMovie = ({id}) => {
    const [movie, setMovie] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://www.omdbapi.com/?apikey=bb97d4a3&plot=full&i=${id}`)
            .then(response => setMovie(response.data))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, []);

    return { movie, isLoading, isError };
}
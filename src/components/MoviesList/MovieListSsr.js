import { useEffect, useState } from "react";
import MovieCard from '../MovieCard/MovieCard';
import classes from "../../../styles/MovieList.module.css";

function MoviesListSsr({ movies: serverMovies, onMovieClickHandler }) {
    const [movies, setMovieList] = useState(serverMovies);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/movies');
            const data = await response.json();
            setMovieList(data.data);
        }

        if (!serverMovies) {
            fetchData();
        }
    }, []);

    if (!movies) {
        return <p>Loading ...</p>
    }

    return (
        <>
            <p className={classes.countMovies}><span>{movies.length}</span> movies found</p>
            <ul className={classes.movielist}>
                {movies && movies.map((movie) => (
                    <MovieCard
                        movie={movie}
                        onClickHandler={onMovieClickHandler}
                        key={movie.id} />
                ))}
            </ul>
        </>
    )
}

export default MoviesListSsr;